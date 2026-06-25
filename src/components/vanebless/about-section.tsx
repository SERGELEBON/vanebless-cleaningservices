"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Clock,
  Leaf,
  Award,
} from "lucide-react";
import { stats } from "@/lib/site";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified & vetted crews",
    text: "Trained, verified and insured technicians for a service you can trust.",
  },
  {
    icon: Leaf,
    title: "Eco-friendly products",
    text: "Non-toxic solutions that respect your health and the environment.",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    text: "Scheduled or emergency visits, 7 days a week, around your constraints.",
  },
  {
    icon: Award,
    title: "Quality guaranteed",
    text: "100% satisfaction guaranteed. If anything is missed, we come back for free.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Images */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/15">
              <Image
                src="https://sfile.chatglm.cn/images-ppt/4d7ce9b8452a.jpg"
                alt="Vanebless professional crew in action"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 hidden w-60 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:block">
              <p className="text-3xl font-extrabold text-brand-red">5000+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                Happy clients
              </p>
            </div>
            {/* Floating badge top-left */}
            <div className="absolute -left-4 -top-4 rounded-xl bg-brand-blue px-4 py-2 text-white shadow-lg">
              <p className="text-xs font-bold uppercase tracking-wider">
                Since 2018
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <Badge className="mb-3 bg-brand-blue/10 text-brand-blue">
              About Vanebless
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Excellence in cleaning,{" "}
              <span className="text-brand-red">beyond expectations</span>
            </h2>
            <p className="mt-5 text-base text-slate-600 sm:text-lg">
              Vanebless Cleaning Services is a premium cleaning agency based in
              Ghana. We combine expertise, professional equipment and
              eco-friendly products to transform your spaces into healthy,
              sparkling environments. Every job is a promise: an impeccable
              result.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats band */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center gap-1 bg-brand-blue px-4 py-8 text-center text-white"
            >
              <p className="text-3xl font-extrabold sm:text-4xl">{s.value}</p>
              <p className="text-xs font-medium uppercase tracking-wide text-white/70 sm:text-sm">
                {s.label}
              </p>
              {/* (labels come from site config, already in English) */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
