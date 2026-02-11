import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Snovibox — Solutions Digitales Durables",
  description:
    "Snovibox SARL conçoit et développe des solutions digitales durables : applications web et mobile, UX/UI design, ERP Odoo, déploiement hardware. Basé à Antananarivo, Madagascar.",
  keywords: [
    "Snovibox",
    "solutions digitales",
    "développement web",
    "application mobile",
    "Madagascar",
    "UX UI design",
    "ERP Odoo",
  ],
  openGraph: {
    title: "Snovibox — Solutions Digitales Durables",
    description:
      "Applications web et mobile sur mesure, UX/UI design, ERP Odoo. Vos données hébergées en Suisse.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.snovibox.com",
    siteName: "Snovibox",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
