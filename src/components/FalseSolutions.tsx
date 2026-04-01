import React from 'react';
import { XOctagon } from 'lucide-react';

interface FalseSolutionsProps {
    onOpenContact: () => void;
}

const FalseSolutions: React.FC<FalseSolutionsProps> = ({ onOpenContact }) => {
    const objections = [
        {
            title: "Contratar más gente para \"apagar incendios\".",
            description: "Solo subes tus costos y el desorden crece. Los errores humanos siguen ahí."
        },
        {
            title: "Llenarte de herramientas y apps sueltas.",
            description: "Pagas mil suscripciones que no se hablan entre sí. Tu información queda atrapada en islas."
        },
        {
            title: "Vender más sin estar preparado.",
            description: "Consigues clientes, pero tu operación colapsa porque no das abasto para atenderlos bien."
        }
    ];

    return (
        <section id="el-problema" className="py-20 md:py-28 bg-bg relative border-b border-white/5">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-text mb-4 mt-2 tracking-tight leading-tight">
                        Lo que has intentado hasta ahora <br className="hidden md:block" />
                        <span className="text-textMuted">(y por qué no funciona)</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-5 md:gap-6 mb-16">
                    {objections.map((obj, index) => (
                        <div 
                            key={index} 
                            className="bg-[#111A28] border border-white/5 rounded-2xl p-6 md:p-8 flex items-start gap-4 transition-all hover:border-white/10 group"
                        >
                            <XOctagon className="w-6 h-6 text-danger shrink-0 mt-1 opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-text mb-2">{obj.title}</h3>
                                <p className="text-textMuted leading-relaxed text-sm md:text-base">{obj.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#111A28] border border-accentPrimary/30 rounded-2xl p-8 md:p-12 text-center shadow-[0_0_40px_rgba(232,134,50,0.05)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-accentPrimary/5 pointer-events-none"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-text mb-8 tracking-tight leading-snug">
                            El problema no es tu equipo,<br /> 
                            <span className="text-accentPrimary">es tu infraestructura tecnológica.</span>
                        </h3>
                        <button 
                            onClick={onOpenContact}
                            className="px-8 py-4 bg-accentPrimary hover:bg-[#f97316] text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(232,134,50,0.3)] hover:shadow-[0_0_30px_rgba(232,134,50,0.5)] active:scale-95"
                        >
                            Hablemos de tu solución &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FalseSolutions;
