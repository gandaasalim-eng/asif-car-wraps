
import type { Metadata, Viewport } from "next";
import { Inter, Oswald, Space_Grotesk } from "next/font/google";
import { CinematicBackdrop } from "@/components/layout/CinematicBackdrop";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/layout/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/layout/Providers";
import { business } from "@/config/business";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

// Official website title
const siteTitle =
  "Asif Car Wrap – Best Car Wrapping & Decoration Center";

// SEO description
const description =
  "Asif Car Wrap is a professional car wrapping and decoration center in Lahore, Pakistan. We specialize in premium car wrapping, Paint Protection Film (PPF), custom vinyl wraps, vehicle modifications, and automotive styling. Contact us for a consultation and quotation.";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Asif Car Wrap",
  },

  description,

  applicationName: business.name,

  keywords: [
    "Asif Car Wrap",
    "Asif Car Wraps",
    "Best Car Wrapping & Decoration Center",
    "Car Wrapping Lahore",
    "Car Wrapping Pakistan",
    "PPF Lahore",
    "Paint Protection Film",
    "Custom Car Wrapping",
    "Car Modifications Lahore",
    "Vehicle Decoration",
    "Automotive Styling",
  ],

  openGraph: {
    type: "website",
    siteName: business.name,
    title: siteTitle,
    description,
    locale: "en_PK",
    url: business.siteUrl,
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${space.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-white">
        <Providers>
          <JsonLd />

          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-pink focus:px-4 focus:py-3 focus:text-ink"
          >
            Skip to content
          </a>

          <CinematicBackdrop />

          <Navbar />

          <main
            id="main"
            className="relative z-10 flex-1"
          >
            {children}
          </main>

          <Footer />

          <FloatingActions />
        </Providers>
      </body>
    </html>
  );
}
