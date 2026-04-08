"use client";

import { X, Mail, Phone, Building2, Loader2, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    // Form States
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        company: "",
        comments: "",
        contact_preference: "WhatsApp"
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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
            // Reset success state when closing
            if (!isOpen) setTimeout(() => setIsSuccess(false), 500);
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // URL del Webhook de Make.com
        const WEBHOOK_URL = "https://hook.us2.make.com/dlog1wex5s3u1h5tp4ipfntf9x25vbtu";

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    date: new Date().toLocaleString(),
                    source: "Website Contact Form"
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                // Reset form
                setFormData({ email: "", phone: "", company: "", comments: "", contact_preference: "WhatsApp" });
            } else {
                alert("Hubo un error al enviar el formulario. Por favor intenta de nuevo.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error de conexión. Por favor intenta de nuevo.");
        } finally {
            setIsSubmitting(false);
        }
    };

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

                {!isSuccess ? (
                    <>
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
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-text">Correo Electrónico *</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="ejemplo@empresa.com"
                                        className="w-full bg-[#1A3B56]/40 border border-white/10 rounded-xl px-4 py-3.5 text-text placeholder:text-textMuted/40 focus:outline-none focus:ring-2 focus:ring-accentPrimary/50 transition-all"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-text">Número Telefónico *</label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="+56912345678"
                                        className="w-full bg-[#1A3B56]/40 border border-white/10 rounded-xl px-4 py-3.5 text-text placeholder:text-textMuted/40 focus:outline-none focus:ring-2 focus:ring-accentPrimary/50 transition-all"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            {/* Company */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-text">Nombre de la Empresa</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        placeholder="Tu Empresa SpA"
                                        className="w-full bg-[#1A3B56]/40 border border-white/10 rounded-xl px-4 py-3.5 text-text placeholder:text-textMuted/40 focus:outline-none focus:ring-2 focus:ring-accentPrimary/50 transition-all"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-text">¿Cómo podemos ayudarte? (Opcional)</label>
                                <div className="relative">
                                    <textarea
                                        value={formData.comments}
                                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                                        placeholder="Ej: Necesitamos mejorar los procesos en terreno y evitar tanto papel..."
                                        className="w-full bg-[#1A3B56]/40 border border-white/10 rounded-xl px-4 py-3.5 text-text placeholder:text-textMuted/40 focus:outline-none focus:ring-2 focus:ring-accentPrimary/50 transition-all min-h-[100px] resize-y"
                                        disabled={isSubmitting}
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
                                                checked={formData.contact_preference === "WhatsApp"}
                                                onChange={() => setFormData({ ...formData, contact_preference: "WhatsApp" })}
                                                disabled={isSubmitting}
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
                                                checked={formData.contact_preference === "Correo Electrónico"}
                                                onChange={() => setFormData({ ...formData, contact_preference: "Correo Electrónico" })}
                                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
                                className="w-full bg-accentPrimary hover:bg-[#d47629] text-white font-bold py-4 rounded-xl shadow-lg shadow-accentPrimary/20 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    "Solicitar Sesión"
                                )}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-accentSecondary/20 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-12 h-12 text-accentSecondary" />
                        </div>
                        <h3 className="text-2xl font-bold text-text mb-2">¡Recibido con éxito!</h3>
                        <p className="text-textMuted mb-8 max-w-[280px]">
                            Un experto de Duet Solutions revisará tu caso y te contactará a la brevedad.
                        </p>
                        <button
                            onClick={onClose}
                            className="text-accentPrimary font-semibold hover:underline"
                        >
                            Cerrar ventana
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
