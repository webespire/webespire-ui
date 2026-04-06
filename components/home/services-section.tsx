import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { infoData } from '@/lib/homePageData';

export default function ServicesSection() {
    return (
        <section className="w-full bg-white px-4 py-1 flex justify-center items-center flex-col">

            {/* Section Badge */}
            <div className="flex items-stretch mb-10 rounded-lg overflow-hidden gap-1">
                <div className="bg-primary px-4 py-3 flex items-center justify-center">
                    <Image
                        src="/setting-icon.svg"
                        alt=""
                        aria-hidden="true"
                        width={22}
                        height={22}
                    />
                </div>
                <h2 className="bg-primary text-white text-sm sm:text-base md:text-lg font-semibold px-6 py-3 border-l border-white/20 flex items-center">
                    Our Offshore Services/Solutions
                </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 justify-items-center items-stretch w-full max-w-7xl">
                {infoData.map((item) => (
                    <Card
                        key={item.id}
                        className="w-full max-w-sm rounded-md shadow-sm text-primary hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer group"
                    >
                        <CardContent className="p-4 flex flex-col items-start justify-between h-full text-center gap-4">
                            <h3 className="text-xl font-bold text-start">
                                {item.heading}
                            </h3>

                            <p className="text-base text-start">
                                {item.desc}
                            </p>

                            <Button
                                variant="ghost"
                                aria-label={`Learn more about ${item.heading}`}
                                className="flex items-center gap-2 text-base font-bold p-0 h-auto hover:bg-transparent group-hover:text-white"
                            >
                                {item.buttonText}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* About Banner */}
            <div className="relative overflow-hidden min-h-105 w-full max-w-7xl mt-10 rounded-2xl">

                {/* Background Image */}
                <Image
                    src="/bg-img.svg"
                    alt=""
                    aria-hidden="true"
                    fill
                    className="object-cover object-center z-0"
                />

                {/* Overlay */}
                <div
                    className="absolute inset-0 z-10 bg-white/70 backdrop-blur-[2px]"
                    aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <span className="inline-flex items-center bg-primary text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-sm">
                            About Webespire: Innovate. Empower. Deliver.
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 tracking-tight">
                            Trusted Offshore Software Development &amp; Startups Partner
                        </h2>

                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                            Helping global businesses grow through reliable offshore development,
                            tailored digital solutions, and strategic tech expertise.
                        </p>
                    </div>

                    <div className="bg-primary text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-lg ring-1 ring-white/10">
                        <div className="shrink-0">
                            <Image
                                src="/startup-partner.svg"
                                alt="Startup Partner illustration"
                                width={160}
                                height={160}
                                className="w-36 h-auto drop-shadow-md"
                            />
                        </div>

                        <div className="space-y-3 text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl font-semibold leading-snug">
                                Trusted Offshore Software Development &amp; Startups Partner
                            </h3>
                            <p className="text-sm leading-relaxed text-white/80">
                                Recognized for innovation, excellence, and global delivery awards.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}