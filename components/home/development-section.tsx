"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, CircleCheck } from "lucide-react";
import { Button } from "../ui/button";
import {
    developmentProcessData,
    techData,
    customerTrustData,
} from "@/lib/homePageData";
import { Card, CardContent } from "../ui/card";

// ─── Constants outside component (not re-created on every render) ────────────
const STEP_POINTS = ["point1", "point2", "point3"] as const;

// ─── Hook: responsive visible-cards count ───
function useVisibleCards(): number {
    const [visibleCards, setVisibleCards] = useState(1);

    useEffect(() => {
        const update = () => {
            if (window.innerWidth >= 1024) setVisibleCards(3);
            else if (window.innerWidth >= 640) setVisibleCards(2);
            else setVisibleCards(1);
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return visibleCards;
}

// ─── Component ──
export default function DevelopmentSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const visibleCards = useVisibleCards();

    // Derived: maximum slider index
    const maxIndex = Math.max(0, developmentProcessData.length - visibleCards);

    // Clamp currentIndex when visibleCards changes
    useEffect(() => {
        setCurrentIndex((prev) => Math.min(prev, maxIndex));
    }, [maxIndex]);

    // Memoize doubled tech-marquee array
    const doubledTechData = useMemo(() => [...techData, ...techData], []);

    // ── Slider handlers ──
    const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
    const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

    // ── Testimonial scroll (centres the active card) ──
    const scrollToIndex = (index: number) => {
        const clamped = Math.max(0, Math.min(index, customerTrustData.length - 1));
        setTestimonialIndex(clamped);

        const container = scrollContainerRef.current;
        const card = cardRefs.current[clamped];

        if (container && card) {
            container.scrollTo({
                left:
                    card.offsetLeft -
                    container.offsetWidth / 2 +
                    card.offsetWidth / 2,
                behavior: "smooth",
            });
        }
    };

    // ── Slider card basis class ──
    const cardBasis =
        visibleCards === 1 ? "basis-full" :
            visibleCards === 2 ? "basis-1/2" :
                "basis-1/3";

    return (
        <>
            {/* ── Development Process ── */}
            <section className="w-full px-2 sm:px-4 flex flex-col gap-10 items-center">
                <h2 className="bg-primary text-center text-xl md:text-2xl text-white w-fit mx-auto px-6 py-2.5 rounded-md">
                    Our Offshore Software Development Process
                </h2>

                <div className="relative flex items-center justify-center gap-3 w-full max-w-7xl">
                    {/* Left Button */}
                    <Button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        size="icon"
                        aria-label="Previous slide"
                        className="shrink-0 rounded-full shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft />
                    </Button>

                    {/* Slider Track */}
                    <div className="overflow-hidden w-full">
                        <div
                            className="flex transition-transform duration-500 ease-in-out py-5"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                            }}
                        >
                            {developmentProcessData.map((item) => (
                                <div
                                    key={item.step}
                                    className={`shrink-0 px-3 ${cardBasis} flex justify-center`}
                                >
                                    <Card className="w-full max-w-sm h-full rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col border">
                                        <div className="px-4 py-2 bg-primary text-white w-fit rounded-br-xl text-xs font-semibold">
                                            Step {item.step}
                                        </div>

                                        <CardContent className="flex flex-col gap-4 px-5 py-6 flex-1">
                                            <h3 className="text-lg md:text-xl font-semibold leading-snug">
                                                {item.title}
                                            </h3>

                                            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                                {item.desc}
                                            </p>

                                            <ul className="flex flex-col gap-2">
                                                {STEP_POINTS.map(
                                                    (key) =>
                                                        item[key] && (
                                                            <li key={key} className="flex items-start gap-2 text-sm">
                                                                <CircleCheck className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                                                                <span>{item[key]}</span>
                                                            </li>
                                                        )
                                                )}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Button */}
                    <Button
                        onClick={nextSlide}
                        disabled={currentIndex === maxIndex}
                        size="icon"
                        aria-label="Next slide"
                        className="shrink-0 rounded-full shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        <ChevronRight />
                    </Button>
                </div>
            </section>

            {/* ── Testimonials + Marquee ── */}
            <section className="bg-black py-10">
                <div className="bg-primary mx-4 rounded-2xl overflow-hidden">
                    <div className="md:flex">
                        {/* Left Panel */}
                        <div className="w-full md:w-72 flex flex-col justify-center items-center gap-5 text-white px-8 py-12">
                            <Image src="/touch-rating.svg" alt="" width={100} height={100} />

                            <h2 className="text-center text-2xl font-bold">
                                Customers Who Trust Us
                            </h2>

                            <p className="text-center text-sm text-white/80">
                                Their feedback drives us to improve, grow, and serve better.
                            </p>

                            <div className="flex gap-3 mt-4">
                                <Button
                                    onClick={() => scrollToIndex(testimonialIndex - 1)}
                                    disabled={testimonialIndex === 0}
                                    size="icon"
                                    variant="ghost"
                                    aria-label='go-left'
                                    className="rounded-full border border-white/40 text-white disabled:opacity-30"
                                >
                                    <ChevronLeft />
                                </Button>

                                <Button
                                    onClick={() => scrollToIndex(testimonialIndex + 1)}
                                    disabled={testimonialIndex === customerTrustData.length - 1}
                                    aria-label='go-right'
                                    size="icon"
                                    variant="ghost"
                                    className="rounded-full border border-white/40 text-white disabled:opacity-30"
                                >
                                    <ChevronRight />
                                </Button>
                            </div>
                        </div>

                        {/* Testimonial Cards */}
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-5 overflow-x-auto px-10 md:px-16 py-10 flex-1 snap-x snap-mandatory"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {customerTrustData.map((item, index) => (
                                <div
                                    key={item.id}
                                    ref={(el) => { cardRefs.current[index] = el; }}
                                    className="min-w-65 max-w-65 shrink-0 snap-center"
                                >
                                    <Card className="w-full h-full rounded-2xl overflow-hidden shadow-sm text-primary flex flex-col">
                                        <div className="relative w-full h-44">
                                            <Image
                                                src={item.src}
                                                alt={item.heading}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <CardContent className="flex flex-col gap-2 px-4 py-4 flex-1">
                                            <h3 className="text-base font-semibold">{item.heading}</h3>
                                            <p className="text-sm text-muted-foreground line-clamp-3">
                                                {item.desc}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tech Marquee */}
                <div className="w-full overflow-hidden pt-10">
                    <div className="flex gap-10 w-max animate-marquee">
                        {doubledTechData.map((item, index) => (
                            <Card key={index} className="w-44 flex items-center justify-center">
                                <CardContent className="flex items-center gap-2 px-3 py-3">
                                    <Image
                                        src={item.src.trim()}
                                        alt={item.title}
                                        width={40}
                                        height={40}
                                    />
                                    <h3 className="text-sm font-semibold">{item.title}</h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}