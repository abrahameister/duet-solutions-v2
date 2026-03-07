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
        color: "text-blue-400",
        bg: "bg-blue-400/20",
        badges: ["n8n", "Apps Script"]
    },
    {
        title: "Desarrollo Low-Code",
        description: "Construimos aplicaciones empresariales, webapps y APIs a medida en tiempo récord, adaptándonos exactamente a tu negocio.",
        icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" />,
        color: "text-emerald-400",
        bg: "bg-emerald-400/20",
        badges: ["Power Apps", "AppSheet"]
    },
    {
        title: "Inteligencia Artificial",
        description: "Integramos el poder de la IA en tus flujos diarios para analizar datos en segundos y optimizar la toma de decisiones.",
        icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
        color: "text-orange-400",
        bg: "bg-orange-400/20",
        badges: ["OpenAI", "Gemini"]
    },
    {
        title: "Presencia Digital",
        description: "Diseñamos sitios web y landing pages de alta conversión conectadas fluidamente con tus sistemas automatizados.",
        icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
        color: "text-pink-400",
        bg: "bg-pink-400/20",
        badges: ["Next.js", "React"]
    }
];

export default function ServiceCategories() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-card", {
                y: 20,
                opacity: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="service-card group p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-accentPrimary/40 hover:bg-white/10 hover:shadow-2xl flex flex-col items-start"
                        >
                            <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl ${service.bg} ${service.color} border border-white/5 mb-5 transition-transform group-hover:scale-110 duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-text mb-2 tracking-tight group-hover:text-accentPrimary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-text/90 leading-relaxed mb-6 text-xs md:text-sm">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mt-auto">
                                {service.badges.map((badge, bIdx) => (
                                    <span
                                        key={bIdx}
                                        className="px-2.5 py-1 rounded-full bg-surface/60 border border-white/10 text-[9px] md:text-xs font-semibold text-text group-hover:bg-accentPrimary/20 group-hover:border-accentPrimary/30 transition-all"
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
