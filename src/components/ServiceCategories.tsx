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
        description: "Liberamos a tu equipo de las tareas manuales y repetitivas. Conectamos tus herramientas para que te enfoques en escalar tu negocio.",
        icon: <Split className="w-8 h-8" />,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        badges: ["Power Automate", "n8n", "Google Apps Script"]
    },
    {
        title: "Desarrollo Low-Code & No-Code",
        description: "Construimos aplicaciones empresariales, webapps y APIs a medida en tiempo récord, adaptándonos a las necesidades de tu negocio.",
        icon: <Code2 className="w-8 h-8" />,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        badges: ["Power Apps", "AppSheet", "Apps Script"]
    },
    {
        title: "Inteligencia Artificial",
        description: "Integramos el poder de la IA en tus flujos diarios para analizar datos en segundos, generar respuestas automáticas y optimizar la toma de decisiones.",
        icon: <Sparkles className="w-8 h-8" />,
        color: "text-orange-400",
        bg: "bg-orange-400/10",
        badges: ["OpenAI", "Gemini"]
    },
    {
        title: "Presencia Digital",
        description: "Diseñamos sitios web y landing pages de alto impacto, optimizados para la conversión y conectados fluidamente con tus sistemas automatizados.",
        icon: <Globe className="w-8 h-8" />,
        color: "text-pink-400",
        bg: "bg-pink-400/10",
        badges: ["Next.js", "TypeScript", "React"]
    }
];

export default function ServiceCategories() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-card", {
                y: 40,
                opacity: 0,
                duration: 0.8,
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
        <section id="servicios" ref={sectionRef} className="py-24 bg-bg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">
                        Tecnologías y Soluciones
                    </h2>
                    <p className="text-lg text-textMuted">
                        Nuestro stack de eficiencia diseñado para construir un ecosistema digital conectado y automatizado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="service-card group p-10 rounded-3xl bg-surface border border-white/5 transition-all duration-300 hover:border-accentPrimary/20 hover:shadow-2xl hover:shadow-accentPrimary/5 flex flex-col items-start"
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bg} ${service.color} mb-8 transition-transform group-hover:scale-110 duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-text mb-4 tracking-tight">
                                {service.title}
                            </h3>
                            <p className="text-textMuted leading-relaxed mb-10 text-lg">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {service.badges.map((badge, bIdx) => (
                                    <span
                                        key={bIdx}
                                        className="px-4 py-1.5 rounded-full bg-surface2/40 border border-white/5 text-xs font-semibold text-textMuted group-hover:text-text transition-colors"
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
