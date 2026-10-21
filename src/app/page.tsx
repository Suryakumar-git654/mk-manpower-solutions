const services = [
  {
    title: "Permanent Recruitment",
    description:
      "Reliable candidate placement solutions for businesses looking for the right talent.",
    icon: "👥",
  },
  {
    title: "Contract Staffing",
    description:
      "Flexible workforce and staffing support for ongoing business requirements.",
    icon: "🏢",
  },
  {
    title: "Blue-Collar Staffing",
    description:
      "Factory workers, drivers, security staff and other operational workforce.",
    icon: "🛠️",
  },
  {
    title: "White-Collar Recruitment",
    description:
      "Recruitment support for IT, Finance, HR, Sales and management roles.",
    icon: "💼",
  },
  {
    title: "Executive Search",
    description:
      "Focused recruitment support for senior and leadership-level positions.",
    icon: "⭐",
  },
  {
    title: "Manpower Solutions",
    description:
      "Customized workforce solutions based on your company's manpower requirements.",
    icon: "🤝",
  },
];

const industries = [
  "Factories & Manufacturing",
  "Hospitals & Healthcare",
  "Hotels & Hospitality",
  "Warehouses & Logistics",
  "Security Services",
  "Corporate Offices",
  "Retail & Malls",
  "Construction",
];

