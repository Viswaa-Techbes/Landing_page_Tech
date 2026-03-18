import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techbes | Enterprise IT Infrastructure Solutions",
  description: "A unified IT infrastructure & service management platform engineered for enterprises operating at scale across India. Network Infrastructure, AMC, CCTV & more.",
  keywords: [
    "Techbes",
    "Enterprise IT Infrastructure",
    "Network Infrastructure Solutions",
    "IT Services Bangalore",
    "Annual Maintenance Contracts (AMC)",
    "Electrical Services",
    "CCTV Installation",
    "Laptop & Desktop Services",
    "Networking Services",
    "IT & Security Services",
  ],
  authors: [{ name: "Techbes" }],
  openGraph: {
    title: "Techbes | Enterprise IT Infrastructure Solutions",
    description: "Full Website & Service Platform Launching Soon. A unified IT infrastructure & service management platform engineered for enterprises across India.",
    url: "https://techbes.co.in",
    siteName: "Techbes",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techbes | Enterprise IT Infrastructure Solutions",
    description: "Full Website & Service Platform Launching Soon. Network Infrastructure, AMC, CCTV, IT & Security Services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
