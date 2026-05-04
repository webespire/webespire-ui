"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/footer";

const featureCards = [
  {
    id: 1,
    title: "100% Transparency",
    description:
      "At Xicom, we believe in complete transparency with our clients and we keep them fully updated during the entire development production cycle.",
  },
  {
    id: 2,
    title: "Agile Methodology",
    description:
      "At Xicom, we believe in complete transparency with our clients and we keep them fully updated during the entire development production cycle.",
  },
  {
    id: 3,
    title: "Expert Team",
    description:
      "At Xicom, we believe in complete transparency with our clients and we keep them fully updated during the entire development production cycle.",
  },
  {
    id: 4,
    title: "On-Time Delivery",
    description:
      "At Xicom, we believe in complete transparency with our clients and we keep them fully updated during the entire development production cycle.",
  },
  {
    id: 5,
    title: "Quality Assurance",
    description:
      "At Xicom, we believe in complete transparency with our clients and we keep them fully updated during the entire development production cycle.",
  },
];

const features = [
  { id: 1, label: "Flexible engagement models" },
  { id: 2, label: "24x7 Support across all timezones" },
  { id: 3, label: "Competitive pricing & ontime delivery" },
  { id: 4, label: "State of the art IT infrastructure" },
  { id: 5, label: "Strong technology competency" },
  { id: 6, label: "Seamless communication" },
];

