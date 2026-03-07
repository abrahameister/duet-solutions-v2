"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Split, Code2, Sparkles, Globe } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const services = [
    {
        title: "Automatización de Procesos",
        description: "Liberamos a tu equipo de tareas manuales conectando tus aplicaciones favoritas para que te enfoques en lo que importa.",
        icon: <Split className="w-5 h-5 md:w-6 md:h-6" />,
        badges: ["n8n", "Apps Script"]
    },
    {
        title: "Desarrollo Low-Code",
        description: "Construimos aplicaciones empresariales, webapps y APIs a medida en tiempo récord, adaptándonos exactamente a tu negocio.",
        icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" />,
        badges: ["Power Apps", "AppSheet"]
    },
    {
        title: "Inteligencia Artificial",
        description: "Integramos el poder de la IA en tus flujos diarios para analizar datos en segundos y optimizar la toma de decisiones.",
        icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
        badges: ["OpenAI", "Gemini"]
    },
    {
        title: "Presencia Digital",
        description: "Diseñamos sitios web y landing pages de alta conversión conectadas fluidamente con tus sistemas automatizados.",
        icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
        badges: ["Next.js", "React"]
    }
];

export default function ServiceCategories() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // SOLUCIÓN: Usamos gsap.to en lugar de gsap.from para evitar el bug de opacidad en React 18
            gsap.to(".service-card", {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="servicios" ref={sectionRef} className="py-16 bg-bg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4 tracking-tight">
                        Tecnologías y Soluciones
                    </h2>
                    <p className="text-base md:text-lg text-textMuted text-balance">
                        Nuestro stack de eficiencia diseñado para construir un ecosistema digital conectado y automatizado.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            // Opacidad 0 inicial por CSS para que GSAP haga el trabajo limpio
                            className="service-card opacity-0 translate-y-8 group p-6 rounded-2xl bg-[#1A3B56] border border-white/20 transition-all duration-300 hover:border-accentPrimary hover:bg-[#234B6E] hover:shadow-2xl flex flex-col items-start min-h-[300px]"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accentPrimary/20 border border-white/20 mb-5 transition-transform group-hover:scale-110 duration-300 shadow-lg text-white">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-accentPrimary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-100 leading-relaxed mb-6 text-sm">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {service.badges.map((badge, bIdx) => (
                                    <span
                                        key={bIdx}
                                        className="px-3 py-1 rounded-full bg-slate-900 border border-white/20 text-[10px] font-semibold text-white group-hover:bg-accentPrimary group-hover:border-accentPrimary transition-all"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}