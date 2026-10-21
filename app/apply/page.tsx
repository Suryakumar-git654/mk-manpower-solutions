"use client";

import { FormEvent, useState } from "react";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
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

      {/* Page */}
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
                <div className="text-5xl">✓</div>

                <h2 className="mt-4 text-2xl font-bold text-green-700">
                  Application Submitted Successfully!
                </h2>

                <p className="mt-3 text-slate-600">
                  Thank you for applying. Our recruitment team will contact
                  you after reviewing your profile.
                </p>

                <a
                  href="/jobs"
                  className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  View More Jobs
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label className="mb-2 block font-semibold text-slate-700">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="mb-2 block font-semibold text-slate-700">
                      Mobile Number *
                    </label>

                    <input
                      type="tel"
                      required
                      placeholder="Enter mobile number"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block font-semibold text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="mb-2 block font-semibold text-slate-700">
                      Current Location *
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="City / State"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Job */}
                  <div>
                    <label className="mb-2 block font-semibold text-slate-700">
                      Applying For *
                    </label>

                    <select
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                    >
                      <option value="">Select Job</option>
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

                  {/* Experience */}
                  <div>
                    <label className="mb-2 block font-semibold text-slate-700">
                      Experience
                    </label>

                    <select className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500">
                      <option>Fresher</option>
                      <option>Less than 1 Year</option>
                      <option>1–2 Years</option>
                      <option>2–5 Years</option>
                      <option>5+ Years</option>
                    </select>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <label className="mb-2 block font-semibold text-slate-700">
                    Highest Qualification
                  </label>

                  <input
                    type="text"
                    placeholder="Example: 10th, 12th, ITI, Graduate"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                {/* Resume */}
                <div>
                  <label className="mb-2 block font-semibold text-slate-700">
                    Upload CV / Resume
                  </label>

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3"
                  />

                  <p className="mt-2 text-sm text-slate-500">
                    Accepted formats: PDF, DOC, DOCX
                  </p>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="mb-2 block font-semibold text-slate-700">
                    Additional Information
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your skills, preferred location, salary expectation, etc."
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-6 py-4 text-lg font-bold text-white hover:bg-blue-700"
                >
                  Submit Application →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-8 text-center text-slate-300">
        <p className="font-semibold text-white">MK Manpower Solutions</p>
        <p className="mt-2">
          Connecting Right Talent with Right Opportunities.
        </p>
        <p className="mt-2">+91 7983792573</p>
      </footer>
    </main>
  );
}