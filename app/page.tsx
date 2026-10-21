"use client";

import { useState } from "react";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {

    setMenuOpen(false);

  };

  return (

    <main className="min-h-screen bg-white text-slate-900">

      {/* ================= TOP BAR ================= */}

      <div className="bg-slate-950 px-4 py-2 text-sm text-white">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 md:flex-row">

          <p>Connecting Right Talent with Right Opportunities.</p>

          <div className="flex flex-wrap justify-center gap-4">

            <a

              href="tel:+917983792573"

              className="hover:text-blue-400"

            >

              📞 +91 7983792573

            </a>

            <a

              href="mailto:mkmanpowersolutions@gmail.com"

              className="hover:text-blue-400"

            >

              ✉ mkmanpowersolutions@gmail.com

            </a>

          </div>

        </div>

      </div>

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}

<a href="/" className="flex items-center gap-3">

  <img

    src="/mk-manpower-logo.png"

    alt="MK Manpower Solutions Logo"

    className="h-14 w-auto object-contain"

  />

</a>

          {/* Desktop Menu */}

          <div className="hidden items-center gap-7 md:flex">

            <a

              href="/"

              className="font-semibold text-slate-700 hover:text-blue-600"

            >

              Home

            </a>

            <a

              href="#about"

              className="font-semibold text-slate-700 hover:text-blue-600"

            >

              About

            </a>

            <a

              href="#services"

              className="font-semibold text-slate-700 hover:text-blue-600"

            >

              Services

            </a>

            <a

              href="#industries"

              className="font-semibold text-slate-700 hover:text-blue-600"

            >

              Industries

            </a>

            <a

              href="/jobs"

              className="font-semibold text-slate-700 hover:text-blue-600"

            >

              Jobs

            </a>

            <a

              href="/contact"

              className="font-semibold text-slate-700 hover:text-blue-600"

            >

              Contact

            </a>

            <a

              href="/request-manpower"

              className="rounded-lg bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"

            >

              Request Manpower

            </a>

          </div>

          {/* Mobile Menu Button */}

          <button

            type="button"

            onClick={() => setMenuOpen(!menuOpen)}

            className="rounded-lg border border-slate-300 px-3 py-2 text-2xl md:hidden"

            aria-label="Toggle menu"

            aria-expanded={menuOpen}

          >

            {menuOpen ? "✕" : "☰"}

          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}

        {menuOpen && (

          <div className="border-t bg-white px-6 pb-5 shadow-md md:hidden">

            <div className="mx-auto flex max-w-7xl flex-col">

              <a

                href="/"

                onClick={closeMenu}

                className="border-b py-4 font-semibold text-slate-700 hover:text-blue-600"

              >

                Home

              </a>

              <a

                href="#about"

                onClick={closeMenu}

                className="border-b py-4 font-semibold text-slate-700 hover:text-blue-600"

              >

                About

              </a>

              <a

                href="#services"

                onClick={closeMenu}

                className="border-b py-4 font-semibold text-slate-700 hover:text-blue-600"

              >

                Services

              </a>

              <a

                href="#industries"

                onClick={closeMenu}

                className="border-b py-4 font-semibold text-slate-700 hover:text-blue-600"

              >

                Industries

              </a>

              <a

                href="/jobs"

                onClick={closeMenu}

                className="border-b py-4 font-semibold text-slate-700 hover:text-blue-600"

              >

                Jobs

              </a>

              <a

                href="/contact"

                onClick={closeMenu}

                className="border-b py-4 font-semibold text-slate-700 hover:text-blue-600"

              >

                Contact

              </a>

              <a

                href="/request-manpower"

                onClick={closeMenu}

                className="mt-4 rounded-lg bg-blue-700 px-5 py-3 text-center font-bold text-white hover:bg-blue-800"

              >

                Request Manpower

              </a>

            </div>

          </div>

        )}

      </nav>

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 py-20 text-white md:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>

            <p className="mb-4 font-bold uppercase tracking-widest text-blue-400">

              Professional Recruitment & Staffing

            </p>

            <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-6xl">

              Reliable Manpower.

              <br />

              <span className="text-blue-400">Right People.</span>

              <br />

              Right Opportunity.

            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">

              MK Manpower Solutions connects companies with reliable,

              pre-screened and suitable manpower across multiple industries.

            </p>

            
