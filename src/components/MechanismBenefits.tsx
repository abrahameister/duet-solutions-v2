"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Settings, Maximize, Activity, LifeBuoy } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const characteristics = [
    {
        title: "Adaptabilidad Total",
        desc: "Diseñamos estrategias personalizadas para alinearse perfectamente con tus objetivos y desafíos específicos.",
        icon: <Settings className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
        title: "Soluciones Escalables",
        desc: "Facilitamos la expansión de tus operaciones sin interrupciones a medida que tu empresa evoluciona.",
        icon: <Maximize className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
        title: "Transformación Medible",
        desc: "Aseguramos un impacto positivo en tu productividad y rentabilidad desde el primer mes.",
        icon: <Activity className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
        title: "Soporte y Documentación",
        desc: "Ofrecemos soporte técnico de primer nivel para que tu equipo siempre tenga el control total.",
        icon: <LifeBuoy className="w-5 h-5 md:w-6 md:h-6" />
    }
];

export default function MechanismBenefits() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".mechanism-card", {
                y: 30,
                opacity: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-16 bg-bg text-text relative overflow-hidden border-t border-border/50">
            {/* Background Geometrics */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-surface/10 skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight max-w-2xl text-balance">
                        Características Avanzadas para Mejorar tu <span className="text-accentPrimary">Experiencia Digital</span>
                    </h2>
                    <p className="text-base md:text-lg text-textMuted max-w-2xl leading-relaxed">
                        Eliminamos las fricciones tecnológicas entregando sistemas de precisión. El "Fließband-Business" adaptado a tus necesidades.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {characteristics.map((feat, idx) => (
                        <div
                            key={idx}
                            className="mechanism-card group relative p-6 md:p-8 rounded-2xl bg-surface border border-white/5 backdrop-blur-sm transition-all hover:border-accentPrimary/20 hover:shadow-xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accentPrimary/5 rounded-full blur-3xl group-hover:bg-accentPrimary/10 transition-colors" />

                            <div className="flex gap-4 md:gap-6 items-start">
                                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accentSecondary/10 border border-accentSecondary/20 flex items-center justify-center text-accentSecondary shadow-inner transition-transform group-hover:scale-110">
                                    {feat.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold mb-2 tracking-tight group-hover:text-accentPrimary transition-colors">{feat.title}</h3>
                                    <p className="text-textMuted leading-relaxed max-w-[600px] text-sm md:text-base">{feat.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
