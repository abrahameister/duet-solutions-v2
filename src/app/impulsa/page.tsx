"use client";

import ImpulsaHeader from "@/components/impulsa/ImpulsaHeader";
import ImpulsaHero from "@/components/impulsa/ImpulsaHero";
import ImpulsaPrize from "@/components/impulsa/ImpulsaPrize";
import ImpulsaForm from "@/components/impulsa/ImpulsaForm";
import ImpulsaLegal from "@/components/impulsa/ImpulsaLegal";
import ImpulsaFooter from "@/components/impulsa/ImpulsaFooter";

export default function ImpulsaPage() {
    return (
        <div className="min-h-screen bg-bg text-text font-body antialiased relative overflow-x-hidden">
            {/* Dot Pattern BG */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(234,240,255,0.045) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
                aria-hidden="true"
            />
            {/* Ambient glow */}
            <div
                className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none z-0 opacity-20"
                style={{
                    background:
                        "radial-gradient(ellipse at center, #E88632 0%, transparent 70%)",
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col min-h-screen">
                <ImpulsaHeader />
                <main>
                    <ImpulsaHero />
                    <ImpulsaPrize />
                    <ImpulsaForm />
                    <ImpulsaLegal />
                </main>
                <ImpulsaFooter />
            </div>
        </div>
    );
}
