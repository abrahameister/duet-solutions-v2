"use client";

import { ArrowRight } from "lucide-react";

interface PreFooterProps {
    onOpenContact: () => void;
}

export default function PreFooterCTA({ onOpenContact }: PreFooterProps) {
    return (
        <section className="py-24 bg-bg relative overflow-hidden border-t border-border/50">
            <div className="absolute inset-0 bg-dot-pattern opacity-50 z-0 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-surface2/20 text-text font-semibold text-sm border border-border">
                    ¿Listo para el cambio?
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text mb-6 tracking-tight text-balance">
                    Da el primer paso hacia la <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary to-accentSecondary">eficiencia absoluta.</span>
                </h2>

                <p className="text-xl text-textMuted mb-10 max-w-2xl mx-auto">
                    Porque en Duet Solutions, el único límite es tu imaginación.
                </p>

                <button
                    onClick={onOpenContact}
                    className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-surface px-10 py-5 text-lg font-bold text-white transition-all hover:bg-surface2 focus-ring shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Agendar Análisis Gratuito
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </span>
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-accentPrimary to-accentSecondary opacity-0 transition-opacity group-hover:opacity-20" />
                </button>
            </div>
        </section>
    );
}
