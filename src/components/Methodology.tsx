"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare, Eye, PenTool, Rocket, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const steps = [
    {
        num: "01",
        title: "Entender",
        desc: "Conversamos con quienes realmente ejecutan el proceso en el día a día.",
        icon: <MessageSquare className="w-6 h-6" />,
    },
    {
        num: "02",
        title: "Observar",
        desc: "Cuando la operación lo requiere, realizamos levantamientos online o directamente en terreno según la naturaleza de la operación.",
        icon: <Eye className="w-6 h-6" />,
    },
    {
        num: "03",
        title: "Diseñar",
        desc: "Identificamos fricciones, reprocesos, integraciones y oportunidades concretas de automatización.",
        icon: <PenTool className="w-6 h-6" />,
    },
    {
        num: "04",
        title: "Implementar",
        desc: "Construimos, validamos e implementamos la solución junto al equipo asegurando adopción real.",
        icon: <Rocket className="w-6 h-6" />,
    },
];

interface MethodologyProps {
    onOpenContact: () => void;
}

export default function Methodology({ onOpenContact }: MethodologyProps) {
    const containerRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const ctx = gsap.context(() => {
            if (prefersReducedMotion) {
                gsap.set(lineRef.current, { height: "100%" });
                gsap.set(".process-step", { x: 0, opacity: 1 });
                return;
            }

            // Animate vertical line
            gsap.fromTo(
                lineRef.current,
                { height: "0%" },
                {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "bottom 60%",
                        scrub: true,
                    },
                }
            );

            // Animate steps
            const stepElements = gsap.utils.toArray<HTMLElement>(".process-step");
            stepElements.forEach((step) => {
                gsap.to(step, {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: step,
                        start: "top 85%",
                    },
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="proceso"
            ref={containerRef}
            aria-labelledby="methodology-heading"
            className="py-24 bg-navy relative border-t border-border/20 scroll-mt-20"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-bold uppercase tracking-wider text-brandGreen mb-4">
                        Metodología de Trabajo
                    </span>
                    <h2
                        id="methodology-heading"
                        className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Primero entendemos.
                        <br />
                        <span className="text-brandOrange">Después construimos.</span>
                    </h2>
                </div>

                <div className="relative mb-20">
                    {/* Vertical Track Background */}
                    <div
                        className="absolute left-[39px] md:left-[49px] top-0 bottom-0 w-0.5 bg-border rounded-full"
                        aria-hidden="true"
                    />

                    {/* Animated Vertical Line */}
                    <div
                        ref={lineRef}
                        className="absolute left-[39px] md:left-[49px] top-0 w-0.5 bg-gradient-to-b from-brandOrange to-brandGreen rounded-full origin-top"
                        aria-hidden="true"
                    />

                    <div className="space-y-14 relative">
                        {steps.map((step, idx) => (
                            <div
                                key={idx}
                                className="process-step opacity-0 -translate-x-8 flex items-start gap-6 sm:gap-8 md:gap-12 relative z-10"
                            >
                                {/* Number / Icon */}
                                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-navyDark1 border-2 border-border shadow-md flex flex-col items-center justify-center relative bg-clip-padding">
                                    <span className="text-xs font-bold text-brandOrange mb-1">
                                        {step.num}
                                    </span>
                                    <div className="text-white" aria-hidden="true">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="pt-2 md:pt-4 pb-4">
                                    <h3 className="text-2xl font-bold text-white mb-2.5 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-base sm:text-lg text-textMuted leading-relaxed max-w-[540px]">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Diagnóstico Banner */}
                <div className="bg-navyDark1 border border-brandOrange/30 rounded-3xl p-8 md:p-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden">
                    <div
                        className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-brandOrange/10 blur-3xl pointer-events-none"
                        aria-hidden="true"
                    />
                    <div className="max-w-2xl relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-3">
                            Diagnóstico inicial sin costo
                        </h3>
                        <p className="text-textMuted mb-3 leading-relaxed">
                            Antes de presentar una propuesta de implementación realizamos una
                            primera etapa de análisis para comprender el problema y determinar
                            si existe una oportunidad real de mejora.
                        </p>
                        <p className="text-brandOrange font-semibold text-sm">
                            No llegamos con una plataforma predeterminada. La solución se
                            define después de entender el problema.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onOpenContact}
                        className="relative z-10 group shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-brandOrange px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#e67a14] hover:shadow-[0_0_25px_rgba(255,140,26,0.35)] active:scale-[0.98] focus-ring whitespace-nowrap"
                    >
                        Solicitar diagnóstico inicial
                        <ArrowRight
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
