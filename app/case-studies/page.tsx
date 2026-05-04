"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react";

const features = [
  { id: 1, label: "Flexible engagement models" },
  { id: 2, label: "24x7 Support across all timezones" },
  { id: 3, label: "Competitive pricing & ontime delivery" },
  { id: 4, label: "State of the art IT infrastructure" },
  { id: 5, label: "Strong technology competency" },
  { id: 6, label: "Seamless communication" },
];

const caseStudies = [
  {
    id: 1,
    title: "Moviez",
    subtitle: "Movie Streaming App",
    description:
      "Moviez is an on-demand movie streaming platform offering a vast library of international films across genres and languages. It delivers a premium HD cinematic experience across devices and ensures a seamless streaming experience to users. Our end-to-end solution helped turn Moviez's vision into a high-performance, world-class streaming platform.",
    industry: "Media & Entertainment",
    technologies: "React Native, Node.js, MongoDB, AWS",
    image: "/hero-img.svg",
  },
  {
    id: 2,
    title: "IELTSAI",
    subtitle: "Powered Speaking Evaluator",
    description:
      "A full-stack AI platform featuring an AI Avatar Examiner with real-time lip-sync, multi-criteria IELTS band scoring, LangGraph conversation engine, Google Cloud TTS with visemes, and a comprehensive no-code admin panel — built to democratize premium English speaking practice for learners worldwide.",
    industry: "Media & Entertainment",
    technologies: "React Native, Node.js, MongoDB, AWS",
    image: "/hero-img.svg",
  },
  {
    id: 3,
    title: "IELTSAI",
    subtitle: "Powered Speaking Evaluator",
    description:
      "A full-stack AI platform featuring an AI Avatar Examiner with real-time lip-sync, multi-criteria IELTS band scoring, LangGraph conversation engine, Google Cloud TTS with visemes, and a comprehensive no-code admin panel — built to democratize premium English speaking practice for learners worldwide.",
    industry: "Media & Entertainment",
    technologies: "React Native, Node.js, MongoDB, AWS",
    image: "/hero-img.svg",
  },
  {
    id: 4,
    title: "IELTSAI",
    subtitle: "Powered Speaking Evaluator",
    description:
      "A full-stack AI platform featuring an AI Avatar Examiner with real-time lip-sync, multi-criteria IELTS band scoring, LangGraph conversation engine, Google Cloud TTS with visemes, and a comprehensive no-code admin panel — built to democratize premium English speaking practice for learners worldwide.",
    industry: "Media & Entertainment",
    technologies: "React Native, Node.js, MongoDB, AWS",
    image: "/hero-img.svg",
  },
];

function DotArc() {
  const dots = [
    { cx: 7, cy: 45 },
    { cx: 9, cy: 28 },
    { cx: 16, cy: 14 },
    { cx: 28, cy: 4 },
    { cx: 43, cy: 1 },
    { cx: 58, cy: 4 },
    { cx: 70, cy: 14 },
    { cx: 78, cy: 28 },
    { cx: 81, cy: 45 },
    { cx: 78, cy: 62 },
  ];
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r="6" fill="#F97316" />
      ))}
    </svg>
  );
}

function ImagePanel({ image, title }: { image: string; title: string }) {
  return (
    <div className="w-full lg:w-[55%] relative min-h-[500px] flex items-center justify-center overflow-hidden bg-white px-8 py-10">
      {/* Large beige circle — image floats over it */}
      <div className="absolute w-[460px] h-[460px] rounded-full bg-[#F0EBE3] z-0" />

      {/* Orange dot arc — top left */}
      <div className="absolute top-10 left-10 z-10">
        <DotArc />
      </div>

      {/* Gray dot grid — bottom left */}
      <div className="absolute bottom-8 left-8 grid grid-cols-5 gap-2 z-10">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-gray-300" />
        ))}
      </div>

      {/* Orange dot grid — top right */}
      <div className="absolute top-8 right-8 grid grid-cols-5 gap-2 z-10">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-200" />
        ))}
      </div>

      {/* App mockup floats over the circle */}
      <div className="relative z-10 w-[85%] h-[420px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

