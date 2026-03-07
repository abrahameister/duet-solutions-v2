"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

interface HeaderProps {
    onOpenContact: () => void;
}

export default function HeaderMinimal({ onOpenContact }: HeaderProps) {
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(headerRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.1,
            });
        }, headerRef);
        return () => ctx.revert();
    }, []);

    return (
        <header
            ref={headerRef}
            className="sticky top-0 z-50 w-full backdrop-blur-md bg-bg/80 border-b border-border shadow-sm opacity-0 -translate-y-full"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 focus-ring rounded-md">
                    <Image
                        src="https://i.postimg.cc/8C6R8kgf/duet-solutions.png"
                        alt="Duet Solutions Logo"
                        width={160}
                        height={40}
                        className="w-auto h-10 object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#servicios" className="text-sm font-medium text-text hover:text-accentPrimary transition-colors focus-ring rounded-md px-2 py-1">
                        Servicios
                    </Link>
                    <Link href="#proceso" className="text-sm font-medium text-text hover:text-accentPrimary transition-colors focus-ring rounded-md px-2 py-1">
                        Cómo lo hacemos
                    </Link>
                    <button
                        onClick={onOpenContact}
                        className="group relative inline-flex items-center justify-center gap-2 rounded-md bg-surface px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-surface2 focus-ring shadow-sm overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Agendar Análisis Gratuito
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 z-0 bg-gradient-to-r from-accentPrimary to-accentSecondary opacity-0 transition-opacity group-hover:opacity-10" />
                    </button>
                </nav>

                {/* Mobile Nav Button */}
                <div className="md:hidden flex items-center">
                    <button className="text-text hover:text-accentPrimary p-2 focus-ring rounded-md">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
