"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Car, Calendar, Route, Layers, Globe } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Cases() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [neiraView, setNeiraView] = useState<"platform" | "home">("platform");

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const ctx = gsap.context(() => {
            if (prefersReducedMotion) {
                gsap.set(".case-fade", { y: 0, opacity: 1 });
                return;
            }
            gsap.fromTo(
                ".case-fade",
                { y: 24, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 82%",
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const otherCases = [
        {
            name: "Servicios Jess",
            url: "https://serviciosjess.cl/",
            industry: "Industria & manufactura",
            capabilities: ["B2B", "Contenido técnico", "UX corporativa"],
            logoUrl: "/images/Cases/Jess_Portafolio.png",
        },
        {
            name: "Vial Conection",
            url: "https://vialconection.cl/",
            industry: "Infraestructura & ingeniería",
            capabilities: ["Industria", "UX técnica", "Posicionamiento", "Captación"],
            logoUrl: "/images/Cases/VialConection_Portafolio.png",
        },
        {
            name: "Imperio Madison",
            url: "https://www.imperiomadison.cl/",
            industry: "Retail digital",
            capabilities: ["E-commerce", "UX", "Lógica comercial"],
            logoUrl: "/images/Cases/ImperioMadison_Portafolio.png",
        },
        {
            name: "Busca Cancha",
            url: "https://buscacancha.cl/",
            industry: "Producto digital / Marketplace",
            capabilities: ["Marketplace", "Reservas", "Gestión", "Dashboards"],
            logoUrl: "/images/Cases/Buscacanchas_Portafolio.png",
        },
    ];

    return (
        <section
            id="casos"
            ref={sectionRef}
            aria-labelledby="cases-featured-heading"
            className="flex flex-col gap-8 w-full scroll-mt-24"
        >
            {/* Section Eyebrow & Heading */}
            <div className="case-fade flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandOrange/10 border border-brandOrange/25 text-xs font-bold uppercase tracking-wider text-brandOrange mb-3">
                        Impacto Operacional Real
                    </span>
                    <h2
                        id="cases-featured-heading"
                        className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
                    >
                        Soluciones en producción
                    </h2>
                </div>
                <p className="text-sm md:text-base text-textMuted max-w-md">
                    Sistemas diseñados alrededor de la operación real de cada cliente,
                    desde torres de control logístico hasta plataformas digitales.
                </p>
            </div>

            {/* Neira Transportes (Premium Featured Case) */}
            <div className="case-fade bg-[#0a192f] rounded-3xl overflow-hidden shadow-2xl border border-white/15 text-white relative">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left content */}
                    <div className="lg:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
                        <div>
                            <span className="inline-block text-xs font-bold tracking-widest text-brandOrange uppercase mb-3">
                                CASO DESTACADO · LOGÍSTICA &amp; WFM
                            </span>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 tracking-tight leading-tight">
                                Neira Transportes
                            </h3>
                            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
                                Digitalización integral y planificación inteligente para una
                                operación de transporte corporativo de alta exigencia.
                            </p>

                            <div className="grid grid-cols-3 gap-3 mb-8">
                                <div className="text-center p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                                    <Car
                                        className="w-5 h-5 mx-auto mb-1 text-brandOrange"
                                        aria-hidden="true"
                                    />
                                    <span className="block text-xl font-black text-white">
                                        10
                                    </span>
                                    <span className="text-xs text-white/75 font-medium">
                                        Conductores
                                    </span>
                                </div>
                                <div className="text-center p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                                    <Calendar
                                        className="w-5 h-5 mx-auto mb-1 text-brandGreen"
                                        aria-hidden="true"
                                    />
                                    <span className="block text-xl font-black text-white">
                                        +800
                                    </span>
                                    <span className="text-xs text-white/75 font-medium">
                                        Viajes / mes
                                    </span>
                                </div>
                                <div className="text-center p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                                    <Route
                                        className="w-5 h-5 mx-auto mb-1 text-brandOrange"
                                        aria-hidden="true"
                                    />
                                    <span className="block text-xl font-black text-white">
                                        1
                                    </span>
                                    <span className="text-xs text-white/75 font-medium leading-tight block">
                                        Torre central
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className="text-xs font-semibold text-white/70 block mb-3">
                                Clientes atendidos por la operación:
                            </span>
                            <div className="flex flex-wrap gap-x-6 gap-y-4 items-center bg-white/[0.03] p-4 rounded-2xl border border-white/[0.06]">
                                <Image
                                    src="/images/logos/Logos_Clientes_Neira/Logo_JetSmart.svg"
                                    alt="JetSMART"
                                    width={100}
                                    height={30}
                                    className="w-auto h-5 opacity-80 hover:opacity-100 transition-opacity"
                                />
                                <Image
                                    src="/images/logos/Logos_Clientes_Neira/acciona-logo.svg"
                                    alt="Acciona"
                                    width={100}
                                    height={30}
                                    className="w-auto h-5 opacity-80 hover:opacity-100 transition-opacity"
                                />
                                <Image
                                    src="/images/logos/Logos_Clientes_Neira/menzies-aviation-seeklogo.png"
                                    alt="Menzies Aviation"
                                    width={100}
                                    height={30}
                                    className="w-auto h-6 opacity-80 hover:opacity-100 transition-opacity"
                                />
                                <Image
                                    src="/images/logos/Logos_Clientes_Neira/Agunsa_logo.png"
                                    alt="Agunsa"
                                    width={100}
                                    height={30}
                                    className="w-auto h-6 opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Middle Mockup with Accessible Interactive Toggle + Hover */}
                    <div className="lg:col-span-5 bg-[#050e1a] p-4 sm:p-6 flex flex-col justify-between relative min-h-[340px] sm:min-h-[400px] overflow-hidden group">
                        {/* Interactive View Switcher (works on Mobile Touch & Desktop Keyboard/Click) */}
                        <div className="relative z-20 flex items-center justify-between gap-2 mb-3">
                            <span className="text-xs font-semibold text-textMuted">
                                Explora la solución:
                            </span>
                            <div
                                role="tablist"
                                aria-label="Vistas del caso Neira Transportes"
                                className="inline-flex rounded-xl bg-[#0B1722] p-1 border border-white/15"
                            >
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={neiraView === "platform"}
                                    onClick={() => setNeiraView("platform")}
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors focus-ring ${
                                        neiraView === "platform"
                                            ? "bg-brandOrange text-white shadow-sm"
                                            : "text-textMuted hover:text-white"
                                    }`}
                                >
                                    <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                                    Torre de Control
                                </button>
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={neiraView === "home"}
                                    onClick={() => setNeiraView("home")}
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors focus-ring ${
                                        neiraView === "home"
                                            ? "bg-brandOrange text-white shadow-sm"
                                            : "text-textMuted hover:text-white"
                                    }`}
                                >
                                    <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                                    Portal Web
                                </button>
                            </div>
                        </div>

                        <div className="relative w-full flex-grow min-h-[260px] rounded-2xl overflow-hidden shadow-2xl border border-white/15">
                            {/* Home Image */}
                            <Image
                                src="/images/Cases/Neira_Home.png"
                                alt="Portal corporativo de Neira Transportes"
                                fill
                                sizes="(max-width: 1024px) 100vw, 42vw"
                                className={`object-cover object-top transition-opacity duration-500 ease-in-out ${
                                    neiraView === "home" ? "opacity-100" : "opacity-0"
                                }`}
                            />
                            {/* Platform Image */}
                            <Image
                                src="/images/Cases/Neira_Platform.png"
                                alt="Plataforma operacional y torre de control de Neira Transportes"
                                fill
                                sizes="(max-width: 1024px) 100vw, 42vw"
                                className={`object-cover object-top absolute inset-0 transition-opacity duration-500 ease-in-out ${
                                    neiraView === "platform" ? "opacity-100" : "opacity-0"
                                }`}
                            />
                        </div>
                    </div>

                    {/* Right content */}
                    <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 bg-[#071324]">
                        <span className="inline-block text-xs font-bold uppercase tracking-wider text-brandGreen mb-2">
                            Arquitectura de Decisión
                        </span>
                        <h4 className="text-2xl font-bold text-white mb-4 leading-snug">
                            La tecnología propone. Operaciones decide.
                        </h4>
                        <p className="text-sm text-white/80 leading-relaxed mb-6">
                            El sistema analiza turnos, domicilios, horarios, capacidad
                            vehicular y disponibilidad de conductores para sugerir
                            agrupaciones y rutas óptimas al equipo de Operaciones.
                        </p>
                        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                            {[
                                "Ruteo Inteligente",
                                "Gestión de Flota",
                                "Turnos & WFM",
                                "Tiempo Real",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-white/90"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Title for other cases */}
            <div className="case-fade flex items-center justify-between mt-4">
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    Experiencias y productos digitales
                </h3>
            </div>

            {/* Other Cases Grid — Cohesive Dark Geist Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {otherCases.map((c, idx) => (
                    <article
                        key={idx}
                        className="case-fade bg-[#0A1929]/90 border border-white/10 rounded-2xl p-5 shadow-md hover:shadow-xl hover:border-brandOrange/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                    >
                        <div>
                            {/* Project preview with optimized sizes */}
                            <div className="w-full h-40 bg-[#071120] rounded-xl mb-4 flex items-center justify-center border border-white/10 overflow-hidden relative">
                                <Image
                                    src={c.logoUrl}
                                    alt={`Vista previa del proyecto ${c.name}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-brandOrange transition-colors">
                                {c.name}
                            </h4>
                            <p className="text-textMuted font-medium text-xs mb-4">
                                {c.industry}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mb-6">
                                {c.capabilities.map((cap, capIdx) => (
                                    <span
                                        key={capIdx}
                                        className="px-2.5 py-1 bg-white/[0.05] border border-white/10 rounded-full text-xs font-medium text-white/85"
                                    >
                                        {cap}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto pt-3 border-t border-white/[0.08]">
                            <a
                                href={c.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Ver proyecto ${c.name} (se abre en una nueva pestaña)`}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-brandOrange transition-colors focus-ring rounded-md py-1"
                            >
                                Ver proyecto en vivo
                                <ArrowUpRight
                                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
