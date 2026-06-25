"use client";

import { Badge } from "@/components/ui/badge";
import { beforeAfterGallery } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-slate-900 py-20 sm:py-28"
    >
      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-3 bg-brand-red/20 text-brand-red-light">
            Our work
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            The transformation{" "}
            <span className="text-brand-red-light">in pictures</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Drag the slider to discover the before / after of our jobs. The
            result speaks for itself.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {beforeAfterGallery.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:ring-brand-red/40"
            >
              <BeforeAfterSlider
                before={item.before}
                after={item.after}
                label={item.label}
              />
              <div className="mt-3 px-1 text-sm text-slate-300">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
