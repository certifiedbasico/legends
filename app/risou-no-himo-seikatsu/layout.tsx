import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Risou no Himo Seikatsu - Descargar Novela Ligera en PDF y EPUB",
  description:
    "Descargar Risou no Himo Seikatsu light novel en PDF y EPUB formato.",
  keywords: [
    "Risou no Himo Seikatsu",
    "light novel descargar",
    "PDF",
    "EPUB",
    "Novela de Fantasia",
    "Japanese light novel translation",
  ],
  openGraph: {
    title: "Risou no Himo Seikatsu - Descargar Novela Ligera en PDF y EPUB",
    description:
      "Descargar Risou no Himo Seikatsu light novel en PDF y EPUB formato.",
    url: "https://legnnovels.com/risou-no-himo-seikatsu",
    siteName: "LegendsNoFansub",
    images: [
      {
        url: "/risou17.webp",
        width: 1200,
        height: 630,
        alt: "Risou no Himo Seikatsu - Descargar Novela Ligera en PDF y EPUB",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Risou no Himo Seikatsu - Descargar Novela Ligera en PDF y EPUB",
    description: "Descargar Risou no Himo Seikatsu light novel en PDF y EPUB formato.",
    images: ["/risou17.webp"],
  },
  alternates: {
    canonical: "https://legnnovels.com/risou-no-himo-seikatsu",
  },
}

export default function RisouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
