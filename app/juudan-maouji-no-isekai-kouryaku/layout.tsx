import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Juudan Maouji no Isekai Kouryaku: Maougun nanoni Gendai Heiki wo Shoukan shite Attouteki ni Tatakattemo Ii desu ka - Descargar Novela Ligera en PDF y EPUB",
  description:
    "Descargar Juudan Maouji no Isekai Kouryaku light novel en PDF y EPUB formato.",
  keywords: [
    "Juudan Maouji no Isekai Kouryaku",
    "light novel descargar",
    "PDF",
    "EPUB",
    "Novela de Fantasia",
    "Japanese light novel translation",
  ],
  openGraph: {
    title: "Juudan Maouji no Isekai Kouryaku: Maougun nanoni Gendai Heiki wo Shoukan shite Attouteki ni Tatakattemo Ii desu ka - Descargar Novela Ligera en PDF y EPUB",
    description:
      "Descargar Juudan Maouji no Isekai Kouryaku light novel en PDF y EPUB formato.",
    url: "https://legnnovels.com/juudan-maouji-no-isekai-kouryaku",
    siteName: "LegendsNoFansub",
    images: [
      {
        url: "#",
        width: 1200,
        height: 630,
        alt: "Juudan Maouji no Isekai Kouryaku - Descargar Novela Ligera en PDF y EPUB",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juudan Maouji no Isekai Kouryaku - Descargar Novela Ligera en PDF y EPUB",
    description: "Descargar Juudan Maouji no Isekai Kouryaku light novel en PDF y EPUB formato.",
    images: ["#"],
  },
  alternates: {
    canonical: "https://legnnovels.com/juudan-maouji-no-isekai-kouryaku",
  },
}

export default function JuudanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
