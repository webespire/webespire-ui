import Image from 'next/image';
import { techData } from '@/lib/homePageData';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

export default function TechnoCraftingSection() {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-5 bg-white flex flex-col items-center gap-10">

            {/* Section Heading */}
            <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
                    Technology Crafting
                </h2>
                <p className="text-gray-500 text-sm sm:text-base">
                    Smart Solutions Through Code
                </p>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full max-w-6xl">
                {techData.map((item) => (
                    <Card
                        key={item.title}
                        className="rounded-2xl shadow-sm text-primary hover:shadow-md transition-shadow duration-300"
                    >
                        <CardContent className="flex flex-col items-center justify-center gap-2 p-4 text-center">
                            <Image
                                src={item.src.trim()}
                                alt={item.title}
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                            <h3 className="text-sm sm:text-base font-semibold">
                                {item.title}
                            </h3>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* CTA Button */}
            <Button className="px-10 py-5 text-sm" aria-label="View more technologies">
                View More
            </Button>

        </section>
    );
}