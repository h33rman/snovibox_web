import type { Metadata } from "next";
import { Montserrat, La_Belle_Aurore } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const laBelleAurore = La_Belle_Aurore({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-labelle",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SNOVIBOX - Votre Partenaire Digital",
  description:
    "Votre Partenaire Digital. Snovibox SARL conçoit et développe des solutions digitales durables : applications web et mobile, UX/UI design, ERP Odoo, déploiement hardware. Basé à Antananarivo, Madagascar.",
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
    title: "SNOVIBOX - Votre Partenaire Digital",
    description:
      "Votre Partenaire Digital. Applications web et mobile sur mesure, UX/UI design, ERP Odoo. Vos données hébergées en Suisse.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.snovibox.com",
    siteName: "SNOVIBOX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${laBelleAurore.variable}`}>
      <head>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-brands/css/uicons-brands.css' />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
