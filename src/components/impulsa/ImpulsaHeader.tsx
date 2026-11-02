"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ImpulsaHeader() {
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(headerRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.out",
                delay: 0.1,
            });
        }, headerRef);
        return () => ctx.revert();
    }, []);

    return (
        <header
            ref={headerRef}
            className="sticky top-0 z-50 w-full backdrop-blur-md bg-bg/85 border-b border-border shadow-sm opacity-0 -translate-y-4"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
                {/* Logo Local */}
                <Link
                    href="/"
                    className="flex items-center gap-3 focus-ring rounded-md"
                    aria-label="Ir a inicio de Duet Solutions"
                >
                    <Image
                        src="/images/logos/Logo_Sin_Texto_Color (1).png"
                        alt="Duet Solutions Logo"
                        width={36}
                        height={36}
                        className="w-9 h-9 object-contain"
                        priority
                    />
                    <div className="flex flex-col">
                        <span className="text-lg font-black text-white leading-none tracking-tight">
                            Duet
                        </span>
                        <span className="text-sm font-semibold text-white/90 leading-none tracking-tight">
                            Solutions
                        </span>
                    </div>
                </Link>

                {/* Contest Badge */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accentPrimary/10 border border-accentPrimary/25 text-accentPrimary font-semibold text-xs sm:text-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentPrimary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accentPrimary" />
                    </span>
                    Concurso Activo
                </div>
            </div>
        </header>
    );
}
