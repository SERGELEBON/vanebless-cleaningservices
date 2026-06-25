"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BookingForm } from "./booking-form";

const perks = [
  "Response within 24h guaranteed",
  "100% free quote, no obligation",
  "Personalised advice for your needs",
  "Transparent pricing, no surprises",
];

export function QuoteSection() {
  return (
    <section id="quote" className="relative overflow-hidden bg-brand-blue py-20 sm:py-28">
      {/* Background image (solid blue tint overlay, no gradient) */}
      <Image
        src="https://sfile.chatglm.cn/images-ppt/dd4c2d2d854c.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-brand-blue/85" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Left: pitch */}
        <div className="text-white">
          <Badge className="mb-3 bg-white/15 text-white">
            Free quote
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Get your free quote{" "}
            <span className="text-brand-red-light">in 2 minutes</span>
          </h2>
          <p className="mt-4 max-w-lg text-base text-white/85 sm:text-lg">
            Fill in the form and receive a personalised estimate within 24h. No
            obligation, no surprises.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {perks.map((p) => (
              <li
                key={p}
                className="border-l-2 border-brand-red-light pl-3 text-sm text-white/90"
              >
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
            <p className="text-sm text-white/90">
              <span className="font-bold text-white">Over 5000 jobs</span>{" "}
              completed for satisfied individuals and businesses.
            </p>
          </div>
        </div>

        {/* Right: form card */}
        <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-slate-900/30 sm:p-8">
          <h3 className="text-xl font-bold text-slate-900">
            Request your quote
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Fields marked with * are required.
          </p>
          <div className="mt-5">
            <BookingForm variant="quote" />
          </div>
        </div>
      </div>
    </section>
  );
}
