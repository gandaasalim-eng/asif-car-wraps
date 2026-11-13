import type { MetadataRoute } from "next";
import { business } from "@/config/business";

const paths = [
  "/",
  "/about",
  "/services",
  "/services/car-wrapping",
  "/services/ppf",
  "/services/custom-wrapping",
  "/services/car-modifications",
  "/gallery",
  "/faqs",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, business.siteUrl).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
