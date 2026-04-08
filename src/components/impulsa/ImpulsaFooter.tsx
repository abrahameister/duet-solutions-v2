import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function ImpulsaFooter() {
    return (
        <footer className="mt-auto bg-bg border-t border-border pt-12 pb-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                    {/* Logo + tagline */}
                    <div className="flex flex-col items-center sm:items-start gap-3">
                        <Link href="/" className="focus-ring rounded-md" aria-label="Ir a duetsolutions.cl">
                            <Image
                                src="https://i.postimg.cc/8C6R8kgf/duet-solutions.png"
                                alt="Duet Solutions Logo"
                                width={140}
                                height={36}
                                className="w-auto h-8 object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-xs text-textMuted max-w-[240px] text-center sm:text-left leading-relaxed">
                            Impulsando tu éxito digital, sin importar tu escala.
                        </p>
                    </div>

                    {/* Social + contact */}
                    <div className="flex flex-col items-center sm:items-end gap-4">
                        <div className="flex items-center gap-3">
                            <a
                                href="mailto:contacto@duetsolutions.cl"
                                className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-textMuted hover:text-accentPrimary hover:bg-surface2 transition-all border border-border focus-ring"
                                aria-label="Enviar correo a contacto@duetsolutions.cl"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.instagram.com/duetsolutions.cl/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-textMuted hover:text-accentPrimary hover:bg-surface2 transition-all border border-border focus-ring"
                                aria-label="Instagram de Duet Solutions"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/duet-solutions-spa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-textMuted hover:text-accentPrimary hover:bg-surface2 transition-all border border-border focus-ring"
                                aria-label="LinkedIn de Duet Solutions"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                        <p className="text-xs text-textMuted">
                            © {new Date().getFullYear()} Duet Solutions. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
