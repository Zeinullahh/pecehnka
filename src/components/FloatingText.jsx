"use client";
import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import { IconBrandX, IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import { TextGenerateEffect } from "./ui/text-generate-effect.jsx";

export function FloatingText({ className }) {
  const links = [
    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-black" />
      ),
      href: "https://x.com/silenceai_en",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-[#0077B5]" />
      ),
      href: "https://www.linkedin.com/company/silence-ai",
    },
    {
      title: "YouTube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-[#FF0000]" />
      ),
      href: "https://www.youtube.com/@silenceai_en",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-[#E4405F]" />
      ),
      href: "https://www.instagram.com/silenceai_en/",
    },
  ];
  const text1 = "Discover how hackers think";
  const text2 = "Follow us for daily research on real attack methods and cyber threats";
  return (
    <div className={`flex flex-col items-center justify-center w-full ${className}`}>
      <TextGenerateEffect words={text1} className="text-white text-3xl font-bold tracking-tighter sm:text-5xl" />
      <TextGenerateEffect words={text2} className="text-white mb-4 text-lg" />
      <FloatingDock
        items={links}
      />
    </div>
  );
}
