"use client";

import React from "react";
import clsx from "clsx";

const EdgeGlowCard = ({
  children,
  outerClassName = "",
  innerClassName = "",
  glowColor = "rgba(255,0,183,0.85)",
  secondaryGlowColor,
  mode = "follow",
  spotlight = false,
  topColor,
  rightColor,
  bottomColor,
  leftColor,
  style,
  ...rest
}) => {
  const resolvedSecondary = secondaryGlowColor ?? glowColor;

  if (mode === "static") {
    return (
      <div
        {...rest}
        className={clsx(
          "edge-glow-static",
          spotlight && "edge-glow-static-spotlight",
          outerClassName
        )}
        style={{
          "--edge-glow-color": glowColor,
          "--edge-glow-secondary": resolvedSecondary,
          "--edge-glow-top": topColor,
          "--edge-glow-right": rightColor,
          "--edge-glow-bottom": bottomColor,
          "--edge-glow-left": leftColor,
          ...style,
        }}
      >
        <div className={clsx("relative z-10 h-full w-full rounded-[inherit]", innerClassName)}>
          {children}
        </div>
      </div>
    );
  }

  const handleMouseMove = (event) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    target.style.setProperty("--cursor-x", `${x}px`);
    target.style.setProperty("--cursor-y", `${y}px`);
    target.style.setProperty("--glow-opacity", "1");
  };

  const handleMouseLeave = (event) => {
    const target = event.currentTarget;
    target.style.setProperty("--glow-opacity", "0");
  };

  return (
    <div
      {...rest}
      onMouseEnter={handleMouseMove}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "edge-glow",
        spotlight && "edge-glow-static-spotlight",
        outerClassName
      )}
      style={{
        "--edge-glow-color": glowColor,
        "--glow-opacity": 0,
        "--edge-glow-top": topColor,
        "--edge-glow-right": rightColor,
        "--edge-glow-bottom": bottomColor,
        "--edge-glow-left": leftColor,
        ...style,
      }}
    >
      <div className={clsx("relative z-10 h-full w-full rounded-[inherit]", innerClassName)}>
        {children}
      </div>
    </div>
  );
};

export default EdgeGlowCard;
