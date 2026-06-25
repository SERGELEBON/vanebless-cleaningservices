import * as React from "react";
import {
  Building2,
  GraduationCap,
  Sparkles,
  HardHat,
  Truck,
  PartyPopper,
  Shirt,
  Flame,
  Home,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Building2,
  GraduationCap,
  Sparkles,
  HardHat,
  Truck,
  PartyPopper,
  Shirt,
  Flame,
  Home,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? HelpCircle;
  return <Icon className={className} />;
}
