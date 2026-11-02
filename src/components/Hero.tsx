"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SloganSignature from "@/components/ui/SloganSignature";
import TheProblem from "@/components/TheProblem";

interface HeroProps {
    onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
    const heroRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const ctx = gsap.context(() => {
            if (!contentRef.current) return;
            if (prefersReducedMotion) {
                gsap.set(contentRef.current.children, { y: 0, opacity: 1 });
                return;
            }
            gsap.fromTo(
                contentRef.current.children,
                { y: 24, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.75,
                    stagger: 0.1,
                    ease: "power2.out",
                    delay: 0.15,
                }
            );
        }, heroRef);
        return () => ctx.revert();
    }, []);

    const scrollToCases = () => {
        const element = document.getElementById("casos");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            ref={heroRef}
            className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#071120] py-12 lg:py-20"
            aria-labelledby="hero-main-heading"
        >
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/Fondo_Duet.jfif"
                    alt="Operación digital conectada en Duet Solutions"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center opacity-50"
                />

                {/* Multi-layer Gradient Overlay to guarantee WCAG AA contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#071120] via-[#071120]/90 to-[#071120]/70" />
                <div className="absolute inset-0 bg-geist-grid opacity-40 pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    {/* Left Column: Value Proposition & Conversion */}
                    <div ref={contentRef} className="lg:col-span-7 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 text-xs sm:text-sm font-semibold text-white/95 mb-6 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-brandGreen animate-pulse" />
                            <span>Transformación Operacional · Chile &amp; LATAM</span>
                        </div>

                        <h1
                            id="hero-main-heading"
                            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-[1.08] tracking-tight text-balance"
                        >
                            Transformamos procesos reales en soluciones digitales que{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandOrange to-[#FFB366]">
                                escalan.
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed font-normal">
                            Analizamos cómo funciona tu operación, identificamos oportunidades
                            de mejora y construimos soluciones mediante{" "}
                            <strong className="text-white font-semibold">
                                automatización, integración, software a medida e inteligencia
                                artificial.
                            </strong>
                        </p>

                        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-semibold text-white/90 mb-8">
                            <span className="inline-flex items-center gap-1.5 text-brandGreen">
                                <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                                Diagnóstico inicial sin costo
                            </span>
                            <span className="text-white/40" aria-hidden="true">
                                •
                            </span>
                            <span>Levantamiento en terreno o remoto</span>
                            <span className="text-white/40" aria-hidden="true">
                                •
                            </span>
                            <span>Sin ataduras a una sola plataforma</span>
                        </div>

                        <div className="mb-9">
                            <SloganSignature size="lg" />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                type="button"
                                onClick={onOpenContact}
                                className="group flex items-center justify-center gap-2.5 rounded-xl bg-brandOrange px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#e67a14] hover:shadow-[0_0_30px_rgba(255,140,26,0.4)] active:scale-[0.98] focus-ring shadow-lg"
                            >
                                Solicitar diagnóstico inicial
                                <ArrowRight
                                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </button>
                            <button
                                type="button"
                                onClick={scrollToCases}
                                className="group flex items-center justify-center gap-2 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/25 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-white/50 active:scale-[0.98] focus-ring"
                            >
                                Ver casos reales
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Interactive Connected Systems Hub */}
                    <div className="lg:col-span-5 w-full">
                        <TheProblem />
                    </div>
                </div>
            </div>
        </section>
    );
}
