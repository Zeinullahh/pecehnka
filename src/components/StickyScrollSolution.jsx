"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { solutionContent } from "../lib/solutionContent";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import EdgeGlowCard from "./EdgeGlowCard";

export function StickyScrollSolution() {
  const { t } = useLanguage();
  const localizedContent = solutionContent.map((item) => {
    const title = t(`stickySolution.${item.id}.title`, item.id);
    const description = t(`stickySolution.${item.id}.description`, "");

    return {
      ...item,
      title,
      description,
      desktop: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <div className="w-full aspect-video overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.imagePath}
                initial={{ opacity: 0, backgroundColor: "#000000" }}
                animate={{ opacity: 1, backgroundColor: "transparent" }}
                exit={{ opacity: 0, backgroundColor: "#000000" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <Image
                  src={item.imagePath}
                  fill
                  className="object-contain"
                  alt={title}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ),
    };
  });

  const desktopContent = localizedContent.map((item) => ({
    title: item.title,
    description: item.description,
    content: item.desktop,
  }));

  return (
    <div className="w-full">
      <div className="hidden lg:block">
        <StickyScroll content={desktopContent} />
      </div>
      <div className="lg:hidden flex flex-col gap-10 px-4 py-12">
        {localizedContent.map((item) => (
          <EdgeGlowCard
            key={item.id}
            mode="static"
            outerClassName="rounded-3xl p-[2px]"
            innerClassName="glass-card p-6 space-y-4 rounded-3xl"
            glowColor="#FF00B7"
            secondaryGlowColor="rgba(0,191,255,0.7)"
            topColor="#FF00B7"
            leftColor="#FF00B7"
            rightColor="rgba(0,191,255,0.7)"
            bottomColor="rgba(0,191,255,0.7)"
          >
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
            <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-white/10 bg-black/60">
              <Image
                src={item.imagePath}
                fill
                className="object-contain"
                alt={item.title}
              />
            </div>
          </EdgeGlowCard>
        ))}
      </div>
    </div>
  );
}
