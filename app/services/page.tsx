import Image from 'next/image';

export default function Services() {
    return (
        <section className="relative mt-10 w-full min-h-[80vh] flex items-start overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    alt="Mobile app development"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Overlay (Improved) */}
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/70 via-black/60 to-black/70" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-20 pt-24 md:pt-32 pb-12">
                <div className="text-white space-y-5 max-w-2xl">

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                        Mobile App Development
                    </h1>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        Redefine your digital presence with Webspire custom mobile app
                        development services, that streamline operations, enhance customer
                        engagement and drive business growth.
                    </p>

                </div>
            </div>
        </section>
    )
};