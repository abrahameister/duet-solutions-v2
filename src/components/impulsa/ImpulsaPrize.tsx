"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Server, Monitor, Lightbulb } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const prizes = [
    {
        icon: Monitor,
        iconColor: "text-accentPrimary",
        bgColor: "bg-accentPrimary/10",
        borderColor: "border-accentPrimary/25",
        title: "Web 100% a Medida",
        subtitle: "No plantillas",
        description:
            "Diseño y desarrollo único para tu marca. Totalmente personalizado según tu industria, colores y objetivos de negocio.",
    },
    {
        icon: Server,
        iconColor: "text-accentSecondary",
        bgColor: "bg-accentSecondary/10",
        borderColor: "border-accentSecondary/25",
        title: "Hosting Pro",
        subtitle: "1 año incluido",
        description:
            "Infraestructura rápida, segura y confiable para que tu sitio esté disponible 24/7 sin preocupaciones técnicas.",
    },
    {
        icon: Globe,
        iconColor: "text-[#4FA8E8]",
        bgColor: "bg-[#4FA8E8]/10",
        borderColor: "border-[#4FA8E8]/25",
        title: "Dominio .cl",
        subtitle: "1 año incluido",
        description:
            "Tu dirección web profesional con extensión .cl para posicionarte con identidad local y confianza ante tus clientes.",
    },
    {
        icon: Lightbulb,
        iconColor: "text-warning",
        bgColor: "bg-warning/10",
        borderColor: "border-warning/25",
        title: "Asesoría Estratégica",
        subtitle: "UX/UI + Digital",
        description:
            "Acompañamiento experto para que tu nuevo sitio convierta visitas en clientes. Estrategia digital incluida.",
    },
];

export default function ImpulsaPrize() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".prize-card", {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.13,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
            gsap.to(".prize-heading", {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-20 sm:py-28"
            aria-labelledby="prize-heading"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="prize-heading opacity-0 translate-y-6 text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accentSecondary/10 border border-accentSecondary/25 text-accentSecondary font-semibold text-xs sm:text-sm mb-4">
                        🏆 El Premio
                    </div>
                    <h2
                        id="prize-heading"
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight"
                    >
                        Todo lo que está en juego
                    </h2>
                    <p className="mt-4 text-textMuted text-lg max-w-xl mx-auto leading-relaxed">
                        Un ecosistema digital completo para que tu negocio despegue desde el día uno.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {prizes.map((prize) => {
                        const Icon = prize.icon;
                        return (
                            <article
                                key={prize.title}
                                className={`prize-card opacity-0 translate-y-8 group flex flex-col gap-4 p-6 rounded-2xl bg-surface border ${prize.borderColor} shadow-md hover:shadow-lg hover:border-opacity-50 hover:-translate-y-1 transition-all duration-300 cursor-default`}
                            >
                                <div className={`w-12 h-12 rounded-xl ${prize.bgColor} ${prize.borderColor} border flex items-center justify-center`}>
                                    <Icon className={`w-6 h-6 ${prize.iconColor}`} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-text text-lg leading-tight">
                                        {prize.title}
                                    </h3>
                                    <span className={`text-xs font-semibold ${prize.iconColor} uppercase tracking-wide`}>
                                        {prize.subtitle}
                                    </span>
                                </div>
                                <p className="text-textMuted text-sm leading-relaxed">
                                    {prize.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

                {/* Value callout */}
                <div className="mt-12 flex items-center justify-center">
                    <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-surface border border-border">
                        <span className="text-3xl">🎁</span>
                        <div>
                            <p className="font-bold text-text text-base">
                                Valor total estimado:{" "}
                                <span className="text-accentPrimary">+ $1.500.000 CLP</span>
                            </p>
                            <p className="text-textMuted text-sm">
                                Para un ganador afortunado. Postula antes de que se acaben los cupos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
