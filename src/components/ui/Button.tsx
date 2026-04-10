import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "fire";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-200",
          // Sizes
          size === "sm" && "px-4 py-2 text-sm rounded-lg",
          size === "md" && "px-6 py-3 text-base rounded-xl",
          size === "lg" && "px-8 py-4 text-lg rounded-xl",
          // Variants
          variant === "primary" &&
            "bg-[#E8FF00] text-[#0D0D0D] hover:bg-[#C8DC00] active:scale-95",
          variant === "secondary" &&
            "bg-transparent border border-[#222222] text-[#EDEDED] hover:border-[#E8FF00] hover:text-[#E8FF00] active:scale-95",
          variant === "ghost" &&
            "bg-transparent text-[#888888] hover:text-[#EDEDED] active:scale-95",
          variant === "fire" &&
            "bg-[#FF3D00] text-white hover:bg-[#CC3100] active:scale-95",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
