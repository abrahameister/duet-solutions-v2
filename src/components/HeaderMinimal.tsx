"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight, Menu, X } from "lucide-react";

interface HeaderProps {
    onOpenContact: () => void;
}

export default function HeaderMinimal({ onOpenContact }: HeaderProps) {
    const headerRef = useRef<HTMLElement>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const ctx = gsap.context(() => {
            if (prefersReducedMotion) {
                gsap.set(headerRef.current, { y: 0, opacity: 1 });
            } else {
                gsap.to(headerRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power2.out",
                    delay: 0.05,
                });
            }
        }, headerRef);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            ctx.revert();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!isMobileMenuOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Inicio", href: "#" },
        { name: "Casos", href: "#casos" },
        { name: "Cómo trabajamos", href: "#proceso" },
        { name: "Soluciones", href: "#servicios" },
        { name: "Tecnología", href: "#tecnologia" },
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <header
            ref={headerRef}
            className={`sticky top-0 z-50 w-full transition-colors duration-300 opacity-0 -translate-y-full ${
                isScrolled
                    ? "bg-[#071120]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                    : "bg-[#071120]/80 backdrop-blur-md border-b border-white/[0.06]"
            }`}
        >
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Logo with Text */}
                <Link
                    href="/"
                    className="flex items-center gap-3 focus-ring rounded-md group"
                    aria-label="Duet Solutions — Ir al inicio"
                >
                    <Image
                        src="/images/logos/Logo_Sin_Texto_Color (1).png"
                        alt="Duet Solutions Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
                        priority
                    />
                    <div className="flex flex-col">
                        <span className="text-xl font-black text-white leading-none tracking-tight">
                            Duet
                        </span>
                        <span className="text-sm font-semibold text-white/85 leading-none tracking-tight mt-0.5">
                            Solutions
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav
                    aria-label="Navegación principal"
                    className="hidden lg:flex items-center gap-6 xl:gap-8"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/80 hover:text-white transition-colors focus-ring rounded-md px-2.5 py-1.5"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 ml-2">
                        <button
                            type="button"
                            onClick={onOpenContact}
                            className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-brandOrange px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#e67a14] hover:shadow-[0_0_24px_rgba(255,140,26,0.35)] active:scale-[0.98] focus-ring"
                        >
                            <span>Solicitar diagnóstico inicial</span>
                            <ArrowRight
                                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    aria-label={
                        isMobileMenuOpen
                            ? "Cerrar menú de navegación"
                            : "Abrir menú de navegación"
                    }
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-navigation"
                    className="lg:hidden p-2.5 text-white hover:text-brandOrange hover:bg-white/5 focus-ring rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" aria-hidden="true" />
                    ) : (
                        <Menu className="w-6 h-6" aria-hidden="true" />
                    )}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="lg:hidden absolute top-20 left-0 w-full bg-[#071120]/95 backdrop-blur-xl border-b border-white/15 shadow-2xl"
                >
                    <nav
                        aria-label="Navegación móvil"
                        className="flex flex-col px-4 pt-3 pb-6 gap-1.5"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-3 text-base font-medium text-white hover:text-brandOrange hover:bg-white/5 rounded-lg transition-colors focus-ring"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            type="button"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                onOpenContact();
                            }}
                            className="mt-3 flex items-center justify-center gap-2 w-full rounded-xl bg-brandOrange px-6 py-3.5 text-base font-bold text-white transition-all hover:bg-[#e67a14] focus-ring"
                        >
                            Solicitar diagnóstico inicial
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
