
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import { A11y, Autoplay, EffectFade, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import { heroSlides } from "@/data/hero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { whatsappHref } from "@/lib/whatsapp";

export function HeroSlideshow() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const slide = heroSlides[index] ?? heroSlides[0];

  if (!slide) return null;

  const secondaryHref = slide.secondary.external
    ? whatsappHref(slide.secondary.href)
    : slide.secondary.href;

  const changeSlide = (direction: "next" | "prev") => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (direction === "next") {
      swiper.slideTo((swiper.activeIndex + 1) % heroSlides.length);
    } else {
      swiper.slideTo(
        (swiper.activeIndex - 1 + heroSlides.length) % heroSlides.length
      );
    }
  };

  return (
    <section
      aria-label="Asif Car Wraps featured services"
      aria-roledescription="carousel"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#08090d] text-white"
    >
      {/* CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Swiper
          className="!absolute !inset-0 !h-full !w-full"
          modules={[Autoplay, EffectFade, A11y, Keyboard]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={reduceMotion ? 0 : 1200}
          rewind
          keyboard={{ enabled: true }}
          autoplay={
            reduceMotion
              ? false
              : {
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
          }
          onSwiper={(swiper) => {
            swiperRef.current = swiper;

            if (
              window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ) {
              swiper.autoplay?.stop();
              setPaused(true);
            }
          }}
          onSlideChange={(swiper) => {
            setIndex(swiper.realIndex);
          }}
        >
          {heroSlides.map((item, slideIndex) => (
            <SwiperSlide
              key={`${item.heading}-${slideIndex}`}
              className="!relative !h-full overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority={slideIndex === 0}
                  sizes="100vw"
                  className={`object-cover object-center ${
                    !reduceMotion ? "ken-active" : ""
                  }`}
                />
              </div>

              {/* LUXURY CINEMATIC GRADIENTS */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050508]/95 via-[#050508]/65 to-[#050508]/15" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050508]/90 via-transparent to-[#050508]/35" />

              <div className="pointer-events-none absolute inset-0 bg-black/10" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* SUBTLE DECORATIVE LIGHTING */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[420px] w-[500px] max-w-full rounded-full bg-pink/[0.035] blur-[110px]"
      />

      {/* HERO CONTENT */}
      <div className="pointer-events-none relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-9 pt-36 sm:px-8 sm:pb-12 lg:pb-14">
        <div className="mx-auto w-full max-w-[1320px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${slide.heading}-${index}`}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 28 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -15 }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                ease: "easeOut",
              }}
              className="max-w-[850px]"
            >
              {/* EYEBROW */}
              <div className="mb-5 flex items-center gap-3 sm:mb-7">
                <span className="h-px w-9 bg-pink sm:w-12" />

                <p className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.28em] text-pink sm:text-xs">
                  {slide.eyebrow}
                </p>
              </div>

              {/* PREMIUM HEADING */}
              <h1 className="max-w-[850px] font-display text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.94] tracking-[-0.025em] text-white">
                {slide.heading}
              </h1>

              {/* SUBHEADING */}
              <p className="mt-6 max-w-2xl font-grotesk text-lg font-medium leading-snug text-white sm:text-2xl">
                {slide.subheading}
              </p>

              {/* DESCRIPTION */}
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                {slide.description}
              </p>

              {/* ACTION BUTTONS */}
              <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
                <ButtonLink href={slide.primary.href}>
                  {slide.primary.label}
                </ButtonLink>

                <ButtonLink
                  href={secondaryHref}
                  variant="ghost"
                  external={slide.secondary.external}
                >
                  {slide.secondary.label}
                </ButtonLink>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* BOTTOM NAVIGATION */}
          <div className="pointer-events-auto mt-12 flex flex-wrap items-center gap-x-5 gap-y-4 border-t border-white/15 pt-6 sm:mt-16">
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => changeSlide("prev")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 hover:border-pink hover:bg-pink hover:text-black"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                aria-label="Next slide"
                onClick={() => changeSlide("next")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 hover:border-pink hover:bg-pink hover:text-black"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* SLIDE INDICATORS */}
            <div
              className="flex items-center gap-2"
              role="group"
              aria-label="Choose a slide"
            >
              {heroSlides.map((item, slideIndex) => (
                <button
                  key={`${item.heading}-${slideIndex}`}
                  type="button"
                  aria-label={`Show slide ${slideIndex + 1}: ${item.eyebrow}`}
                  aria-current={slideIndex === index ? "true" : undefined}
                  onClick={() => swiperRef.current?.slideTo(slideIndex)}
                  className={`h-[3px] transition-all duration-500 ${
                    slideIndex === index
                      ? "w-10 bg-pink"
                      : "w-4 bg-white/35 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            {/* PLAY / PAUSE */}
            <button
              type="button"
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              aria-pressed={paused}
              onClick={() => {
                const swiper = swiperRef.current;
                if (!swiper) return;

                if (paused) {
                  swiper.autoplay?.start();
                  setPaused(false);
                } else {
                  swiper.autoplay?.stop();
                  setPaused(true);
                }
              }}
              className="flex h-11 items-center gap-2 px-2 font-grotesk text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75 transition hover:text-white"
            >
              {paused ? (
                <Play className="h-4 w-4" />
              ) : (
                <Pause className="h-4 w-4" />
              )}
              {paused ? "Play" : "Pause"}
            </button>

            {/* COUNTER */}
            <p className="font-grotesk text-xs font-semibold tracking-[0.18em] text-white/60">
              <span className="text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(heroSlides.length).padStart(2, "0")}
            </p>

            {/* SCROLL INDICATOR */}
            <a
              href="#welcome"
              className="ml-auto hidden items-center gap-3 font-grotesk text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65 transition hover:text-white lg:flex"
            >
              Scroll to Explore
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM ACCENT LINE */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-20 h-px bg-white/15"
      >
        <div
          key={`${index}-${paused}`}
          className={
            paused || reduceMotion
              ? "h-full w-0 bg-pink"
              : "progress-bar h-full w-full origin-left bg-pink"
          }
        />
      </div>
    </section>
  );
}
