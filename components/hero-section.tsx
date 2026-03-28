import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from './ui/button';
import Link from 'next/link';

const heroSectionCard = [
    {
        img: "/adani.svg",
    },
    {
        img: "/amway.svg",
    },
    {
        img: "/apollo.svg",
    },
    {
        img: "/asient.svg",
    },
    {
        img: "/emcure.svg",
    },
    {
        img: "/piramal.svg",
    },
]

export default function HeroSection() {
    return (
        <section className="mt-10 w-full min-h-screen flex items-start bg-primary/10 xl:bg-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content Wrapper (IMPORTANT FIX) */}
            <div className="relative z-10 w-full mx-auto px-4 pt-20 md:pt-32 pb-10">
                <div className="text-white space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Simplifying Digital Success for You
                    </h1>

                    <h2 className="text-xl md:text-2xl text-gray-200">
                        We craft, develop, and enhance Business
                        Software Applications.
                    </h2>

                    <p className="text-gray-300 max-w-lg">
                        Webespire is a trusted offshore development company that helps
                        businesses, startups grow with custom web and mobile apps,
                        easy-to-manage CMS solutions, modern app design, digital
                        marketing services, eCommerce solutions, and by upgrading
                        outdated software platforms.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button className="flex items-center gap-2 px-6 py-4 bg-accent text-white rounded-2xl font-semibold hover:bg-accent/90 transition-all duration-300 cursor-pointer">
                            Kickstart Your MVP Success
                            <ArrowRight size={18} />
                        </Button>

                        <Button className="px-6 py-4 border border-white text-white rounded-2xl font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition cursor-pointer">
                            Startups Partner <ArrowRight size={18} />
                        </Button>
                    </div>

                    <Link href="#" className="text-primYellow w-full hover:text-white transition">
                        Leading Digital Transformation Partner in CA, USA | Edmonton, Canada | Noida, India.
                    </Link>

                    <div className="w-full mx-auto mt-10 xl:mt-20 flex items-center gap-2 justify-center flex-wrap">
                        <div className="flex items-center gap-1">
                            <div className="bg-primary rounded-md p-3 w-fit">
                                <ArrowRight size={18} />
                            </div>
                            <div className="bg-primary rounded-md p-3 w-fit">
                                <ArrowLeft size={18} />
                            </div>
                        </div>

                        <Button className='p-6 bg-primary'>Offshore Software Development</Button>
                        <Button className='p-6 bg-primary'>Legacy Modernization</Button>
                        <Button className='p-6 bg-primary'>Web & Mobile Platforms</Button>
                        <Button className='p-6 bg-primary'>Enterprise Web Platforms</Button>
                    </div>

                    <div className="flex items-center gap-4 mt-10 xl:mt-20 w-full justify-center">
                        {
                            heroSectionCard.map((item, index) => (
                                <div key={index + 1} className="bg-white relative rounded-xl p-4 w-48 z-50 border">
                                    <img
                                        src={item.img}
                                        alt="Preview"
                                        className="rounded-xl mb-4"
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
