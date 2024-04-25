import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";

const titilliumWeb = Titillium_Web({ subsets: ['latin'], weight: ["200", "300", "400", "600", "700"] })

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
      <body className={titilliumWeb.className}>{children}</body>
    </html>
  )
}
