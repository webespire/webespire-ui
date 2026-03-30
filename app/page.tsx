import HeroSection from '@/components/hero-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

const infoData = [
  {
    id: "1",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "2",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "3",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "4",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "5",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "6",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "7",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "8",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
  {
    id: "9",
    heading: "Offshore Software Development",
    desc: "Reliable offshore services, driving innovation, efficiency, and scalable tech success.",
    buttonText: "View Detail"
  },
];

const LEFT_INDUSTRIES = [
  "Digital & IT Software",
  "Retail & E-commerce",
  "Travel & Hospitality",
  "Real Estate Construction",
];

const RIGHT_INDUSTRIES = [
  "Fashion & Apparel",
  "Health & Lifestyle",
  "Finance & Fintech",
  "Education EdTech",
];

const techData = [
  {
    src: "/python.svg",
    title: "Python"
  },
  {
    src: "/angular.svg",
    title: "Angular"
  },
  {
    src: "/bootstrap.svg ",
    title: "Bootstrap"
  },
  {
    src: "/flutter.svg",
    title: "Flutter"
  },
  {
    src: "/react.svg",
    title: "React"
  },
  {
    src: "/laravel.svg",
    title: "Laravel"
  },
  {
    src: "magento.svg",
    title: "Magento"
  },
  {
    src: "/mysql.svg",
    title: "MySQL"
  },
  {
    src: "/net.svg",
    title: ".NET"
  },
  {
    src: "/wordpress.svg",
    title: "Wordpress"
  },
]

const caseStudyData = [
  {
    id: "1",
    src: "/casestudy-1.svg",
    heading: "Boosting Lead Generation with Strategic Campaigns.",
    desc: "Allow for ample white space to avoid overwhelming the reader. White space helps in emphasizing key points.",
    traffic: "0%",
    revenue: "M+",
    link: "#"
  },
  {
    id: "2",
    src: "/casestudy-2.svg",
    heading: "Boosting Lead Generation with Strategic Campaigns.",
    desc: "Allow for ample white space to avoid overwhelming the reader. White space helps in emphasizing key points.",
    traffic: "0%",
    revenue: "M+",
    link: "#"
  },
  {
    id: "3",
    src: "/casestudy-3.svg",
    heading: "Boosting Lead Generation with Strategic Campaigns.",
    desc: "Allow for ample white space to avoid overwhelming the reader. White space helps in emphasizing key points.",
    traffic: "0%",
    revenue: "M+",
    link: "#"
  },

]

const developmentProcessData = [];

export default function Home() {
  return (
    <div className="">
      <main className="mx-auto space-y-10">
        {/* hero section */}
        <section
          id="hero"
          className="flex items-center justify-center"
        >
          <HeroSection />
        </section>

        {/* services and solution section */}
        <section className="w-full bg-white py-10 px-4 flex justify-center items-center flex-col">
          <div className="flex gap-1 mb-10 items-center rounded-md">
            <div className="bg-primary p-4 rounded-l-md">
              <Image src="/setting-icon.svg" alt='setting-icon' width={24} height={24} />
            </div>
            <h1 className="text-white bg-primary p-4 px-8 rounded-r-md">Our Offshore Services/Solutions</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center items-center w-full">
            {infoData.map((item) => (
              <Card
                key={item.id}
                className="w-full max-w-sm rounded-2xl shadow-sm text-primary hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer flex items-center justify-center"
              >
                <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                  {/* Heading */}
                  <h2 className="text-xl font-semibold mb-3 text-center">
                    {item.heading}
                  </h2>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-5 text-center">
                    {item.desc}
                  </p>

                  {/* Button - centered */}
                  <div className="flex items-center justify-center">
                    <button className="flex items-center gap-2 text-sm font-medium">
                      {item.buttonText}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden min-h-105">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/bg-img.svg')" }}
            aria-hidden="true"
          />

          <div
            className="absolute inset-0 z-1 bg-white/70 backdrop-blur-[2px]"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <span className="inline-flex items-center bg-primary text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-sm">
                About Webespire: Innovate. Empower. Deliver.
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 tracking-tight">
                Trusted Offshore Software Development &amp; Startups Partner
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                Helping global businesses grow through reliable offshore development,
                tailored digital solutions, and strategic tech expertise.
              </p>
            </div>

            <div className="bg-primary text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-lg ring-1 ring-white/10">

              {/* Image */}
              <div className="shrink-0">
                <Image
                  src="/startup-partner.svg"
                  alt="Startup Partner"
                  width={160}
                  height={160}
                  className="w-36 h-auto drop-shadow-md"
                />
              </div>

              {/* Text */}
              <div className="space-y-3 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
                  Trusted Offshore Software Development &amp; Startups Partner
                </h2>
                <p className="text-sm leading-relaxed text-white/80">
                  Recognized for innovation, excellence, and global delivery awards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries serve today section */}
        <section className="w-full md:pt-5 flex flex-col items-center">
          <div className="flex items-stretch mb-10 rounded-lg overflow-hidden gap-1">
            <div className="bg-primary px-4 py-3 flex items-center justify-center">
              <Image
                src="/setting-icon.svg"
                alt="Industries icon"
                width={22}
                height={22}
              />
            </div>

            <h2 className="bg-primary text-white text-sm sm:text-base md:text-lg font-semibold px-6 py-3 border-l border-white/20 flex items-center">
              Industries We Proudly Serve Today
            </h2>
          </div>

          {/* Main Panel */}
          <div className="w-full bg-primary py-12 md:py-16 px-5 sm:px-8">

            {/* Heading */}
            <h2 className="text-white text-center font-bold leading-tight max-w-3xl mx-auto mb-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Tailored Tech Solutions for Every Business Sector
            </h2>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-center max-w-6xl mx-auto gap-6">

              {/* LEFT PILLS */}
              <div className="flex flex-col gap-5 items-end">
                {LEFT_INDUSTRIES.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="border-2 border-accent text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-accent/15 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* LEFT CONNECTORS */}
              <div className="flex flex-col gap-5 w-20">
                {LEFT_INDUSTRIES.map((_, i) => (
                  <div key={i} className="flex items-center h-10">
                    <div className="w-full h-px bg-white/30" />
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
              <div className="flex flex-col gap-5 w-20">
                {RIGHT_INDUSTRIES.map((_, i) => (
                  <div key={i} className="flex items-center h-10">
                    <div className="w-full h-px bg-white/30" />
                  </div>
                ))}
              </div>

              {/* RIGHT PILLS */}
              <div className="flex flex-col gap-5 items-start">
                {RIGHT_INDUSTRIES.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="border-2 border-accent text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-accent/15 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tablet Layout (grid style) */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 max-w-3xl mx-auto">
              {[...LEFT_INDUSTRIES, ...RIGHT_INDUSTRIES].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="border-2 border-accent text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-accent/15 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile Layout */}
            <div className="flex md:hidden flex-col gap-4 items-center">
              {[...LEFT_INDUSTRIES, ...RIGHT_INDUSTRIES].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="w-full max-w-xs border-2 border-accent text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-accent/15 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {label}
                </button>
              ))}
            </div>

          </div>

          <Card className='px-4 py-6 bg-white z-50 relative -top-10 max-w-md md:max-w-2xl lg:max-w-3xl mx-2'>
            <h1 className="text-center text-xl text-primary">We connect industries through innovation, empowering growth with
              cutting-edge digital transformation and actionable insights.</h1>
            <span className="bg-primary/90 px-4 py-2 text-lg w-fit mx-auto text-white rounded-md">Partnership With Us Today !</span>
          </Card>
        </section>

        {/* Technology Crafting Section */}
        <section className="px-4 bg-white space-y-10">
          <div className="">
            <h1 className="text-center text-2xl text-primary font-bold">Technology -Crafting</h1>
            <p className="text-center ">Smart Solutions Through Code</p>
          </div>

          <div className="flex justify-center gap-10 flex-wrap items-center w-full">
            {techData.map((item) => (
              <Card
                key={item.title}
                className="p-4 rounded-full shadow-sm text-primary flex items-center justify-center"
              >
                <CardContent className="text-center flex flex-col items-center justify-center">
                  <Image src={item.src.trimEnd()} alt={item.title} width={100} height={100} className='border-none p-3' />
                  <h2 className="text-xl font-semibold mb-3 text-center">
                    {item.title}
                  </h2>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="w-full flex justify-center">
            <Button className='px-16 py-5 text-sm'>View More</Button>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="bg-[#F7F5F2] py-12">

          {/* Heading */}
          <div className="px-5">
            <h1 className="text-center text-2xl md:text-3xl text-primary font-bold">
              Case Study - Growth Through Strategy
            </h1>

            <p className="text-center mt-2 text-sm md:text-base max-w-2xl mx-auto">
              Real-time web upgrade boosted visibility, lead generation, engagement, and long-term customer trust.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button>Success Stories - Code, Connect, Convert</Button>
              <Button variant="outline">View all case study</Button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-10 px-4">

            {caseStudyData.map((item) => (
              <Card
                key={item.id}
                className="w-full rounded-2xl overflow-hidden shadow-sm text-primary"
              >
                {/* IMAGE - FULL WIDTH */}
                <div className="relative w-full h-52">
                  <Image
                    src={item.src}
                    alt={item.heading}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <CardContent className="px-4">
                  <h2 className="text-lg md:text-xl font-semibold mb-3">
                    {item.heading}
                  </h2>

                  <p className="text-sm leading-relaxed mb-5 text-muted-foreground">
                    {item.desc}
                  </p>

                  <div className="flex justify-between items-center mb-5 text-sm">
                    <span>Organic Traffic</span>
                    <span className="font-semibold">{item.traffic}</span>
                  </div>
                  <div className="flex justify-between items-center mb-5 text-sm">
                    <span>Organic Traffic</span>
                    <span className="font-semibold">{item.revenue}</span>
                  </div>

                  <Button className="w-fit">
                    Read More <Play className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}

          </div>
        </section>

        {/* Development Process */}
        <section className="">
          <div className="px-5">
            <h1 className="bg-primary text-center text-xl md:text-2xl text-white w-fit mx-auto p-2 rounded-md">
              Our Offshore Software Development Process
            </h1>
          </div>
        </section>
      </main>
    </div >
  );
}
