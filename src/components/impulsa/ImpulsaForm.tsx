"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Loader2, CheckCircle2, User, Mail, Building2, Phone, MessageSquare, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WEBHOOK_URL = "https://hook.us2.make.com/dlog1wex5s3u1h5tp4ipfntf9x25vbtu";

interface FormData {
    nombre: string;
    email: string;
    empresa: string;
    telefono: string;
    desafio: string;
}

const initialData: FormData = {
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    desafio: "",
};

export default function ImpulsaForm() {
    const sectionRef = useRef<HTMLElement>(null);
    const [formData, setFormData] = useState<FormData>(initialData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".form-animate", {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const validate = (): boolean => {
        const newErrors: Partial<FormData> = {};
        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido.";
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Ingresa un correo electrónico válido.";
        if (!formData.empresa.trim()) newErrors.empresa = "El nombre de tu empresa es requerido.";
        if (!formData.telefono.trim()) newErrors.telefono = "El teléfono o WhatsApp es requerido.";
        if (!formData.desafio.trim() || formData.desafio.trim().length < 30)
            newErrors.desafio = "Cuéntanos un poco más (mínimo 30 caracteres).";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error on change
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        try {
            const response = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    source: "Landing Concurso /impulsa",
                    date: new Date().toLocaleString("es-CL"),
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData(initialData);
            } else {
                alert("Hubo un problema al enviar tu postulación. Por favor intenta de nuevo.");
            }
        } catch {
            alert("Error de conexión. Verifica tu internet e intenta de nuevo.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputBase =
        "w-full bg-[#1A3B56]/50 border rounded-xl px-4 py-3.5 text-text placeholder:text-textMuted/40 focus:outline-none focus:ring-2 focus:ring-accentPrimary/60 transition-all text-sm";
    const labelBase = "block text-sm font-semibold text-text mb-1.5";
    const errorClass = "text-xs text-danger mt-1.5 font-medium";

    return (
        <section
            ref={sectionRef}
            id="formulario"
            className="relative py-20 sm:py-28"
            aria-labelledby="form-heading"
        >
            {/* Section bg differentiation */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(26,59,86,0) 0%, rgba(26,59,86,0.35) 50%, rgba(26,59,86,0) 100%)",
                }}
                aria-hidden="true"
            />

            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="form-animate opacity-0 translate-y-6 text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accentPrimary/10 border border-accentPrimary/25 text-accentPrimary font-semibold text-xs sm:text-sm mb-4">
                        ✍️ Postulación
                    </div>
                    <h2
                        id="form-heading"
                        className="text-3xl sm:text-4xl font-extrabold text-text tracking-tight"
                    >
                        Postula tu proyecto aquí
                    </h2>
                    <p className="mt-3 text-textMuted leading-relaxed">
                        Completa el formulario con honestidad. Buscamos Pymes con historia y ganas de crecer.
                    </p>
                </div>

                {!isSuccess ? (
                    <form
                        className="form-animate opacity-0 translate-y-6 space-y-6 bg-surface border border-border rounded-3xl p-7 sm:p-10 shadow-md"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        {/* Nombre */}
                        <div>
                            <label htmlFor="nombre" className={labelBase}>
                                <span className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-accentPrimary" />
                                    Nombre completo
                                </span>
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Ej: María Jesús Contreras"
                                className={`${inputBase} ${errors.nombre ? "border-danger/60" : "border-white/10"}`}
                                required
                                disabled={isSubmitting}
                                autoComplete="name"
                            />
                            {errors.nombre && <p className={errorClass}>{errors.nombre}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className={labelBase}>
                                <span className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-accentPrimary" />
                                    Correo electrónico corporativo
                                </span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="hola@tuempresa.cl"
                                className={`${inputBase} ${errors.email ? "border-danger/60" : "border-white/10"}`}
                                required
                                disabled={isSubmitting}
                                autoComplete="email"
                            />
                            {errors.email && <p className={errorClass}>{errors.email}</p>}
                        </div>

                        {/* Empresa */}
                        <div>
                            <label htmlFor="empresa" className={labelBase}>
                                <span className="flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-accentPrimary" />
                                    Nombre de la Empresa o Startup
                                </span>
                            </label>
                            <input
                                type="text"
                                id="empresa"
                                name="empresa"
                                value={formData.empresa}
                                onChange={handleChange}
                                placeholder="Ej: Mi Startup SpA"
                                className={`${inputBase} ${errors.empresa ? "border-danger/60" : "border-white/10"}`}
                                required
                                disabled={isSubmitting}
                                autoComplete="organization"
                            />
                            {errors.empresa && <p className={errorClass}>{errors.empresa}</p>}
                        </div>

                        {/* Teléfono */}
                        <div>
                            <label htmlFor="telefono" className={labelBase}>
                                <span className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-accentPrimary" />
                                    Teléfono / WhatsApp
                                </span>
                            </label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                placeholder="+56 9 1234 5678"
                                className={`${inputBase} ${errors.telefono ? "border-danger/60" : "border-white/10"}`}
                                required
                                disabled={isSubmitting}
                                autoComplete="tel"
                            />
                            {errors.telefono && <p className={errorClass}>{errors.telefono}</p>}
                        </div>

                        {/* Desafío (KEY FIELD) */}
                        <div>
                            <label htmlFor="desafio" className={labelBase}>
                                <span className="flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4 text-accentSecondary" />
                                    ¿Cuál es el mayor desafío de tu negocio hoy y cómo un nuevo sitio web te ayudaría a superarlo?
                                </span>
                            </label>
                            <textarea
                                id="desafio"
                                name="desafio"
                                value={formData.desafio}
                                onChange={handleChange}
                                placeholder="Sé detallado. Buscamos historias inspiradoras..."
                                rows={5}
                                className={`${inputBase} resize-y min-h-[130px] ${errors.desafio ? "border-danger/60" : "border-accentSecondary/20 focus:ring-accentSecondary/50"}`}
                                required
                                disabled={isSubmitting}
                            />
                            <div className="flex justify-between items-start mt-1.5">
                                {errors.desafio ? (
                                    <p className={errorClass}>{errors.desafio}</p>
                                ) : (
                                    <p className="text-xs text-textMuted">
                                        Este campo es el más importante de tu postulación.
                                    </p>
                                )}
                                <span className={`text-xs ml-2 shrink-0 ${formData.desafio.length < 30 ? "text-textMuted" : "text-accentSecondary"}`}>
                                    {formData.desafio.length}/30 mín.
                                </span>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            id="form-submit-btn"
                            disabled={isSubmitting}
                            className="group w-full flex items-center justify-center gap-3 rounded-xl bg-accentPrimary py-4 text-base font-bold text-white shadow-lg shadow-accentPrimary/25 transition-all hover:bg-[#d47629] hover:shadow-accentPrimary/40 hover:scale-[1.01] active:scale-[0.98] focus-ring disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Enviando tu postulación...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    Enviar mi postulación 🚀
                                </>
                            )}
                        </button>

                        <p className="text-center text-xs text-textMuted leading-relaxed">
                            Al postular, aceptas que Duet Solutions contacte tu empresa vía email o WhatsApp.
                            Tus datos son confidenciales y no serán compartidos con terceros.
                        </p>
                    </form>
                ) : (
                    /* Success State */
                    <div className="flex flex-col items-center text-center py-12 px-6 sm:px-10 bg-surface border border-accentSecondary/30 rounded-3xl shadow-md">
                        {/* Icon */}
                        <div className="w-20 h-20 bg-accentSecondary/15 border border-accentSecondary/30 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-10 h-10 text-accentSecondary" />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-text mb-3 tracking-tight">
                            ¡Postulación enviada con éxito! 🚀
                        </h3>

                        {/* Body */}
                        <p className="text-textMuted max-w-sm leading-relaxed mb-6">
                            Tu historia ya está en manos del equipo de Duet Solutions. Estamos emocionados por conocer más sobre tu negocio y el desafío que quieres superar.
                        </p>

                        {/* Date callout */}
                        <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-accentPrimary/10 border border-accentPrimary/25 mb-8 w-full max-w-xs justify-center">
                            <span className="text-xl">📅</span>
                            <p className="text-sm font-semibold text-text leading-snug text-left">
                                Anunciaremos al gran ganador el{" "}
                                <span className="text-accentPrimary">miércoles 29 de abril</span>.
                            </p>
                        </div>

                        {/* Social CTA copy */}
                        <p className="text-sm text-textMuted max-w-xs leading-relaxed mb-6">
                            Para asegurarte de no perderte el anuncio (y ver el proceso de selección), síguenos ahora en nuestras redes. ¡Allí daremos la noticia oficial!
                        </p>

                        {/* Social buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs mb-8">
                            <a
                                href="https://www.linkedin.com/company/duet-solutions-spa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full flex items-center justify-center gap-2 rounded-xl bg-[#0A66C2] hover:bg-[#0958a8] text-white font-bold py-3 px-5 text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-[#0A66C2]/20"
                                id="success-linkedin-btn"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                Seguir en LinkedIn
                            </a>
                            <a
                                href="https://www.instagram.com/duetsolutions.cl/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full flex items-center justify-center gap-2 rounded-xl text-white font-bold py-3 px-5 text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
                                style={{
                                    background: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
                                    boxShadow: "0 4px 15px rgba(253,29,29,0.25)",
                                }}
                                id="success-instagram-btn"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                                </svg>
                                Seguir en Instagram
                            </a>
                        </div>

                        <button
                            onClick={() => setIsSuccess(false)}
                            className="text-textMuted font-medium text-xs hover:text-text transition-colors focus-ring rounded-md"
                        >
                            Enviar otra postulación
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
