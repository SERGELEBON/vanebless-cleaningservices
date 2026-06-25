"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { site, navLinks, services } from "@/lib/site";
import { SocialIcons } from "./social-icons";

const socialLinks = [
  { label: "TikTok", href: site.social.tiktok, key: "tiktok" as const },
  { label: "Instagram", href: site.social.instagram, key: "instagram" as const },
  { label: "Facebook", href: site.social.facebook, key: "facebook" as const },
  { label: "X", href: site.social.x, key: "x" as const },
  { label: "Snapchat", href: site.social.snapchat, key: "snapchat" as const },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-400">
      {/* Decorative background: floating bubbles */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Floating bubbles — varying sizes, positions, speeds, drifts */}
        <span className="bubble" style={{ left: "8%", bottom: "-40px", width: 22, height: 22, ["--bubble-duration" as string]: "17s", ["--bubble-drift" as string]: "30px", ["--bubble-opacity" as string]: "0.18" }} />
        <span className="bubble" style={{ left: "15%", bottom: "-40px", width: 14, height: 14, ["--bubble-duration" as string]: "22s", ["--bubble-delay" as string]: "3s", ["--bubble-drift" as string]: "-25px", ["--bubble-opacity" as string]: "0.14" }} />
        <span className="bubble" style={{ left: "26%", bottom: "-40px", width: 30, height: 30, ["--bubble-duration" as string]: "19s", ["--bubble-delay" as string]: "1.5s", ["--bubble-drift" as string]: "40px", ["--bubble-opacity" as string]: "0.16" }} />
        <span className="bubble" style={{ left: "38%", bottom: "-40px", width: 10, height: 10, ["--bubble-duration" as string]: "24s", ["--bubble-delay" as string]: "5s", ["--bubble-drift" as string]: "-15px", ["--bubble-opacity" as string]: "0.12" }} />
        <span className="bubble" style={{ left: "47%", bottom: "-40px", width: 26, height: 26, ["--bubble-duration" as string]: "20s", ["--bubble-delay" as string]: "2s", ["--bubble-drift" as string]: "25px", ["--bubble-opacity" as string]: "0.18" }} />
        <span className="bubble" style={{ left: "56%", bottom: "-40px", width: 18, height: 18, ["--bubble-duration" as string]: "18s", ["--bubble-delay" as string]: "4s", ["--bubble-drift" as string]: "-30px", ["--bubble-opacity" as string]: "0.15" }} />
        <span className="bubble" style={{ left: "64%", bottom: "-40px", width: 34, height: 34, ["--bubble-duration" as string]: "23s", ["--bubble-delay" as string]: "0.8s", ["--bubble-drift" as string]: "35px", ["--bubble-opacity" as string]: "0.16" }} />
        <span className="bubble" style={{ left: "73%", bottom: "-40px", width: 12, height: 12, ["--bubble-duration" as string]: "21s", ["--bubble-delay" as string]: "6s", ["--bubble-drift" as string]: "-20px", ["--bubble-opacity" as string]: "0.13" }} />
        <span className="bubble" style={{ left: "82%", bottom: "-40px", width: 24, height: 24, ["--bubble-duration" as string]: "19s", ["--bubble-delay" as string]: "2.5s", ["--bubble-drift" as string]: "30px", ["--bubble-opacity" as string]: "0.17" }} />
        <span className="bubble" style={{ left: "90%", bottom: "-40px", width: 16, height: 16, ["--bubble-duration" as string]: "25s", ["--bubble-delay" as string]: "4.5s", ["--bubble-drift" as string]: "-35px", ["--bubble-opacity" as string]: "0.14" }} />
        <span className="bubble" style={{ left: "33%", bottom: "-40px", width: 8, height: 8, ["--bubble-duration" as string]: "16s", ["--bubble-delay" as string]: "7s", ["--bubble-drift" as string]: "15px", ["--bubble-opacity" as string]: "0.20" }} />
        <span className="bubble" style={{ left: "69%", bottom: "-40px", width: 9, height: 9, ["--bubble-duration" as string]: "26s", ["--bubble-delay" as string]: "8s", ["--bubble-drift" as string]: "-10px", ["--bubble-opacity" as string]: "0.12" }} />
      </div>

      {/* CTA strip */}
      <div className="relative z-10 border-b border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:px-6 md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Ready for a spotless space?
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Free quote within 24h. Service across Accra.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebd58]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${site.phoneIntl[0]}`}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              <Phone className="h-4 w-4" />
              Call now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <div className="rounded-xl bg-white p-4 inline-block">
            <Logo />
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            {site.name} — {site.slogan}. A premium cleaning agency in Ghana,
            serving individuals and businesses alike.
          </p>
          <div className="mt-5">
            <SocialIcons links={socialLinks} variant="dark" />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            @{site.socialHandle}
          </p>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            Navigation
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  <ArrowRight className="h-3 w-3 text-brand-red" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            Our services
          </h4>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.id}>
                <a
                  href="#services"
                  className="transition-colors hover:text-white"
                >
                  {s.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#services" className="font-semibold text-brand-red hover:underline">
                View all services →
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            {site.phones.map((p, i) => (
              <li key={p}>
                <a
                  href={`tel:${site.phoneIntl[i]}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-red" />
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-red" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-brand-red" />
              <span>Accra & across Ghana</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with
            <span className="text-brand-red">♥</span>
            for the love of clean
          </p>
        </div>
      </div>
    </footer>
  );
}
