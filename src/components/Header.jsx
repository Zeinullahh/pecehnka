"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GlowButton from './GlowButton';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMobileMenu}
          >
            <motion.div
              className="absolute top-0 left-0 w-full bg-black/90 border-b border-white/10"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="container mx-auto py-4 px-6">
                <nav className="flex flex-col space-y-4">
                  <a href="#" className="nav-link text-white text-lg py-2 border-b border-white/20" onClick={onOpenModal}>Main</a>
                  <a href="#" className="nav-link text-white text-lg py-2 border-b border-white/20" onClick={onOpenModal}>Mail</a>
                  <a href="#" className="nav-link text-white text-lg py-2 border-b border-white/20" onClick={onOpenModal}>Affiliate program</a>
                  <a href="#" className="nav-link text-white text-lg py-2 border-b border-white/20" onClick={onOpenModal}>Instructions</a>
                  <div className="pt-4">
                    <GlowButton onClick={onOpenModal} className="w-full">
                      Login
                    </GlowButton>
                  </div>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <motion.header
        className="fixed top-6 left-0 w-full z-50"
        initial={{ top: '1.5rem' }}
        animate={{
          top: isScrolled ? '1.5rem' : '1.5rem',
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`mx-auto transition-all duration-300 ${
            isScrolled
              ? 'bg-black/60 backdrop-blur-md border border-white/10 rounded-full'
              : 'bg-transparent'
          }`}
          initial={{ width: '100%', borderRadius: '0px' }}
          animate={{
            width: isScrolled ? '70%' : '100%',
            borderRadius: isScrolled ? '9999px' : '0px',
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto flex justify-between items-center p-4 pl-8">
            <motion.div
              className="flex items-center"
              initial={{ x: 0 }}
              animate={{ x: isScrolled ? 40 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/">
                <Image src="/logo.svg" alt="Company Logo" width={100} height={50} style={{ height: 'auto' }} />
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 relative">
              <a href="#" className="nav-link text-white border-b-2 border-white pb-1" onClick={onOpenModal}>Main</a>
              <a href="#" className="nav-link text-white" onClick={onOpenModal}>Mail</a>
              <a href="#" className="nav-link text-white" onClick={onOpenModal}>Affiliate program</a>
              <a href="#" className="nav-link text-white" onClick={onOpenModal}>Instructions</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Login Button */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: isScrolled ? -40 : 0 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block"
            >
              <GlowButton onClick={onOpenModal}>
                Login
              </GlowButton>
            </motion.div>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;
