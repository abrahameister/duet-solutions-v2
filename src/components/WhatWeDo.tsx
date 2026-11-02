"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Settings, Link as LinkIcon, Monitor, BrainCircuit } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function WhatWeDo() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const ctx = gsap.context(() => {
            if (prefersReducedMotion) {
                gsap.set(".wwd-item", { y: 0, opacity: 1 });
                return;
            }
            gsap.fromTo(
                ".wwd-item",
                { y: 16, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.55,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 92%",
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const capabilities = [
        {
            title: "Automatización",
            desc: "Eliminar tareas repetitivas y seguimiento manual.",
            icon: <Settings className="w-5 h-5" />,
            accent: "text-brandOrange bg-brandOrange/10 border-brandOrange/25",
        },
        {
            title: "Integración",
            desc: "Conectar sistemas, datos y personas sin fricción.",
            icon: <LinkIcon className="w-5 h-5" />,
            accent: "text-brandGreen bg-brandGreen/10 border-brandGreen/25",
        },
        {
            title: "Software a medida",
            desc: "Construir herramientas alrededor del proceso real.",
            icon: <Monitor className="w-5 h-5" />,
            accent: "text-brandOrange bg-brandOrange/10 border-brandOrange/25",
        },
        {
            title: "Inteligencia Artificial",
            desc: "Aplicar IA cuando genera una mejora operacional concreta.",
            icon: <BrainCircuit className="w-5 h-5" />,
            accent: "text-brandGreen bg-brandGreen/10 border-brandGreen/25",
        },
    ];

    return (
        <section
            ref={sectionRef}
            aria-label="Pilares de capacidades"
            className="bg-[#0A1828] border-y border-white/10 py-8 md:py-10 relative z-20"
        >
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((cap, idx) => (
                        <div
                            key={idx}
                            className="wwd-item flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/15 transition-colors"
                        >
                            <div
                                className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${cap.accent}`}
                                aria-hidden="true"
                            >
                                {cap.icon}
                            </div>
                            <div>
                                <h2 className="text-base font-bold text-white mb-1">
                                    {cap.title}
                                </h2>
                                <p className="text-sm text-textMuted leading-snug">
                                    {cap.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
