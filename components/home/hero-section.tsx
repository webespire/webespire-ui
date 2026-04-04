"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from '../ui/button';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { useState } from 'react';
import { heroSectionCard, tabs } from '@/lib/homePageData';

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const goTo = (index: number) => {
        setActiveIndex((index + tabs.length) % tabs.length);
    };

    const { heading, subheading, paragraph, label } = tabs[activeIndex];

    return (
        <section className="relative w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-img.jpg"
                    alt="Hero background"
                    fill
                    priority
                    quality={80}
                    className="object-cover object-center"
                />
            </div>
            {/* https://images.unsplash.com/photo-1522202176988-66273c2fd55f */}
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/62 z-0" />

            {/* Main Content */}
            <div className="relative z-10 w-full pt-24">
                <div className="text-white space-y-3 md:space-y-5">
                    <h1 className="w-full text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4 md:px-6">
                        {heading}
                    </h1>

                    <h2 className="text-xl md:text-2xl text-gray-200 px-4 md:px-6">
                        {subheading}
                    </h2>

                    <p className="text-gray-300 max-w-lg text-sm md:text-base leading-relaxed px-4 md:px-6">
                        {paragraph}
                    </p>

                    {/* Buttons */}
                    <div className="block sm:flex flex-wrap gap-4 pt-2 px-4 md:px-6 space-y-5 sm:space-y-0">
                        <Link href="/" className="flex items-center rounded-md overflow-hidden gap-0.5 sm:w-fit">
                            <span className="bg-accent hover:bg-accent/90 text-sm p-2 px-4 w-full text-center">
                                Kickstart Your MVP Success
                            </span>
                            <span className="p-2 bg-primary w-16">
                                <ArrowRight size={20} className='mx-auto' />
                            </span>
                        </Link>

                        <Link href="/" className="flex items-center rounded-md overflow-hidden gap-0.5 sm:w-fit text-black">
                            <span className="bg-white text-sm p-2 px-4 w-full text-center">
                                Startups Partner
                            </span>
                            <span className="p-2 bg-white w-16">
                                <ArrowRight size={20} className='mx-auto' />
                            </span>
                        </Link>
                    </div>

                    <Link
                        href="/"
                        className="text-accent hover:text-white transition text-sm block w-fit px-4 md:px-6"
                    >
                        Leading Digital Transformation Partner in CA, USA | Edmonton,
                        Canada | Noida, India.
                    </Link>

                    {/* Tag Bar */}
                    <div className="w-full md:mt-10 flex items-center gap-2 px-4 md:px-6">
                        <div
                            className="bg-primary rounded-md p-3 w-fit cursor-pointer hover:bg-primary/80 transition shrink-0"
                            onClick={() => goTo(activeIndex - 1)}
                        >
                            <ArrowLeft size={18} className="text-white" />
                        </div>

                        {/* Right Arrow — desktop: next to left arrow | mobile: hidden here */}
                        <div
                            className="bg-primary rounded-md p-3 w-fit cursor-pointer hover:bg-primary/80 transition shrink-0 hidden md:block"
                            onClick={() => goTo(activeIndex + 1)}
                        >
                            <ArrowRight size={18} className="text-white" />
                        </div>

                        {/* Mobile: single active button in center */}
                        <Button className="flex-1 md:hidden bg-primary text-white rounded-lg border border-white text-center">
                            {label}
                        </Button>

                        {/* Desktop: all buttons */}
                        <div className="hidden md:flex items-center gap-2 flex-wrap">
                            {tabs.map((tab, index) => (
                                <Button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`p-5 rounded-lg transition-all duration-200 ${activeIndex === index
                                        ? "bg-primary text-white border-t border-t-white"
                                        : "bg-primary text-white opacity-70 hover:opacity-100"
                                        }`}
                                >
                                    {tab.label}
                                </Button>
                            ))}
                        </div>

                        {/* Right Arrow — mobile only: pinned to right side */}
                        <div
                            className="bg-primary rounded-md p-3 w-fit cursor-pointer hover:bg-primary/80 transition shrink-0 md:hidden ml-auto"
                            onClick={() => goTo(activeIndex + 1)}
                        >
                            <ArrowRight size={18} className="text-white" />
                        </div>

                    </div>

                    {/* Cards — half bleed out of hero */}
                    <div className="absolute z-20 items-center justify-between flex gap-10 w-max animate-marquee mt-0">
                        {[...heroSectionCard, ...heroSectionCard].map((item, index) => (
                            <Card
                                key={index}
                                className="w-32 shadow-sm text-primary flex items-center justify-center"
                            >
                                <CardContent className="text-center flex items-center justify-center">
                                    <Image
                                        src={item.img.trimEnd()}
                                        alt={item.img}
                                        width={100}
                                        height={100}
                                        className="rounded-xl w-full"
                                    />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="h-16 w-screen mt-16 relative z-10 bg-white border-none" />
            </div>
        </section >
    )
}
