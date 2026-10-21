"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
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
            href="/"
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold hover:bg-blue-700"
          >
            Home
          </a>
        </div>
      </header>

      {/* Contact Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-wider text-blue-600">
              Get In Touch
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              Contact MK Manpower Solutions
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Need manpower for your company? Contact our recruitment team
              today.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <div className="rounded-2xl bg-slate-950 p-8 text-white shadow-lg">
              <h2 className="text-2xl font-bold">Contact Information</h2>

              <div className="mt-8 space-y-7">
                <div>
                  <p className="text-sm font-semibold uppercase text-blue-400">
                    Phone
                  </p>

                  <a
                    href="tel:+917983792573"
                    className="mt-1 block text-lg hover:text-blue-400"
                  >
                    +91 7983792573
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase text-blue-400">
                    Email
                  </p>

                  <a
                    href="mailto:mkmanpowersolutions@gmail.com"
                    className="mt-1 block text-lg hover:text-blue-400"
                  >
                    mkmanpowersolutions@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase text-blue-400">
                    Office
                  </p>

                  <p className="mt-1 text-lg leading-7">
                    Pilkhuwa, Near GS University,
                    <br />
                    Hapur, Uttar Pradesh - 245304
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase text-blue-400">
                    Business Hours
                  </p>

                  <p className="mt-1 text-lg">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/917983792573"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 block rounded-lg bg-green-600 px-6 py-3 text-center font-bold hover:bg-green-700"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Enquiry Form */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="text-5xl">✓</div>

                  <h2 className="mt-4 text-2xl font-bold text-green-700">
                    Thank You!
                  </h2>

                  <p className="mt-3 text-slate-600">
                    Your enquiry has been submitted successfully. Our team
                    will contact you soon.
                  </p>

                  <a
                    href="/"
                    className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
                  >
                    Back to Home
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="mb-6 text-2xl font-bold text-slate-900">
                    Send Us an Enquiry
                  </h2>

                  <div>
                    <label className="mb-2 block font-semibold text-slate-700">
                      Company Name *
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Enter company name"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-semibold text-slate-700">
                      Contact Person *
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Enter contact person name"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-semibold text-slate-700">
                        Mobile Number *
                      </label>

                      <input
                        required
                        type="tel"
                        placeholder="Mobile number"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-semibold text-slate-700">
                        Email
                      </label>

                      <input
                        type="email"
                        placeholder="Email address"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-semibold text-slate-700">
                      Requirement
                    </label>

                    <textarea
                      rows={5}
                      placeholder="Tell us how many workers you need and for which position..."
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
                  >
                    Send Enquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-8 text-center text-slate-300">
        <p className="font-semibold text-white">MK Manpower Solutions</p>
        <p className="mt-2">
          Connecting Right Talent with Right Opportunities.
        </p>
      </footer>
    </main>
  );
}