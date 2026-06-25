"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, Phone } from "lucide-react";
import { heroSlides, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function HeroSlider() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const count = heroSlides.length;

  const next = React.useCallback(
    () => setIndex((i) => (i + 1) % count),
    [count]
  );
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, paused]);

  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-slate-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-out",
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
      ))}

      {/* Decorative side accent (solid) */}
      <div className="absolute left-0 top-0 z-10 h-full w-1.5 bg-brand-red" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            {site.slogan}
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-xl sm:text-5xl md:text-6xl lg:text-7xl">
            {heroSlides[index].title.split(" ").map((word, wi, arr) => (
              <React.Fragment key={wi}>
                {wi === arr.length - 1 ? (
                  <span className="text-brand-red-light">{word}</span>
                ) : (
                  <>{word} </>
                )}
              </React.Fragment>
            ))}
          </h1>

          <p className="mt-5 max-w-xl text-base text-slate-100/90 drop-shadow sm:text-lg md:text-xl">
            {heroSlides[index].subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="group bg-brand-red text-white shadow-lg shadow-brand-red/30 transition-all hover:bg-brand-red-dark hover:shadow-xl hover:shadow-brand-red/40"
            >
              <Link href="#quote">
                Get a Free Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/5 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-brand-blue"
            >
              <Link href="#contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Service
              </Link>
            </Button>
          </div>

          {/* Quick call row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-red-light" />
              {site.phones.join("  •  ")}
            </span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 right-4 z-30 flex items-center gap-3 sm:right-6">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-brand-blue"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-brand-blue"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index
                ? "w-8 bg-brand-red"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            )}
          />
        ))}
      </div>
    </section>
  );
}
