"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

const features = [
  { id: 1, label: "Flexible engagement models" },
  { id: 2, label: "24x7 Support across all timezones" },
  { id: 3, label: "Competitive pricing & ontime delivery" },
  { id: 4, label: "State of the art IT infrastructure" },
  { id: 5, label: "Strong technology competency" },
  { id: 6, label: "Seamless communication" },
];

export default function AboutUs() {
  return (
    <main className="mx-auto space-y-10">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-img.svg"
            alt="Mobile app development"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl space-y-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-normal">
            About Us
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Our Automotive solutions help lower operational cost and enhance
            performance using our ready-to-deploy technology.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-2">
            <Link
              href="/"
              className="flex items-center rounded-md overflow-hidden gap-0.5 w-fit"
            >
              <span className="bg-accent hover:bg-accent/90 text-sm p-2 px-4 text-center text-white">
                Get Free Consultation
              </span>
              <span className="p-2 bg-accent w-16">
                <ArrowRight size={20} className="mx-auto text-white" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Info + LinkedIn Section */}
<section className="px-4 md:px-8 lg:px-16 py-10 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left: Text Content */}
    <div>
      <p className="text-gray-600 text-base leading-relaxed">
        Started in the year 2002, Webespire is an ISO 9001:2010 certified
        software development company with 300+ highly skilled IT experts
        catering result-oriented and cost-competitive solutions to SMEs
        across the world. Being a premium partner of NASSCOM and STPI,
        Xicom holds the trust of over 1500+ clients across diverse business
        verticals. This trust is based on our reputation as an exemplary IT
        outsourcing company among leading business houses and standardizing
        organizations.
      </p>
    </div>

    {/* Right: LinkedIn Banner */}
    <div className="relative w-full h-64 overflow-hidden rounded-sm">
      {/* Background Image */}
      <Image
        src="/hero-img.svg"
        alt="Connect with us on LinkedIn"
        fill
        className="object-cover"
      />
      {/* Dark blue overlay */}
      <div className="absolute inset-0 bg-[#0d3b5e]/75" />

      {/* LinkedIn Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-10 text-white space-y-3">
        {/* LinkedIn Icon */}
        <div className="w-12 h-12 bg-[#0077b5] rounded flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </div>

        {/* Text */}
        <h3 className="text-2xl font-bold leading-snug">
          Connect With Us <br /> On Linkedin
        </h3>
      </div>
    </div>

  </div>
</section>


{/* Core Value Section */}
<section className="relative w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-[#0a2a42]">
  
  {/* Flat grid top */}
  <div
    className="absolute inset-x-0 top-0 h-1/2 opacity-25"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />

  {/* Perspective grid bottom */}
  <div
    className="absolute inset-x-0 bottom-0 h-1/2 opacity-25"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
      transform: "perspective(400px) rotateX(20deg)",
      transformOrigin: "top center",
    }}
  />

  <div className="relative z-10 max-w-6xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16 space-y-3">
      <h2 className="text-3xl md:text-4xl font-bold text-white">Core Value</h2>
      <p className="text-gray-300 text-sm md:text-base">
        At Webespire, our core values define how we work, collaborate, and deliver impact.
      </p>
    </div>

    {/* Slider Row with arrows */}
    <div className="relative flex items-center">

      {/* Left Arrow — half outside viewport edge */}
      <button className="absolute -left-10 z-20 w-10 h-10 rounded-full border border-white/40 bg-[#0a2a42]/60 flex items-center justify-center text-white hover:bg-white/10 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
        {[
          {
            title: "20+ Years of Experience",
            description: "Blending over two decades of industry experience in crafting mobile applications, we deliver result-oriented solutions to our customers worldwide.",
          },
          {
            title: "20+ Years of Experience",
            description: "Blending over two decades of industry experience in crafting mobile applications, we deliver result-oriented solutions to our customers worldwide.",
          },
          {
            title: "20+ Years of Experience",
            description: "Blending over two decades of industry experience in crafting mobile applications, we deliver result-oriented solutions to our customers worldwide.",
          },
        ].map((item, index) => (
          <div key={index} className="relative flex flex-col">

            {/* Icon Circle — sits half above card, half inside */}
            <div className="relative z-10 self-center -mb-10">
              <div className="w-20 h-20 rounded-full border-2 border-[#1a3a5c]/50 bg-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <rect x="11" y="4" width="26" height="40" rx="3" stroke="#1a3a5c" strokeWidth="2" />
                  <rect x="14" y="9" width="20" height="28" rx="1" stroke="#1a3a5c" strokeWidth="1.5" />
                  <line x1="22" y1="41" x2="26" y2="41" stroke="#1a3a5c" strokeWidth="2" strokeLinecap="round" />
                  <polyline points="20,18 17,23 20,28" stroke="#1a3a5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <polyline points="28,18 31,23 28,28" stroke="#1a3a5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <line x1="25" y1="18" x2="23" y2="28" stroke="#1a3a5c" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* White Card */}
            <div className="bg-white flex flex-col items-center text-center px-8 pt-14 pb-10 flex-1 shadow-md">
              <h3 className="text-lg font-bold text-[#1a3a5c] mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="absolute -right-10 z-20 w-10 h-10 rounded-full border border-white/40 bg-[#0a2a42]/60 flex items-center justify-center text-white hover:bg-white/10 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  </div>
</section>


{/* Technology Partners Section */}
<section className="relative w-full py-10 px-4 md:px-8 lg:px-16 overflow-hidden bg-white">

  {/* Top-left gray dots */}
  <div className="absolute top-6 left-6 grid grid-cols-6 gap-2 opacity-40">
    {Array.from({ length: 30 }).map((_, i) => (
      <div key={i} className="w-2 h-2 rounded-full bg-gray-400" />
    ))}
  </div>

  {/* Top-right orange dots */}
  <div className="absolute top-6 right-0 grid grid-cols-3 gap-2 opacity-60">
    {Array.from({ length: 12 }).map((_, i) => (
      <div key={i} className="w-2 h-2 rounded-full bg-orange-300" />
    ))}
  </div>

  {/* Bottom-right gray dots */}
  <div className="absolute bottom-6 right-6 grid grid-cols-5 gap-2 opacity-30">
    {Array.from({ length: 20 }).map((_, i) => (
      <div key={i} className="w-2 h-2 rounded-full bg-gray-400" />
    ))}
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto">
    {/* Heading — left-of-center like screenshot */}
    <div className="max-w-2xl mx-auto text-center pl-8 md:pl-16 mb-16 space-y-2">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c]">
        Our Technology Partners
      </h2>
      <p className="text-gray-400 text-base">
        Long-term partnerships. Measurable outcomes.
      </p>
    </div>

    {/* Partner logos placeholder row — add your logos here */}
    <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
      {/* Replace these with actual partner logo <Image /> components */}
      {[""].map(
        (name, i) => (
          <div
            key={i}
            className="w-28 h-14 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs font-medium"
          >
            {name}
          </div>
        )
      )}
    </div>
  </div>
</section>

{/* Transform Section */}
<section className="relative w-full py-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-[#0a2a42]">

  {/* Top-left teal dots */}
  <div className="absolute top-6 left-6 grid grid-cols-3 gap-2 opacity-30">
    {Array.from({ length: 18 }).map((_, i) => (
      <div key={i} className="w-2 h-2 rounded-full bg-teal-400" />
    ))}
  </div>

  {/* Top-right teal dots */}
  <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 opacity-30">
    {Array.from({ length: 18 }).map((_, i) => (
      <div key={i} className="w-2 h-2 rounded-full bg-teal-400" />
    ))}
  </div>

  {/* Bottom-right blue dots */}
  <div className="absolute bottom-6 right-6 grid grid-cols-4 gap-2 opacity-40">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="w-3 h-3 rounded-full bg-blue-500" />
    ))}
  </div>

  <div className="relative z-10 max-w-6xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 max-w-2xl mx-auto leading-snug">
      We transform every industry and business processes.
    </h2>

    {/* Main Grid: left text card + right 2x2 stats */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

      {/* Left: Text Card */}
      <div className="bg-white p-10 flex items-center">
        <p className="text-gray-600 text-sm leading-relaxed">
          ISO 9001 Certified and recognized by NASSCOM and STPI, our company
          follows globally accepted quality and technology standards. These
          accreditations reflect our commitment to innovation, reliability, and
          excellence in delivering digital solutions. With strong industry
          partnerships and compliance with international best practices, we
          ensure secure, scalable, and high-quality services that help
          businesses achieve sustainable growth and long-term success.
        </p>
      </div>

      {/* Right: 2x2 Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { number: "20", label: "YEARS IN BUSINESS" },
          { number: "350", label: "IT PROFESSIONALS" },
          { number: "7500", label: "PROJECTS EXECUTED" },
          { number: "1500", label: "CLIENTS WORLDWIDE" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white flex flex-col items-center justify-center text-center py-10 px-6"
          >
            <div className="flex items-start">
              <span className="text-3xl font-bold text-[#1a3a5c]">
                {stat.number}
              </span>
              <span className="text-orange-400 font-bold text-2xl ml-1 mt-0.5">
                +
              </span>
            </div>
            <p className="text-[#1a3a5c] font-bold text-xs tracking-widest mt-2 uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

 {/* Feature Grid + Image */}
      <section className="w-full flex flex-col lg:flex-row min-h-[500px] !mt-10">
        <div className="flex-1 flex flex-col justify-between px-10 py-14 bg-white">
          <h2 className="text-[#0D3D5C] text-4xl md:text-5xl font-extrabold leading-tight mb-8">
            Why do customers in
            <br />
            over <span className="text-orange-500">50+</span> countries
            <br />
            choose Webespire?
          </h2>
          <div className="grid grid-cols-3 border border-gray-300 divide-x divide-y divide-gray-300 mb-10">
            {features.map((feature) => (
              <div key={feature.id} className="px-5 py-8 text-gray-800 text-base font-medium leading-snug">
                {feature.label}
              </div>
            ))}
          </div>
          <div>
            <Link href="/" className="flex items-center rounded-md overflow-hidden gap-0.5 w-fit">
              <span className="bg-accent hover:bg-accent/90 text-sm p-2 px-4 text-center text-white">
                Explore Your Next
              </span>
              <span className="p-2 bg-accent w-16">
                <ArrowRight size={20} className="mx-auto text-white" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[55%] relative min-h-[500px]">
          <Image src="/hero-img.svg" alt="Webespire team" fill className="object-cover" />
          <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden pointer-events-none z-10">
            <div className="w-80 h-80 rounded-full border-[14px] border-orange-500 absolute -top-40 -right-40" />
          </div>
          <div className="absolute -top-6 left-[15%] w-24 h-24 rounded-full bg-[#5B9BAA] opacity-80 z-10" />
          <div className="absolute bottom-6 left-4 right-4 lg:left-8 lg:right-8 bg-white rounded-sm shadow-xl px-8 py-6 z-20">
            <span className="text-[#0D3D5C] text-4xl font-serif leading-none">"</span>
            <p className="text-orange-500 font-bold text-lg mb-2">Unknown</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              "We have always enjoyed a high level of professionalism, continuity,
              stability and a customer focused approach working with Webespire.
              They provide excellent technical skills and project management capabilities."
            </p>
            <div className="flex justify-end mt-2">
              <span className="text-[#0D3D5C] text-4xl font-serif leading-none">"</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}