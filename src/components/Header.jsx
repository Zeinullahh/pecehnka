"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import GlowButton from "./GlowButton";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const SCROLL_THRESHOLD = 10;

const Header = ({ onOpenModal }) => {
  const [isCondensed, setIsCondensed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    const handleScroll = () => {
      setIsCondensed(window.scrollY > SCROLL_THRESHOLD);
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const widthTarget = isDesktop
    ? isCondensed
      ? "70%"
      : "100%"
    : isCondensed
    ? "90%"
    : "100%";

  const navItems = [
    { key: "mail", label: t("header.nav.mail", "Mail"), opensModal: true },
    {
      key: "affiliate",
      label: t("header.nav.affiliate", "Affiliate program"),
      href: "/affiliate",
    },
    {
      key: "instructions",
      label: t("header.nav.instructions", "Instructions"),
      opensModal: true,
    },
  ];

  return (
    <>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-lg lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleMobileMenu}
          >
            <motion.div
              className="absolute inset-0 px-6 pt-24 pb-16"
              initial={{ y: -80 }}
              animate={{ y: 0 }}
              exit={{ y: -80 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="mx-auto flex max-w-sm flex-col space-y-6 text-lg">
                {navItems.map((item) =>
                  item.href ? (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="nav-link border-b border-white/20 py-2 text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.key}
                      type="button"
                      className="nav-link border-b border-white/20 py-2 text-white text-left bg-transparent appearance-none focus:outline-none"
                      onClick={() => {
                        onOpenModal?.();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </button>
                  )
                )}
                <div className="pt-4 flex flex-col gap-4">
                  <LanguageSelector align="left" />
                  <GlowButton
                    onClick={() => {
                      onOpenModal?.();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    {t("header.login", "Login")}
                  </GlowButton>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        className="fixed left-0 top-2 z-50 w-full px-3"
        initial={false}
      >
        <motion.div
          className="mx-auto w-full max-w-7xl rounded-full border border-transparent transition-colors"
          animate={{
            width: widthTarget,
            borderRadius: 9999,
            backgroundColor: isCondensed ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0)",
            borderColor: isCondensed ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0)",
            backdropFilter: isCondensed ? "blur(16px)" : "blur(0px)",
          }}
          transition={{
            width: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            borderRadius: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            backgroundColor: { duration: 0.5 },
            borderColor: { duration: 0.5 },
            backdropFilter: { duration: 0.5 },
          }}
          style={{ minWidth: isDesktop ? undefined : "100%" }}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <motion.div
              className="flex items-center"
              animate={{ x: isDesktop && isCondensed ? 40 : 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Company Logo"
                  width={100}
                  height={50}
                  style={{ height: "auto", maxWidth: "120px" }}
                />
              </Link>
            </motion.div>

            <nav className="relative hidden items-center space-x-8 lg:flex">
              {navItems.map((item) =>
                item.href ? (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="nav-link text-white bg-transparent appearance-none focus:outline-none"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.key}
                    type="button"
                    className="nav-link text-white bg-transparent appearance-none focus:outline-none"
                    onClick={onOpenModal}
                  >
                    {item.label}
                  </button>
                )
              )}
            </nav>

            <motion.button
              className="p-2 text-white lg:hidden"
              onClick={toggleMobileMenu}
              animate={{ x: isDesktop && isCondensed ? -40 : 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>

            <motion.div
              className="hidden items-center gap-3 lg:flex"
              animate={{ x: isDesktop && isCondensed ? -40 : 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <LanguageSelector />
              <GlowButton onClick={onOpenModal}>
                {t("header.login", "Login")}
              </GlowButton>
            </motion.div>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;
