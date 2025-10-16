"use client";

import React from "react";
import clsx from "clsx";

const variantStyles = {
  light: "bg-white text-black hover:bg-gray-200",
  dark: "bg-black/90 text-white hover:bg-black",
  primary: "bg-gradient-to-r from-[#FF00B7] to-[#FB00FF] text-white shadow-[0_6px_20px_rgba(255,0,183,0.35)] hover:from-[#FF26C5] hover:to-[#FF26C5]",
};

const GlowButton = ({
  children,
  glowColor = "#FF00B7",
  variant = "light",
  className = "",
  ...props
}) => {
  const handleGlowMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  const innerClasses = clsx(
    "relative z-10 flex items-center justify-center gap-2 px-8 py-4 font-bold text-lg rounded-full transition-colors select-none",
    variantStyles[variant] ?? variantStyles.light
  );

  return (
    <div
      onMouseMove={handleGlowMouseMove}
      className={clsx(
        "group relative rounded-full p-[1.5px] overflow-hidden card-glow cursor-pointer",
        className
      )}
      style={{ "--glow-color": glowColor }}
      {...props}
    >
      <div className={innerClasses}>{children}</div>
    </div>
  );
};

export default GlowButton;
