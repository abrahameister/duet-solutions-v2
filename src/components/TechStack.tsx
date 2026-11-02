"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Server, Zap, Code, Sparkles, Cloud } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function TechStack() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const ctx = gsap.context(() => {
            if (prefersReducedMotion) {
                gsap.set(".tech-group", { y: 0, opacity: 1 });
                return;
            }
            gsap.fromTo(
                ".tech-group",
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 82%",
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const featuredLogos = [
        { name: "Microsoft Power Platform", src: "/images/logos/powerplatform.svg" },
        { name: "Google Cloud", src: "/images/logos/gcloud.svg" },
        { name: "n8n", src: "/images/logos/n8n.svg" },
        { name: "Make", src: "/images/logos/make.svg" },
        { name: "Next.js & React", src: "/images/logos/nextjs.svg" },
        { name: "OpenAI & IA", src: "/images/logos/openai.svg" },
    ];

    const stack = [
        {
            category: "Microsoft Power Platform",
            icon: <Server className="w-5 h-5 text-brandOrange shrink-0" />,
            techs: ["Power Apps", "Power Automate", "Power Pages", "Power BI"],
        },
        {
            category: "Integración",
            icon: <Zap className="w-5 h-5 text-brandGreen shrink-0" />,
            techs: ["APIs REST / GraphQL", "n8n", "Make", "Webhooks"],
        },
        {
            category: "Desarrollo a Medida",
            icon: <Code className="w-5 h-5 text-brandOrange shrink-0" />,
            techs: [
                "React & Next.js",
                "Node.js",
                "TypeScript",
                "PostgreSQL",
                "Supabase",
                "PWA",
            ],
        },
        {
            category: "Inteligencia Artificial",
            icon: <Sparkles className="w-5 h-5 text-brandGreen shrink-0" />,
            techs: [
                "OpenAI",
                "Claude / Anthropic",
                "Google Gemini",
                "Vertex AI",
                "Machine Learning",
            ],
        },
        {
            category: "Google Cloud Platform",
            icon: <Cloud className="w-5 h-5 text-brandOrange shrink-0" />,
            techs: [
                "Google Cloud Platform",
                "BigQuery",
                "Dataflow",
                "Cloud Storage",
                "Cloud Run",
                "Google Workspace",
            ],
        },
    ];

    return (
        <section
            id="tecnologia"
            ref={sectionRef}
            aria-labelledby="techstack-heading"
            className="py-24 bg-bg border-t border-border/20 scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-bold uppercase tracking-wider text-brandOrange mb-4">
                        Ecosistema Tecnológico
                    </span>
                    <h2
                        id="techstack-heading"
                        className="text-3xl md:text-5xl font-extrabold text-text mb-4 tracking-tight"
                    >
                        Tecnología elegida según el problema.
                    </h2>
                    <p className="text-base md:text-lg text-textMuted max-w-2xl mx-auto">
                        Seleccionamos y combinamos las herramientas que mejor resuelven el
                        desafío operacional, priorizando integraciones ágiles y sistemas
                        escalables.
                    </p>
                </div>

                {/* Featured Vector Logos Strip */}
                <div className="tech-group mb-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {featuredLogos.map((logo) => (
                        <div
                            key={logo.name}
                            className="flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-surface/20 border border-white/[0.08] hover:border-white/20 hover:bg-surface/40 transition-all group"
                        >
                            <div className="relative h-8 w-24 flex items-center justify-center">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={96}
                                    height={32}
                                    className="max-h-7 w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <span className="text-xs font-semibold text-textMuted group-hover:text-white transition-colors text-center">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {stack.map((group, idx) => (
                        <div
                            key={idx}
                            className="tech-group bg-surface/20 border border-border/30 rounded-2xl p-6 hover:bg-surface/40 hover:border-border/60 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-4 border-b border-border/30 pb-4">
                                <span aria-hidden="true">{group.icon}</span>
                                <h3 className="font-bold text-white leading-tight text-base">
                                    {group.category}
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {group.techs.map((tech, tIdx) => (
                                    <li
                                        key={tIdx}
                                        className="text-sm font-medium text-textMuted flex items-center gap-2.5"
                                    >
                                        <span
                                            className="w-1.5 h-1.5 rounded-full bg-brandOrange/70 shrink-0"
                                            aria-hidden="true"
                                        />
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
