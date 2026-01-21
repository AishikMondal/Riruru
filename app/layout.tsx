import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Dancing_Script, Pacifico, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });
const _pacifico = Pacifico({ weight: "400", subsets: ["latin"], variable: "--font-pacifico" });
const _poppins = Poppins({ weight:"400", subsets: ["latin"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: 'Happy Birthday Sagnika 🎂💖',
  description: 'A special birthday celebration',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.className} ${_geistMono.className} ${_dancingScript.variable} ${_pacifico.variable} ${_poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
