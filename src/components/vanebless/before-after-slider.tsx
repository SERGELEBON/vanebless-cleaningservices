"use client";

import * as React from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  label?: string;
  className?: string;
};

/**
 * Interactive before/after image comparison slider.
 * Drag the handle to reveal the "after" image over the "before" image.
 * Uses clip-path so the "after" image stays at full size while being clipped.
 */
export function BeforeAfterSlider({
  before,
  after,
  label,
  className,
}: BeforeAfterSliderProps) {
  const [pos, setPos] = React.useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const dragging = React.useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPos(pct);
  };

  React.useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      updateFromClientX(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[4/3] w-full select-none overflow-hidden rounded-xl bg-slate-200",
        className
      )}
      onPointerDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
    >
      {/* Before (full) */}
      <Image
        src={before}
        alt="Avant nettoyage"
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-cover"
      />
      {/* After (clipped via clip-path so the image keeps its natural layout size) */}
      <Image
        src={after}
        alt="Après nettoyage"
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-md bg-brand-red px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white shadow">
        Avant
      </span>
      <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-md bg-brand-blue px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white shadow">
        Après
      </span>
      {label && (
        <span className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-md bg-slate-900/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {label}
        </span>
      )}

      {/* Handle */}
      <div
        className="pointer-events-none absolute top-0 z-20 h-full w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-brand-blue text-white shadow-lg">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
