"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Bot, Zap, LineChart, Cloud, Brain, Settings, TrendingUp } from "lucide-react";

interface HeroProps {
    onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
    const containerRef = useRef<HTMLElement>(null);
    const visualsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Elements entrance
            gsap.from(".hero-element", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
            });

            // "Caos a Orden" micro-animation
            if (visualsRef.current) {
                const nodes = gsap.utils.toArray(".visual-node");

                // Initial state: Random scattered (Caos)
                gsap.set(nodes, {
                    x: () => gsap.utils.random(-100, 100),
                    y: () => gsap.utils.random(-100, 100),
                    opacity: 0,
                    scale: 0.5,
                });

                // Animation: Organizing into a structured workflow (Orden)
                const tl = gsap.timeline({ delay: 0.5 });
                tl.to(nodes, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                }).to(nodes, {
                    x: (index) => (index * 80) - 120, // Arrange horizontally with more space for icons
                    y: 0,
                    duration: 1.2,
                    ease: "power2.inOut",
                }).to(".connection-line", {
                    width: "100%",
                    duration: 0.8,
                    ease: "power2.inOut",
                }, "-=0.6");
            }
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const icons = [
        <Cloud className="w-8 h-8 text-accentPrimary" key="cloud" />,
        <Brain className="w-8 h-8 text-accentSecondary" key="brain" />,
        <Settings className="w-8 h-8 text-accentPrimary" key="settings" />,
        <TrendingUp className="w-8 h-8 text-accentSecondary" key="trending" />
    ];

    return (
        <section ref={containerRef} className="relative pt-24 pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="max-w-2xl">
                        <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentPrimary/10 text-accentPrimary font-semibold text-sm mb-6 border border-accentPrimary/20">
                            <Bot className="w-4 h-4" />
                            <span>El único límite es tu imaginación</span>
                        </div>

                        <h1 className="hero-element text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text leading-[1.1] mb-6 tracking-tight">
                            Impulsamos tu éxito, sin importar tu escala.
                        </h1>

                        <p className="hero-element text-lg sm:text-xl text-textMuted mb-8 max-w-[680px] leading-relaxed">
                            Optimizamos tus procesos y potenciamos tu equipo con <strong>automatización</strong> e <strong>Inteligencia Artificial</strong>. Reduce hasta un <span className="text-accentPrimary font-bold">80%</span> las tareas manuales de tu agencia o empresa. ¡Es el camino hacia una operación fluida y una productividad imparable!
                        </p>

                        <div className="hero-element flex flex-col sm:flex-row gap-4 mb-12">
                            <button
                                onClick={onOpenContact}
                                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accentPrimary px-8 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-[#d47629] focus-ring"
                            >
                                Agendar Análisis Gratuito
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>

                        {/* Escaneable Benefits */}
                        <div className="hero-element grid sm:grid-cols-3 gap-6 pt-8 border-t border-border/50">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Zap className="w-5 h-5 text-accentPrimary" />
                                    <span className="font-bold text-3xl text-text">-80%</span>
                                </div>
                                <p className="text-sm text-textMuted font-medium leading-tight">en tiempos de<br />procesos manuales</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Bot className="w-5 h-5 text-accentSecondary" />
                                    <span className="font-bold text-3xl text-text">100%</span>
                                </div>
                                <p className="text-sm text-textMuted font-medium leading-tight">Adaptabilidad<br />a tu medida</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <LineChart className="w-5 h-5 text-accentPrimary" />
                                    <span className="font-bold text-3xl text-text">ROI</span>
                                </div>
                                <p className="text-sm text-textMuted font-medium leading-tight">Impacto medible<br />en rentabilidad</p>
                            </div>
                        </div>
                    </div>

                    {/* Visual: "Caos a Orden" */}
                    <div className="hero-element hidden lg:flex items-center justify-center relative h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accentPrimary/5 to-accentSecondary/5 rounded-3xl" />

                        <div ref={visualsRef} className="relative w-full h-full flex items-center justify-center">
                            {/* Connection Line (Orden) */}
                            <div className="connection-line absolute h-1 bg-surface2/20 left-12 right-12 top-1/2 -translate-y-1/2 rounded-full w-0 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-accentPrimary to-accentSecondary opacity-50" />
                            </div>

                            {/* Nodes */}
                            {icons.map((icon, i) => (
                                <div
                                    key={i}
                                    className="visual-node absolute w-16 h-16 bg-surface rounded-xl shadow-lg border border-border flex items-center justify-center z-10 transition-transform hover:scale-110"
                                >
                                    {icon}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
