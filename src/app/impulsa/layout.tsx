import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "¡Impulsa tu Pyme! Gana un Ecosistema Digital Completo | Duet Solutions",
    description:
        "Postula al concurso de Duet Solutions y gana un Sitio Web 100% Personalizado, Hosting, Dominio .cl y Asesoría Estratégica por 1 año. Gratis para Pymes y Startups.",
    openGraph: {
        title: "¡Impulsa tu Pyme! Gana un Ecosistema Digital Completo",
        description:
            "Postula al concurso y gana tu presencia digital completa: Sitio Web, Hosting, Dominio y Asesoría Experta. ¡Totalmente gratis!",
        url: "https://www.duetsolutions.cl/impulsa",
        siteName: "Duet Solutions",
        locale: "es_CL",
        type: "website",
    },
};

export default function ImpulsaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
