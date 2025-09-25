"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { solutionContent } from "../lib/solutionContent";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const content = solutionContent.map(item => ({
  title: item.title,
  description: item.description,
  content: (
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
              alt={item.title}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  ),
}));

export function StickyScrollSolution() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}
