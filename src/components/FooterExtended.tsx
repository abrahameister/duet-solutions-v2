import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";

export default function FooterExtended() {
    return (
        <footer className="bg-bg text-text pt-20 pb-10 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-6 focus-ring rounded-md">
                            <Image
                                src="https://i.postimg.cc/8C6R8kgf/duet-solutions.png"
                                alt="Duet Solutions Logo"
                                width={160}
                                height={40}
                                className="w-auto h-10 object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-textMuted mb-8 max-w-[400px] leading-relaxed">
                            Transformando operaciones manuales en ecosistemas digitales automatizados y eficientes. El único límite es tu imaginación.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 tracking-tight">Soluciones</h4>
                        <ul className="space-y-4">
                            <li><span className="text-textMuted hover:text-text transition-colors cursor-default">Automatización de Procesos</span></li>
                            <li><span className="text-textMuted hover:text-text transition-colors cursor-default">Desarrollo Low-Code</span></li>
                            <li><span className="text-textMuted hover:text-text transition-colors cursor-default">Inteligencia Artificial</span></li>
                            <li><span className="text-textMuted hover:text-text transition-colors cursor-default">Presencia Digital</span></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 tracking-tight">Contacto</h4>
                        <ul className="space-y-4 text-textMuted">
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accentPrimary" />
                                <a href="mailto:contacto@duetsolutions.cl" className="hover:text-text transition-colors focus-ring rounded-md">contacto@duetsolutions.cl</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accentPrimary shrink-0 mt-0.5" />
                                <span>Torre Empresarial Global<br />Ciudad de Operaciones, CO 10001</span>
                            </li>
                        </ul>
                        <div className="flex items-center gap-4 mt-8">
                            <a
                                href="https://www.instagram.com/duetsolutions.cl/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-textMuted hover:text-accentPrimary hover:bg-surface2 transition-all border border-border"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/duet-solutions-spa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-textMuted hover:text-accentPrimary hover:bg-surface2 transition-all border border-border"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-textMuted">
                    <p>© {new Date().getFullYear()} Duet Solutions. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
