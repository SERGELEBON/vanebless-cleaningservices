"use client";

import * as React from "react";
import { MessageCircle, X, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Floating contact bar: a fixed WhatsApp button (bottom-right) that expands
 * into a small contact card with WhatsApp + phone quick actions.
 */
export function FloatingWhatsApp() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Expanded contact card */}
      <div
        className={cn(
          "overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/5 transition-all duration-300",
          expanded
            ? "max-h-96 w-72 opacity-100"
            : "max-h-0 w-72 opacity-0"
        )}
      >
        <div className="bg-[#25D366] px-4 py-3 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">Vanebless</p>
                <p className="text-[11px] opacity-90">
                  Replies in minutes
                </p>
              </div>
            </div>
            <button
              onClick={() => setExpanded(false)}
              aria-label="Close"
              className="rounded-full p-1 transition-colors hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm text-slate-600">
            Need a quote or a service? Message us or call directly.
          </p>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebd58]"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {site.phones.map((p, i) => (
              <a
                key={p}
                href={`tel:${site.phoneIntl[i]}`}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-brand-blue/5 py-2 text-xs font-semibold text-brand-blue transition-colors hover:bg-brand-blue/10"
              >
                <Phone className="h-3 w-3" />
                {p}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-label="Contact Vanebless on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-105 active:scale-95"
      >
        {!expanded && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-60" />
        )}
        {expanded ? (
          <X className="relative h-6 w-6" />
        ) : (
          <MessageCircle className="relative h-7 w-7" />
        )}
      </button>
    </div>
  );
}
