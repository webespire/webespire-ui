import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Service {
    id: string;
    heading: string;
    desc: string;
    buttonText?: string
}

interface ServicesType {
    children: ReactNode;
    data: Service[];
}

function ServicesSection({ children, data }: ServicesType) {
    return (
        <section className="w-full bg-white px-4 flex flex-col items-center">

            {children}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full max-w-7xl">
                {data.map((item) => (
                    <div key={item.id} className="relative group w-full max-w-sm mx-auto">
                        <Card
                            className="w-full rounded-md shadow-sm group-hover:bg-secondary transition-all duration-500"
                        >
                            <CardContent className="p-5 flex flex-col h-full gap-4 items-start">

                                <h3 className="text-xl font-bold text-primary group-hover:text-white transition-colors duration-500">
                                    {item.heading}
                                </h3>

                                <p className="text-base text-gray-600 group-hover:text-white/90 transition-colors duration-500">
                                    {item.desc}
                                </p>

                                {item.buttonText && (
                                    <Button
                                        variant="link"
                                        aria-label={`Learn more about ${item.heading}`}
                                        className="p-0 font-semibold text-black group-hover:text-white transition-colors duration-500"
                                    >
                                        {item.buttonText}
                                    </Button>
                                )}

                            </CardContent>
                        </Card>

                        {/* Square message-box bottom line — visible on hover */}
                        <div
                            className="
                                absolute -bottom-4 left-30
                                w-0 h-0
                                opacity-0 group-hover:opacity-100
                                transition-all duration-500
                                [border-left:12px_solid_transparent]
                                [border-right:12px_solid_transparent]
                                [border-top:16px_solid_var(--color-secondary)]
                            "
                        />
                    </div>
                ))}
            </div>

        </section>
    );
}

function AboutSection() {
    return (
        <section className="w-full bg-white px-4 py-1 flex justify-center items-center flex-col">
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

export { ServicesSection, AboutSection }