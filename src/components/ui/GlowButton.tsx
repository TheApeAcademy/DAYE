"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export function GlowButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
  disabled,
}: GlowButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-daye-green text-black font-semibold hover:bg-white transition-colors",
    ghost:
      "bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors",
    outline:
      "bg-transparent text-daye-green border border-daye-green hover:bg-daye-green/10 transition-colors",
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={cn(
        "relative rounded-full font-medium tracking-wide transition-all duration-200",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </motion.button>
  );
}
