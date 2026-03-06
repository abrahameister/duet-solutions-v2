import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
    title: 'Duet Solutions | Data-Driven Efficiency',
    description: 'Impulsamos tu éxito, sin importar tu escala. Reduce hasta un 80% las tareas manuales de tu agencia o empresa.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={`${inter.variable} bg-bg text-text min-h-screen relative font-body antialiased`}>
                {/* Global Dot Pattern Overlay */}
                <div className="absolute inset-0 bg-dot-pattern pointer-events-none z-[-1]" aria-hidden="true" />
                <div className="flex flex-col min-h-screen">
                    {children}
                </div>
            </body>
        </html>
    )
}
