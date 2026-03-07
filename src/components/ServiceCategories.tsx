"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Database, FileCode, CheckCircle2, Box } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const services = [
    {
        title: "Appsheet",
        description: "Desarrollo de aplicaciones empresariales sin código, optimizando flujos de trabajo y recolección de datos.",
        icon: <Box className="w-8 h-8" />,
        color: "text-accentPrimary",
        bg: "bg-accentPrimary/10",
    },
    {
        title: "BigQuery",
        description: "Procesamos y analizamos grandes volúmenes de datos para que puedas obtener insights valiosos y tomar decisiones informadas.",
        icon: <Database className="w-8 h-8" />,
        color: "text-text",
        bg: "bg-text/10",
    },
    {
        title: "Appscript",
        description: "Creamos scripts personalizados para automatizar tareas repetitivas en Google Sheets, Docs, Gmail y Drive, ahorrándote tiempo y esfuerzo.",
        icon: <FileCode className="w-8 h-8" />,
        color: "text-accentSecondary",
        bg: "bg-accentSecondary/10",
    },
    {
        title: "Google Workspace",
        description: "Implementación, migración y capacitación para aprovechar al máximo las herramientas colaborativas de Google.",
        icon: <CheckCircle2 className="w-8 h-8" />,
        color: "text-accentPrimary",
        bg: "bg-accentPrimary/10",
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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="service-card group relative p-8 rounded-2xl bg-surface border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                        >
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.bg} ${service.color} mb-6 transition-transform group-hover:scale-110`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-text mb-3">
                                {service.title}
                            </h3>
                            <p className="text-textMuted leading-relaxed">
                                {service.description}
                            </p>

                            {/* Decorative Geometric Element */}
                            <div className="absolute -right-6 -bottom-6 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none">
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-text">
                                    <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
