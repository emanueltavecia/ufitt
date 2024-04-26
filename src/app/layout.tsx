import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Titillium_Web({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: "uFitt - Cálculo de GEB",
  description: "Calcule seu Gasto Energético Basal (GEB) com facilidade!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          'min-h-screen bg-gradient-to-r from-blue-900 to-slate-950 font-sans antialiased overflow-hidden',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
