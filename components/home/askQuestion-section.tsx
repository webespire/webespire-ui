"use client";

import { useState } from 'react';
import { faqData } from '@/lib/homePageData';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function AskQuestion() {
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-5">

                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="inline-block bg-secondary text-white px-10 py-2 rounded-md text-lg font-semibold">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* Layout */}
                <div className="flex flex-col md:flex-row gap-10">

                    {/* LEFT SIDE QUESTIONS */}
                    <div className="w-full md:w-1/2 bg-secondary rounded-xl p-6 space-y-4">
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
                            className="inline-block bg-secondary text-white px-5 py-2 rounded-md font-medium hover:bg-primary/90 transition"
                        >
                            Read More
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}