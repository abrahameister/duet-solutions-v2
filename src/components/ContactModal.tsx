"use client";

import { X, Mail, Phone, Building2 } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            const ctx = gsap.context(() => {
                gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
                gsap.to(modalRef.current, {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                });
            });
            return () => ctx.revert();
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity"
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-md bg-[#0B1722] border border-white/10 rounded-3xl p-8 shadow-2xl scale-95 opacity-0 translate-y-5"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-textMuted hover:text-text transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-text mb-2 tracking-tight">
                        Agendar sesión <span className="text-accentPrimary">gratis</span>
                    </h2>
                    <p className="text-textMuted leading-relaxed">
                        Déjanos tus datos y un experto de Duet Solutions se pondrá en contacto contigo.
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-text">Correo Electrónico *</label>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="ejemplo@empresa.com"
                                className="w-full bg-[#1A3B56]/40 border border-white/10 rounded-xl px-4 py-3.5 text-text placeholder:text-textMuted/40 focus:outline-none focus:ring-2 focus:ring-accentPrimary/50 transition-all"
                                required
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-text">Número Telefónico *</label>
                        <div className="relative">
                            <input
                                type="tel"
                                placeholder="+56912345678"
                                className="w-full bg-[#1A3B56]/40 border border-white/10 rounded-xl px-4 py-3.5 text-text placeholder:text-textMuted/40 focus:outline-none focus:ring-2 focus:ring-accentPrimary/50 transition-all"
                                required
                            />
                        </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-text">Nombre de la Empresa</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tu Empresa SpA"
                                className="w-full bg-[#1A3B56]/40 border border-white/10 rounded-xl px-4 py-3.5 text-text placeholder:text-textMuted/40 focus:outline-none focus:ring-2 focus:ring-accentPrimary/50 transition-all"
                            />
                        </div>
                    </div>

                    {/* Preference */}
                    <div className="space-y-4">
                        <label className="text-sm font-semibold text-text">¿Cómo prefieres ser contactado?</label>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="radio"
                                        name="contact_preference"
                                        className="peer hidden"
                                        defaultChecked
                                    />
                                    <div className="w-5 h-5 rounded-full border-2 border-white/20 peer-checked:border-accentPrimary transition-colors" />
                                    <div className="absolute w-2.5 h-2.5 rounded-full bg-accentPrimary scale-0 peer-checked:scale-100 transition-transform" />
                                </div>
                                <span className="text-sm text-textMuted group-hover:text-text transition-colors">WhatsApp</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="radio"
                                        name="contact_preference"
                                        className="peer hidden"
                                    />
                                    <div className="w-5 h-5 rounded-full border-2 border-white/20 peer-checked:border-accentPrimary transition-colors" />
                                    <div className="absolute w-2.5 h-2.5 rounded-full bg-accentPrimary scale-0 peer-checked:scale-100 transition-transform" />
                                </div>
                                <span className="text-sm text-textMuted group-hover:text-text transition-colors">Correo Electrónico</span>
                            </label>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-accentPrimary hover:bg-[#d47629] text-white font-bold py-4 rounded-xl shadow-lg shadow-accentPrimary/20 transition-all active:scale-[0.98] mt-4"
                    >
                        Solicitar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
}
