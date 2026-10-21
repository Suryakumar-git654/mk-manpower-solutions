"use client";

import { FormEvent, useState } from "react";


export default function RequestManpowerPage() {

  const [submitted, setSubmitted] = useState(false);



  

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  setSubmitted(false);

  const getText = (name: string) =>
    String(formData.get(name) ?? "").trim();

  const workers = Number(getText("workers"));

  if (!Number.isInteger(workers) || workers < 1) {
    alert("Please enter a valid number of workers.");
    return;
  }

  const requestData = {
    company_name: getText("companyName"),
    contact_person: getText("contactPerson"),
    mobile: getText("mobile") || null,
    email: getText("email") || null,
    location: getText("location"),
    manpower_type: getText("manpowerType"),
    number_of_workers: workers,
    salary_budget: getText("salary") || null,
    duty_hours: getText("dutyHours") || null,
    joining_date: getText("joiningDate") || null,
    accommodation_available: getText("accommodation") || null,
    food_available: getText("food") || null,
    urgency: getText("urgency") || null,
    additional_requirement: getText("additionalRequirement") || null,
  };

  try {
    const response = await fetch("/api/manpower-requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Request submission failed:", result.error);
      alert(result.error || "Request save nahi hui. Please try again.");
      return;
    }

    setSubmitted(true);
    form.reset();
  } catch (error) {
    console.error("Request submission error:", error);
    alert("Server se connection nahi ho paya. Please try again.");
  }
}



  return (

    <main className="min-h-screen bg-slate-50 py-12 px-4">

      <div className="mx-auto max-w-5xl">



        {/* Header */}

        <div className="mb-10 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">

            MK Manpower Solutions

          </p>



          <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">

            Request Manpower

          </h1>



          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">

            Tell us your manpower requirement and our team will contact you

            shortly.

          </p>

        </div>



        {/* Success Message */}

        {submitted && (

          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-5 text-green-800">

            <h2 className="font-bold">Requirement submitted successfully!</h2>

            <p className="mt-1 text-sm">

              Thank you. Our team will contact you shortly.

            </p>

          </div>

        )}



        {/* Form */}

        <form

          onSubmit={handleSubmit}

          className="rounded-2xl bg-white p-6 shadow-lg md:p-10"

        >

          {/* Company Information */}

          <div className="mb-8">

            <h2 className="text-2xl font-bold text-slate-900">

              Company Information

            </h2>



            <div className="mt-6 grid gap-5 md:grid-cols-2">



              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Company Name \*

                </label>

                <input

                  required

                  type="text"

                  name="companyName"

                  placeholder="Enter company name"

                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500"

                />

              </div>



              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Contact Person \*

                </label>

                <input

                  required

                  type="text"

                  name="contactPerson"

                  placeholder="Enter contact person name"

                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500"

                />

              </div>



              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Mobile Number \*

                </label>

                <input

                  required

                  type="tel"

                  name="mobile"

                  placeholder="Enter mobile number"

                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500"

                />

              </div>



              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Email Address

                </label>

                <input

                  type="email"

                  name="email"

                  placeholder="company@example.com"

                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500"

                />

              </div>



              <div className="md:col-span-2">

                <label className="mb-2 block font-semibold text-slate-700">

                  Location \*

                </label>

                <input

                  required

                  type="text"

                  name="location"

                  placeholder="City / Area / Work location"

                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500"

                />

              </div>

            </div>

          </div>



          {/* Manpower Requirement */}

          <div className="mb-8 border-t border-slate-200 pt-8">

            <h2 className="text-2xl font-bold text-slate-900">

              Manpower Requirement

            </h2>



            <div className="mt-6 grid gap-5 md:grid-cols-2">



              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Type of Manpower \*

                </label>



                <select

                  required

                  name="manpowerType"

                 className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500"

                >

                  <option value="">Select manpower type</option>

                  <option>Hospital Staff</option>

                  <option>Hotel Staff</option>

                  <option>Security Guard</option>

                  <option>Housekeeping</option>

                  <option>Helper</option>

                  <option>Warehouse Staff</option>

                  <option>Factory Labour</option>

                  <option>Office Boy</option>

                  <option>Driver</option>

                  <option>Technician</option>

                  <option>Construction Labour</option>

                  <option>Other</option>

                </select>

              </div>



              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Number of Workers \*

                </label>



                <input

                  required

                  min="1"

                  type="number"

                  name="workers"

                  placeholder="Example: 25"

                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500"

                />

              </div>



              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Salary / Budget

                </label>



                <input

                  type="text"

                  name="salary"

                  placeholder="Example: ₹15,000 - ₹20,000"

                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500"

                />

              </div>



              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Duty Hours

                </label>



                <input

                  type="text"

                  name="dutyHours"

                  placeholder="Example: 8 hours / 12 hours"

                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500"

                />

              </div>



              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Joining Date

                </label>



                <input

                  type="date"

                  name="joiningDate"

                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500"
                />

              </div>



              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Accommodation Available?

                </label>



                <select

                  name="accommodation"

                 className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500"

                >

                  <option value="">Select</option>

                  <option>Yes</option>

                  <option>No</option>

                </select>

              </div>



              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Food Available?

                </label>



                <select

                  name="food"

                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500"

                >

                  <option value="">Select</option>

                  <option>Yes</option>

                  <option>No</option>

                </select>

              </div>



              <div>

                <label className="mb-2 block font-semibold text-slate-700">

                  Urgency

                </label>



                <select

                  name="urgency"

                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500"

                >

                  <option value="">Select</option>

                  <option>Immediate</option>

                  <option>Within 7 Days</option>

                  <option>Within 15 Days</option>

                  <option>Within 30 Days</option>

                </select>

              </div>



              <div className="md:col-span-2">

                <label className="mb-2 block font-semibold text-slate-700">

                  Additional Requirement

                </label>



                <textarea

                  name="additionalRequirement"

                  rows={5}

                  placeholder="Tell us anything else about your manpower requirement..."

                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500"

                />

              </div>

            </div>

          </div>



          {/* Submit */}

          <div className="border-t border-slate-200 pt-8">

            <button

              type="submit"

              className="w-full rounded-xl bg-cyan-600 px-6 py-4 text-lg font-bold text-white transition hover:bg-cyan-700 md:w-auto md:min-w-64"

            >

              Submit Manpower Requirement →

            </button>



            <p className="mt-4 text-sm text-slate-500">

              By submitting this form, you agree that MK Manpower Solutions

              may contact you regarding your requirement.

            </p>

          </div>

        </form>

      </div>

    </main>

  );

}