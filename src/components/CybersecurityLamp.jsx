"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function CybersecurityLamp() {
  return (
    <LampContainer>
      <motion.h2
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-pink-400 to-purple-600 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-5xl"
      >
        Reality of Cyberattacks
      </motion.h2>
    </LampContainer>
  );
}
