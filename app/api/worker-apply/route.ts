
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { randomUUID } from "crypto";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_FILES: Record<string, string> = {
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".docx":
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

export async function POST(request: Request) {
  let uploadedPath: string | null = null;
  let supabase: ReturnType<typeof createClient> | null = null;

  try {
    const formData = await request.formData();

    const getText = (key: string) =>
      String(formData.get(key) ?? "").trim();

    const fullName = getText("full_name");
    const mobile = getText("mobile");
    const email = getText("email");
    const currentLocation = getText("current_location");
    const applyingFor = getText("applying_for");
    const experience = getText("experience");
    const qualification = getText("highest_qualification");
    const additionalInfo = getText("additional_information");

    if (!fullName || !mobile || !currentLocation || !applyingFor) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (
      fullName.length > 150 ||
      mobile.length > 30 ||
      email.length > 254 ||
      currentLocation.length > 200 ||
      applyingFor.length > 100 ||
      qualification.length > 200 ||
      additionalInfo.length > 5000
    ) {
      return NextResponse.json(
        { error: "One or more fields exceed the allowed length." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const secretKey = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !secretKey) {
      console.error("Supabase server environment variables are missing.");
      return NextResponse.json(
        { error: "Server configuration is incomplete." },
        { status: 500 }
      );
    }

    supabase = createClient(supabaseUrl, secretKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const resumeEntry = formData.get("resume");
    let resumePath: string | null = null;

    if (resumeEntry instanceof File && resumeEntry.size > 0) {
      if (resumeEntry.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "Resume must be 5 MB or smaller." },
          { status: 400 }
        );
      }

      const originalName = resumeEntry.name.toLowerCase();
      const extension = Object.keys(ALLOWED_FILES).find((ext) =>
        originalName.endsWith(ext)
      );

      if (!extension || resumeEntry.type !== ALLOWED_FILES[extension]) {
        return NextResponse.json(
          { error: "Please upload a valid PDF, DOC, or DOCX file." },
          { status: 400 }
        );
      }

      const filePath = `${randomUUID()}${extension}`;
      const fileBuffer = Buffer.from(await resumeEntry.arrayBuffer());

      const { error: uploadError } = await supabase.storage
        .from("worker-resumes")
        .upload(filePath, fileBuffer, {
          contentType: ALLOWED_FILES[extension],
          upsert: false,
        });

      if (uploadError) {
        console.error("Resume upload failed:", uploadError.message);
        return NextResponse.json(
          { error: "Resume upload failed. Please try again." },
          { status: 500 }
        );
      }

      uploadedPath = filePath;
      resumePath = filePath;
    }

    const applicationData = {
      full_name: fullName,
      mobile,
      email: email || null,
      current_location: currentLocation,
      applying_for: applyingFor,
      experience: experience || null,
      highest_qualification: qualification || null,
      additional_information: additionalInfo || null,
      resume_url: resumePath,
    };

    const { data: savedApplication, error: dbError } = await supabase
  .from("worker_applications")
  .insert([applicationData] as never[])
  .select("id")
  .single();

    if (dbError) {
      console.error("Application save failed:", dbError.message);

      if (uploadedPath) {
        await supabase.storage
          .from("worker-resumes")
          .remove([uploadedPath]);
      }

      return NextResponse.json(
        { error: "Could not save your application. Please try again." },
        { status: 500 }
      );
    }

    let emailSent = false;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      let resumeLink = "No resume uploaded";

      if (resumePath) {
        const { data: signedUrlData, error: signedUrlError } =
          await supabase.storage
            .from("worker-resumes")
            .createSignedUrl(resumePath, 60 * 60 * 24 * 7);

        if (!signedUrlError && signedUrlData?.signedUrl) {
          resumeLink = signedUrlData.signedUrl;
        } else {
          console.error(
            "Could not create resume link:",
            signedUrlError?.message
          );
          resumeLink = "Resume uploaded; sign in to Supabase Storage to access it.";
        }
      }

      const { error: emailError } = await resend.emails.send({
        from: "MK Manpower Solutions <onboarding@resend.dev>",
        to: ["meenasurya2239@gmail.com"],
        subject: "New Worker Application Received",
        text: `
A new worker application has been submitted.


Full Name: ${fullName}
Mobile: ${mobile}
Email: ${email || "Not provided"}
Current Location: ${currentLocation}
Applying For: ${applyingFor}
Experience: ${experience || "Not provided"}
Highest Qualification: ${qualification || "Not provided"}
Additional Information: ${additionalInfo || "Not provided"}

Resume: ${resumeLink}

The resume link, if present, expires in 7 days.
        `,
      });

      if (emailError) {
        console.error("Application email failed:", emailError.message);
      } else {
        emailSent = true;
      }
    } else {
      console.error("RESEND_API_KEY is missing.");
    }

    return NextResponse.json(
      {
        success: true,
        saved: true,
        emailSent,
        message: emailSent
          ? "Application saved and notification email sent."
          : "Application saved, but email notification could not be confirmed.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Worker application API error:", error);

    if (uploadedPath && supabase) {
      await supabase.storage
        .from("worker-resumes")
        .remove([uploadedPath])
        .catch((cleanupError) => {
          console.error("Resume cleanup failed:", cleanupError);
        });
    }

    return NextResponse.json(
      { error: "Server error while processing your application." },
      { status: 500 }
    );
  }
}
