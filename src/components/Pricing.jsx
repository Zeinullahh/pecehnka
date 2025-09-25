"use client";
import React, { useState } from 'react';
import GlowButton from './GlowButton';

const Pricing = ({ onOpenModal }) => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const tooltipContent = {
    "cmc-global-traffic": {
      title: "CMC with Global Traffic Monitoring",
      content: "CMC (Centralized Management Console) integrates seamlessly with other security systems and is available under the same domain and interface as Global Shield and Security Tester allows you to manage network security at scale. From here, you can blacklist countries, close ports, and perform other operations"
    },
    "country-blacklisting": {
      title: "Country Blacklisting",
      content: "Block all traffic originating from a specific country"
    },
    "port-management": {
      title: "Port Management",
      content: "Close unused ports to reduce attack surface. For example, disabling port 22 when SSH access is not needed. To minimize the risk of system getting compromised"
    },
    "cmc-email-visualizer": {
      title: "CMC with Advanced Email Flow Visualizer",
      content: "CMC (Centralized Management Console) integrates seamlessly with other security systems and is available under the same domain and interface as Global Shield and Security Tester. Within this console, you can monitor email flows and review emails for all corporate users you've added"
    },
    "dynamic-vulnerability": {
      title: "Dynamic Vulnerability Finder",
      content: "Detects vulnerabilities by interacting with your website, including the way of finding vulnerabilities through the intelligence system"
    },
    "code-analyzer": {
      title: "Code Analyzer",
      content: "Identifies security issues directly in your codebase through a VS Code plugin, helping you fix problems before deployment"
    },
    "intelligence-report": {
      title: "Intelligence Report",
      content: "Generates detailed insights about your target, including open ports, running services, subdomains, and other sensitive information that may require action"
    },
    "full-vulnerability-check": {
      title: "FULL Vulnerability Check",
      content: "A FULL vulnerability check includes both a dynamic vulnerability scan and a codebase vulnerability scan"
    }
  };

  const pricingPlans = [
    {
      title: "Global Shield",
      price: "$0.06/GB",
      description: "NO limits<br />No additional fees",
      features: [
        "Protection against all types of web attacks, except business logic vulnerability exploitation",
        "Real-time DDoS protection",
        "CMC with Global traffic monitoring system",
        "Country blacklisting feature",
        "Closing ports feature"
      ],
      buttonText: "Secure web-app and APIs"
    },
    {
      title: "Email Protector",
      price: "$10/month/account",
      description: "Up to 10 emails per day. Additional emails: $0.035 each email",
      features: [
        "CMC with most advanced email flow visualizer",
        "Complete visibility of sent and received emails of all the email accounts, in CMC, with automatic threat categorization",
        "Secure WebMail-client",
        "Phishing protection",
        "Malware attachment scanning",
        "Dangerous link detection",
        "Spam filtering",
        "Fake Sender Protection"
      ],
      buttonText: "Secure Email"
    },
    {
      title: "Security Tester",
      price: "$25/month",
      description: "Up to 50 FULL vulnerability checks per month. Additional FULL checks: $0.5 each",
      features: [
        "Dynamic vulnerability finder",
        "Code analyzer",
        "Easily understandable security assessment reports",
        "Intelligence Report"
      ],
      buttonText: "Start Testing"
    }
  ];

  return (
    <section className="w-full pt-28 relative">
      {/* Background title "Pricing" */}
      <h2 className="absolute -top-20 left-0 w-full text-[200px] font-bold text-white text-center z-0 pointer-events-none px-6">
        Pricing
      </h2>
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-6 flex flex-col h-full relative ${activeCardIndex === index ? 'z-20' : ''}`}
            >
              {/* Card header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                <div className="text-2xl font-bold text-white mb-1">{plan.price}</div>
                {index === 2 ? (
                  <div className="text-gray-300 text-sm mb-2 flex items-center justify-center">
                    <span>Up to 50 FULL vulnerability checks per month<br />Additional FULL checks: $0.5 each</span>
                    <div
                      className="relative ml-2"
                      onMouseEnter={() => {
                        setActiveTooltip("full-vulnerability-check");
                        setActiveCardIndex(index);
                      }}
                      onMouseLeave={() => {
                        setActiveTooltip(null);
                        setActiveCardIndex(null);
                      }}
                    >
                      <svg className="w-4 h-4 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {activeTooltip === "full-vulnerability-check" && (
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-80 p-4 text-white text-sm rounded-lg z-[9999] bg-black border border-white/20 shadow-2xl">
                          <h4 className="font-bold text-white mb-2">{tooltipContent["full-vulnerability-check"].title}</h4>
                          <p className="text-gray-200 text-sm">{tooltipContent["full-vulnerability-check"].content}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : index === 1 ? (
                  <p className="text-gray-300 text-sm mb-2">Up to 10 emails per day<br />Additional emails: $0.035 each email</p>
                ) : index === 0 ? (
                  <p className="text-gray-300 text-sm mb-2">No limits<br />No additional fees</p>
                ) : (
                  <p className="text-gray-300 text-sm mb-2">{plan.description}</p>
                )}
              </div>

              {/* Features list */}
              <div className="flex-1 mb-6">
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => {
                    const getTooltipId = (featureText) => {
                      if (featureText.includes("CMC with Global traffic monitoring")) return "cmc-global-traffic";
                      if (featureText.includes("Country blacklisting")) return "country-blacklisting";
                      if (featureText.includes("Closing ports")) return "port-management";
                      if (featureText.includes("CMC with most advanced email flow visualizer")) return "cmc-email-visualizer";
                      if (featureText.includes("Dynamic vulnerability finder")) return "dynamic-vulnerability";
                      if (featureText.includes("Code analyzer")) return "code-analyzer";
                      if (featureText.includes("Intelligence Report")) return "intelligence-report";
                      return null;
                    };
                    const tooltipId = getTooltipId(feature);

                    return (
                      <li key={featureIndex} className="flex items-center text-white text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="flex-1">{feature}</span>
                        {tooltipId && (
                          <div
                            className="relative ml-2"
                            onMouseEnter={() => {
                              setActiveTooltip(tooltipId);
                              setActiveCardIndex(index);
                            }}
                            onMouseLeave={() => {
                              setActiveTooltip(null);
                              setActiveCardIndex(null);
                            }}
                          >
                            <svg className="w-4 h-4 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            {activeTooltip === tooltipId && (
                              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-80 p-4 text-white text-sm rounded-lg z-[9999] bg-black border border-white/20 shadow-2xl">
                                <h4 className="font-bold text-white mb-2">{tooltipContent[tooltipId].title}</h4>
                                <p className="text-gray-200 text-sm">{tooltipContent[tooltipId].content}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Action button */}
              <GlowButton
                className="mt-auto"
                onClick={onOpenModal}
              >
                {plan.buttonText}
              </GlowButton>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Pricing;