const process = [
  {
    number: "01",
    title: "Requirement",
    description: "We understand your job role, manpower requirement and timeline.",
  },
  {
    number: "02",
    title: "Sourcing",
    description: "We source and identify suitable candidates from our recruitment network.",
  },
  {
    number: "03",
    title: "Screening",
    description: "Candidates are shortlisted through initial screening and evaluation.",
  },
  {
    number: "04",
    title: "Interview",
    description: "Shortlisted profiles are shared and interviews are coordinated.",
  },
  {
    number: "05",
    title: "Joining",
    description: "We support the selection, offer and joining confirmation process.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top Contact Bar */}
      <div className="bg-[#071a3d] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-2 text-sm sm:flex-row">
          <p>Connecting Right Talent with Right Opportunities</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+917983792573" className="hover:text-cyan-300">
              +91 7983792573
            </a>
            <a
              href="mailto:mkmanpowersolutions@gmail.com"
              className="hover:text-cyan-300"
            >
              mkmanpowersolutions@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071a3d] text-xl font-black text-white">
              MK
            </div>

            <div>
              <div className="text-lg font-extrabold tracking-tight text-[#071a3d]">
                MK MANPOWER
              </div>
              <div className="text-xs font-semibold tracking-[0.25em] text-cyan-600">
                SOLUTIONS
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#" className="text-cyan-600">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-600">
              About
            </a>
            <a href="#services" className="hover:text-cyan-600">
              Services
            </a>
            <a href="#industries" className="hover:text-cyan-600">
              Industries
            </a>
            <a href="#jobs" className="hover:text-cyan-600">
              Jobs
            </a>
            <a href="#contact" className="hover:text-cyan-600">
              Contact
            </a>
          </div>

          <a
            href="#requirement"
            className="rounded-full bg-cyan-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700"
          >
            Request Manpower
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071a3d]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Professional Recruitment & Staffing Solutions
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Reliable Manpower.
              <span className="block text-cyan-400">
                Right People. Right Opportunity.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MK Manpower Solutions connects businesses with qualified
              personnel through recruitment, staffing and customized manpower
              solutions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#requirement"
                className="rounded-xl bg-cyan-500 px-7 py-3.5 text-center font-bold text-white shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-400"
              >
                Request Manpower →
              </a>

              <a
                href="#jobs"
                className="rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-center font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                Find a Job
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <div className="text-2xl font-black text-white">Fast</div>
                <div className="text-sm text-slate-400">Turnaround</div>
              </div>

              <div>
                <div className="text-2xl font-black text-white">Verified</div>
                <div className="text-sm text-slate-400">Candidates</div>
              </div>

              <div>
                <div className="text-2xl font-black text-white">Regional</div>
                <div className="text-sm text-slate-400">Reach</div>
              </div>
            </div>
          </div>

          {/* Hero Card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-2xl bg-white p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-500">
                      Workforce Solutions
                    </div>
                    <div className="mt-1 text-2xl font-black text-[#071a3d]">
                      Your Team Starts Here
                    </div>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-2xl">
                    🤝
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    "Permanent Recruitment",
                    "Contract Staffing",
                    "Blue-Collar Workforce",
                    "White-Collar Recruitment",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-sm text-cyan-700">
                        ✓
                      </span>
                      <span className="font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 block rounded-xl bg-[#071a3d] px-5 py-3 text-center font-bold text-white transition hover:bg-slate-800"
                >
                  Talk to Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                About MK Manpower Solutions
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071a3d] sm:text-4xl">
                Connecting businesses with reliable talent
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                MK Manpower Solutions is a recruitment and staffing agency
                focused on connecting job seekers with companies looking for
                reliable personnel across different industry verticals.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Our approach focuses on quick turnaround, candidate screening
                and practical staffing support according to each client's
                requirement.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="text-2xl">⚡</div>
                  <div className="mt-2 font-bold text-[#071a3d]">
                    Quick TAT
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    Fast recruitment response
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="text-2xl">✓</div>
                  <div className="mt-2 font-bold text-[#071a3d]">
                    Pre-screened
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    Candidate screening
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#071a3d] p-8 text-white shadow-xl">
              <div className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                Our Mission
              </div>

              <h3 className="mt-4 text-3xl font-black">
                Bridge the gap between talent and opportunity.
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                We aim to help job seekers find suitable opportunities while
                helping organizations access the personnel they need.
              </p>

              <div className="mt-8 h-px bg-white/10" />

              <p className="mt-6 text-sm font-semibold text-slate-400">
                Connecting Right Talent with Right Opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-bold uppercase tracking-widest text-cyan-600">
              What We Do
            </div>

            <h2 className="mt-3 text-3xl font-black text-[#071a3d] sm:text-4xl">
              Our Recruitment & Staffing Services
            </h2>

            <p className="mt-4 text-slate-600">
              Flexible recruitment solutions designed around your manpower
              requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-2xl transition group-hover:bg-cyan-100">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-black text-[#071a3d]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                <a
                  href="#requirement"
                  className="mt-5 inline-block text-sm font-bold text-cyan-600 hover:text-cyan-700"
                >
                  Enquire Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                Industries
              </div>

              <h2 className="mt-3 text-3xl font-black text-[#071a3d] sm:text-4xl">
                Workforce for different business needs
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Tell us your manpower requirement and our team can understand
                the role, budget and timeline before sourcing candidates.
              </p>

              <a
                href="#requirement"
                className="mt-7 inline-block rounded-xl bg-[#071a3d] px-6 py-3 font-bold text-white hover:bg-slate-800"
              >
                Discuss Your Requirement
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center font-bold text-slate-700 shadow-sm"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-sm font-bold uppercase tracking-widest text-cyan-600">
              How We Work
            </div>

            <h2 className="mt-3 text-3xl font-black text-[#071a3d] sm:text-4xl">
              Simple Recruitment Process
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {process.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-3xl font-black text-cyan-600">
                  {item.number}
                </div>

                <h3 className="mt-4 font-black text-[#071a3d]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Manpower */}
      <section id="requirement" className="bg-[#071a3d] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                Need Staff?
              </div>

              <h2 className="mt-3 text-4xl font-black text-white">
                Tell us your manpower requirement
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Share your requirement with our team. We will understand your
                role, workforce requirement, budget and timeline.
              </p>

              <div className="mt-7 space-y-3 text-slate-300">
                <div>✓ Number of workers required</div>
                <div>✓ Job role and responsibilities</div>
                <div>✓ Location and joining timeline</div>
                <div>✓ Salary / budget information</div>
              </div>
            </div>

            <form className="rounded-3xl bg-white p-7 shadow-2xl">
              <h3 className="text-2xl font-black text-[#071a3d]">
                Request Manpower
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500"
                />

                <input
                  type="text"
                  placeholder="Contact Person"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500"
                />

                <input
                  type="text"
                  placeholder="Location"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 sm:col-span-2"
                />

                <select className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 sm:col-span-2">
                  <option value="">Type of Manpower</option>
                  <option>Blue-Collar Staff</option>
                  <option>White-Collar Staff</option>
                  <option>Security Staff</option>
                  <option>Housekeeping</option>
                  <option>Factory Workers</option>
                  <option>Hospital Staff</option>
                  <option>Hotel Staff</option>
                  <option>Other</option>
                </select>

                <input
                  type="number"
                  placeholder="Workers Required"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500"
                />

                <input
                  type="text"
                  placeholder="Joining Date"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500"
                />

                <textarea
                  placeholder="Additional Requirement"
                  rows={4}
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 sm:col-span-2"
                />

                <button
                  type="button"
                  className="rounded-xl bg-cyan-600 px-6 py-3.5 font-bold text-white transition hover:bg-cyan-700 sm:col-span-2"
                >
                  Submit Manpower Requirement
                </button>
              </div>

              <p className="mt-4 text-center text-xs text-slate-400">
                Form functionality and database connection will be added in a
                later step.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                  Looking for a Job?
                </div>

                <h2 className="mt-3 text-3xl font-black text-[#071a3d]">
                  Find your next opportunity
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Explore job opportunities and submit your profile to MK
                  Manpower Solutions.
                </p>
              </div>

              <div className="flex md:justify-end">
                <button className="rounded-xl bg-[#071a3d] px-7 py-3.5 font-bold text-white hover:bg-slate-800">
                  View Jobs →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-sm font-bold uppercase tracking-widest text-cyan-600">
              Contact Us
            </div>

            <h2 className="mt-3 text-3xl font-black text-[#071a3d] sm:text-4xl">
              Let's work together
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <a
              href="tel:+917983792573"
              className="rounded-2xl bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl">📞</div>
              <div className="mt-3 font-black text-[#071a3d]">Call Us</div>
              <div className="mt-1 text-slate-500">+91 7983792573</div>
            </a>

            <a
              href="mailto:mkmanpowersolutions@gmail.com"
              className="rounded-2xl bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl">✉️</div>
              <div className="mt-3 font-black text-[#071a3d]">Email Us</div>
              <div className="mt-1 break-all text-slate-500">
                mkmanpowersolutions@gmail.com
              </div>
            </a>

            <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
              <div className="text-3xl">📍</div>
              <div className="mt-3 font-black text-[#071a3d]">Office</div>
              <div className="mt-1 text-slate-500">
                Pilkhuwa, near GS University, Hapur, Uttar Pradesh
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#04122d] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-black">MK MANPOWER SOLUTIONS</div>
            <div className="mt-1 text-sm text-slate-400">
              Connecting Right Talent with Right Opportunities
            </div>
          </div>

          <div className="text-sm text-slate-400">
            © 2026 MK Manpower Solutions. All rights reserved.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917983792573?text=Hello%20MK%20Manpower%20Solutions,%20I%20need%20manpower%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
        aria-label="Contact MK Manpower Solutions on WhatsApp"
      >
        💬
      </a>
    </main>
  );
}