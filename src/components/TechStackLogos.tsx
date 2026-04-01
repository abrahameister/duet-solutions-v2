import React from 'react';

const TechStackLogos = () => {
    const logos = [
        { name: "Make", src: "/images/logos/make.svg" },
        { name: "n8n", src: "/images/logos/n8n.svg" },
        { name: "OpenAI", src: "/images/logos/openai.svg" },
        { name: "Google Cloud", src: "/images/logos/gcloud.svg" },
        { name: "Next.js", src: "/images/logos/nextjs.svg" },
        { name: "Power Platform", src: "/images/logos/powerplatform.svg" },
    ];

    return (
        <section className="py-12 border-b border-white/5 bg-bg">
            <div className="container mx-auto px-4 max-w-6xl">
                <p className="text-center text-xs md:text-sm font-bold tracking-[0.25em] text-slate-500 mb-8 uppercase">
                    Tecnologías que dominamos:
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex justify-center">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-8 md:h-10 w-auto opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStackLogos;
