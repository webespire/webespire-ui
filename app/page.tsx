"use client";
import { useEffect, useRef, useState } from 'react';
import HeroSection from '@/components/home/hero-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, CircleCheck, CircleCheckBig, Mail, Play } from 'lucide-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from 'next/link';
import Footer from '@/components/footer';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import ServicesSection from '@/components/home/services-section';
import IndustryServeSection from '@/components/home/industryServe-section';
import TechnoCraftingSection from '@/components/home/technoCrafting-section';
import { caseStudyData, developmentProcessData, techData } from '@/lib/homePageData';
import CaseStudySection from '@/components/home/caseStudy-section';
import DevelopmentSection from '@/components/home/development-section';
import ExploreOffshoreSection from '@/components/home/exploreOffshore-section';


export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const assistYouData = [
    {
      question: "Offshore Dedicated Teams"
    },
    {
      question: "Startup Partnership"
    },
    {
      question: "Mobile Apps Development"
    },
    {
      question: "IT Consulting/ Outsourcing"
    },
    {
      question: "DevOps & Cloud Solutions"
    },
    {
      question: "AI & Machine Learning"
    },
    {
      question: "Digital Marketing Services"
    },
    {
      question: "UI/UX Design & Website Performance"
    },
  ]

  return (
    <main className="mx-auto space-y-10">
      {/* hero section */}
      <HeroSection />

      {/* services and solution section */}
      <ServicesSection />

      {/* Industries serve today section */}
      <IndustryServeSection />

      {/* Technology Crafting Section */}
      <TechnoCraftingSection />

      {/* Case Study Section */}
      <CaseStudySection />

      {/* Development Process */}
      <DevelopmentSection />

      {/* Explore Latest Offshore */}
      <ExploreOffshoreSection />

      {/* Frequently Asked Questions */}
      <section className="bg-gray-50">
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
      <section className="px-4 bg-muted/40">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold leading-snug text-secondary">
                Discover Tailored Solutions —{" "}
                Zero Upfront Cost
              </h1>
            </div>

            {/* CONTACT CARDS */}
            <div className="grid grid-cols-3 gap-4 border border-black rounded-sm">
              {[
                { title: "Email", desc: "info@webespire.com" },
                { title: "Call", desc: "+91 XXXXX XXXXX" },
                { title: "Chat", desc: "24/7 Support" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center px-2 text-primary text-center border-r border-black my-2"
                >
                  <Mail className="mx-auto mb-2 text-primary" size={20} />
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA CARD */}
            <div className="border rounded-xl text-center bg-background">
              <Image
                src="/consultent.svg"
                alt="Free consultation"
                width={1000}
                height={200}
              />
              <p className="my-4 font-medium">
                Start Your Project With Confidence — FREE Consultation
              </p>
            </div>

            {/* TRUST BADGES */}
            <div className="flex items-center justify-around border border-black rounded-sm p-2">
              <Image src="/google.svg" alt="Google" width={100} height={100} />
              <span className="h-12 border-r border-black"></span>
              <Image src="/revied.svg" alt="Reviews" width={100} height={100} />
              <span className="h-12 border-r border-black"></span>
              <Image src="/clutch.svg" alt="Clutch" width={100} height={100} />
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className='text-xl text-secondary font-bold'>Get in touch with us</CardTitle>
              <CardDescription>
                Please complete the contact form below, and we’ll get back to
                you within the next 24 hours.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form className="space-y-5">

                {/* INPUTS */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your company" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="India" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+91..." />
                  </div>
                </div>

                {/* ASSIST OPTIONS */}
                <div>
                  <Label className="mb-3 block text-xl text-secondary font-bold">How can We Assist You?</Label>

                  <div className="grid md:grid-cols-2 gap-3">
                    {assistYouData.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`assist-${index}`} />
                        <label
                          htmlFor={`assist-${index}`}
                          className="text-sm text-muted-foreground cursor-pointer"
                        >
                          {item.question}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="resize-none"
                  />
                </div>

                {/* SUBMIT */}
                <Button type="submit" className="w-full">
                  Submit Request <CircleCheckBig className="ml-2" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
