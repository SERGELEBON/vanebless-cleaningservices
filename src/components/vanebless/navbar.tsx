"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { navLinks, site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const timeoutId = setTimeout(() => setMounted(true), 0);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      {/* Top contact bar */}
      <div
        className={cn(
          "hidden border-b border-white/10 text-white transition-all duration-300 md:block",
          scrolled ? "h-0 overflow-hidden opacity-0" : "bg-brand-blue py-1.5 opacity-100"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-xs">
          <div className="flex items-center gap-4">
            {site.phones.map((p, i) => (
              <a
                key={p}
                href={`tel:${site.phoneIntl[i]}`}
                className="flex items-center gap-1.5 transition-colors hover:text-white/70"
              >
                <Phone className="h-3 w-3" />
                <span>{p}</span>
              </a>
            ))}
          </div>
          <span className="opacity-90">
            Follow us:{" "}
            <span className="font-semibold">@{site.socialHandle}</span>
          </span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="#home" aria-label="Vanebless Cleaning Services - Home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-blue/5 hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden bg-brand-red text-white shadow-sm transition-all hover:bg-brand-red-dark hover:shadow-md sm:inline-flex"
          >
            <Link href="#quote">Free Quote</Link>
          </Button>

          {/* Mobile menu — rendered only after mount to avoid hydration mismatch */}
          {mounted ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-slate-800"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] border-l-0 bg-white p-0"
              >
                <SheetHeader className="border-b border-slate-100 px-5 py-4">
                  <SheetTitle asChild>
                    <div>
                      <Logo />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 px-3 py-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-brand-blue/5 hover:text-brand-blue"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="mt-3 bg-brand-red text-white hover:bg-brand-red-dark"
                    >
                      <Link href="#quote">Free Quote</Link>
                    </Button>
                  </SheetClose>
                </div>
                <div className="mt-auto border-t border-slate-100 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Contact
                  </p>
                  <div className="mt-2 flex flex-col gap-1.5 text-sm">
                    {site.phones.map((p, i) => (
                      <a
                        key={p}
                        href={`tel:${site.phoneIntl[i]}`}
                        className="flex items-center gap-2 text-slate-700 hover:text-brand-blue"
                      >
                        <Phone className="h-4 w-4 text-brand-red" />
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            /* Stable placeholder button before hydration (same size/classes) */
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-slate-800"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
