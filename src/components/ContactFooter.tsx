"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MessageCircle, Linkedin, ArrowRight } from "lucide-react";
import SloganSignature from "@/components/ui/SloganSignature";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface ContactFooterProps {
    onOpenContact: () => void;
}

export default function ContactFooter({ onOpenContact }: ContactFooterProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const ctx = gsap.context(() => {
            if (prefersReducedMotion) {
                gsap.set(".contact-fade", { y: 0, opacity: 1 });
                return;
            }
            gsap.fromTo(
                ".contact-fade",
                { y: 24, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const contacts = [
        {
            name: "Correo Electrónico",
            url: "mailto:contacto@duetsolutions.cl",
            icon: <Mail className="w-5 h-5" />,
            text: "contacto@duetsolutions.cl",
        },
        {
            name: "WhatsApp Directo",
            url: "https://wa.me/56973858191",
            icon: <MessageCircle className="w-5 h-5" />,
            text: "+56 9 7385 8191",
        },
        {
            name: "LinkedIn (Abraham Ramírez)",
            url: "https://www.linkedin.com/in/abrahamramirezch/",
            icon: <Linkedin className="w-5 h-5" />,
            text: "Abraham Ramírez C.",
        },
        {
            name: "LinkedIn (Duet Solutions)",
            url: "https://www.linkedin.com/company/duet-solutions-spa/",
            icon: <Linkedin className="w-5 h-5" />,
            text: "Duet Solutions SpA",
        },
    ];

    return (
        <footer
            id="contacto"
            ref={sectionRef}
            className="bg-navyDark2 border-t border-border/20 pt-24 pb-28 md:pb-14 flex flex-col scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Texto y CTA */}
                    <div className="contact-fade">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandOrange/10 border border-brandOrange/25 text-xs font-bold uppercase tracking-wider text-brandOrange mb-4">
                            Siguiente Paso
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                            Conversemos sobre tu operación.
                        </h2>
                        <p className="text-base sm:text-lg text-textMuted mb-8 max-w-xl leading-relaxed">
                            Cuéntanos qué proceso está generando fricción. Primero lo
                            entendemos; después evaluamos juntos qué tiene sentido
                            automatizar, integrar o desarrollar.
                        </p>
                        <button
                            type="button"
                            onClick={onOpenContact}
                            className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-brandOrange px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#e67a14] hover:shadow-[0_0_25px_rgba(255,140,26,0.35)] active:scale-[0.98] shadow-md focus-ring"
                        >
                            Solicitar diagnóstico inicial
                            <ArrowRight
                                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </button>
                    </div>

                    {/* Vías de Contacto */}
                    <div className="contact-fade bg-surface/20 border border-border/30 rounded-2xl p-6 sm:p-8">
                        <h3 className="text-xl font-bold text-white mb-6">
                            Contacto Directo
                        </h3>
                        <div className="flex flex-col gap-3.5">
                            {contacts.map((contact, idx) => (
                                <a
                                    key={idx}
                                    href={contact.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${contact.name}: ${contact.text}`}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-navy border border-border/40 hover:border-brandOrange/50 transition-colors group focus-ring"
                                >
                                    <div
                                        className="text-textMuted group-hover:text-brandOrange transition-colors shrink-0"
                                        aria-hidden="true"
                                    >
                                        {contact.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-textMuted">
                                            {contact.name}
                                        </span>
                                        <span className="text-white font-semibold group-hover:text-brandOrange transition-colors">
                                            {contact.text}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="contact-fade max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-border/20 pt-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/images/logos/Logo_Sin_Texto_Color (1).png"
                            alt="Duet Solutions Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
                        />
                        <div className="flex flex-col">
                            <span className="text-lg font-black text-white leading-none tracking-tight">
                                Duet
                            </span>
                            <span className="text-xs font-semibold text-white/80 leading-none tracking-tight mt-0.5">
                                Solutions SpA
                            </span>
                        </div>
                    </div>

                    <div className="text-center md:text-right flex flex-col items-center md:items-end">
                        <p className="text-sm font-medium text-textMuted mb-1.5">
                            Automatización · Integración · Software a medida · Inteligencia
                            Artificial
                        </p>
                        <p className="text-xs text-textMuted/80 mb-4">
                            Chile · LATAM · Remoto — © {new Date().getFullYear()} Duet
                            Solutions.
                        </p>
                        <SloganSignature size="sm" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
