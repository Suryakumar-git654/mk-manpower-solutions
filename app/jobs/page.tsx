const jobs = [
  {
    title: "Security Guard",
    company: "Confidential Client",
    location: "Ghaziabad, Uttar Pradesh",
    salary: "₹15,000 - ₹20,000 / Month",
    type: "Full Time",
    experience: "0-2 Years",
  },
  {
    title: "Housekeeping Staff",
    company: "Hotel / Hospitality",
    location: "Hapur, Uttar Pradesh",
    salary: "₹12,000 - ₹16,000 / Month",
    type: "Full Time",
    experience: "Fresher / Experienced",
  },
  {
    title: "Factory Helper",
    company: "Manufacturing Unit",
    location: "Noida, Uttar Pradesh",
    salary: "₹13,000 - ₹18,000 / Month",
    type: "Full Time",
    experience: "Fresher / Experienced",
  },
];

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-[#071a3d] text-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <a href="/" className="text-xl font-black">
            MK MANPOWER <span className="text-cyan-400">SOLUTIONS</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Career Opportunities
          </p>

          <h1 className="mt-3 text-4xl font-black text-[#071a3d] md:text-5xl">
            Find Your Next Job
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Explore available job opportunities through MK Manpower Solutions
            and apply for positions that match your skills.
          </p>
        </div>
      </section>

      {/* Jobs */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-[#071a3d]">
              Available Vacancies
            </h2>

            <p className="mt-2 text-slate-500">
              Current opportunities listed by MK Manpower Solutions.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg md:p-8"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row">
                  <div>
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">
                      {job.type}
                    </span>

                    <h3 className="mt-4 text-2xl font-black text-[#071a3d]">
                      {job.title}
                    </h3>

                    <p className="mt-2 font-semibold text-slate-600">
                      {job.company}
                    </p>

                    <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                      <div>📍 {job.location}</div>
                      <div>💰 {job.salary}</div>
                      <div>🕒 {job.type}</div>
                      <div>👤 {job.experience}</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <a
                      href="/apply"
                      className="w-full rounded-xl bg-cyan-600 px-7 py-3 text-center font-bold text-white transition hover:bg-cyan-700 md:w-auto"
                    >
                      Apply Now →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* General application */}
          <div className="mt-10 rounded-2xl bg-[#071a3d] p-8 text-white">
            <h2 className="text-2xl font-black">
              Don't see the right vacancy?
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              Submit your profile anyway. Our recruitment team can consider
              your profile for suitable future opportunities.
            </p>

            <a
              href="/apply"
              className="mt-6 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Submit Your Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#04122d] px-6 py-8 text-center text-sm text-slate-400">
        © 2026 MK Manpower Solutions. All rights reserved.
      </footer>
    </main>
  );
}