function TextPanel({
  study,
}: {
  study: (typeof caseStudies)[0];
}) {
  return (
    <div className="flex-1 flex flex-col justify-center px-12 py-16">
      <h3 className="text-[#0D3D5C] text-3xl md:text-4xl font-extrabold leading-tight mb-5">
        {study.title} -{" "}
        <span className="text-orange-500">{study.subtitle}</span>
      </h3>
      <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-xl">
        {study.description}
      </p>

      {/* Industry + Technologies */}
      <div className="flex gap-0 mb-10">
        <div className="pr-8 border-r border-gray-300">
          <p className="text-orange-500 font-bold text-sm mb-1">Industry :-</p>
          <p className="text-gray-700 text-sm">{study.industry}</p>
        </div>
        <div className="pl-8">
          <p className="text-orange-500 font-bold text-sm mb-1">Technologies :-</p>
          <p className="text-gray-700 text-sm">{study.technologies}</p>
        </div>
      </div>

      {/* CTA */}
         <div>
            <Link href="/" className="flex items-center rounded-md overflow-hidden gap-0.5 w-fit">
              <span className="bg-accent hover:bg-accent/90 text-sm p-2 px-4 text-center text-white">
                View Case Study
              </span>
              <span className="p-2 bg-accent w-16">
                <ArrowRight size={20} className="mx-auto text-white" />
              </span>
            </Link>
          </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <main className="mx-auto">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/hero-img.svg" alt="Case Studies" fill priority className="object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl space-y-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-normal">
            Case Studies
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Our solutions help lower operational cost and enhance performance
            using our ready-to-deploy technology.
          </p>
        </div>
      </section>

      {/* Case Studies Intro Section */}
      <section className="w-full bg-[#F2EDE3] py-16 px-6 !mt-0">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-[#0D3D5C] text-3xl md:text-4xl font-bold leading-tight">
            <span className="text-orange-500">Case studies </span>
            of how our clients
            <br />
            have experienced competitive advantage
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            Our case studies showcase how clients achieved a strong competitive
            advantage through our strategic digital solutions. By implementing
            innovative technologies, optimizing processes, and enhancing user
            experiences, businesses improved efficiency, increased customer
            engagement, and accelerated growth. These real-world success stories
            highlight measurable results and demonstrate how the right strategy
            can transform challenges into opportunities
          </p>
        </div>
      </section>

      {/* ── Zigzag Case Study Cards ── */}
      <section className="w-full !mt-0">
        {caseStudies.map((study, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={study.id}
              className="flex flex-col lg:flex-row min-h-[600px] bg-white border-t border-gray-100"
            >
              {/* Even index (0,2,...): Text LEFT, Image RIGHT */}
              {isEven ? (
                <>
                  <TextPanel study={study} />
                  <ImagePanel image={study.image} title={study.title} />
                </>
              ) : (
                /* Odd index (1,3,...): Image LEFT, Text RIGHT */
                <>
                  <ImagePanel image={study.image} title={study.title} />
                  <TextPanel study={study} />
                </>
              )}
            </div>
          );
        })}
      </section>

      {/* See our Solution in Action */}
      <div className="bg-secondary py-10 px-6 space-y-3 md:space-y-0 md:flex items-center justify-between !mt-10">
        <p className="font-bold text-center text-white">See our Solution in Action</p>
        <div className="block sm:flex flex-wrap gap-4 space-y-5 sm:space-y-0">
          <Link href="/" className="flex items-center rounded-md overflow-hidden gap-0.5 sm:w-fit">
            <span className="bg-accent hover:bg-accent/90 text-sm p-2 px-4 w-full text-center">
              Kickstart Your MVP Success
            </span>
            <span className="p-2 bg-accent w-16">
              <ArrowRight size={20} className="mx-auto" />
            </span>
          </Link>
          <Link href="/" className="flex items-center rounded-md overflow-hidden gap-0.5 sm:w-fit text-black">
            <span className="bg-white text-sm p-2 px-4 w-full text-center">Startups Partner</span>
            <span className="p-2 bg-white w-16">
              <ArrowRight size={20} className="mx-auto" />
            </span>
          </Link>
        </div>
      </div>

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

      {/* Footer */}
      <div className="!mt-10">
        <Footer />
      </div>
    </main>
  );
}
