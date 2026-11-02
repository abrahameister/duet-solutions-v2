"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Workflow, PlugZap, AppWindow, BrainCircuit } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const services = [
    {
        title: "Automatización empresarial",
        description:
            "Flujos, tareas, aprobaciones, alertas, formularios inteligentes y reportería automatizada.",
        icon: <Workflow className="w-6 h-6" />,
    },
    {
        title: "Integración de sistemas",
        description:
            "APIs, webhooks y orquestación de datos para conectar plataformas existentes sin doble digitación.",
        icon: <PlugZap className="w-6 h-6" />,
    },
    {
        title: "Software a medida",
        description:
            "Aplicaciones empresariales, torres de control operacional, webapps, PWA y portales B2B.",
        icon: <AppWindow className="w-6 h-6" />,
    },
    {
        title: "Inteligencia Artificial aplicada",
        description:
            "Procesamiento de información, clasificación, análisis, planificación asistida y agentes operacionales.",
        icon: <BrainCircuit className="w-6 h-6" />,
    },
];

export default function ServiceCategories() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const ctx = gsap.context(() => {
            if (prefersReducedMotion) {
                gsap.set(".service-card", { y: 0, opacity: 1 });
                return;
            }
            gsap.to(".service-card", {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.12,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 82%",
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="servicios"
            ref={sectionRef}
            aria-labelledby="services-heading"
            className="py-24 bg-bg relative scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandGreen/10 border border-brandGreen/25 text-xs font-bold uppercase tracking-wider text-brandGreen mb-4">
                        Capacidades de Ingeniería
                    </span>
                    <h2
                        id="services-heading"
                        className="text-3xl md:text-5xl font-extrabold text-text mb-6 tracking-tight"
                    >
                        Soluciones Tecnológicas
                    </h2>
                    <p className="text-base md:text-lg text-textMuted text-balance mb-6">
                        Desarrollamos e integramos las herramientas adecuadas según la
                        realidad operacional de tu negocio.
                    </p>
                    <div className="inline-block p-4 rounded-2xl bg-brandOrange/10 border border-brandOrange/25">
                        <p className="text-sm md:text-base font-medium text-brandOrange">
                            No siempre es necesario reemplazar los sistemas existentes. Muchas
                            veces el mayor impacto está en lograr que conversen entre sí.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <article
                            key={idx}
                            className="service-card opacity-0 translate-y-8 group p-7 rounded-2xl bg-surface/30 border border-border/40 transition-all duration-300 hover:border-brandGreen/50 hover:bg-surface/50 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(134,174,63,0.12)] flex flex-col items-start"
                        >
                            <div
                                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy border border-border mb-5 transition-transform group-hover:scale-110 group-hover:border-brandGreen/50 duration-300 shadow-sm text-brandGreen"
                                aria-hidden="true"
                            >
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-text mb-3 tracking-tight group-hover:text-brandGreen transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-textMuted leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
