import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "acid" | "fire" | "muted" | "outline";
  className?: string;
}

export function Badge({ children, variant = "muted", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-mono font-medium rounded-md",
        variant === "acid" && "bg-[#E8FF00]/10 text-[#E8FF00] border border-[#E8FF00]/20",
        variant === "fire" && "bg-[#FF3D00]/10 text-[#FF3D00] border border-[#FF3D00]/20",
        variant === "muted" && "bg-[#222222] text-[#888888] border border-[#333333]",
        variant === "outline" && "bg-transparent text-[#888888] border border-[#333333]",
        className
      )}
    >
      {children}
    </span>
  );
}
