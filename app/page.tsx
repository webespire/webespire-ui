"use client";
import { useEffect, useRef, useState } from 'react';
import HeroSection from '@/components/hero-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ChevronDown, CircleCheck, Mail, Play } from 'lucide-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from 'next/link';

const infoData = [
  {
    id: "1",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "2",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "3",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "4",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "5",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "6",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "7",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "8",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "9",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
];

const LEFT_INDUSTRIES = [
  "Digital & IT Software",
  "Retail & E-commerce",
  "Travel & Hospitality",
  "Real Estate Construction",
];

const RIGHT_INDUSTRIES = [
  "Fashion & Apparel",
  "Health & Lifestyle",
  "Finance & Fintech",
  "Education EdTech",
];

const techData = [
  {
    src: "/python.svg",
    title: "Python"
  },
  {
    src: "/angular.svg",
    title: "Angular"
  },
  {
    src: "/bootstrap.svg ",
    title: "Bootstrap"
  },
  {
    src: "/flutter.svg",
    title: "Flutter"
  },
  {
    src: "/react.svg",
    title: "React"
  },
  {
    src: "/laravel.svg",
    title: "Laravel"
  },
  {
    src: "magento.svg",
    title: "Magento"
  },
  {
    src: "/mysql.svg",
    title: "MySQL"
  },
  {
    src: "/net.svg",
    title: ".NET"
  },
  {
    src: "/wordpress.svg",
    title: "Wordpress"
  },
]

const caseStudyData = [
  {
    id: "1",
    src: "/casestudy-1.svg",
    heading: "Boosting Lead Generation with Strategic Campaigns.",
    desc: "Allow for ample white space to avoid overwhelming the reader. White space helps in emphasizing key points.",
    traffic: "0%",
    revenue: "M+",
    link: "#"
  },
  {
    id: "2",
    src: "/casestudy-2.svg",
    heading: "Boosting Lead Generation with Strategic Campaigns.",
    desc: "Allow for ample white space to avoid overwhelming the reader. White space helps in emphasizing key points.",
    traffic: "0%",
    revenue: "M+",
    link: "#"
  },
  {
    id: "3",
    src: "/casestudy-3.svg",
    heading: "Boosting Lead Generation with Strategic Campaigns.",
    desc: "Allow for ample white space to avoid overwhelming the reader. White space helps in emphasizing key points.",
    traffic: "0%",
    revenue: "M+",
    link: "#"
  },

]

const developmentProcessData = [
  {
    step: "01",
    title: "Discovery & Requirement Gathering",
    desc: "We understand your goals, gather detailed requirements, and align the project scope with your business objectives.",
    point1: "Understanding Business Goals",
    point2: "Collecting Detailed Requirements",
    point3: "Feasibility & Planning"
  },
  {
    step: "02",
    title: "Discovery & Requirement Gathering",
    desc: "We understand your goals, gather detailed requirements, and align the project scope with your business objectives.",
    point1: "Understanding Business Goals",
    point2: "Collecting Detailed Requirements",
    point3: "Feasibility & Planning"
  },
  {
    step: "03",
    title: "Discovery & Requirement Gathering",
    desc: "We understand your goals, gather detailed requirements, and align the project scope with your business objectives.",
    point1: "Understanding Business Goals",
    point2: "Collecting Detailed Requirements",
    point3: "Feasibility & Planning"
  },
  {
    step: "04",
    title: "Discovery & Requirement Gathering",
    desc: "We understand your goals, gather detailed requirements, and align the project scope with your business objectives.",
    point1: "Understanding Business Goals",
    point2: "Collecting Detailed Requirements",
    point3: "Feasibility & Planning"
  },
  {
    step: "05",
    title: "Discovery & Requirement Gathering",
    desc: "We understand your goals, gather detailed requirements, and align the project scope with your business objectives.",
    point1: "Understanding Business Goals",
    point2: "Collecting Detailed Requirements",
    point3: "Feasibility & Planning"
  },
];

const blogData = [
  {
    id: 1,
    category: "Full Stack Development",
    date: "3 Feb, 2026",
    title: "Why Offshore Mobile Apps Development in India Is the Smartest Choice in 2026",
    image1: "/webespire-1.svg",
    image2: "/webespire-2.svg",
    href: "#",
  },
  {
    id: 2,
    category: "UI/UX Design",
    date: "10 Feb, 2026",
    title: "How Modern Design Systems Are Transforming Product Development",
    image1: "/webespire-1.svg",
    image2: "/webespire-2.svg",
    href: "#",
  },
  {
    id: 3,
    category: "Cloud & DevOps",
    date: "18 Feb, 2026",
    title: "Top Reasons Startups Are Moving Their Infrastructure Offshore in 2026",
    image1: "/webespire-1.svg",
    image2: "/webespire-2.svg",
    href: "#",
  },
];

export default function Home() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  // Detect screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 640) setVisibleCards(2);
      else setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalSlides = developmentProcessData.length;
  const maxIndex = totalSlides - visibleCards;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, caseStudyData.length - 1));
    setCurrentIndex(clamped);
    cardRefs.current[clamped]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
    cardRefs.current[clamped]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const faqData = [
    {
      question: "What services does Webespire really offer?",
      answer: `At Webespire, we do more than just build websites and apps. We work closely with companies to help them grow their digital presence. \n Offshore Dedicated Teams, Hire Skilled On-demand Offshore Teams \n Startup Partnership- Minimal Expenses/Equity-Based Collaboration, End-to-End Product Development, Technical & Strategic Support,Transparent Partnership Model \n AI/ML Integration for intelligent systems \n Open Source Customizations and Integrations \n Custom Web & Mobile App Development & Ongoing Support`,
    },
    {
      question: "Do you provide offshore development teams?",
      answer: `At Webespire, we do more than just build websites and apps. We work closely with companies to help them grow their digital presence. \n Offshore Dedicated Teams, Hire Skilled On-demand Offshore Teams \n Startup Partnership- Minimal Expenses/Equity-Based Collaboration, End-to-End Product Development, Technical & Strategic Support,Transparent Partnership Model \n AI/ML Integration for intelligent systems \n Open Source Customizations and Integrations \n Custom Web & Mobile App Development & Ongoing Support`,
    },
    {
      question: "Can startups partner with Webespire?",
      answer: `At Webespire, we do more than just build websites and apps. We work closely with companies to help them grow their digital presence. \n Offshore Dedicated Teams, Hire Skilled On-demand Offshore Teams \n Startup Partnership- Minimal Expenses/Equity-Based Collaboration, End-to-End Product Development, Technical & Strategic Support,Transparent Partnership Model \n AI/ML Integration for intelligent systems \n Open Source Customizations and Integrations \n Custom Web & Mobile App Development & Ongoing Support`,
    },
    {
      question: "Do you offer AI/ML integration?",
      answer: `At Webespire, we do more than just build websites and apps. We work closely with companies to help them grow their digital presence. \n Offshore Dedicated Teams, Hire Skilled On-demand Offshore Teams \n Startup Partnership- Minimal Expenses/Equity-Based Collaboration, End-to-End Product Development, Technical & Strategic Support,Transparent Partnership Model \n AI/ML Integration for intelligent systems \n Open Source Customizations and Integrations \n Custom Web & Mobile App Development & Ongoing Support`,
    },
  ];

  return (
    <div className="">
      <main className="mx-auto space-y-10">
        {/* hero section */}
        <section
          id="hero"
          className="flex items-center justify-center"
        >
          <HeroSection />
        </section>

        {/* services and solution section */}
        <section className="w-full bg-white py-10 px-4 flex justify-center items-center flex-col">
          <div className="flex gap-1 mb-10 items-center rounded-md">
            <div className="bg-primary p-4 rounded-l-md">
              <Image src="/setting-icon.svg" alt='setting-icon' width={24} height={24} />
            </div>
            <h1 className="text-white bg-primary p-4 px-8 rounded-r-md">Our Offshore Services/Solutions</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center items-center w-full">
            {infoData.map((item) => (
              <Card
                key={item.id}
                className="w-full max-w-sm rounded-2xl shadow-sm text-primary hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer flex items-center justify-center"
              >
                <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                  {/* Heading */}
                  <h2 className="text-xl font-semibold mb-3 text-center">
                    {item.heading}
                  </h2>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-5 text-center">
                    {item.desc}
                  </p>

                  {/* Button - centered */}
                  <div className="flex items-center justify-center">
                    <button className="flex items-center gap-2 text-sm font-medium">
                      {item.buttonText}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden min-h-105">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/bg-img.svg')" }}
            aria-hidden="true"
          />

          <div
            className="absolute inset-0 z-1 bg-white/70 backdrop-blur-[2px]"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <span className="inline-flex items-center bg-primary text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-sm">
                About Webespire: Innovate. Empower. Deliver.
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 tracking-tight">
                Trusted Offshore Software Development &amp; Startups Partner
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                Helping global businesses grow through reliable offshore development,
                tailored digital solutions, and strategic tech expertise.
              </p>
            </div>

            <div className="bg-primary text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-lg ring-1 ring-white/10">

              {/* Image */}
              <div className="shrink-0">
                <Image
                  src="/startup-partner.svg"
                  alt="Startup Partner"
                  width={160}
                  height={160}
                  className="w-36 h-auto drop-shadow-md"
                />
              </div>

              {/* Text */}
              <div className="space-y-3 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
                  Trusted Offshore Software Development &amp; Startups Partner
                </h2>
                <p className="text-sm leading-relaxed text-white/80">
                  Recognized for innovation, excellence, and global delivery awards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries serve today section */}
        <section className="w-full md:pt-5 flex flex-col items-center">
          <div className="flex items-stretch mb-10 rounded-lg overflow-hidden gap-1">
            <div className="bg-primary px-4 py-3 flex items-center justify-center">
              <Image
                src="/setting-icon.svg"
                alt="Industries icon"
                width={22}
                height={22}
              />
            </div>

            <h2 className="bg-primary text-white text-sm sm:text-base md:text-lg font-semibold px-6 py-3 border-l border-white/20 flex items-center">
              Industries We Proudly Serve Today
            </h2>
          </div>

          {/* Main Panel */}
          <div className="w-full bg-primary py-12 md:py-16 px-5 sm:px-8">

            {/* Heading */}
            <h2 className="text-white text-center font-bold leading-tight max-w-3xl mx-auto mb-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Tailored Tech Solutions for Every Business Sector
            </h2>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-center max-w-6xl mx-auto gap-6">

              {/* LEFT PILLS */}
              <div className="flex flex-col gap-5 items-end">
                {LEFT_INDUSTRIES.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="border-2 border-accent text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-accent/15 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* LEFT CONNECTORS */}
              <div className="flex flex-col gap-5 w-20">
                {LEFT_INDUSTRIES.map((_, i) => (
                  <div key={i} className="flex items-center h-10">
                    <div className="w-full h-px bg-white/30" />
                  </div>
                ))}
              </div>

              {/* CENTER IMAGE */}
              <div className="relative shrink-0">
                <div className="w-56 h-56 xl:w-64 xl:h-64 rounded-full border-[3px] border-white/30 overflow-hidden shadow-xl">
                  <Image
                    src="/tech-solution.svg"
                    alt="Technology solutions illustration"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* RIGHT CONNECTORS */}
              <div className="flex flex-col gap-5 w-20">
                {RIGHT_INDUSTRIES.map((_, i) => (
                  <div key={i} className="flex items-center h-10">
                    <div className="w-full h-px bg-white/30" />
                  </div>
                ))}
              </div>

              {/* RIGHT PILLS */}
              <div className="flex flex-col gap-5 items-start">
                {RIGHT_INDUSTRIES.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="border-2 border-accent text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-accent/15 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tablet Layout (grid style) */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 max-w-3xl mx-auto">
              {[...LEFT_INDUSTRIES, ...RIGHT_INDUSTRIES].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="border-2 border-accent text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-accent/15 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile Layout */}
            <div className="flex md:hidden flex-col gap-4 items-center">
              {[...LEFT_INDUSTRIES, ...RIGHT_INDUSTRIES].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="w-full max-w-xs border-2 border-accent text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-accent/15 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {label}
                </button>
              ))}
            </div>

          </div>

          <Card className='px-4 py-6 bg-white z-50 relative -top-10 max-w-md md:max-w-2xl lg:max-w-3xl mx-2'>
            <h1 className="text-center text-xl text-primary">We connect industries through innovation, empowering growth with
              cutting-edge digital transformation and actionable insights.</h1>
            <span className="bg-primary/90 px-4 py-2 text-lg w-fit mx-auto text-white rounded-md">Partnership With Us Today !</span>
          </Card>
        </section>

        {/* Technology Crafting Section */}
        <section className="px-4 bg-white space-y-10">
          <div className="">
            <h1 className="text-center text-2xl text-primary font-bold">Technology -Crafting</h1>
            <p className="text-center ">Smart Solutions Through Code</p>
          </div>

          <div className="flex justify-center gap-10 flex-wrap items-center w-full">
            {techData.map((item) => (
              <Card
                key={item.title}
                className="p-4 rounded-full shadow-sm text-primary flex items-center justify-center"
              >
                <CardContent className="text-center flex flex-col items-center justify-center">
                  <Image src={item.src.trimEnd()} alt={item.title} width={100} height={100} className='border-none p-3' />
                  <h2 className="text-xl font-semibold mb-3 text-center">
                    {item.title}
                  </h2>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="w-full flex justify-center">
            <Button className='px-16 py-5 text-sm'>View More</Button>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="bg-[#F7F5F2] py-12">

          {/* Heading */}
          <div className="px-5">
            <h1 className="text-center text-2xl md:text-3xl text-primary font-bold">
              Case Study - Growth Through Strategy
            </h1>

            <p className="text-center mt-2 text-sm md:text-base max-w-2xl mx-auto">
              Real-time web upgrade boosted visibility, lead generation, engagement, and long-term customer trust.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button>Success Stories - Code, Connect, Convert</Button>
              <Button variant="outline">View all case study</Button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-10 px-4">

            {caseStudyData.map((item) => (
              <Card
                key={item.id}
                className="w-full rounded-2xl overflow-hidden shadow-sm text-primary"
              >
                {/* IMAGE - FULL WIDTH */}
                <div className="relative w-full h-52">
                  <Image
                    src={item.src}
                    alt={item.heading}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <CardContent className="px-4">
                  <h2 className="text-lg md:text-xl font-semibold mb-3">
                    {item.heading}
                  </h2>

                  <p className="text-sm leading-relaxed mb-5 text-muted-foreground">
                    {item.desc}
                  </p>

                  <div className="flex justify-between items-center mb-5 text-sm">
                    <span>Organic Traffic</span>
                    <span className="font-semibold">{item.traffic}</span>
                  </div>
                  <div className="flex justify-between items-center mb-5 text-sm">
                    <span>Organic Traffic</span>
                    <span className="font-semibold">{item.revenue}</span>
                  </div>

                  <Button className="w-fit">
                    Read More <Play className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}

          </div>
        </section>

        {/* Development Process */}
        <section>
          <div className="px-5">
            <h1 className="bg-primary text-center text-xl md:text-2xl text-white w-fit mx-auto px-4 py-2 rounded-md">
              Our Offshore Software Development Process
            </h1>
          </div>

          <div className="relative mt-12 px-4 overflow-hidden">

            {/* LEFT BUTTON */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 z-50 cursor-pointer -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <ChevronLeft />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="absolute right-0 top-1/2 z-50 cursor-pointer -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <ChevronRight />
            </button>

            {/* SLIDER */}
            <div
              className="flex transition-transform duration-500 ease-in-out py-4"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {developmentProcessData.map((item) => (
                <div
                  key={item.step}
                  className="w-full sm:w-1/2 lg:w-1/3 px-4 shrink-0"
                >
                  <Card className="w-full rounded-bl-4xl overflow-hidden shadow-sm text-primary">
                    <div className="max-w-1/2 p-2 flex justify-center bg-primary text-white">
                      <span>Step-{item.step}</span>
                    </div>

                    <CardContent className="px-4 md:px-8">
                      <h2 className="text-lg md:text-xl font-semibold mb-3">
                        {item.title}
                      </h2>

                      <p className="text-sm leading-relaxed mb-5">
                        {item.desc}
                      </p>

                      <div className="flex items-center gap-2 mb-5 text-sm">
                        <CircleCheck width={20} height={20} />
                        <span className="font-semibold">{item.point1}</span>
                      </div>

                      <div className="flex items-center mb-5 gap-2 text-sm">
                        <CircleCheck width={20} height={20} />
                        <span className="font-semibold">{item.point2}</span>
                      </div>

                      <div className="flex items-center mb-5 gap-2 text-sm">
                        <CircleCheck width={20} height={20} />
                        <span className="font-semibold">{item.point3}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*  */}
        <section className="bg-black py-12">
          <div className="bg-primary mx-4 rounded-2xl overflow-hidden">
            <div className="md:flex justify-between items-stretch">

              {/* Left Info Panel */}
              <div className="w-full md:w-72 shrink-0 flex flex-col justify-center items-center gap-5 text-white px-8 py-12">
                <Image src="/touch-rating.svg" alt="rating" width={100} height={100} />
                <h1 className="text-center text-2xl font-bold leading-snug">
                  Customers Who Trust Us
                </h1>
                <p className="text-center text-sm text-white/80 leading-relaxed">
                  Their feedback drives us to improve, grow, and serve better. Real experiences shared by clients we've served.
                </p>

                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => scrollToIndex(currentIndex - 1)}
                    disabled={currentIndex === 0}
                    className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scrollToIndex(currentIndex + 1)}
                    disabled={currentIndex === caseStudyData.length - 1}
                    className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Cards Carousel */}
              <div
                className="flex gap-5 overflow-x-auto px-6 py-10 flex-1"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {caseStudyData.map((item, index) => (
                  <div
                    key={item.id}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    className="min-w-65 max-w-65 shrink-0"
                  >
                    <Card className="w-full rounded-2xl overflow-hidden shadow-sm text-primary p-0">
                      {/* IMAGE */}
                      <div className="relative w-full h-44">
                        <Image
                          src={item.src}
                          alt={item.heading}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* CONTENT */}
                      <CardContent className="px-4 py-4">
                        <h2 className="text-base font-semibold mb-2">{item.heading}</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                          {item.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* partners name */}
          <div className="w-full overflow-hidden pt-10">
            <div className="flex gap-10 w-max animate-marquee">
              {[...techData, ...techData].map((item, index) => (
                <Card
                  key={index}
                  className="w-44 shadow-sm text-primary flex items-center justify-center"
                >
                  <CardContent className="text-center flex items-center justify-center">
                    <Image
                      src={item.src.trimEnd()}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="border-none p-3"
                    />
                    <h2 className="text-xl font-semibold text-center">
                      {item.title}
                    </h2>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Latest Offshore */}
        <section className="py-16">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12 px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Explore Our Latest Offshore Tech Insights
            </h1>
            <p className="text-base text-gray-600">
              Stay genuinely connected to what's shaping the future of digital. Our
              latest offshore updates bring you closer to the pulse of tech evolution.
            </p>
          </div>

          {/* Carousel outer — buttons sit here, outside overflow-hidden */}
          <div className="relative px-10 md:px-16">

            {/* LEFT BUTTON */}
            <button
              onClick={() => goTo(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 z-50 -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={() => goTo(currentIndex + 1)}
              disabled={currentIndex === maxIndex}
              className="absolute right-0 top-1/2 z-50 -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight />
            </button>

            {/* Slides track */}
            <div
              className="flex overflow-x-hidden"
              style={{ scrollbarWidth: "none" }}
            >
              {blogData.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className="min-w-full flex flex-col md:flex-row items-center justify-around gap-12 lg:gap-20 md:py-16"
                >
                  {/* LEFT IMAGE */}
                  <div className="relative w-56 h-56 shrink-0">
                    <Image
                      src={item.image1}
                      alt="blog visual"
                      width={200}
                      height={200}
                      className="rounded-md"
                    />
                    <Image
                      src={item.image2}
                      alt="blog accent"
                      width={120}
                      height={120}
                      className="absolute -bottom-6 -right-6 rounded-md shadow-md"
                    />
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="max-w-xl text-center md:text-left mt-8 md:mt-0">
                    <h3 className="text-primary font-semibold mb-2">
                      {item.category}
                    </h3>
                    <span className="text-sm text-gray-500 block mb-3">
                      {item.date}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 leading-snug">
                      {item.title}
                    </h2>
                    <Link
                      href={item.href}
                      className="inline-block bg-accent text-white px-5 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            {/* <div className="flex justify-center gap-2 mt-10">
              {blogData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary w-6" : "bg-gray-300"
                    }`}
                />
              ))}
            </div> */}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-5">

            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="inline-block bg-primary text-white px-6 py-2 rounded-md text-xl md:text-2xl font-semibold">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Layout */}
            <div className="flex flex-col md:flex-row gap-10">

              {/* LEFT SIDE QUESTIONS */}
              <div className="w-full md:w-1/2 bg-primary rounded-xl p-6 space-y-4">
                {faqData.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex items-center justify-between px-5 py-4 rounded-lg shadow-sm cursor-pointer transition
                ${currentIndex === index
                        ? "bg-white border-2 border-accent"
                        : "bg-white/90 hover:bg-white"
                      }`}
                  >
                    <p className="text-sm md:text-base font-medium text-gray-800">
                      {item.question}
                    </p>

                    <ChevronDown
                      size={20}
                      className={`transition-transform ${currentIndex === index ? "rotate-180 text-primary" : ""
                        }`}
                    />
                  </div>
                ))}
              </div>

              {/* RIGHT SIDE ANSWER */}
              <div className="w-full md:w-1/2 bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {faqData[currentIndex].question}
                </h3>
                <span>Good question —</span>
                <p className="text-gray-600 leading-loose mb-6 whitespace-pre-line">
                  {faqData[currentIndex].answer}
                </p>

                <Link
                  href="#"
                  className="inline-block bg-primary text-white px-5 py-2 rounded-md font-medium hover:bg-primary/90 transition"
                >
                  Read More
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Get in Touch */}
        <section className='py-16'>
          <div className="p-4">
            <h1 className="text-primary">Discover Tailored Services / Solutions with Zero Upfront Cost.</h1>
            <div className="border-2 p-4 flex justify-between items-center">
              <div className="flex justify-center flex-col items-center gap-1">
                <Mail />
                <h4 className="text-sm">Have questions?</h4>
                <p className="text-xs">Drop us an Email</p>
                <p className="text-sm">info@webespire.com</p>
              </div>

              <span className="border border-primary h-20"></span>

              <div className="flex justify-center flex-col items-center gap-1">
                <Mail />
                <h4 className="text-sm">Have questions?</h4>
                <p className="text-xs">Drop us an Email</p>
                <p className="text-sm">info@webespire.com</p>
              </div>

              <span className="border border-primary h-20"></span>


              <div className="flex justify-center flex-col items-center gap-1">
                <Mail />
                <h4 className="text-sm">Have questions?</h4>
                <p className="text-xs">Drop us an Email</p>
                <p className="text-sm">info@webespire.com</p>
              </div>


            </div>
            <div className="bg-white border mt-4">
              <Image src="/consultent.svg" alt="contact us" width={1000} height={100} className="mx-auto" />
              <p className="text-center py-4">Start Your Project With Confidence - FREE Consultation</p>
            </div>
            <div className="border-2 flex justify-between items-center mt-4 py-1">

              <Image src="/google.svg" alt='google' width={100} height={100} />

              <span className="border border-primary h-12"></span>

              <Image src="/revied.svg" alt='google' width={100} height={100} />

              <span className="border border-primary h-12"></span>

              <Image src="/clutch.svg" alt='google' width={100} height={100} />
            </div>
          </div>

          <div className="">
            <h1 className="">Get in touch with us</h1>
            <p className="">
              Please complete the contact form below, and we’ll get back to
              you within the next 24 hours.</p>

            <div className="">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder='Full Name'
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder='Company'
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Country
                  </label>
                  <input
                    type='text'
                    id="message"
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder='Country'
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type='text'
                    id="message"
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder='Phone'
                  />
                </div>

                <h1 className="">How can We Assist You?</h1>
                <textarea name="message" rows={4} id="message" className='border'></textarea>

                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}
