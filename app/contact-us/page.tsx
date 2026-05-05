"use client";

/**
 * EMAILJS SETUP — 3 steps (free, no backend needed)
 * ─────────────────────────────────────────────────
 * 1. Create a free account at https://www.emailjs.com
 *
 * 2. Fill in the 4 constants below:
 *      EMAILJS_SERVICE_ID  → Dashboard → Email Services → your service ID
 *      TEMPLATE_THANKYOU   → Create a template for the user thank-you email
 *      TEMPLATE_NOTIFY     → Create a template for the internal notification email
 *      EMAILJS_PUBLIC_KEY  → Dashboard → Account → Public Key
 *
 * 3. In each EmailJS template use these variables:
 *
 *    TEMPLATE_THANKYOU (sent to the user):
 *      {{to_name}}    — user's name
 *      {{to_email}}   — user's email  ← set "To Email" field to {{to_email}}
 *      {{message}}    — their message
 *
 *    TEMPLATE_NOTIFY (sent to ishanshi.webespire@gmail.com):
 *      {{from_name}}  — user's name
 *      {{from_email}} — user's email
 *      {{phone}}      — user's phone
 *      {{budget}}     — selected budget
 *      {{message}}    — their message
 *      Set "To Email" field to: ishanshi.webespire@gmail.com
 *
 * 4. Install the SDK:  npm install @emailjs/browser
 */

import { useState, useRef, useEffect } from "react";
import { ArrowRight, CheckCircle, X } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/footer";
import emailjs from "@emailjs/browser";

// ── EmailJS config — replace with your real values ───────────────────────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const TEMPLATE_THANKYOU   = "YOUR_THANKYOU_TEMPLATE_ID";
const TEMPLATE_NOTIFY     = "YOUR_NOTIFY_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
// ─────────────────────────────────────────────────────────────────────────────

type FormState = {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
  file: File | null;
};

type Errors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  name: "", email: "", phone: "", budget: "", message: "", file: null,
};

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "20+",  label: "Years of Experience" },
  { value: "98%",  label: "Client Satisfaction" },
];

