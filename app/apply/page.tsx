"use client";

import { FormEvent, useState } from "react";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailWarning, setEmailWarning] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setEmailWarning(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/worker-apply", {
        method: "POST",
        body: formData,
      });

      const contentType = response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        throw new Error(
          "Server se sahi response nahi mila. VS Code Terminal mein error check karein."
        );
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ||
            "Application submit nahi ho paya. Please try again."
        );
      }

      setEmailWarning(result.emailSent === false);
      setSubmitted(true);
      form.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-bold">
            MK <span className="text-blue-400">MANPOWER</span>
          </a>
          <a
            href="/jobs"
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold hover:bg-blue-700"
          >
            View Jobs
          </a>
        </div>
      </header>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="font-semibold uppercase tracking-wider text-blue-600">
              Career Opportunity
            </p>
            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              Apply for a Job
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Submit your details and our recruitment team will contact you.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            {submitted ? (
              <div className="rounded-xl bg-green-50 p-8 text-center">
                <div className="text-5xl text-green-600">✓</div>
                <h2 className="mt-4 text-2xl font-bold text-green-700">
                  Application Submitted Successfully!
                </h2>
                <p className="mt-3 text-slate-600">
                  Thank you for applying. Your application has been saved.
                  Our recruitment team will contact you after reviewing
                  your profile.
                </p>

                {emailWarning && (
                  <p className="mt-4 text-sm text-amber-700">
                    Application save ho gayi hai, lekin email notification
                    confirm nahi ho saki. Server logs check karein.
                  </p>
                )}

                <a
                  href="/jobs"
                  className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  View More Jobs
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setEmailWarning(false);
                    setErrorMessage("");
                  }}
                  className="ml-3 mt-6 rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Apply Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="full_name" className="mb-2 block font-semibold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      id="full_name"
                      name="full_name"
                      type="text"
                      required
                      maxLength={150}
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile" className="mb-2 block font-semibold text-slate-700">
                      Mobile Number *
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      required
                      maxLength={30}
                      placeholder="Enter mobile number"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block font-semibold text-slate-700">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      maxLength={254}
                      placeholder="Enter email address"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="current_location" className="mb-2 block font-semibold text-slate-700">
                      Current Location *
                    </label>
                    <input
                      id="current_location"
                      name="current_location"
                      type="text"
                      required
                      maxLength={200}
                      placeholder="City / State"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="applying_for" className="mb-2 block font-semibold text-slate-700">
                      Applying For *
                    </label>
                    <select
                      id="applying_for"
                      name="applying_for"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
                    >
                      <option value="" disabled>Select Job</option>
                      <option>Security Guard</option>
                      <option>Housekeeping Staff</option>
                      <option>Factory Helper</option>
                      <option>Warehouse Staff</option>
                      <option>Driver</option>
                      <option>Technician</option>
                      <option>Office Boy</option>
                      <option>Hospital Staff</option>
                      <option>Hotel Staff</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="mb-2 block font-semibold text-slate-700">
                      Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      defaultValue="Fresher"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
                    >
                      <option>Fresher</option>
                      <option>Less than 1 Year</option>
                      <option>1–2 Years</option>
                      <option>2–5 Years</option>
                      <option>5+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="highest_qualification" className="mb-2 block font-semibold text-slate-700">
                    Highest Qualification
                  </label>
                  <input
                    id="highest_qualification"
                    name="highest_qualification"
                    type="text"
                    maxLength={200}
                    placeholder="Example: 10th, 12th, ITI, Graduate"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="mb-2 block font-semibold text-slate-700">
                    Upload CV / Resume (PDF, DOC, DOCX — max 5 MB)
                  </label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900"
                  />
                  <p className="mt-2 text-sm text-slate-500">
                    Resume optional hai. PDF, DOC ya DOCX file select kar sakte hain.
                  </p>
                </div>

                <div>
                  <label htmlFor="additional_information" className="mb-2 block font-semibold text-slate-700">
                    Additional Information
                  </label>
                  <textarea
                    id="additional_information"
                    name="additional_information"
                    rows={5}
                    maxLength={5000}
                    placeholder="Tell us about your skills, preferred location, salary expectation, etc."
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
                  />
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700"
                  >
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-blue-600 px-6 py-4 text-lg font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Application →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-center text-slate-300">
        <p className="font-semibold text-white">MK Manpower Solutions</p>
        <p className="mt-2">Connecting Right Talent with Right Opportunities.</p>
        <p className="mt-2">+91 7983792573</p>
      </footer>
    </main>
  );
}
