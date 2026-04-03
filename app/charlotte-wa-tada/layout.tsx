import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Charlotte wa Tada, Jiken wo Tokitai. Tantei wa Mou, Shindeiru. Code:RED - Descargar Novela Ligera en PDF y EPUB",
  description:
    "Descargar Charlotte wa Tada, Jiken wo Tokitai. Tantei wa Mou, Shindeiru. Code:RED light novel en PDF y EPUB formato.",
  keywords: [
    "Charlotte wa Tada, Jiken wo Tokitai. Tantei wa Mou, Shindeiru. Code:RED",
    "light novel descargar",
    "PDF",
    "EPUB",
    "Novela ligera vida escolar",
  ],
  openGraph: {
    title: "Charlotte wa Tada, Jiken wo Tokitai. Tantei wa Mou, Shindeiru. Code:RED - Descargar Novela Ligera en PDF y EPUB",
    description:
      "Descargar Charlotte wa Tada, Jiken wo Tokitai. Tantei wa Mou, Shindeiru. Code:RED light novel en PDF y EPUB formato.",
    url: "https://legnnovels.com/charlotte-wa-tada",
    siteName: "LegendsNoFansub",
    images: [
      {
        url: "/charlottev1.webp",
        width: 1200,
        height: 630,
        alt: "Charlotte wa Tada, Jiken wo Tokitai. Tantei wa Mou, Shindeiru. Code:RED - Descargar Novela Ligera en PDF y EPUB",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlotte wa Tada, Jiken wo Tokitai. Tantei wa Mou, Shindeiru. Code:RED - Descargar Novela Ligera en PDF y EPUB",
    description: "Descargar Charlotte wa Tada, Jiken wo Tokitai. Tantei wa Mou, Shindeiru. Code:RED light novel en PDF y EPUB formato.",
    images: ["/charlottev1.webp"],
  },
  alternates: {
    canonical: "https://legnnovels.com/charlotte-wa-tada",
  },
}

export default function ArslanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