const excellenceCards = [
  {
    title: "20+ Years of Experience",
    description:
      "Blending over two decades of industry experience in crafting mobile applications, we deliver result-oriented solutions to our customers worldwide.",
  },
  {
    title: "Expert Team",
    description:
      "Our team of skilled developers, designers, and strategists brings diverse expertise to every project, ensuring top-quality outcomes for your business.",
  },
  {
    title: "Custom Solutions",
    description:
      "We craft fully customized digital solutions tailored to your unique business goals, ensuring every product aligns with your vision and objectives.",
  },
  {
    title: "Global Clientele",
    description:
      "Serving clients across the globe, we bring international exposure and best practices to every engagement, regardless of scale or industry.",
  },
  {
    title: "Agile Delivery",
    description:
      "We follow agile methodologies to ensure transparent, iterative delivery, keeping you informed and in control at every stage of the project.",
  },
  {
    title: "Post-Launch Support",
    description:
      "Our commitment doesn't end at launch. We provide dedicated post-launch support and maintenance to keep your product running at its best.",
  },
];

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 48 48" fill="none">
    <rect x="11" y="4" width="26" height="40" rx="3" ry="3" stroke="#1a3a5c" strokeWidth="2" fill="none" />
    <rect x="14" y="9" width="20" height="28" rx="1" stroke="#1a3a5c" strokeWidth="1.5" fill="none" />
    <line x1="22" y1="41" x2="26" y2="41" stroke="#1a3a5c" strokeWidth="2" strokeLinecap="round" />
    <polyline points="20,18 17,23 20,28" stroke="#1a3a5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <polyline points="28,18 31,23 28,28" stroke="#1a3a5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="25" y1="18" x2="23" y2="28" stroke="#1a3a5c" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function ContactUs() {
  const [form, setForm]           = useState<FormState>(INITIAL);
  const [errors, setErrors]       = useState<Errors>({});
  const [status, setStatus]       = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [showBanner, setShowBanner] = useState(false);
  const fileRef   = useRef<HTMLInputElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Scroll to banner when it appears
  useEffect(() => {
    if (showBanner && bannerRef.current) {
      bannerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [showBanner]);

  // Init EmailJS once
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const set =
    (field: keyof Omit<FormState, "file">) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      setErrors((er) => ({ ...er, [field]: "" }));
    };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file && file.size > 50 * 1024 * 1024) {
      setErrors((er) => ({ ...er, file: "File exceeds 50MB limit." }));
      if (fileRef.current) fileRef.current.value = "";
      return;
    }
    setForm((f) => ({ ...f, file }));
    setErrors((er) => ({ ...er, file: "" }));
  };

  const validate = (): boolean => {
    const errs: Errors = {};
    if (!form.name.trim())    errs.name    = "Name is required.";
    if (!form.email.trim())   errs.email   = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              errs.email   = "Enter a valid email address.";
    if (!form.phone.trim())   errs.phone   = "Phone number is required.";
    else if (!/^[+]?[\d\s\-().]{7,20}$/.test(form.phone))
                              errs.phone   = "Enter a valid phone number.";
    if (!form.budget)         errs.budget  = "Please select a budget.";
    if (!form.message.trim()) errs.message = "Please enter a message.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("submitting");
    setShowBanner(false);

    try {
      // ── Email 1: Thank-you to the user ─────────────────────────────────────
      await emailjs.send(EMAILJS_SERVICE_ID, TEMPLATE_THANKYOU, {
        to_name:  form.name,
        to_email: form.email,
        message:  form.message,
      });

      // ── Email 2: Notification to Webespire ─────────────────────────────────
      await emailjs.send(EMAILJS_SERVICE_ID, TEMPLATE_NOTIFY, {
        from_name:  form.name,
        from_email: form.email,
        phone:      form.phone,
        budget:     form.budget,
        message:    form.message,
      });

      setStatus("success");
      setShowBanner(true);
      setForm(INITIAL);
      if (fileRef.current) fileRef.current.value = "";
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const fieldBorder = (field: keyof FormState) =>
    errors[field] ? "border-red-400" : "border-gray-400";

  return (
    <main className="mx-auto space-y-10">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/hero-img.svg" alt="Mobile app development" fill priority className="object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl space-y-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-normal">
            Contact Us
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Our Automotive solutions help lower operational cost and enhance performance using our
            ready-to-deploy technology.
          </p>
        </div>
      </section>

      {/* ── Contact Section ───────────────────────────────────────────────────── */}
      <section className="px-4 md:px-8 lg:px-16 py-5 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e4a] leading-snug">
              Why choose <span className="text-orange-500">Webespire</span> as your trusted partner
              for digital transformation services.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              As one of the top mobile app development companies in India, we address the challenges
              of dynamic market by delivering robust mobile application development services with a
              fully customized approach, combining technology with your business goals.
            </p>
          </div>

          {/* Right: Form Card */}
          <div className="overflow-hidden shadow-lg border border-gray-200">

            {/* Card Header */}
            <div className="bg-[#0d3b5e] text-white px-8 py-6">
              <p className="text-lg font-semibold">Get in touch with us</p>
              <p className="text-sm text-gray-300 mt-1">
                Please fill the contact form below and we shall get in touch with you within next 24 hours.
              </p>
            </div>

            <div className="bg-gray-50 px-8 py-8 space-y-6">

              {/* ── Thank-you Banner (shown above form fields after success) ──── */}
              {showBanner && (
                <div
                  ref={bannerRef}
                  className="relative flex items-start gap-4 bg-green-50 border border-green-200 rounded-lg px-5 py-4"
                >
                  <CheckCircle className="text-green-600 mt-0.5 shrink-0" size={22} />
                  <div className="flex-1">
                    <p className="text-green-800 font-semibold text-sm">
                      Thank you! Your message has been sent successfully.
                    </p>
                    <p className="text-green-700 text-xs mt-1 leading-relaxed">
                      We've sent a confirmation to your email. Our team will get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowBanner(false)}
                    className="text-green-500 hover:text-green-700 transition-colors shrink-0"
                    aria-label="Dismiss"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}

              {/* ── Error Banner ─────────────────────────────────────────────── */}
              {status === "error" && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-5 py-4">
                  <X className="text-red-500 mt-0.5 shrink-0" size={20} />
                  <p className="text-red-700 text-sm">
                    Something went wrong. Please try again or email us at{" "}
                    <a href="mailto:ishanshi.webespire@gmail.com" className="underline font-medium">
                      ishanshi.webespire@gmail.com
                    </a>
                  </p>
                </div>
              )}

              {/* ── Row 1: Name + Email ───────────────────────────────────────── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className={`border-b ${fieldBorder("name")} pb-2`}>
                    <input
                      type="text"
                      placeholder="Name"
                      value={form.name}
                      onChange={set("name")}
                      className="w-full bg-transparent text-gray-700 placeholder-gray-400 text-sm outline-none"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <div className={`border-b ${fieldBorder("email")} pb-2`}>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={set("email")}
                      className="w-full bg-transparent text-gray-700 placeholder-gray-400 text-sm outline-none"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* ── Row 2: Phone + Budget ─────────────────────────────────────── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className={`border-b ${fieldBorder("phone")} pb-2`}>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={set("phone")}
                      className="w-full bg-transparent text-gray-700 placeholder-gray-400 text-sm outline-none"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <div className={`border-b ${fieldBorder("budget")} pb-2`}>
                    <select
                      value={form.budget}
                      onChange={set("budget")}
                      className={`w-full bg-transparent text-sm outline-none appearance-none cursor-pointer ${
                        form.budget ? "text-gray-700" : "text-gray-400"
                      }`}
                    >
                      <option value="" disabled>Select Budget</option>
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                      <option value="$10,000 – $25,000">$10,000 – $25,000</option>
                      <option value="$25,000+">$25,000+</option>
                    </select>
                  </div>
                  {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
                </div>
              </div>

              {/* ── Message ───────────────────────────────────────────────────── */}
              <div>
                <div className={`border-b ${fieldBorder("message")} pb-2`}>
                  <textarea
                    placeholder="Comments/Message"
                    rows={3}
                    value={form.message}
                    onChange={set("message")}
                    className="w-full bg-transparent text-gray-700 placeholder-gray-400 text-sm outline-none resize-none"
                  />
                </div>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* ── File Attach ───────────────────────────────────────────────── */}
              <div>
                <div className="border-b border-gray-400 pb-2">
                  <label className={`flex items-center gap-2 text-sm cursor-pointer ${form.file ? "text-[#0d3b5e]" : "text-gray-400"}`}>
                    <input ref={fileRef} type="file" className="hidden" onChange={onFileChange} />
                    <span>
                      {form.file
                        ? `${form.file.name} (${(form.file.size / 1024 / 1024).toFixed(2)} MB)`
                        : "Attach File (Upto 50MB)"}
                    </span>
                  </label>
                </div>
                {errors.file && <p className="text-red-500 text-xs mt-1">{errors.file}</p>}
              </div>

              {/* ── Submit ────────────────────────────────────────────────────── */}
              <div className="flex flex-col justify-center">
                <button
                  onClick={handleSubmit}
                  disabled={status === "submitting"}
                  className="flex items-center rounded-md overflow-hidden gap-0.5 w-fit disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="bg-accent hover:bg-accent/90 text-sm p-2 px-4 text-center text-white transition-colors">
                    {status === "submitting" ? "Sending..." : "Submit Your Enquiry"}
                  </span>
                  <span className="p-2 bg-accent w-10 flex items-center justify-center">
                    <ArrowRight size={18} className="text-white" />
                  </span>
                </button>
              </div>

              <p className="text-gray-500 text-xs">
                Your idea is 100% protected by our non-disclosure agreement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0d3b5e] py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center py-6 sm:py-0 text-center space-y-2">
              <span className="text-4xl font-bold text-white">{stat.value}</span>
              <span className="text-gray-300 text-sm tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Excellence Section ───────────────────────────────────────────────── */}
      <section className="px-4 md:px-8 lg:px-16 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] text-center mb-20">
          Achieving unparalleled excellence for our clients.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {excellenceCards.map((item, index) => (
            <div key={index} className="relative pt-5 mt-12">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[90px] h-[90px] rounded-full border border-[#1a3a5c]/40 bg-white flex items-center justify-center z-10">
                <PhoneIcon />
              </div>
              <div className="bg-white shadow-md border border-gray-100 border-t-0 flex flex-col items-center text-center px-8 pt-14 pb-12 h-full">
                <h3 className="text-xl font-bold text-[#1a3a5c] leading-snug mb-5">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
