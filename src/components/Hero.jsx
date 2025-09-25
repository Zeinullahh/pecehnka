"use client";
import React, { useState } from 'react';
import Playground from './Playground.jsx';
import GlowButton from './GlowButton.jsx';
import { TextGenerateEffect } from "./ui/text-generate-effect.jsx";

const Hero = ({ onOpenModal }) => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const fullText = "AI-SOC 1: Cybersecurity is neither expensive nor complicated anymore";

  const tooltipContent = {
    "web-attack-protection": {
      title: "Web Attack Protection",
      content: "System can protect against ALL types of web attacks, such as DDoS, SQLi, and others, except business logic vulnerabilities"
    },
    "email-attack-protection": {
      title: "Email Attack Protection",
      content: "System can protect against ALL types of email attacks, such as phishing, malware attachment, dangerous links, etc."
    },
    "vulnerability-finder": {
      title: "Vulnerability Finder",
      content: "System can find the vulnerabilities within the code of the application and by dynamically interacting with your website/API, including the way of finding vulnerabilities through the intelligence system"
    }
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center py-4">
      <div className="md:w-1/2 text-white -mt-16">
        <h1 className="text-4xl font-bold mb-8">
          <TextGenerateEffect words={fullText} />
        </h1>
        <p className="font-bold mb-4">The all in one, AI-based cybersecurity system that combines:</p>
        <div className="space-y-4 mb-8">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span>Real time web attack protection</span>
            <div
              className="relative ml-2"
              onMouseEnter={() => setActiveTooltip("web-attack-protection")}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {activeTooltip === "web-attack-protection" && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-80 p-4 text-white text-sm rounded-lg z-[9999] bg-black border border-white/20 shadow-2xl">
                  <h4 className="font-bold text-white mb-2">{tooltipContent["web-attack-protection"].title}</h4>
                  <p className="text-gray-200 text-sm">{tooltipContent["web-attack-protection"].content}</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span>Email attacks protection</span>
            <div
              className="relative ml-2"
              onMouseEnter={() => setActiveTooltip("email-attack-protection")}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {activeTooltip === "email-attack-protection" && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-80 p-4 text-white text-sm rounded-lg z-[9999] bg-black border border-white/20 shadow-2xl">
                  <h4 className="font-bold text-white mb-2">{tooltipContent["email-attack-protection"].title}</h4>
                  <p className="text-gray-200 text-sm">{tooltipContent["email-attack-protection"].content}</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span>Vulnerability-finder</span>
            <div
              className="relative ml-2"
              onMouseEnter={() => setActiveTooltip("vulnerability-finder")}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {activeTooltip === "vulnerability-finder" && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-80 p-4 text-white text-sm rounded-lg z-[9999] bg-black border border-white/20 shadow-2xl">
                  <h4 className="font-bold text-white mb-2">{tooltipContent["vulnerability-finder"].title}</h4>
                  <p className="text-gray-200 text-sm">{tooltipContent["vulnerability-finder"].content}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <GlowButton onClick={onOpenModal}>
            Connect in 4 minutes
          </GlowButton>
          <GlowButton onClick={onOpenModal}>
            Watch 90-sec Tour
          </GlowButton>
        </div>
      </div>
      <div className="md:w-1/2 mt-96 md:mt-24 relative">
        {/* Playground heading with partial overlay effect */}
        <h2 className="absolute -top-19 left-0 w-full text-8xl font-bold text-white text-center z-0 pointer-events-none px-6">
          Playground
        </h2>
        <div className="relative z-10">
          <Playground />
        </div>
      </div>
    </div>
  );
};

export default Hero;
