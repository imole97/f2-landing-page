"use client";
import React, { useEffect, useState } from "react";
import { useLaunchpadApply } from "@/hooks/useLaunchpadApply";
import { cn } from "@/lib/utils";

// Country code list with flag images
const COUNTRY_CODES = [
  { code: "+234", label: "NG", image: "/images/flags/ng.svg" },
  { code: "+1", label: "US", image: "/images/flags/us.svg" },
  { code: "+44", label: "UK", image: "/images/flags/uk.svg" },
];

const PROFILE_OPTIONS = [
  "Busy Professional",
  "Corporate Firm",
  "SME Leader",
  "Tech Entrepreneur",
];

export default function CohortApplicationForm({
  className,
}: Readonly<{ className?: string }>) {
  const { apply, loading, error, success } = useLaunchpadApply();
  const STORAGE_KEY = "cohort-apply-draft";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState(COUNTRY_CODES[0].code);
  const [phoneLocal, setPhoneLocal] = useState("");
  const [about, setAbout] = useState("");
  const [description, setDescription] = useState("");
  const [readiness, setReadiness] = useState("No");

  // Build phone number with normalization:
  // - If user provided +/00, normalize to + and remove a single leading 0 after the country code
  // - Else, prepend selected country code and remove a single leading 0 from the local part
  const buildPhoneNumber = (code: string, local: string) => {
    const raw = (local || "").trim();
    if (!raw) return "";

    // Case 1: User already typed an international prefix
    if (/^(\+|00)\d+/.test(raw)) {
      // Normalize 00 to +
      const normalized = raw.replace(/^00/, "+").trim();
      // Extract country code and remove a single leading 0 from the rest
      const execRe = /^\+(\d+)\s*0?(.*)$/;
      const match = execRe.exec(normalized);
      if (match) {
        const country = match[1] ?? "";
        const rest = (match[2] ?? "").trim();
        return `+${country}${rest}`;
      }
      return normalized;
    }

    // Case 2: No explicit country code; use selected code and strip one leading 0 from local
    const cleanedLocal = raw.replace(/^0/, "");
    const cleanedCode = (code || "").trim();
    return `${cleanedCode}${cleanedLocal}`;
  };
  const phoneNumber = buildPhoneNumber(countryCode, phoneLocal);


  const onSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    await apply({
      fullName: `${firstName} ${lastName}`.trim(),
      email: email.trim(),
      phoneNumber: phoneNumber || undefined,
      about: about || undefined,
      description: description || undefined,
      readiness: readiness || undefined,
    });
  };

  // Hydrate form from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw) as Partial<{
        firstName: string;
        lastName: string;
        email: string;
        countryCode: string;
        phoneLocal: string;
        about: string;
        description: string;
        readiness: string;
      }>;

      if (typeof data.firstName === "string") setFirstName(data.firstName);
      if (typeof data.lastName === "string") setLastName(data.lastName);
      if (typeof data.email === "string") setEmail(data.email);
      if (typeof data.countryCode === "string")
        setCountryCode(data.countryCode);
      if (typeof data.phoneLocal === "string") setPhoneLocal(data.phoneLocal);
      if (typeof data.about === "string") setAbout(data.about);
      if (typeof data.description === "string")
        setDescription(data.description);
      if (typeof data.readiness === "string") setReadiness(data.readiness);
    } catch {
      // ignore corrupt storage
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist form to localStorage on change
  useEffect(() => {
    try {
      const payload = {
        firstName,
        lastName,
        email,
        countryCode,
        phoneLocal,
        about,
        description,
        readiness,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // storage may be unavailable; fail silently
    }
  }, [
    firstName,
    lastName,
    email,
    countryCode,
    phoneLocal,
    about,
    description,
    readiness,
  ]);

  useEffect(() => {
    if (success) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneLocal("");
      setAbout("");
      setDescription("");
      setReadiness("No");
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
    }
  }, [success]);

  return (
    <div
      className={cn(
        "bg-white w-full rounded-2xl border border-gray-200 p-6 md:p-10",
        className
      )}
    >
      <form onSubmit={onSubmit} className="space-y-10">
        <section>
          <h2 className="text-lg font-semibold mb-6">Personal Information</h2>
          <div className="grid gap-6 md:grid-cols-2">
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
                className="w-full h-11  px-4 rounded-md border border-gray-200 focus:ring-2 focus:ring-black/80 outline-none bg-white text-gray-900 placeholder:text-gray-400 placeholder:opacity-100"
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
                className="w-full h-11  px-4 rounded-md border border-gray-200 focus:ring-2 focus:ring-black/80 outline-none bg-white text-gray-900 placeholder:text-gray-400 placeholder:opacity-100"
              />
            </div>
            <div className="space-y-2">
              <label
                className="block  font-bold text-gray-800 tracking-wide"
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
                placeholder="you@email.com"
                className="w-full h-11  px-4 rounded-md border border-gray-200 focus:ring-2 focus:ring-black/80 outline-none bg-white text-gray-900 placeholder:text-gray-400 placeholder:opacity-100"
              />
            </div>
            <div className="space-y-2">
              <label
                className="block font-bold text-gray-800 tracking-wide"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <div className="flex h-11 rounded-md border border-gray-200 overflow-hidden">
                {/* Flag selector with native select overlay for accessibility */}
                <div className="relative flex items-center justify-center w-14 shrink-0 bg-gray-50 border-r border-gray-200">
                  {/* Visible flag image, rounded-full as requested */}
                  <img
                    src={
                      COUNTRY_CODES.find((c) => c.code === countryCode)?.image
                    }
                    alt={
                      COUNTRY_CODES.find((c) => c.code === countryCode)
                        ?.label || "flag"
                    }
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  {/* Native select overlays the flag for proper keyboard/screenreader support */}
                  <select
                    aria-label="Country code"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label} {c.code}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  id="phone"
                  type="tel"
                  value={phoneLocal}
                  onChange={(e) => setPhoneLocal(e.target.value)}
                  placeholder="Phone number"
                  className="flex-1 px-3  outline-none bg-white text-gray-900 placeholder:text-gray-400 placeholder:opacity-100"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-6">Your Venture</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <label
                className="block font-bold text-gray-800 tracking-wide"
                htmlFor="about"
              >
                What best describes you?
              </label>
              <select
                id="about"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                required
                className="w-full h-11  px-3 rounded-md border border-gray-200 bg-white focus:ring-2 focus:ring-black/80 outline-none text-gray-900"
              >
                <option value="" disabled>
                  Select
                </option>
                {PROFILE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label
                className="block font-bold text-gray-800 tracking-wide"
                htmlFor="description"
              >
                Briefly describe your business idea or the problem you want to
                solve
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Your description"
                className="w-full min-h-40  p-4 rounded-md border border-gray-200 focus:ring-2 focus:ring-black/80 outline-none resize-none bg-white text-gray-900 placeholder:text-gray-400 placeholder:opacity-100"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-6">Program Readiness</h2>
          <div className="space-y-4">
            <div className=" font-bold text-gray-800">
              Are you ready to pay for this venture-building program if
              selected?
            </div>
            <p className=" text-gray-500">Note: This program costs $25,000</p>
            <div className="flex gap-4 pt-2">
              {["Yes", "No"].map((val) => (
                <label
                  key={val}
                  className={cn(
                    "flex items-center gap-2 text-xs px-4 h-9 rounded-md border cursor-pointer transition text-gray-900",
                    readiness === val
                      ? "bg-[#EBFAFA] border-[#36BDBD]"
                      : "border-gray-200 hover:bg-gray-50"
                  )}
                >
                  <input
                    type="radio"
                    className="accent-[#36BDBD]"
                    name="readiness"
                    value={val}
                    checked={readiness === val}
                    onChange={() => setReadiness(val)}
                  />
                  {val}
                </label>
              ))}
            </div>
          </div>
        </section>

        {error && (
          <div className="p-4 bg-red-50  text-red-600 rounded-md border border-red-200">
            {error}
          </div>
        )}
        {success && (
          <div className="p-4 bg-green-50 text-sm text-green-700 rounded-md border border-green-200">
            Application submitted successfully!
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white font-bold text-sm md:text-base py-3.5 px-6 rounded-[10px] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit Application"}{" "}
            <span className="text-lg">→</span>
          </button>
        </div>
      </form>
    </div>
  );
}
