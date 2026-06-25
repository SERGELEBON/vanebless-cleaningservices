import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanebless Cleaning Services — Cleaning Beyond Excellence",
  description:
    "Vanebless Cleaning Services : vos experts en solutions de nettoyage pour bureaux, maisons et événements spéciaux. Devis gratuit, intervention à Accra et partout au Ghana.",
  keywords: [
    "nettoyage",
    "cleaning services",
    "Vanebless",
    "nettoyage bureau",
    "deep cleaning",
    "nettoyage maison",
    "Accra",
    "Ghana",
  ],
  authors: [{ name: "Vanebless Cleaning Services" }],
  openGraph: {
    title: "Vanebless Cleaning Services — Cleaning Beyond Excellence",
    description:
      "Vos experts en solutions de nettoyage pour bureaux, maisons et événements spéciaux.",
    siteName: "Vanebless Cleaning Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanebless Cleaning Services",
    description: "Cleaning Beyond Excellence",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster position="top-center" richColors />
      </body>
    </html>
  );
}
