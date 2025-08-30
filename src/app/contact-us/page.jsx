'use client'

import React, { useRef } from "react";

const page = () => {
  const formRef = useRef(null);
  const [sent, setSent] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const data = {
      name: form.name.value,
      email: form.email.value,
      date: form.date.value,
      service: form.service.value,
    };
    // You can replace this with an API call or other logic
    console.log("Appointment submitted:", data);
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 3000);
  };
  return (
  <div className="min-h-screen flex items-center justify-center py-12 px-2 md:px-8">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12 md:gap-0 items-center justify-center">
        <div className="flex-1 flex flex-col justify-center md:items-start items-center text-white px-2 md:px-8 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-left text-white">
            Book an <span className="text-[#2563eb]">Appointment<br />or Contact Us</span>
          </h1>
          <p className="text-lg md:text-xl text-[#e0e6ed] max-w-xl text-left">
            If you are looking for consultation, legal advice, documentation, patents, trademarks, copyrights, IP litigation, licensing and transactions, IP portfolio management, or company incorporation, search no more! Here’s a one-stop destination for all your legal needs.<br />Reach out to know more!
          </p>
        </div>
        <div className="flex-1 max-w-lg w-full">
          <div className="bg-white/60 backdrop-blur rounded-xl shadow-2xl p-8 md:p-10 flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-2">Contact Us <span className="text-2xl">👋</span></h2>
            <p className="text-[#e0e6ed] mb-4 text-base md:text-lg">Have a legal query or want to book an appointment? Fill out the form below and our team will get in touch with you soon.</p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="rounded-md px-4 py-2 bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#295c8a]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="rounded-md px-4 py-2 bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#295c8a]"
                required
              />
              <input
                type="date"
                name="date"
                placeholder="dd/mm/yyyy"
                className="rounded-md px-4 py-2 bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#295c8a]"
                required
              />
              <select
                name="service"
                className="rounded-md px-4 py-2 bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#295c8a]"
                required
              >
                <option value="">Select A Service</option>
                <option value="consultation">Consultation</option>
                <option value="legal-advice">Legal Advice</option>
                <option value="documentation">Documentation</option>
                <option value="patents">Patents</option>
                <option value="trademarks">Trademarks</option>
                <option value="copyrights">Copyrights</option>
                <option value="ip-litigation">IP Litigation</option>
                <option value="licensing-and-transactions">Licensing and Transactions</option>
                <option value="ip-portfolio-management">IP Portfolio Management</option>
                <option value="company-incorporation">Company Incorporation</option>
              </select>
              <button
                type="submit"
                className={`bg-[#295c8a] hover:bg-[#1a3c4b] text-white font-semibold rounded-md py-2 mt-2 transition-colors duration-200 ${sent ? 'opacity-60 cursor-not-allowed' : ''}`}
                disabled={sent}
              >
                {sent ? 'Sent' : 'Get An Appointment'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page