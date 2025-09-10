"use client";
import React, { useEffect, useState } from "react";
import { useContact } from "@/hooks/useContact";
import { cn } from "@/lib/utils";

export default function ContactForm({
  className,
}: Readonly<{ className?: string }>) {
  const { send, loading, error, success } = useContact();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await send({
      fullName: `${firstName} ${lastName}`.trim(),
      email: email.trim(),
      message,
    });
  };

  useEffect(() => {
    if (success) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    }
  }, [success]);

  return (
    <div
      className={cn(
        "bg-white w-full rounded-2xl border border-gray-200 p-6 md:p-10",
        className
      )}
    >
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label
              className="block font-bold text-gray-800 tracking-wide"
              htmlFor="firstName"
            >
              First name
            </label>
            <input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="Your first name"
              className="w-full h-11 px-4 rounded-md border border-gray-200 focus:ring-2 focus:ring-black/80 outline-none bg-white text-gray-900 placeholder:text-gray-400 placeholder:opacity-100"
            />
          </div>
          <div className="space-y-2">
            <label
              className="block font-bold text-gray-800 tracking-wide"
              htmlFor="lastName"
            >
              Last name
            </label>
            <input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Your last name"
              className="w-full h-11 px-4 rounded-md border border-gray-200 focus:ring-2 focus:ring-black/80 outline-none bg-white text-gray-900 placeholder:text-gray-400 placeholder:opacity-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            className="block font-bold text-gray-800 tracking-wide"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
            className="w-full h-11 px-4 rounded-md border border-gray-200 focus:ring-2 focus:ring-black/80 outline-none bg-white text-gray-900 placeholder:text-gray-400 placeholder:opacity-100"
          />
        </div>
        <div className="space-y-2">
          <label
            className="block font-bold text-gray-800 tracking-wide"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Write your message..."
            className="w-full min-h-40 p-4 rounded-md border border-gray-200 focus:ring-2 focus:ring-black/80 outline-none resize-none bg-white text-gray-900 placeholder:text-gray-400 placeholder:opacity-100"
          />
        </div>

        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-md border border-red-200">
            {error}
          </div>
        )}
        {success && (
          <div className="p-4 bg-green-50 text-sm text-green-700 rounded-md border border-green-200">
            Message sent. We'll be in touch.
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white font-bold text-sm md:text-base py-3.5 px-6 rounded-[10px] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send message"}{" "}
            <span className="text-lg">→</span>
          </button>
        </div>
      </form>
    </div>
  );
}
