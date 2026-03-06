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
        title: "Adaptabilidad Total a Tu Medida",
        desc: "Comprendemos que cada negocio es único. Diseñamos estrategias personalizadas para alinearse perfectamente con tus objetivos y desafíos específicos.",
        icon: <Settings className="w-6 h-6" />
    },
    {
        title: "Soluciones Escalables para Crecer Contigo",
        desc: "Nuestras herramientas están construidas para escalar, facilitando la expansión de tus operaciones sin interrupciones a medida que tu empresa evoluciona.",
        icon: <Maximize className="w-6 h-6" />
    },
    {
        title: "Transformación que se ve y se mide",
        desc: "Aseguramos un impacto positivo y directamente medible en tu productividad y rentabilidad desde el primer mes de implementación.",
        icon: <Activity className="w-6 h-6" />
    },
    {
        title: "Soporte al Cliente y Documentación",
        desc: "Ofrecemos soporte técnico de primer nivel y una extensa base de conocimiento para que tu equipo siempre tenga el control.",
        icon: <LifeBuoy className="w-6 h-6" />
    }
];

export default function MechanismBenefits() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".mechanism-card", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-surface text-white relative overflow-hidden">
            {/* Background Geometrics */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-surface2/30 skew-x-12 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight max-w-2xl text-balance">
                        Características Avanzadas para Mejorar tu <span className="text-accentPrimary">Experiencia Digital</span>
                    </h2>
                    <p className="text-lg text-[#cbd5e1] max-w-2xl leading-relaxed">
                        Eliminamos las fricciones tecnológicas entregando sistemas de precisión. El "Fließband-Business" adaptado a tus necesidades del mundo real.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {characteristics.map((feat, idx) => (
                        <div
                            key={idx}
                            className="mechanism-card group relative p-8 rounded-2xl bg-surface2/50 border border-white/10 backdrop-blur-sm transition-all hover:bg-surface2 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accentPrimary/5 rounded-full blur-3xl group-hover:bg-accentPrimary/10 transition-colors" />

                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accentSecondary shadow-inner">
                                    {feat.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 tracking-tight">{feat.title}</h3>
                                    <p className="text-[#94a3b8] leading-relaxed max-w-[600px]">{feat.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
