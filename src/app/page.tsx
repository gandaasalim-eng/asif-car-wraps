import type { Metadata } from "next";
import { HeroSlideshow } from "@/components/hero/HeroSlideshow";
import {
  FaqPreview,
  FeaturedWork,
  FinalCta,
  Marquee,
  Offers,
  Process,
  ServiceCards,
  StatementBanner,
  Testimonials,
  Welcome,
  WhyChoose,
} from "@/components/home/HomeSections";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <Welcome />
      <Marquee />
      <ServiceCards />
      <WhyChoose />
      <StatementBanner />
      <FeaturedWork />
      <Process />
      <Offers />
      <Testimonials />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
