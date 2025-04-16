import React, { useState } from "react";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState(null); // null | "success" | "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission for now
    setTimeout(() => {
      setFormStatus("success");
    }, 1000);
  };

  return (
    <section className="px-6 md:px-20 py-16 text-black">
     
      <div className="text-center md:text-left text-white">
            <h1 className="text-4xl md:text-8xl font-bold leading-none tracking-tight font-bebas">
                LET'S WORK <br /> TOGETHER
            </h1>
        </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-medium text-white">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your Name"
              className="px-4 py-2 border border-gray-300 rounded-md dark:bg-white/10 dark:border-white/20"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium text-white">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Your Email"
              className="px-4 py-2 border border-gray-300 rounded-md dark:bg-white/10 dark:border-white/20"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 text-sm font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            required
            placeholder="Message"
            rows={5}
            className="px-4 py-2 border border-gray-300 rounded-md resize-none dark:bg-white/10 dark:border-white/20"
          />
        </div>

        <button
          type="submit"
          className="bg-[#F46C38] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Submit
        </button>

        {formStatus === "success" && (
          <div className="mt-4 p-4 text-green-700 bg-green-100 rounded-md">
            Thank you! Your submission has been received!
          </div>
        )}
        {formStatus === "error" && (
          <div className="mt-4 p-4 text-red-700 bg-red-100 rounded-md">
            Oops! Something went wrong while submitting the form.
          </div>
        )}
      </form>
    </section>
  );
}
