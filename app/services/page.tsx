"use client";

import { ServicesSection } from "@/components/home/services-section";
import { Card, CardContent } from "@/components/ui/card";
import { infoData } from "@/lib/homePageData";
import { ArrowRight, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/footer";

const innovativeData = [
  {
    id: "1",
    img: "/amway.svg",
  },
  {
    id: "2",
    img: "/amway.svg",
  },
  {
    id: "3",
    img: "/amway.svg",
  },
  {
    id: "4",
    img: "/amway.svg",
  },
];

const outcomesData = [
  {
    id: "1",
    src: "/casestudy-1.svg",
    heading: "Improved User Productivity",
    desc: "Well-designed interfaces reduce friction and improve task completion.",
  },
  {
    id: "2",
    src: "/casestudy-1.svg",
    heading: "Improved User Productivity",
    desc: "Well-designed interfaces reduce friction and improve task completion.",
  },
  {
    id: "3",
    src: "/casestudy-1.svg",
    heading: "Improved User Productivity",
    desc: "Well-designed interfaces reduce friction and improve task completion.",
  },
  {
    id: "4",
    src: "/casestudy-3.svg",
    heading: "Improved User Productivity",
    desc: "Well-designed interfaces reduce friction and improve task completion.",
  },
  {
    id: "5",
    src: "/casestudy-1.svg",
    heading: "Improved User Productivity",
    desc: "Well-designed interfaces reduce friction and improve task completion.",
  },
  {
    id: "6",
    src: "/casestudy-2.svg",
    heading: "Improved User Productivity",
    desc: "Well-designed interfaces reduce friction and improve task completion.",
  },
];

const engagementModelsData = [
  {
    id: "1",
    title: "Fixed Price Model",
    desc: "The fixed-price model is perfect for projects with clearly defined scope, specifications, and timelines. It guarantees a fixed budget, offering you full control over costs and a clear delivery timeline, while minimizing financial risk.",
    bullets: [
      "Complete control over budget",
      "Ease of management",
      "No hidden costs",
      "On-time project delivery",
    ],
  },
];

const successData = [
  {
    id: "1",
    title: "Quality Reliability",
    desc: "Lorem Ipsum is simply text of the printing and typesetting industry",
  },
  {
    id: "2",
    title: "Scalable Innovative",
    desc: "Lorem Ipsum is simply text of the printing and typesetting industry",
  },
  {
    id: "3",
    title: "Expert IT Solutions",
    desc: "Lorem Ipsum is simply text of the printing and typesetting industry",
  },
];

export default function Services() {
  const [openId, setOpenId] = useState<string>("1");
  return (
    <main className="mx-auto space-y-10">
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-img.svg"
            alt="Mobile app development"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/70 via-black/60 to-black/70" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl space-y-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-normal">
            Mobile App Development
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Redefine your digital presence with Webspire custom mobile app
            development services, that streamline operations, enhance customer
            engagement and drive business growth.
          </p>
        </div>
      </section>

      {/* App development */}
      <ServicesSection
        children={
          <div className="flex flex-col justify-center items-stretch mb-10">
            <h1 className="text-secondary text-2xl font-bold mx-auto">
              Mobile App
              <span className="text-accent pl-2">Development</span>
            </h1>
            <p className="font-normal pt-3 md:px-6 text-sm text-center text-[#555555]">
              Mobile app development focuses on creating powerful, user-friendly
              applications that help businesses connect with their customers
              anytime, anywhere. A well-designed mobile app improves user
              experience, increases brand visibility, and provides convenient
              access to products or services. By combining modern technologies
              with intuitive design, mobile apps can deliver fast performance,
              secure functionality, and seamless interaction across devices.
              Whether for startups or established businesses, mobile apps help
              streamline operations, enhance customer engagement, and support
              business growth. From concept and design to development and
              deployment, mobile app solutions are built to meet specific
              business goals and adapt to the evolving digital landscape.
            </p>
          </div>
        }
        data={infoData}
      />

      {/* Innovative mobile technology */}
      <section className="px-4">
        <div className="flex flex-col justify-center items-stretch mb-10">
          <h1 className="text-secondary text-2xl font-bold mx-auto">
            Innovative
            <span className="text-accent px-2">Mobile</span>
            Technology
          </h1>
          <p className="font-normal pt-3 md:px-6 text-sm text-center text-[#555555]">
            We deliver highest level of customer service by deploying innovative
            and collaborative project management systems to build the most
            professional, robust and highly scalable web & mobile solutions with
            highest quality standards
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 py-4 flex-wrap">
          {innovativeData.map((item) => (
            <Card
              key={item.id}
              className="w-auto shadow-none border-none bg-transparent rounded-sm"
            >
              <CardContent className="flex items-center justify-center">
                <Image
                  src={item.img}
                  alt={"company logo"}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Outcomes expect */}
      <section className="">
        <div className="flex flex-col justify-center items-stretch mb-10 px-4">
          <h1 className="text-secondary text-2xl font-bold mx-auto">
            Outcomes You Can Expect
          </h1>
          <p className="font-normal pt-3 md:px-6 text-sm text-center text-[#555555]">
            Our mobile app solutions deliver seamless performance, intuitive
            user experience, and enhanced customer engagement. Designed with
            modern technology and scalable architecture, our apps help
            businesses improve efficiency, strengthen brand presence, and create
            meaningful digital interactions with their audience.
          </p>
        </div>

        {/* Cards */}
        <div
          className="grid px-4 py-5 md:px-10 gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          }}
        >
          {outcomesData.map((item, index) => (
            <div
              key={item.id}
              className="max-w-2xs overflow-hidden mx-auto shrink-0 shadow-xl snap-center"
            >
              <Card className="w-full h-full rounded-md bg-white text-primary flex flex-col relative">
                <div className="absolute inset-0 z-0 -top-7 h-52">
                  <Image
                    src={item.src}
                    alt={item.heading}
                    fill
                    priority
                    quality={80}
                    className="object-cover object-center"
                  />
                </div>

                <CardContent className="flex flex-col pb-10 gap-2 px-4 flex-1 mt-32">
                  <div className="bg-secondary max-w-2/3 absolute top-32 left-0 p-2">
                    <h3 className="text-sm text-white font-medium">
                      {item.heading}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3 mt-12">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

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
      </section>

      {/* Engagement models */}
      {/* <section className="">
                <div className=""></div>
                <div className=""></div>
            </section> */}
      <section className="px-4 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          {/* Left — Heading + Image */}
          <div className="flex flex-col gap-6">
            <h2 className="text-secondary text-3xl md:text-4xl font-bold leading-tight">
              Our Engagement Models
            </h2>
            <div className="relative w-full">
              <div
                className="absolute -left-3 top-3 w-14 h-36 -z-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, #1a2744 0px, #1a2744 1.5px, transparent 1.5px, transparent 10px)",
                  opacity: 0.15,
                }}
              />
              <Image
                src="/hero-img.svg"
                alt="Our team collaborating"
                width={600}
                height={420}
                className="w-full h-72 object-cover rounded-sm"
              />
            </div>
          </div>

          {/* Right — Accordion */}
          <div className="flex flex-col divide-y divide-gray-200">
            {engagementModelsData.map((model) => {
              const isOpen = openId === model.id;
              return (
                <div
                  key={model.id}
                  className="py-5 divide-y divide-gray-500 border-t border-b border-gray-500"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? "" : model.id)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span
                      className={`text-secondary text-3xl md:text-2xl font-bold leading-tight ${isOpen ? "text-accent" : "text-secondary"} group-hover:text-accent`}
                    >
                      {model.title}
                    </span>
                    <span className="ml-4 shrink-0">
                      {isOpen ? (
                        <Minus size={18} className="text-secondary" />
                      ) : (
                        <Plus size={18} className="text-secondary" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-4 space-y-3">
                      <p className="text-sm text-[#555555] leading-relaxed">
                        {model.desc}
                      </p>
                      <ul className="space-y-2 pt-1">
                        {model.bullets.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-[#444444]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* When Success Matters */}
      <section
        className="px-4 md:px-10 py-16"
        style={{ backgroundColor: "#fffbfb" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Left — Image with beige background block behind it */}
          <div
            className="flex-shrink-0 w-full md:w-[420px] relative"
            style={{ height: "400px" }}
          >
            {/* Beige background box — top-left behind image */}
            <div
              className="absolute rounded-2xl"
              style={{
                backgroundColor: "#d4b896",
                top: "-20px",
                left: "-20px",
                right: "30px",
                bottom: "30px",
                borderRadius: "18px",
                zIndex: 0,
              }}
            />

            {/* Image on top — bottom-right */}
            <div
              className="absolute overflow-hidden"
              style={{
                borderRadius: "18px",
                top: "1px",
                left: "-5px",
                right: "0px",
                bottom: "0px",
                zIndex: 1,
              }}
            >
              <Image
                src="/hero-img.svg"
                alt="Team celebrating success"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right — Text + Cards */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-secondary text-3xl md:text-4xl font-bold leading-tight">
                When Success Matters
              </h2>
              <p className="text-[#555555] text-base leading-relaxed max-w-lg">
                We are committed to building robust and scalable applications
                that creates efficient business processes and adds value to our
                customers&apos; businesses.
              </p>
            </div>

            {/* Feature Cards */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {successData.map((item) => (
                <div
                  key={item.id}
                  className="border border-secondary rounded-lg p-4 flex flex-col gap-2 bg-white/40"
                  style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)" }}
                >
                  <h3 className="text-secondary font-bold text-sm">
                    {item.title}
                  </h3>
                  <p className="text-[#555555] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