export default function Industries() {
  const [openId, setOpenId] = useState<string>("1");

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
            Automotive
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Our Automotive solutions help lower operational cost and enhance
            performance using our ready-to-deploy technology.
          </p>
        </div>
      </section>

      {/* Row 1: Left text + Right CTA */}
      <section className="w-full flex flex-col lg:flex-row">
        {/* Left: 3 stacked text blocks */}
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col justify-center px-8 py-10 bg-white border-b border-gray-100">
            <h2 className="text-secondary text-xl font-bold mb-3">
              Automotive Industry
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              The automotive industry is driven by high levels of innovation and
              flexibility. As per a survey conducted in 2010, approximately 4%
              of the United States' GDP was accounted by the automotive sales.
              Since 2011, the sales have increased by 11% and are expected to
              grow at a steady rate. Technological advancements have empowered
              the industry to reduce operational costs and enhance quality and
              productivity.
            </p>
          </div>

          <div className="flex flex-col justify-center px-8 py-10 bg-white">
            <h2 className="text-secondary text-xl font-bold mb-3">
              Dependency and Traditional Tools
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              The automotive industry is driven by high levels of innovation and
              flexibility. As per a survey conducted in 2010, approximately 4%
              of the United States' GDP was accounted by the automotive sales.
              Since 2011, the sales have increased by 11% and are expected to
              grow at a steady rate.
            </p>
          </div>

          <div className="flex flex-col justify-center px-8 py-10 bg-white">
            <h2 className="text-secondary text-xl font-bold mb-3">
              Dependency and Traditional Tools
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              The automotive industry is driven by high levels of innovation and
              flexibility. As per a survey conducted in 2010, approximately 4%
              of the United States' GDP was accounted by the automotive sales.
              Since 2011, the sales have increased by 11% and are expected to
              grow at a steady rate.
            </p>
          </div>
          <div className="flex flex-col justify-center px-8 py-10 bg-white">
            <h2 className="text-[#0D3D5C] text-3xl font-extrabold mb-6">
              Comprehending Isolated Groups:
            </h2>
            <h3 className="text-[#0D3D5C] text-xl font-bold mb-3">
              Dependency on Traditional Tools:
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Automotive processes are driven by hardware. Traditional
              integrations and tools hinder the collaboration process, resulting
              in surging costs and increased time to market the product.
              Organizations in the automotive industry are conducting 90% of the
              product changes utilizing targeted software. This amplifies the
              velocity and volume of the engineering change almost by 10 to 100
              times in comparison with hardware.
            </p>
          </div>
          <div className="flex flex-col justify-center px-8 py-10 bg-white">
            <h2 className="text-[#0D3D5C] text-3xl font-extrabold mb-6">
              Competition:
            </h2>
            <h3 className="text-[#0D3D5C] text-xl font-bold mb-3">
              Dependency on Traditional Tools:
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Automotive processes are driven by hardware. Traditional
              integrations and tools hinder the collaboration process, resulting
              in surging costs and increased time to market the product.
              Organizations in the automotive industry are conducting 90% of the
              product changes utilizing targeted software. This amplifies the
              velocity and volume of the engineering change almost by 10 to 100
              times in comparison with hardware.
            </p>
          </div>
          <div className="flex flex-col justify-center px-8 py-10 bg-white">
            <Link
              href="/"
              className="flex items-center rounded-md overflow-hidden gap-0.5 w-fit"
            >
              <span className="bg-accent hover:bg-accent/90 text-sm p-2 px-4 text-center text-white">
                Get In Touch Now!
              </span>
              <span className="p-2 bg-accent w-16">
                <ArrowRight size={20} className="mx-auto text-white" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right: CTA + Solutions */}
        <div className="w-full lg:w-[45%] flex flex-col">
          <div className="bg-[#0D3D5C] flex flex-col items-center justify-center px-10 py-16 flex-1">
            <p className="text-white text-2xl font-bold text-center leading-snug mb-8 max-w-sm">
              To start a dialogue with our consultant, please complete our
              contact form and we shall get in touch with you shortly.
            </p>
            <button className="w-full max-w-sm bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold text-lg py-4 px-8 rounded-sm">
              Consult Our Expert
            </button>
          </div>

          <div className="bg-white px-10 py-10 border-l border-gray-500">
            <h2 className="text-[#0D3D5C] text-3xl font-extrabold mb-4">
              Automotive Solutions
            </h2>
            <ul className="space-y-2">
              {[
                "Dealer Management Systems",
                "Business Intelligence and Data Analytics",
                "Supply Chain Management",
                "Fleet Management Solutions",
                "Customer Relationship Management",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <span className="mt-1 text-orange-500 font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0D3D5C] flex flex-col items-center justify-center px-0 py-10 flex-1">
            <div className="flex-1 bg-[#1a1a2e] overflow-hidden min-h-[300px]">
              <img
                src="/hero-img.svg"
                alt="Moviez streaming app"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-[#0D3D5C] px-10 py-8">
              <p className="text-white text-base leading-relaxed">
                Moviez is an on-demand movie streaming platform offering a vast
                library of international films across genres and languages. It
                delivers a premium HD cinematic experience across devices and
                ensures a seamless streaming experience to users. Our end-to-end
                solution helped turn Moviez's vision into a high-performance,
                world-class streaming platform.
              </p>
              <div className="flex items-center gap-2">
                <h4 className="text-accent font-semibold">Industry:</h4>
                <span className="text-white">Media & Entertainment</span>
              </div>

              <div className="flex items-start gap-2">
                <h4 className="text-accent font-semibold shrink-0">
                  Technologies:
                </h4>
                <p className="text-white">React Native, Node.js, AWS, MongoDB</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-accent hover:bg-accent/90 text-sm py-2 px-4 text-center text-white rounded-md">
                  Your Text Here
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Cards Section ── */}
      <section className="w-full bg-[#f5f7fa] py-16 px-6 mb-0 !mb-0">
        {/* Subtitle */}
        <p className="text-center text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          We deliver highest level of customer service by deploying innovative
          and collaborative project management systems to build the most
          professional, robust and highly scalable web &amp; mobile solutions
          with highest quality standards
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-sm shadow-md flex flex-col items-center text-center px-5 py-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Circular Icon */}
              <div className="mb-5 w-20 h-20 rounded-full border-2 border-[#0D3D5C] flex items-center justify-center">
                {/* Phone with code brackets icon — replicated with SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-10 h-10"
                  fill="none"
                >
                  {/* Phone body */}
                  <rect
                    x="13"
                    y="4"
                    width="22"
                    height="40"
                    rx="3"
                    ry="3"
                    stroke="#0D3D5C"
                    strokeWidth="2"
                  />
                  {/* Screen area */}
                  <rect
                    x="16"
                    y="9"
                    width="16"
                    height="24"
                    rx="1"
                    stroke="#0D3D5C"
                    strokeWidth="1.5"
                  />
                  {/* Home button */}
                  <circle cx="24" cy="39" r="1.5" fill="#0D3D5C" />
                  {/* Code brackets < > inside screen */}
                  <text
                    x="24"
                    y="24"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="8"
                    fontWeight="bold"
                    fill="#0D3D5C"
                    fontFamily="monospace"
                  >
                    {"</>"}
                  </text>
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-[#0D3D5C] text-lg font-extrabold mb-4 leading-tight">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        
      </section>

      <div className="bg-secondary py-10 px-6 space-y-3 md:space-y-0 md:flex items-center justify-between">
          <p className="font-bold text-center text-white">
            See our Solution in Action
          </p>

          <div className="block sm:flex flex-wrap gap-4 space-y-5 sm:space-y-0">
            <Link
              href="/"
              className="flex items-center rounded-md overflow-hidden gap-0.5 sm:w-fit"
            >
              <span className="bg-accent hover:bg-accent/90 text-sm p-2 px-4 w-full text-center">
                Kickstart Your MVP Success
              </span>
              <span className="p-2 bg-accent w-16">
                <ArrowRight size={20} className="mx-auto" />
              </span>
            </Link>

            <Link
              href="/"
              className="flex items-center rounded-md overflow-hidden gap-0.5 sm:w-fit text-black"
            >
              <span className="bg-white text-sm p-2 px-4 w-full text-center">
                Startups Partner
              </span>
              <span className="p-2 bg-white w-16">
                <ArrowRight size={20} className="mx-auto" />
              </span>
            </Link>
          </div>
        </div>

        <section className="w-full flex flex-col lg:flex-row min-h-[500px]">
      {/* Left: Feature grid + CTA */}
      <div className="flex-1 flex flex-col justify-between px-10 py-14 bg-white">
        {/* 2x3 Grid */}
        <div className="grid grid-cols-3 border border-gray-300 divide-x divide-y divide-gray-300 mb-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="px-5 py-8 text-gray-800 text-base font-medium leading-snug"
            >
              {feature.label}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        
        <div className="flex flex-col justify-center px-0 py-0 bg-white">
            <Link
              href="/"
              className="flex items-center rounded-md overflow-hidden gap-0.5 w-fit"
            >
              <span className="bg-accent hover:bg-accent/90 text-sm p-2 px-4 text-center text-white">
                 Explore Your Next
              </span>
              <span className="p-2 bg-accent w-16">
                <ArrowRight size={20} className="mx-auto text-white" />
              </span>
            </Link>
          </div>
      </div>

      {/* Right: Image */}
      <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-0">
        <Image
          src="/hero-img.svg" // Replace with your actual offshore team image
          alt="Webespire offshore team"
          fill
          className="object-cover"
        />
        {/* Decorative orange arc — top-right corner */}
        <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden pointer-events-none">
          <div className="w-80 h-80 rounded-full border-[12px] border-orange-500 absolute -top-40 -right-40" />
        </div>
      </div>
    </section>

      <Footer />
    </main>
  );
}
