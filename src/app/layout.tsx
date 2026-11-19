
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
  "Asif Car Wrap is a professional car wrapping and decoration center in Lahore, Pakistan. We specialize in premium car wrapping, Paint Protection Film (PPF), custom vinyl wraps, vehicle modifications, and automotive styling. Transform and protect your car with our professional services. Contact us today for a consultation and quotation.";

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
    "Car Wrapping Lahore