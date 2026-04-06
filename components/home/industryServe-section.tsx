import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { LEFT_INDUSTRIES, RIGHT_INDUSTRIES } from '@/lib/homePageData';
import { Globe } from 'lucide-react';

export default function IndustryServeSection() {
    const ALL_INDUSTRIES = [...LEFT_INDUSTRIES, ...RIGHT_INDUSTRIES];

    return (
        <section className="w-full flex flex-col items-center">

            {/* Section Badge */}
            <div className="flex items-stretch mb-10 rounded-lg overflow-hidden gap-1">
                <div className="bg-primary px-4 py-3 flex items-center justify-center">
                    <Globe color='white' />
                </div>
                <h2 className="bg-primary text-white text-sm sm:text-base md:text-lg font-semibold px-6 py-3 border-l border-white/20 flex items-center">
                    Industries We Proudly Serve Today
                </h2>
            </div>

            {/* Main Panel */}
            <div className="w-full bg-primary py-12 md:py-16 px-5 sm:px-8 pb-20">

                {/* Heading */}
                <h3 className="text-white text-center font-bold leading-tight max-w-3xl mx-auto mb-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    Tailored Tech Solutions for Every Business Sector
                </h3>

                {/* Desktop Layout */}
                <div className="hidden lg:flex items-center justify-center max-w-6xl mx-auto gap-5">

                    {/* LEFT PILLS */}
                    <div className="flex flex-col gap-5 items-end">
                        {LEFT_INDUSTRIES.map((label) => (
                            <Button
                                key={label}
                                variant="outline"
                                aria-label={label}
                                className="border-2 border-accent bg-white min-w-52 text-sm font-medium px-6 py-2.5 rounded-full hover:bg-accent/15 hover:text-white focus-visible:ring-accent"
                            >
                                {label}
                            </Button>
                        ))}
                    </div>

                    {/* LEFT CONNECTORS */}
                    <div className="flex flex-col gap-3 w-20">
                        {LEFT_INDUSTRIES.map((_, i) => (
                            <div key={i} className="flex items-center h-10" aria-hidden="true">
                                <div className="w-full h-px bg-white/30 border-l-2" />
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
                    <div className="flex flex-col gap-3 w-20">
                        {RIGHT_INDUSTRIES.map((_, i) => (
                            <div key={i} className="flex items-center h-10" aria-hidden="true">
                                <div className="w-full h-px bg-white/30 border-r-2" />
                            </div>
                        ))}
                    </div>

                    {/* RIGHT PILLS */}
                    <div className="flex flex-col gap-5 items-start">
                        {RIGHT_INDUSTRIES.map((label) => (
                            <Button
                                key={label}
                                variant="outline"
                                aria-label={label}
                                className="border-2 border-accent bg-white min-w-52 text-sm font-medium px-6 py-2.5 rounded-full hover:bg-accent/15 hover:text-white focus-visible:ring-accent"
                            >
                                {label}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Tablet Layout */}
                <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {ALL_INDUSTRIES.map((label) => (
                        <Button
                            key={label}
                            variant="outline"
                            aria-label={label}
                            className="border-2 border-accent bg-transparent text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-accent/15 hover:text-white focus-visible:ring-accent w-full"
                        >
                            {label}
                        </Button>
                    ))}
                </div>

                {/* Mobile Layout */}
                <div className="flex md:hidden flex-col gap-3 items-center">
                    {ALL_INDUSTRIES.map((label) => (
                        <Button
                            key={label}
                            variant="outline"
                            aria-label={label}
                            className="w-full max-w-xs border-2 border-accent bg-transparent text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-accent/15 hover:text-white focus-visible:ring-accent"
                        >
                            {label}
                        </Button>
                    ))}
                </div>

            </div>

            {/* Bottom Card */}
            <Card className="relative z-10 -mt-10 mx-4 max-w-md md:max-w-2xl lg:max-w-3xl w-full shadow-lg">
                <CardContent className="flex flex-col items-center gap-4 px-6 py-6 text-center">
                    <p className="text-primary text-base sm:text-lg md:text-xl leading-relaxed">
                        We connect industries through innovation, empowering growth with
                        cutting-edge digital transformation and actionable insights.
                    </p>
                    <Button className="bg-primary/90 hover:bg-primary text-white px-6 py-2 text-base rounded-md w-fit">
                        Partnership With Us Today!
                    </Button>
                </CardContent>
            </Card>

        </section>
    );
}