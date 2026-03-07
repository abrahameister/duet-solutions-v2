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
            // SOLUCIÓN: Cambiado a gsap.to al igual que arriba
            gsap.to(".mechanism-card", {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.15,
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
        <section ref={containerRef} className="py-16 bg-bg text-text relative overflow-hidden border-t border-white/5">
            {/* Background Geometrics */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accentPrimary/5 skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight max-w-2xl text-balance">
                        Características Avanzadas para Mejorar tu <span className="text-accentPrimary">Experiencia Digital</span>
                    </h2>
                    <p className="text-base md:text-lg text-textMuted max-w-2xl leading-relaxed">
                        Eliminamos las fricciones tecnológicas entregando sistemas de precisión. El "Fließband-Business" adaptado a tus necesidades.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {characteristics.map((feat, idx) => (
                        <div
                            key={idx}
                            // Mantenemos la lógica de empezar invisibles y animar
                            className="mechanism-card opacity-0 translate-y-8 group relative p-6 md:p-8 rounded-2xl bg-[#1A3B56] border border-white/20 transition-all duration-300 hover:border-accentPrimary hover:bg-[#234B6E] hover:shadow-2xl overflow-hidden min-h-[160px]"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accentPrimary/10 rounded-full blur-3xl group-hover:bg-accentPrimary/20 transition-colors pointer-events-none" />

                            <div className="flex gap-4 md:gap-6 items-start relative z-10">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accentSecondary/20 border border-white/20 flex items-center justify-center text-accentSecondary shadow-lg transition-transform group-hover:scale-110">
                                    {feat.icon}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold mb-2 tracking-tight text-white group-hover:text-accentPrimary transition-colors">
                                        {feat.title}
                                    </h3>
                                    <p className="text-slate-100 leading-relaxed max-w-[600px] text-sm md:text-base">
                                        {feat.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}