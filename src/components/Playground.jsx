"use client";
import React, { useState } from 'react';

const Playground = () => {
  const [selectedOption, setSelectedOption] = useState('Email Security');

  return (
    <div className="bg-black rounded-lg glass-card w-full h-full flex flex-col p-0">
      {/* Outer container with adjusted height - includes buttons and inner card */}
      <div className="w-full aspect-[4/2.8] flex flex-col rounded-lg border-0">
        <div className="flex justify-center space-x-4 p-4 mt-4">
          <button
            onClick={() => setSelectedOption('Globe Shield')}
            className={`px-4 py-2 rounded-lg card-glow-purple cursor-pointer ${selectedOption === 'Globe Shield' ? 'bg-[#FF00B7] text-white' : 'bg-[rgba(0,0,0,0.6)] text-gray-400'}`}
          >
            Globe Shield
          </button>
          <button
            onClick={() => setSelectedOption('Email Security')}
            className={`px-4 py-2 rounded-lg card-glow-purple cursor-pointer ${selectedOption === 'Email Security' ? 'bg-[#FF00B7] text-white' : 'bg-[rgba(0,0,0,0.6)] text-gray-400'}`}
          >
            Email Security
          </button>
          <button
            onClick={() => setSelectedOption('Vulnerability Finder')}
            className={`px-4 py-2 rounded-lg card-glow-purple cursor-pointer ${selectedOption === 'Vulnerability Finder' ? 'bg-[#FF00B7] text-white' : 'bg-[rgba(0,0,0,0.6)] text-gray-400'}`}
          >
            Vulnerability Finder
          </button>
        </div>
        
        {/* Container for inner black card, positioned closer to buttons */}
        <div className="relative flex-1 mt-4">
          {/* Inner rectangle with 16:9 aspect ratio - completely black, same width as outer */}
          <div className="absolute top-0 left-0 w-full aspect-video bg-black rounded-lg">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
