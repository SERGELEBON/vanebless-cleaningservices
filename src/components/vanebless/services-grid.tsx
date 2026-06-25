"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { services, type ServiceItem } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";
import { BookingForm } from "./booking-form";
import { beforeAfterGallery } from "@/lib/site";

const categoryStyles: Record<ServiceItem["category"], string> = {
  Routine: "bg-brand-blue/10 text-brand-blue",
  Specialised: "bg-brand-red/10 text-brand-red",
  Targeted: "bg-amber-100 text-amber-700",
  Technical: "bg-emerald-100 text-emerald-700",
};

export function ServicesGrid() {
  const [active, setActive] = React.useState<ServiceItem | null>(null);

  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="mb-3 bg-brand-red/10 text-brand-red"
          >
            Our services
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Cleaning solutions{" "}
            <span className="text-brand-blue">for every need</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            From routine to specialised, Vanebless covers all your needs with
            the same standard of excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActive(service)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-xl hover:shadow-brand-blue/10"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/30" />
                <Badge
                  className={`absolute left-4 top-4 ${categoryStyles[service.category]}`}
                >
                  {service.category}
                </Badge>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-brand-blue">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  {service.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Need a custom service?{" "}
            <Button
              asChild
              variant="link"
              className="px-1 text-brand-red"
            >
              <a href="#quote">
                Let's talk about your project <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </p>
        </div>
      </div>

      {/* Detail modal */}
      <ServiceDetailDialog
        service={active}
        onOpenChange={(o) => !o && setActive(null)}
      />
    </section>
  );
}

function ServiceDetailDialog({
  service,
  onOpenChange,
}: {
  service: ServiceItem | null;
  onOpenChange: (open: boolean) => void;
}) {
  const ba = beforeAfterGallery[0];
  return (
    <Dialog open={!!service} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby={undefined} className="max-h-[92svh] overflow-y-auto max-w-3xl border-0 bg-white p-0 sm:rounded-2xl">
        {service && (
          <>
            {/* Hero image */}
            <div className="relative aspect-[16/8] w-full overflow-hidden sm:rounded-t-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/70" />
              <DialogHeader className="absolute inset-x-0 bottom-0 p-6">
                <Badge className={categoryStyles[service.category]}>
                  {service.category}
                </Badge>
                <DialogTitle className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  {service.title}
                </DialogTitle>
              </DialogHeader>
            </div>

            <div className="p-6">
              <DialogDescription className="text-base text-slate-700">
                {service.description}
              </DialogDescription>

              {/* Features */}
              <div className="mt-6">
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-blue">
                  <Sparkles className="h-4 w-4" />
                  What's included
                </h4>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Before / After */}
              <div className="mt-8">
                <h4 className="text-sm font-bold uppercase tracking-wide text-brand-blue">
                  Before / After
                </h4>
                <p className="mt-1 text-sm text-slate-500">
                  Drag to see the transformation
                </p>
                <BeforeAfterSlider
                  before={ba.before}
                  after={ba.after}
                  label={ba.label}
                  className="mt-3"
                />
              </div>

              {/* Booking */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h4 className="text-lg font-bold text-slate-900">
                  Book this service
                </h4>
                <p className="mt-1 text-sm text-slate-600">
                  Response within 24h, free quote and no obligation.
                </p>
                <div className="mt-4">
                  <BookingForm defaultService={service.title} compact />
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
