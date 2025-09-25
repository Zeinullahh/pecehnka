"use client";
import React, { useState } from 'react';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import Pricing from '@/components/Pricing.jsx';
import { StickyScrollSolution } from '@/components/StickyScrollSolution.jsx';
import Insights from '@/components/Insights.jsx';
import Modal from '@/components/Modal.jsx';
import { FloatingText } from '@/components/FloatingText.jsx';
import { CybersecurityLamp } from '@/components/CybersecurityLamp.jsx';
import BackToTopButton from '@/components/BackToTopButton';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-1">
        <div className="w-full max-w-7xl mx-auto">
          <Header onOpenModal={openModal} />
          <Hero onOpenModal={openModal} />
          <Pricing onOpenModal={openModal} />
        </div>
        <CybersecurityLamp />
        <div className="w-full max-w-7xl mx-auto">
          <Insights />
        </div>
        <div className="w-full mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Our Solution
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Ready in 4 minutes and usable by any IT professional—no cybersecurity expertise required.
            </p>
          </div>
          <StickyScrollSolution />
        </div>
        <div className="w-full max-w-7xl mx-auto mt-24">
          <FloatingText />
        </div>
      </main>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <BackToTopButton />
    </>
  );
};

export default Home;
