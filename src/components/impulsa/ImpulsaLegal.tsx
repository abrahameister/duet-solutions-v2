"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Scale } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const bases = [
    {
        num: "1",
        title: "ORGANIZADOR",
        text: "Duet Solutions (www.duetsolutions.cl).",
    },
    {
        num: "2",
        title: "PERFIL DEL PARTICIPANTE",
        text: "Pymes legalmente constituidas o Startups en crecimiento.",
    },
    {
        num: "3",
        title: "EL PREMIO",
        text: "Diseño Web 100% Personalizado (no plantillas), Registro de Dominio por 1 año, Hosting por 1 año y Asesoría Estratégica.",
    },
    {
        num: "4",
        title: "CONDICIONES POST-PREMIO",
        text: "Los servicios de Hosting y Dominio son gratuitos por los primeros 12 meses. Al finalizar el mes 12, el ganador deberá contratar uno de los planes de mantenimiento y servicios de Duet Solutions vigentes en ese momento para garantizar la continuidad operativa.",
    },
    {
        num: "5",
        title: "SELECCIÓN DEL GANADOR",
        text: "Se evaluará el potencial de crecimiento, la claridad en la necesidad del sitio web y la disponibilidad para colaborar en la creación de un \"Caso de Éxito\" público (testimonios, métricas, etc.).",
    },
    {
        num: "6",
        title: "DERECHOS DE IMAGEN",
        text: "El ganador acepta que Duet Solutions utilice el nombre de su marca y testimonios para fines promocionales y de portafolio.",
    },
];

export default function ImpulsaLegal() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".legal-animate", {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-14 sm:py-20"
            aria-labelledby="legal-heading"
        >
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <details
                    className="legal-animate opacity-0 translate-y-4 group rounded-2xl border border-border bg-surface/60 backdrop-blur-sm overflow-hidden shadow-sm"
                >
                    <summary
                        className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 hover:bg-surface transition-colors list-none focus-ring rounded-2xl"
                        aria-label="Ver bases legales del concurso"
                    >
                        <span className="flex items-center gap-3 font-semibold text-text text-sm sm:text-base">
                            <Scale className="w-5 h-5 text-accentPrimary shrink-0" />
                            <span id="legal-heading">
                                Ver Bases Legales del Concurso{" "}
                                <span className="text-accentPrimary">(Importante)</span>
                            </span>
                        </span>
                        <ChevronDown
                            className="w-5 h-5 text-textMuted shrink-0 transition-transform duration-300 group-open:rotate-180"
                            aria-hidden="true"
                        />
                    </summary>

                    <div className="px-6 pb-8 pt-2 border-t border-border">
                        <h3 className="text-base font-bold text-text mt-4 mb-6 text-center uppercase tracking-widest text-xs text-textMuted">
                            Bases Legales del Concurso:<br />
                            <span className="text-text text-sm normal-case tracking-normal">"IMPULSA TU NEGOCIO CON DUET SOLUTIONS"</span>
                        </h3>

                        <ol className="space-y-5">
                            {bases.map((base) => (
                                <li key={base.num} className="flex gap-4">
                                    <span
                                        className="flex items-center justify-center w-7 h-7 rounded-full bg-accentPrimary/10 border border-accentPrimary/25 text-accentPrimary font-bold text-xs shrink-0 mt-0.5"
                                        aria-hidden="true"
                                    >
                                        {base.num}
                                    </span>
                                    <div>
                                        <span className="font-bold text-text text-sm">
                                            {base.title}:{" "}
                                        </span>
                                        <span className="text-textMuted text-sm leading-relaxed">
                                            {base.text}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </details>
            </div>
        </section>
    );
}
