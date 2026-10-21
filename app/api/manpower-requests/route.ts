
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const requiredFields = [
      "company_name",
      "contact_person",
      "location",
      "manpower_type",
      "number_of_workers",
    ];

    for (const field of requiredFields) {
      if (
        body[field] === undefined ||
        body[field] === null ||
        String(body[field]).trim() === ""
      ) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const workers = Number(body.number_of_workers);

    if (!Number.isInteger(workers) || workers < 1) {
      return NextResponse.json(
        { error: "Number of workers must be a positive integer." },
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

    const supabase = createClient(supabaseUrl, secretKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const requestData = {
      company_name: String(body.company_name).trim(),
      contact_person: String(body.contact_person).trim(),
      mobile: body.mobile ? String(body.mobile).trim() : null,
      email: body.email ? String(body.email).trim() : null,
      location: String(body.location).trim(),
      manpower_type: String(body.manpower_type).trim(),
      number_of_workers: workers,
      salary_budget: body.salary_budget
        ? String(body.salary_budget).trim()
        : null,
      duty_hours: body.duty_hours
        ? String(body.duty_hours).trim()
        : null,
      joining_date: body.joining_date || null,
      accommodation_available: body.accommodation_available || null,
      food_available: body.food_available || null,
      urgency: body.urgency || null,
      additional_requirement: body.additional_requirement
        ? String(body.additional_requirement).trim()
        : null,
    };

    const { error } = await supabase
      .from("manpower_requests")
      .insert(requestData);

    if (error) {
      console.error("Database insert failed:", error.message);

      return NextResponse.json(
        { error: "Could not save the manpower request." },
        { status: 500 }
      );
    }
    const resendApiKey = process.env.RESEND_API_KEY;

if (resendApiKey) {
  const resend = new Resend(resendApiKey);

  const { error: emailError } = await resend.emails.send({
    from: "MK Manpower Solutions <onboarding@resend.dev>",
    to: ["meenasurya2239@gmail.com"],
    subject: "New Manpower Request Received",
    text: `
A new manpower request has been submitted.

Company: ${requestData.company_name}
Contact Person: ${requestData.contact_person}
Mobile: ${requestData.mobile ?? "Not provided"}
Email: ${requestData.email ?? "Not provided"}
Location: ${requestData.location}
Manpower Type: ${requestData.manpower_type}
Number of Workers: ${requestData.number_of_workers}
Urgency: ${requestData.urgency ?? "Not specified"}
    `,
  });

  if (emailError) {
    console.error("Email notification failed:", emailError.message);
  }
}

    return NextResponse.json(
      { success: true, message: "Manpower request saved successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Manpower request API error:", error);

    return NextResponse.json(
      { error: "Invalid request or server error." },
      { status: 500 }
    );
  }
}
