import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Nanum_Pen_Script } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
    variable: '--font-heading',
    display: 'swap',
})

const nanum = Nanum_Pen_Script({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-nanum',
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://www.duetsolutions.cl'),
    title: {
        default: 'Duet Solutions | Automatización, Integración, Software a Medida e IA',
        template: '%s | Duet Solutions',
    },
    description:
        'Transformamos procesos reales en soluciones digitales que escalan. Analizamos tu operación y construimos automatización, integraciones, software a medida e inteligencia artificial en Chile y LATAM.',
    keywords: [
        'Duet Solutions',
        'Automatización de procesos',
        'Integración de sistemas',
        'Software a medida Chile',
        'Inteligencia Artificial empresarial',
        'Microsoft Power Platform',
        'Google Cloud Platform',
        'n8n',
        'Make',
        'Transformación digital B2B',
    ],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Duet Solutions | Transformamos procesos reales en soluciones que escalan',
        description:
            'Eliminamos tareas manuales y conectamos tus sistemas mediante automatización, integración, software a medida e IA aplicada.',
        url: 'https://www.duetsolutions.cl',
        siteName: 'Duet Solutions',
        locale: 'es_CL',
        type: 'website',
        images: [
            {
                url: '/images/Duet_Slogan.png',
                width: 1200,
                height: 630,
                alt: 'Duet Solutions — Automatización, Integración, Software a Medida e IA',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Duet Solutions | Automatización, Integración y Software a Medida',
        description:
            'Transformamos procesos reales en soluciones digitales que escalan en Chile y LATAM.',
        images: ['/images/Duet_Slogan.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Duet Solutions SpA',
    url: 'https://www.duetsolutions.cl',
    logo: 'https://www.duetsolutions.cl/images/logos/Logo_Sin_Texto_Color%20(1).png',
    description:
        'Consultoría e implementación de automatización empresarial, integración de sistemas, desarrollo de software a medida e inteligencia artificial en Chile y LATAM.',
    areaServed: ['CL', 'LatAm'],
    email: 'contacto@duetsolutions.cl',
    telephone: '+56973858191',
    sameAs: [
        'https://www.linkedin.com/company/duet-solutions-spa/',
        'https://www.linkedin.com/in/abrahamramirezch/',
        'https://www.instagram.com/duetsolutions.cl/',
    ],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className="scroll-smooth">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className={`${inter.variable} ${spaceGrotesk.variable} ${nanum.variable} bg-bg text-text min-h-screen relative font-body antialiased selection:bg-brandOrange/30 selection:text-white`}
            >
                {/* Skip to main content for WCAG 2.2 AA Keyboard Navigation */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-brandOrange focus:text-white focus:font-bold focus:shadow-lg focus:outline-none"
                >
                    Saltar al contenido principal
                </a>

                {/* Global Dot Pattern Overlay */}
                <div
                    className="fixed inset-0 bg-dot-pattern pointer-events-none z-[-1]"
                    aria-hidden="true"
                />
                <div className="flex flex-col min-h-screen">{children}</div>
            </body>
        </html>
    )
}
