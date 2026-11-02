"use client";

import { X, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { submitLeadToMake } from "@/lib/submitLead";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const firstInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        company: "",
        comments: "",
        contact_preference: "WhatsApp",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    useEffect(() => {
        if (!isOpen) {
            document.body.style.overflow = "unset";
            setTimeout(() => {
                setIsSuccess(false);
                setSubmitError(null);
            }, 300);
            return;
        }

        document.body.style.overflow = "hidden";
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const ctx = gsap.context(() => {
            if (prefersReducedMotion) {
                gsap.set(overlayRef.current, { opacity: 1 });
                gsap.set(modalRef.current, { scale: 1, opacity: 1, y: 0 });
            } else {
                gsap.to(overlayRef.current, { opacity: 1, duration: 0.25 });
                gsap.to(modalRef.current, {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.35,
                    ease: "power2.out",
                });
            }
        });

        // Focus first input for keyboard accessibility
        const focusTimer = setTimeout(() => {
            firstInputRef.current?.focus();
        }, 100);

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            ctx.revert();
            clearTimeout(focusTimer);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        const result = await submitLeadToMake({
            ...formData,
            date: new Date().toLocaleString(),
            source: "Website Contact Form",
        });

        if (result.ok) {
            setIsSuccess(true);
            setFormData({
                email: "",
                phone: "",
                company: "",
                comments: "",
                contact_preference: "WhatsApp",
            });
        } else {
            setSubmitError(result.error || "No pudimos enviar el formulario.");
        }
        setIsSubmitting(false);
    };

    if (!isOpen) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md opacity-0 transition-opacity overflow-y-auto"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            aria-describedby="contact-modal-desc"
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-md bg-[#0B1722] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl scale-95 opacity-0 translate-y-5 my-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Cerrar ventana de contacto"
                    className="absolute top-5 right-5 p-2 rounded-lg text-textMuted hover:text-text hover:bg-white/5 transition-colors focus-ring"
                >
                    <X className="w-5 h-5" aria-hidden="true" />
                </button>

                {!isSuccess ? (
                    <>
                        {/* Header */}
                        <div className="mb-6 pr-6">
                            <span className="inline-block text-xs font-bold uppercase tracking-wider text-brandOrange mb-2">
                                Diagnóstico inicial sin costo
                            </span>
                            <h2
                                id="contact-modal-title"
                                className="text-2xl sm:text-3xl font-bold text-text mb-2 tracking-tight"
                            >
                                Conversemos sobre tu{" "}
                                <span className="text-brandOrange">operación</span>
                            </h2>
                            <p
                                id="contact-modal-desc"
                                className="text-sm text-textMuted leading-relaxed"
                            >
                                Déjanos tus datos y un especialista de Duet Solutions te
                                contactará en menos de 24 horas hábiles.
                            </p>
                        </div>

                        {submitError && (
                            <div
                                role="alert"
                                className="mb-5 flex items-start gap-2.5 rounded-xl bg-danger/15 border border-danger/40 p-3.5 text-xs text-white"
                            >
                                <AlertCircle className="w-4 h-4 text-danger shrink-0 mt-0.5" />
                                <span>{submitError}</span>
                            </div>
                        )}

                        {/* Form */}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Email */}
                            <div className="space-y-1.5">
                                <label
                                    htmlFor="modal-email"
                                    className="block text-sm font-semibold text-text"
                                >
                                    Correo Electrónico *
                                </label>
                                <input
                                    ref={firstInputRef}
                                    id="modal-email"
                                    type="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    placeholder="ejemplo@empresa.com"
                                    className="w-full bg-[#1A3B56]/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-text placeholder:text-textMuted/50 focus:outline-none focus:ring-2 focus:ring-brandOrange transition-all"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Phone */}
                            <div className="space-y-1.5">
                                <label
                                    htmlFor="modal-phone"
                                    className="block text-sm font-semibold text-text"
                                >
                                    Número Telefónico / WhatsApp *
                                </label>
                                <input
                                    id="modal-phone"
                                    type="tel"
                                    autoComplete="tel"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                    placeholder="+56 9 1234 5678"
                                    className="w-full bg-[#1A3B56]/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-text placeholder:text-textMuted/50 focus:outline-none focus:ring-2 focus:ring-brandOrange transition-all"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Company */}
                            <div className="space-y-1.5">
                                <label
                                    htmlFor="modal-company"
                                    className="block text-sm font-semibold text-text"
                                >
                                    Nombre de la Empresa
                                </label>
                                <input
                                    id="modal-company"
                                    type="text"
                                    autoComplete="organization"
                                    value={formData.company}
                                    onChange={(e) =>
                                        setFormData({ ...formData, company: e.target.value })
                                    }
                                    placeholder="Tu Empresa SpA"
                                    className="w-full bg-[#1A3B56]/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-text placeholder:text-textMuted/50 focus:outline-none focus:ring-2 focus:ring-brandOrange transition-all"
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Message */}
                            <div className="space-y-1.5">
                                <label
                                    htmlFor="modal-comments"
                                    className="block text-sm font-semibold text-text"
                                >
                                    ¿Qué proceso o desafío buscas resolver? (Opcional)
                                </label>
                                <textarea
                                    id="modal-comments"
                                    value={formData.comments}
                                    onChange={(e) =>
                                        setFormData({ ...formData, comments: e.target.value })
                                    }
                                    placeholder="Ej: Necesitamos automatizar reportes, conectar ERP o digitalizar procesos en terreno..."
                                    className="w-full bg-[#1A3B56]/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-text placeholder:text-textMuted/50 focus:outline-none focus:ring-2 focus:ring-brandOrange transition-all min-h-[90px] resize-y"
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Preference */}
                            <fieldset className="space-y-2 pt-1">
                                <legend className="text-sm font-semibold text-text">
                                    ¿Cómo prefieres ser contactado?
                                </legend>
                                <div className="flex gap-6 pt-1">
                                    <label className="flex items-center gap-2.5 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="contact_preference"
                                            value="WhatsApp"
                                            className="sr-only peer"
                                            checked={formData.contact_preference === "WhatsApp"}
                                            onChange={() =>
                                                setFormData({
                                                    ...formData,
                                                    contact_preference: "WhatsApp",
                                                })
                                            }
                                            disabled={isSubmitting}
                                        />
                                        <span className="w-5 h-5 rounded-full border-2 border-white/25 peer-checked:border-brandOrange peer-focus-visible:ring-2 peer-focus-visible:ring-brandOrange flex items-center justify-center transition-colors">
                                            <span
                                                className={`w-2.5 h-2.5 rounded-full bg-brandOrange transition-transform ${
                                                    formData.contact_preference === "WhatsApp"
                                                        ? "scale-100"
                                                        : "scale-0"
                                                }`}
                                            />
                                        </span>
                                        <span className="text-sm text-textMuted group-hover:text-text transition-colors">
                                            WhatsApp
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-2.5 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="contact_preference"
                                            value="Correo Electrónico"
                                            className="sr-only peer"
                                            checked={
                                                formData.contact_preference === "Correo Electrónico"
                                            }
                                            onChange={() =>
                                                setFormData({
                                                    ...formData,
                                                    contact_preference: "Correo Electrónico",
                                                })
                                            }
                                            disabled={isSubmitting}
                                        />
                                        <span className="w-5 h-5 rounded-full border-2 border-white/25 peer-checked:border-brandOrange peer-focus-visible:ring-2 peer-focus-visible:ring-brandOrange flex items-center justify-center transition-colors">
                                            <span
                                                className={`w-2.5 h-2.5 rounded-full bg-brandOrange transition-transform ${
                                                    formData.contact_preference ===
                                                    "Correo Electrónico"
                                                        ? "scale-100"
                                                        : "scale-0"
                                                }`}
                                            />
                                        </span>
                                        <span className="text-sm text-textMuted group-hover:text-text transition-colors">
                                            Correo Electrónico
                                        </span>
                                    </label>
                                </div>
                            </fieldset>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-brandOrange hover:bg-[#e67a14] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-brandOrange/20 transition-all active:scale-[0.98] mt-2 flex items-center justify-center gap-2 focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    "Solicitar diagnóstico inicial"
                                )}
                            </button>
                        </form>
                    </>
                ) : (
                    <div
                        role="status"
                        aria-live="polite"
                        className="py-10 flex flex-col items-center text-center"
                    >
                        <div className="w-20 h-20 bg-brandGreen/20 border border-brandGreen/40 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-10 h-10 text-brandGreen" />
                        </div>
                        <h3 className="text-2xl font-bold text-text mb-2">
                            ¡Solicitud recibida con éxito!
                        </h3>
                        <p className="text-sm text-textMuted mb-8 max-w-[300px] leading-relaxed">
                            Un especialista de Duet Solutions revisará tu caso y te
                            contactará a la brevedad.
                        </p>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors focus-ring"
                        >
                            Cerrar ventana
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