<div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
  <a
    href="/request-manpower"
    className="w-full rounded-lg bg-orange-500 px-7 py-4 text-center font-bold text-white transition hover:bg-orange-600 sm:w-auto"
  >
    Request Manpower →
  </a>

  <a
    href="/jobs"
    className="w-full rounded-lg border border-white px-7 py-4 text-center font-bold text-white transition hover:bg-white hover:text-slate-900 sm:w-auto"
  >
    View Jobs
  </a>
</div>
</div>


          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-white p-6 text-slate-900">

                <div className="text-3xl">👷</div>

                <h3 className="mt-3 font-bold">Blue Collar</h3>

                <p className="mt-1 text-sm text-slate-600">

                  Factory, Driver, Security & Helpers

                </p>

              </div>

              <div className="rounded-2xl bg-white p-6 text-slate-900">

                <div className="text-3xl">💼</div>

                <h3 className="mt-3 font-bold">White Collar</h3>

                <p className="mt-1 text-sm text-slate-600">

                  IT, HR, Finance, Sales & Management

                </p>

              </div>

              <div className="rounded-2xl bg-white p-6 text-slate-900">

                <div className="text-3xl">🌍</div>

                <h3 className="mt-3 font-bold">Overseas</h3>

                <p className="mt-1 text-sm text-slate-600">

                  Gulf & European Recruitment

                </p>

              </div>

              <div className="rounded-2xl bg-white p-6 text-slate-900">

                <div className="text-3xl">🤝</div>

                <h3 className="mt-3 font-bold">Staffing</h3>

                <p className="mt-1 text-sm text-slate-600">

                  Permanent & Contract Staffing

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>

              <p className="font-bold uppercase tracking-widest text-blue-600">

                About Us

              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-900">

                Your Trusted Recruitment & Staffing Partner

              </h2>

              <p className="mt-6 leading-8 text-slate-600">

                MK Manpower Solutions is a recruitment and staffing agency

                focused on connecting job seekers with companies looking for

                the right talent.

              </p>

              <p className="mt-4 leading-8 text-slate-600">

                We support businesses with quick turnaround, pre-screened

                candidates and manpower solutions for different industries.

              </p>

              <div className="mt-8 grid grid-cols-2 gap-5">

                <div className="rounded-xl bg-blue-50 p-5">

                  <p className="text-3xl font-black text-blue-700">Fast</p>

                  <p className="mt-1 text-sm text-slate-600">

                    Recruitment TAT

                  </p>

                </div>

                <div className="rounded-xl bg-blue-50 p-5">

                  <p className="text-3xl font-black text-blue-700">

                    Verified

                  </p>

                  <p className="mt-1 text-sm text-slate-600">

                    Candidate Profiles

                  </p>

                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white">

              <h3 className="text-2xl font-bold">Why Choose MK Manpower?</h3>

              <div className="mt-7 space-y-5">

                <div className="flex gap-4">

                  <span className="text-2xl">✓</span>

                  <div>

                    <h4 className="font-bold">Pre-Screened Candidates</h4>

                    <p className="mt-1 text-sm text-slate-300">

                      Candidates are screened according to client

                      requirements.

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <span className="text-2xl">✓</span>

                  <div>

                    <h4 className="font-bold">Quick Turnaround</h4>

                    <p className="mt-1 text-sm text-slate-300">

                      Focused recruitment support for urgent manpower needs.

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <span className="text-2xl">✓</span>

                  <div>

                    <h4 className="font-bold">Multiple Industries</h4>

                    <p className="mt-1 text-sm text-slate-300">

                      Blue-collar, white-collar and staffing solutions.

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <span className="text-2xl">✓</span>

                  <div>

                    <h4 className="font-bold">Professional Support</h4>

                    <p className="mt-1 text-sm text-slate-300">

                      Recruitment support from requirement to joining.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section id="services" className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="font-bold uppercase tracking-widest text-blue-600">

              Our Services

            </p>

            <h2 className="mt-3 text-4xl font-black">

              Recruitment & Staffing Solutions

            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">

              Flexible manpower solutions designed for different business

              requirements.

            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[

              {

                icon: "👔",

                title: "Permanent Recruitment",

                text: "Find suitable candidates for permanent positions.",

              },

              {

                icon: "👷",

                title: "Contract Staffing",

                text: "Flexible workforce for short-term and ongoing needs.",

              },

              {

                icon: "🏭",

                title: "Blue-Collar Staffing",

                text: "Factory workers, drivers, security and helpers.",

              },

              {

                icon: "💼",

                title: "White-Collar Recruitment",

                text: "IT, Finance, HR, Sales and management professionals.",

              },

              {

                icon: "⭐",

                title: "Executive Search",

                text: "Specialized recruitment for senior-level positions.",

              },

              {

                icon: "🤝",

                title: "Manpower Solutions",

                text: "Customized manpower support according to requirements.",

              },

            ].map((service) => (

              <div

                key={service.title}

                className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"

              >

                <div className="text-4xl">{service.icon}</div>

                <h3 className="mt-5 text-xl font-bold">

                  {service.title}

                </h3>

                <p className="mt-3 leading-7 text-slate-600">

                  {service.text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= INDUSTRIES ================= */}

      <section id="industries" className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="font-bold uppercase tracking-widest text-blue-600">

              Industries We Serve

            </p>

            <h2 className="mt-3 text-4xl font-black">

              Manpower Across Industries

            </h2>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4">

            {[

              "🏭 Factories & Manufacturing",

              "🏥 Hospitals & Healthcare",

              "🏨 Hotels & Hospitality",

              "📦 Warehouses & Logistics",

              "🛡️ Security Services",

              "🏢 Corporate Offices",

              "🛍️ Retail & Malls",

              "🏗️ Construction",

            ].map((industry) => (

              <div

                key={industry}

                className="rounded-xl border bg-white p-6 text-center font-bold shadow-sm hover:border-blue-500 hover:shadow-md"

              >

                {industry}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= PROCESS ================= */}

      <section className="bg-slate-950 px-6 py-20 text-white">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="font-bold uppercase tracking-widest text-blue-400">

              Our Process

            </p>

            <h2 className="mt-3 text-4xl font-black">

              Simple Recruitment Process

            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-6">

            {[

              ["01", "Requirement", "Understand your manpower requirement"],

              ["02", "Sourcing", "Find suitable candidates"],

              ["03", "Screening", "Screen and shortlist profiles"],

              ["04", "Interview", "Coordinate candidate interviews"],

              ["05", "Joining", "Support offer and joining"],

              ["06", "Support", "Continue recruitment assistance"],

            ].map(([number, title, text]) => (

              <div

                key={number}

                className="rounded-2xl border border-white/10 bg-white/5 p-5"

              >

                <div className="text-3xl font-black text-blue-400">

                  {number}

                </div>

                <h3 className="mt-4 font-bold">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">

                  {text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= REQUEST CTA ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-700 px-8 py-14 text-center text-white shadow-xl">

          <h2 className="text-3xl font-black md:text-4xl">

            Need Manpower for Your Business?

          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">

            Tell us your manpower requirement and our recruitment team will

            get in touch with you.

          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center">

            <a

              href="/request-manpower"

              className="w-full rounded-lg bg-orange-500 px-7 py-4 text-center font-bold text-white transition hover:bg-orange-600 sm:w-auto"

            >

              Request Manpower →

            </a>

            <a

              href="/jobs"

              className="w-full rounded-lg border border-white px-7 py-4 text-center font-bold text-white transition hover:bg-white hover:text-slate-900 sm:w-auto"

            >

              View Jobs

            </a>

          </div>

        </div>

      </section>

      {/* ================= JOBS ================= */}

      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="font-bold uppercase tracking-widest text-blue-600">

              Careers

            </p>

            <h2 className="mt-3 text-4xl font-black">

              Looking for a Job?

            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">

              Explore current vacancies and apply for suitable opportunities.

            </p>

          </div>

          <div className="mt-10 text-center">

            <a

              href="/jobs"

              className="inline-block rounded-lg bg-slate-950 px-8 py-4 font-bold text-white hover:bg-slate-800"

            >

              View Available Jobs →

            </a>

            <a

              href="/apply"

              className="ml-0 mt-4 inline-block rounded-lg border border-blue-600 px-8 py-4 font-bold text-blue-700 hover:bg-blue-50 sm:ml-4"

            >

              Submit Your Profile

            </a>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-2">

            <div>

              <p className="font-bold uppercase tracking-widest text-blue-600">

                Contact Us

              </p>

              <h2 className="mt-3 text-4xl font-black">

                Let&apos;s Build Your Workforce

              </h2>

              <p className="mt-5 leading-8 text-slate-600">

                Contact MK Manpower Solutions for recruitment and manpower

                requirements.

              </p>

              <div className="mt-8 space-y-4">

                <a

                  href="tel:+917983792573"

                  className="block rounded-xl bg-slate-50 p-5 font-semibold hover:bg-blue-50"

                >

                  📞 +91 7983792573

                </a>

                <a

                  href="mailto:mkmanpowersolutions@gmail.com"

                  className="block rounded-xl bg-slate-50 p-5 font-semibold hover:bg-blue-50"

                >

                  ✉ mkmanpowersolutions@gmail.com

                </a>

                <div className="rounded-xl bg-slate-50 p-5 font-semibold">

                  📍 Pilkhuwa, Near GS University, Hapur, Uttar Pradesh -

                  245304

                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white">

              <h3 className="text-2xl font-bold">

                Ready to Hire Manpower?

              </h3>

              <p className="mt-4 leading-7 text-slate-300">

                Submit your manpower requirement and our team will contact you.

              </p>

              <a

                href="/request-manpower"

                className="mt-8 block rounded-lg bg-blue-600 px-6 py-4 text-center font-bold hover:bg-blue-700"

              >

                Request Manpower

              </a>

              <a

                href="/contact"

                className="mt-4 block rounded-lg border border-white px-6 py-4 text-center font-bold hover:bg-white hover:text-slate-900"

              >

                Contact Us

              </a>

              <a

                href="https://wa.me/917983792573"

                target="_blank"

                rel="noopener noreferrer"

                className="mt-4 block rounded-lg bg-green-600 px-6 py-4 text-center font-bold hover:bg-green-700"

              >

                WhatsApp Us

              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-slate-950 px-6 py-12 text-slate-300">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

          <div>

            <h3 className="text-xl font-bold text-white">

              MK MANPOWER SOLUTIONS

            </h3>

            <p className="mt-4 text-sm leading-7">

              Connecting Right Talent with Right Opportunities.

            </p>

          </div>

          <div>

            <h4 className="font-bold text-white">Quick Links</h4>

            <div className="mt-4 space-y-3 text-sm">

              <a href="/" className="block hover:text-white">

                Home

              </a>

              <a href="#about" className="block hover:text-white">

                About

              </a>

              <a href="#services" className="block hover:text-white">

                Services

              </a>

              <a href="/jobs" className="block hover:text-white">

                Jobs

              </a>

            </div>

          </div>

          <div>

            <h4 className="font-bold text-white">For Businesses</h4>

            <div className="mt-4 space-y-3 text-sm">

              <a

                href="/request-manpower"

                className="block hover:text-white"

              >

                Request Manpower

              </a>

              <a

                href="/contact"

                className="block hover:text-white"

              >

                Contact Us

              </a>

            </div>

          </div>

          <div>

            <h4 className="font-bold text-white">For Candidates</h4>

            <div className="mt-4 space-y-3 text-sm">

              <a href="/jobs" className="block hover:text-white">

                Current Jobs

              </a>

              <a href="/apply" className="block hover:text-white">

                Apply for Job

              </a>

            </div>

          </div>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm">

          © {new Date().getFullYear()} MK Manpower Solutions. All Rights

          Reserved.

        </div>

      </footer>

      {/* ================= WHATSAPP BUTTON ================= */}

      <a

        href="https://wa.me/917983792573"

        target="_blank"

        rel="noopener noreferrer"

        aria-label="Chat on WhatsApp"

        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-2xl text-white shadow-xl hover:bg-green-700"

      >

        💬

      </a>

    </main>

  );

}
