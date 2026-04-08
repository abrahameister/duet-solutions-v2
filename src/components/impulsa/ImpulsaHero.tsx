"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Trophy, Sparkles } from "lucide-react";

export default function ImpulsaHero() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".hero-el", {
                y: 0,
                opacity: 1,
                duration: 0.65,
                stagger: 0.12,
                ease: "power2.out",
                delay: 0.3,
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const handleScrollToForm = () => {
        const formSection = document.getElementById("formulario");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative pt-20 pb-28 sm:pt-28 sm:pb-36 overflow-hidden"
            aria-labelledby="hero-heading"
        >
            {/* Decorative radial gradient ring */}
            <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
            >
                <div
                    className="w-[700px] h-[700px] rounded-full opacity-[0.06]"
                    style={{
                        background:
                            "conic-gradient(from 180deg, #E88632, #86AB45, #E88632)",
                        filter: "blur(60px)",
                    }}
                />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {/* Eyebrow badge */}
                <div className="hero-el opacity-0 translate-y-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accentPrimary/10 border border-accentPrimary/25 text-accentPrimary font-semibold text-sm mb-8">
                    <Trophy className="w-4 h-4" />
                    Concurso para Pymes y Startups — Cupos Limitados
                </div>

                {/* H1 */}
                <h1
                    id="hero-heading"
                    className="hero-el opacity-0 translate-y-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-text leading-[1.05] tracking-tight mb-6"
                >
                    ¡Impulsa tu Pyme!{" "}
                    <span className="relative inline-block">
                        <span className="relative z-10 text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(135deg, #E88632 0%, #FFB066 100%)" }}>
                            Gana un Ecosistema
                        </span>
                        <span
                            className="absolute inset-x-0 bottom-1 h-[6px] rounded-full opacity-30"
                            style={{ background: "linear-gradient(90deg, #E88632, #FFB066)" }}
                            aria-hidden="true"
                        />
                    </span>{" "}
                    Digital Completo con Duet Solutions.
                </h1>

                {/* H2 / subheading */}
                <p className="hero-el opacity-0 translate-y-6 text-lg sm:text-xl lg:text-2xl text-textMuted leading-relaxed max-w-3xl mx-auto mb-10">
                    Te regalamos un{" "}
                    <strong className="text-text font-semibold">Sitio Web 100% Personalizado</strong>{" "}
                    + Hosting y Dominio por{" "}
                    <strong className="text-text font-semibold">1 año</strong> +{" "}
                    <strong className="text-accentSecondary font-semibold">Asesoría Experta</strong>.
                    <span className="block mt-2">
                        El salto de calidad que tu negocio necesita para vender más.
                    </span>
                </p>

                {/* CTA */}
                <div className="hero-el opacity-0 translate-y-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={handleScrollToForm}
                        id="hero-cta-btn"
                        className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-accentPrimary px-8 py-4 text-base font-bold text-white shadow-lg shadow-accentPrimary/30 transition-all hover:bg-[#d47629] hover:shadow-accentPrimary/50 hover:scale-[1.03] focus-ring active:scale-[0.98]"
                    >
                        <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
                        Postular mi negocio ahora
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <span className="text-sm text-textMuted">
                        Sin costo · 100% gratis · Fácil en 2 min
                    </span>
                </div>

                {/* Social proof strip */}
                <div className="hero-el opacity-0 translate-y-6 mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                    {[
                        { value: "100%", label: "Sitio a Medida" },
                        { value: "1 año", label: "Hosting + Dominio" },
                        { value: "∞", label: "Asesoría Experta" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text"
                                style={{ backgroundImage: "linear-gradient(135deg, #E88632, #FFB066)" }}>
                                {stat.value}
                            </p>
                            <p className="text-sm text-textMuted mt-1 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
