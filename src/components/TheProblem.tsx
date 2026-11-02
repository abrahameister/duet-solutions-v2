"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Database,
    FileText,
    Users,
    Cloud,
    HardDrive,
    Activity,
    BarChart,
    Settings,
    GitCommit,
    Search,
    Layers,
} from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function TheProblem() {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const ctx = gsap.context(() => {
            if (prefersReducedMotion) {
                gsap.set(cardRef.current, { y: 0, opacity: 1 });
                return;
            }

            gsap.fromTo(
                cardRef.current,
                { y: 24, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 88%",
                    },
                }
            );

            // Animated Beam pulse along SVG paths
            gsap.fromTo(
                ".beam-line-in",
                { strokeDashoffset: 120 },
                {
                    strokeDashoffset: 0,
                    duration: 2.2,
                    repeat: -1,
                    ease: "none",
                    stagger: 0.25,
                }
            );

            gsap.fromTo(
                ".beam-line-out",
                { strokeDashoffset: 120 },
                {
                    strokeDashoffset: 0,
                    duration: 2.2,
                    repeat: -1,
                    ease: "none",
                    stagger: 0.25,
                    delay: 0.6,
                }
            );
        }, cardRef);
        return () => ctx.revert();
    }, []);

    const inputs = [
        { name: "ERP", icon: <Database className="w-4 h-4 text-brandOrange" /> },
        { name: "RR.HH.", icon: <Users className="w-4 h-4 text-brandGreen" /> },
        { name: "Microsoft 365", icon: <Cloud className="w-4 h-4 text-brandOrange" /> },
        {
            name: "Apps internas",
            icon: <FileText className="w-4 h-4 text-brandGreen" />,
        },
        {
            name: "Bases de datos",
            icon: <HardDrive className="w-4 h-4 text-brandOrange" />,
        },
    ];

    const outputs = [
        { name: "Personas", icon: <Users className="w-4 h-4 text-brandGreen" /> },
        { name: "Operación", icon: <Activity className="w-4 h-4 text-brandOrange" /> },
        { name: "Datos limpios", icon: <Database className="w-4 h-4 text-brandGreen" /> },
        { name: "Reportería", icon: <BarChart className="w-4 h-4 text-brandOrange" /> },
    ];

    const bottomActions = [
        {
            name: "Integrar",
            desc: "Sincronizar información.",
            icon: <GitCommit className="w-4 h-4 text-brandGreen" />,
        },
        {
            name: "Automatizar",
            desc: "Eliminar tareas repetitivas.",
            icon: <Settings className="w-4 h-4 text-brandOrange" />,
        },
        {
            name: "Controlar",
            desc: "Alertas y trazabilidad.",
            icon: <Layers className="w-4 h-4 text-brandGreen" />,
        },
        {
            name: "Visualizar",
            desc: "Decisiones en tiempo real.",
            icon: <Search className="w-4 h-4 text-brandOrange" />,
        },
    ];

    return (
        <div
            id="problema"
            ref={cardRef}
            className="relative rounded-3xl p-6 sm:p-8 bg-[#0A1929]/90 backdrop-blur-xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.45)] flex flex-col justify-between w-full overflow-hidden"
        >
            {/* Ambient radial glow */}
            <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brandOrange/10 blur-3xl pointer-events-none"
                aria-hidden="true"
            />
            <div
                className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-brandGreen/10 blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            <div className="relative z-10 text-center mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-brandOrange mb-2">
                    Arquitectura Conectada
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                    Sistemas conectados,{" "}
                    <span className="text-brandGreen">no sistemas aislados.</span>
                </h2>
            </div>

            {/* Interactive Node & Animated Beam Diagram */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 items-center gap-4 my-2">
                {/* Inputs Column */}
                <div className="sm:col-span-4 flex flex-col gap-2.5 z-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-textMuted/80 text-center sm:text-left mb-0.5">
                        Fuentes Actuales
                    </span>
                    {inputs.map((input, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#071120]/90 rounded-xl border border-white/10 text-xs font-semibold text-white shadow-sm hover:border-brandOrange/50 transition-colors"
                        >
                            <span className="shrink-0" aria-hidden="true">
                                {input.icon}
                            </span>
                            <span className="truncate">{input.name}</span>
                        </div>
                    ))}
                </div>

                {/* Duet Central Hub with Animated SVG Beams */}
                <div className="sm:col-span-4 flex flex-col items-center justify-center relative py-6 sm:py-0">
                    {/* Desktop Animated SVG Connector Lines */}
                    <svg
                        className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 200 220"
                        fill="none"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        {/* Base Tracks */}
                        <path
                            d="M 0 35 C 50 35, 50 110, 100 110"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M 0 72 C 45 72, 55 110, 100 110"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M 0 110 L 100 110"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M 0 148 C 45 148, 55 110, 100 110"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M 0 185 C 50 185, 50 110, 100 110"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1.5"
                        />

                        <path
                            d="M 100 110 C 150 110, 150 45, 200 45"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M 100 110 C 150 110, 150 90, 200 90"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M 100 110 C 150 110, 150 135, 200 135"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M 100 110 C 150 110, 150 180, 200 180"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1.5"
                        />

                        {/* Animated Glowing Beams In */}
                        <path
                            className="beam-line-in"
                            d="M 0 35 C 50 35, 50 110, 100 110"
                            stroke="#FF8C1A"
                            strokeWidth="2"
                            strokeDasharray="24 96"
                            strokeLinecap="round"
                        />
                        <path
                            className="beam-line-in"
                            d="M 0 110 L 100 110"
                            stroke="#86AE3F"
                            strokeWidth="2"
                            strokeDasharray="24 96"
                            strokeLinecap="round"
                        />
                        <path
                            className="beam-line-in"
                            d="M 0 185 C 50 185, 50 110, 100 110"
                            stroke="#FF8C1A"
                            strokeWidth="2"
                            strokeDasharray="24 96"
                            strokeLinecap="round"
                        />

                        {/* Animated Glowing Beams Out */}
                        <path
                            className="beam-line-out"
                            d="M 100 110 C 150 110, 150 45, 200 45"
                            stroke="#86AE3F"
                            strokeWidth="2"
                            strokeDasharray="24 96"
                            strokeLinecap="round"
                        />
                        <path
                            className="beam-line-out"
                            d="M 100 110 C 150 110, 150 135, 200 135"
                            stroke="#FF8C1A"
                            strokeWidth="2"
                            strokeDasharray="24 96"
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Core Node */}
                    <div className="relative z-10 bg-gradient-to-b from-[#0D2F4F] to-[#071120] text-white p-4 rounded-2xl shadow-[0_0_35px_rgba(255,140,26,0.22)] text-center min-w-[138px] border border-brandOrange/40">
                        <div className="font-black text-xl leading-none mb-1 flex items-center justify-center gap-0.5">
                            <span className="text-brandOrange">D</span>uet
                        </div>
                        <div className="text-[11px] uppercase font-bold tracking-widest text-white/80 mb-2">
                            Solutions
                        </div>
                        <div className="text-xs font-medium text-brandGreen leading-tight bg-white/[0.06] px-2.5 py-1 rounded-lg border border-white/10">
                            Integración +<br />
                            Automatización
                        </div>
                    </div>
                </div>

                {/* Outputs Column */}
                <div className="sm:col-span-4 flex flex-col gap-2.5 z-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-textMuted/80 text-center sm:text-right mb-0.5">
                        Operación Ágil
                    </span>
                    {outputs.map((output, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#071120]/90 rounded-xl border border-white/10 text-xs font-semibold text-white shadow-sm hover:border-brandGreen/50 transition-colors"
                        >
                            <span className="shrink-0" aria-hidden="true">
                                {output.icon}
                            </span>
                            <span className="truncate">{output.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Operational Pillars */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 mt-5 border-t border-white/10">
                {bottomActions.map((action, idx) => (
                    <div
                        key={idx}
                        className="text-center flex flex-col items-center p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    >
                        <div
                            className="mb-1.5 bg-[#071120] p-2 rounded-lg border border-white/10"
                            aria-hidden="true"
                        >
                            {action.icon}
                        </div>
                        <h3 className="text-xs font-bold text-white mb-0.5">
                            {action.name}
                        </h3>
                        <p className="text-xs text-textMuted leading-tight">
                            {action.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
