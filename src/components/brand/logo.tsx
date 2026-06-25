import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
  /** Use light text on dark backgrounds */
  onDark?: boolean;
};

/**
 * Vanebless Cleaning Services brand logo.
 * - "mark": circular VB monogram (red V + blue B with broom accent)
 * - "full": monogram + "Vanebless" wordmark + "CLEANING SERVICES" tagline
 */
export function Logo({ className, variant = "full", onDark = false }: LogoProps) {
  const blue = "#1e3a8a";
  const red = "#dc2626";

  const Mark = (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      role="img"
      aria-label="Vanebless VB monogram"
    >
      {/* Circular split border */}
      <path
        d="M 50 6 A 44 44 0 0 1 94 50 L 70 50 A 20 20 0 0 0 50 30 Z"
        fill={red}
      />
      <path
        d="M 94 50 A 44 44 0 0 1 50 94 L 50 70 A 20 20 0 0 0 70 50 Z"
        fill={blue}
      />
      <path
        d="M 50 94 A 44 44 0 0 1 6 50 L 30 50 A 20 20 0 0 0 50 70 Z"
        fill={red}
      />
      <path
        d="M 6 50 A 44 44 0 0 1 50 6 L 50 30 A 20 20 0 0 0 30 50 Z"
        fill={blue}
      />
      {/* Inner white circle */}
      <circle cx="50" cy="50" r="24" fill="#ffffff" />
      {/* V */}
      <path
        d="M 36 36 L 44 64 L 50 52 L 56 64 L 64 36"
        fill="none"
        stroke={red}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* B */}
      <path
        d="M 64 36 L 64 64"
        stroke={blue}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M 64 38 q 10 0 10 6 q 0 6 -10 6 M 64 50 q 12 0 12 7 q 0 7 -12 7"
        fill="none"
        stroke={blue}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Broom accent dot */}
      <circle cx="50" cy="74" r="1.6" fill={red} />
    </svg>
  );

  if (variant === "mark") {
    return <div className={cn("aspect-square", className)}>{Mark}</div>;
  }

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="aspect-square h-10 w-10 shrink-0 sm:h-11 sm:w-11">
        {Mark}
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "text-lg font-extrabold tracking-tight sm:text-xl",
            onDark ? "text-white" : "text-slate-900"
          )}
        >
          VANE
          <span style={{ color: blue }}>bless</span>
        </span>
        <span
          className="text-[9px] font-bold uppercase tracking-[0.25em] sm:text-[10px]"
          style={{ color: red }}
        >
          Cleaning Services
        </span>
      </div>
    </div>
  );
}
