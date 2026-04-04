import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { blogData, developmentProcessData } from '@/lib/homePageData';

export default function ExploreOffshoreSection() {
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
    const goTo = (index: number) => {
        const clamped = Math.max(0, Math.min(index, maxIndex));
        setCurrentIndex(clamped);
        cardRefs.current[clamped]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    };

    return (
        <section className="">
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
                <Button
                    onClick={() => goTo(currentIndex - 1)}
                    disabled={currentIndex === 0}
                    size="icon"
                    aria-label="Previous"
                    className="absolute left-0 top-1/2 z-50 -translate-y-1/2 rounded-full shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronLeft aria-hidden="true" />
                </Button>

                {/* RIGHT BUTTON */}
                <Button
                    onClick={() => goTo(currentIndex + 1)}
                    disabled={currentIndex === maxIndex}
                    size="icon"
                    aria-label="Next"
                    className="absolute right-0 top-1/2 z-50 -translate-y-1/2 rounded-full shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronRight aria-hidden="true" />
                </Button>

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

            </div>
        </section>
    )
}

{/* Dot indicators */ }
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