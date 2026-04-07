import { ServicesSection } from '@/components/home/services-section';
import { Card, CardContent } from '@/components/ui/card';
import { infoData } from '@/lib/homePageData';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const innovativeData = [
    {
        id: "1",
        img: "/amway.svg"
    },
    {
        id: "2",
        img: "/amway.svg"
    },
    {
        id: "3",
        img: "/amway.svg"
    },
    {
        id: "4",
        img: "/amway.svg"
    },
];

const outcomesData = [
    {
        id: "1",
        src: "/casestudy-1.svg",
        heading: "Improved User Productivity",
        desc: "Well-designed interfaces reduce friction and improve task completion."
    },
    {
        id: "2",
        src: "/casestudy-1.svg",
        heading: "Improved User Productivity",
        desc: "Well-designed interfaces reduce friction and improve task completion."
    },
    {
        id: "3",
        src: "/casestudy-1.svg",
        heading: "Improved User Productivity",
        desc: "Well-designed interfaces reduce friction and improve task completion."
    },
    {
        id: "4",
        src: "/casestudy-3.svg",
        heading: "Improved User Productivity",
        desc: "Well-designed interfaces reduce friction and improve task completion."
    },
    {
        id: "5",
        src: "/casestudy-1.svg",
        heading: "Improved User Productivity",
        desc: "Well-designed interfaces reduce friction and improve task completion."
    },
    {
        id: "6",
        src: "/casestudy-2.svg",
        heading: "Improved User Productivity",
        desc: "Well-designed interfaces reduce friction and improve task completion."
    },
];

export default function Services() {
    return (
        <main className="mx-auto space-y-10">
            <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">

                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/hero-img.svg"
                        alt="Mobile app development"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/70 via-black/60 to-black/70" />

                {/* Content */}
                <div className="relative z-10 text-center text-white px-4 max-w-3xl space-y-5">

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-normal">
                        Mobile App Development
                    </h1>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        Redefine your digital presence with Webspire custom mobile app
                        development services, that streamline operations, enhance customer
                        engagement and drive business growth.
                    </p>

                </div>
            </section>

            {/* App development */}
            <ServicesSection children={
                <div className="flex flex-col justify-center items-stretch mb-10">
                    <h1 className="text-secondary text-2xl font-bold mx-auto">
                        Mobile App
                        <span className="text-accent pl-2">Development</span>
                    </h1>
                    <p className="font-normal pt-3 md:px-6 text-sm text-center text-[#555555]">
                        Mobile app development focuses on creating powerful, user-friendly applications that help businesses connect with their customers anytime, anywhere. A well-designed mobile app improves user experience, increases brand visibility, and provides convenient access to products or services. By combining modern technologies with intuitive design, mobile apps can deliver fast performance, secure functionality, and seamless interaction across devices. Whether for startups or established businesses, mobile apps help streamline operations, enhance customer engagement, and support business growth. From concept and design to development and deployment, mobile app solutions are built to meet specific business goals and adapt to the evolving digital landscape.
                    </p>
                </div>} data={infoData} />

            {/* Innovative mobile technology */}
            <section className="px-4">
                <div className="flex flex-col justify-center items-stretch mb-10">
                    <h1 className="text-secondary text-2xl font-bold mx-auto">
                        Innovative
                        <span className="text-accent px-2">Mobile</span>
                        Technology
                    </h1>
                    <p className="font-normal pt-3 md:px-6 text-sm text-center text-[#555555]">
                        We deliver highest level of customer service by deploying innovative and collaborative project
                        management systems to build the most professional, robust and highly scalable web & mobile solutions with highest quality standards
                    </p>
                </div>

                <div className="flex items-center justify-center gap-4 py-4 flex-wrap">
                    {innovativeData.map((item) => (
                        <Card
                            key={item.id}
                            className="w-auto shadow-none border-none bg-transparent rounded-sm"
                        >
                            <CardContent className="flex items-center justify-center">
                                <Image
                                    src={item.img}
                                    alt={"company logo"}
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Outcomes expect */}
            <section className="">
                <div className="flex flex-col justify-center items-stretch mb-10 px-4">
                    <h1 className="text-secondary text-2xl font-bold mx-auto">
                        Outcomes You Can Expect
                    </h1>
                    <p className="font-normal pt-3 md:px-6 text-sm text-center text-[#555555]">
                        Our mobile app solutions deliver seamless performance, intuitive user experience, and enhanced customer engagement. Designed with modern technology and scalable architecture, our apps help businesses improve efficiency, strengthen brand presence, and create meaningful digital interactions with their audience.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid px-4 py-5 md:px-10 gap-5"
                    style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}
                >
                    {outcomesData.map((item, index) => (
                        <div
                            key={item.id}
                            className="max-w-2xs overflow-hidden mx-auto shrink-0 shadow-xl snap-center"
                        >
                            <Card className="w-full h-full rounded-md bg-white text-primary flex flex-col relative">
                                <div className="absolute inset-0 z-0 -top-7 h-52">
                                    <Image
                                        src={item.src}
                                        alt={item.heading}
                                        fill
                                        priority
                                        quality={80}
                                        className="object-cover object-center"
                                    />
                                </div>

                                <CardContent className="flex flex-col pb-10 gap-2 px-4 flex-1 mt-32">
                                    <div className="bg-secondary max-w-2/3 absolute top-32 left-0 p-2">
                                        <h3 className="text-sm text-white font-medium">{item.heading}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-3 mt-12">
                                        {item.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="bg-secondary py-10 px-6 space-y-3 md:space-y-0 md:flex items-center justify-between">
                    <p className="font-bold text-center text-white">See our Solution in Action</p>

                    <div className="block sm:flex flex-wrap gap-4 space-y-5 sm:space-y-0">
                        <Link href="/" className="flex items-center rounded-md overflow-hidden gap-0.5 sm:w-fit">
                            <span className="bg-accent hover:bg-accent/90 text-sm p-2 px-4 w-full text-center">
                                Kickstart Your MVP Success
                            </span>
                            <span className="p-2 bg-accent w-16">
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
                </div>
            </section>

            {/* Engagement models */}
            <section className="">
                <div className=""></div>
                <div className=""></div>
            </section>
        </main>
    );
}