import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { Suspense } from "react"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Trefree — Трезвый водитель в Санкт-Петербурге",
  description: "Надежный сервис трезвого водителя в СПб и ЛО. Безопасно, быстро, доступно. Вызов 24/7.",
  generator: "v0.app",
  keywords: "трезвый водитель, СПб, Санкт-Петербург, такси, водитель, безопасность",
  authors: [{ name: "Trefree" }],
  creator: "Trefree",
  publisher: "Trefree",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  themeColor: "#0B0E2A",
  openGraph: {
    title: "Trefree — Трезвый водитель",
    description: "Надежный сервис трезвого водителя в СПб и ЛО",
    type: "website",
    locale: "ru_RU",
    siteName: "Trefree",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trefree — Трезвый водитель",
    description: "Надежный сервис трезвого водителя в СПб и ЛО",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark scroll-smooth" dir="ltr">
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body className={`font-sans ${inter.variable} ${robotoMono.variable} antialiased min-h-screen`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#00D1FF] text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-[#FF4FD8]"
        >
          Перейти к основному содержанию
        </a>
        <Suspense fallback={null}>{children}</Suspense>
        <CookieBanner />
      </body>
    </html>
  )
}
