import Image from 'next/image';
import { Button } from '../ui/button';
import { caseStudyData } from '@/lib/homePageData';
import { Card, CardContent } from '../ui/card';
import { Play } from 'lucide-react';

export default function CaseStudySection() {
    return (
        <section className="w-full bg-[#F7F5F2] px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center gap-10">

            {/* Heading */}
            <div className="flex flex-col items-center gap-3 text-center max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold">
                    Case Study — Growth Through Strategy
                </h2>

                <p className="text-sm md:text-base text-muted-foreground">
                    Real-time web upgrade boosted visibility, lead generation, engagement, and long-term customer trust.
                </p>
                <Image src="/case-study-img.svg" alt='case study img' width={100} height={100} />

                <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                    <Button aria-label="View success stories" className='text-white p-5' variant='secondary'>
                        Success Stories- Code, Connect, Convert
                    </Button>
                    <Button aria-label="View all case studies" className='bg-[#EDE8E1] text-black p-5'>
                        View all case study.
                    </Button>
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                {caseStudyData.map((item) => (
                    <Card
                        key={item.id}
                        className="w-full rounded-sm overflow-hidden shadow-sm text-primary flex flex-col"
                    >
                        {/* Image */}
                        <div className="relative w-full h-52 top">
                            <Image
                                src={item.src}
                                alt={item.heading}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <CardContent className="flex flex-col flex-1 gap-2 px-5">
                            <h3 className="text-lg md:text-xl font-semibold">
                                {item.heading}
                            </h3>

                            <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                                {item.desc}
                            </p>

                            {/* Stats */}
                            <div className="flex flex-col gap-2 text-sm border-t border-gray-100">
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Organic Traffic</span>
                                    <span className="font-semibold text-primary">{item.traffic}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Revenue</span>
                                    <span className="font-semibold text-primary">{item.revenue}</span>
                                </div>
                            </div>

                            <Button
                                className="w-fit px-4 bg-secondary"
                                aria-label={`Read more about ${item.heading}`}
                            >
                                Read More
                                <Play aria-hidden="true" />
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </section>
    );
}