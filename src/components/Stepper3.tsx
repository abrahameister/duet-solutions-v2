"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Search, Code2, Rocket } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const steps = [
    {
        num: "01",
        title: "Auditoría de Procesos",
        desc: "Identificamos cuellos de botella y procesos manuales que están frenando tu crecimiento operativo.",
        icon: <Search className="w-6 h-6" />
    },
    {
        num: "02",
        title: "Desarrollo Low-Code e IA",
        desc: "Construimos tu sistema a medida aprovechando el stack de Google Cloud, Appsheet y automatizaciones IA.",
        icon: <Code2 className="w-6 h-6" />
    },
    {
        num: "03",
        title: "Implementación y Ahorro",
        desc: "Despliegue ágil con soporte continuo para asegurar la adopción y medir el retorno de inversión.",
        icon: <Rocket className="w-6 h-6" />
    }
];

export default function Stepper3() {
    const containerRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate vertical line
            gsap.fromTo(lineRef.current,
                { height: "0%" },
                {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "bottom 60%",
                        scrub: true,
                    }
                }
            );

            // Animate steps
            const stepElements = gsap.utils.toArray(".process-step");
            stepElements.forEach((step: any, i) => {
                gsap.to(step, {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: step,
                        start: "top 85%",
                    }
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="proceso" ref={containerRef} className="py-24 bg-bg relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">
                        Proceso de Transformación
                    </h2>
                    <p className="text-lg text-textMuted">
                        3 pasos exactos para pasar del caos manual al orden automatizado.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Track Background */}
                    <div className="absolute left-[39px] md:left-[49px] top-0 bottom-0 w-0.5 bg-border rounded-full" />

                    {/* Animated Vertical Line */}
                    <div
                        ref={lineRef}
                        className="absolute left-[39px] md:left-[49px] top-0 w-0.5 bg-gradient-to-b from-accentPrimary to-accentSecondary rounded-full origin-top"
                    />

                    <div className="space-y-16 relative">
                        {steps.map((step, idx) => (
                            <div key={idx} className="process-step opacity-0 -translate-x-8 flex items-start gap-8 md:gap-12 relative z-10">
                                {/* Number / Icon */}
                                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-surface border border-border shadow-sm flex flex-col items-center justify-center relative bg-clip-padding">
                                    <span className="text-sm font-bold text-accentPrimary mb-1">Paso {step.num}</span>
                                    <div className="text-text">{step.icon}</div>
                                </div>

                                {/* Content */}
                                <div className="pt-4 pb-8">
                                    <h3 className="text-2xl font-bold text-text mb-3 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg text-textMuted leading-relaxed max-w-[500px]">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
