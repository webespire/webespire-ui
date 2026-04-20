"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/footer";

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

      

      <Footer />
    </main>
  );
}
