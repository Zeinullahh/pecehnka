import React from 'react';

const insights = [
  {
    icon: '🎯',
    title: '39 seconds',
    description: 'There is a hacker attack every 39 seconds',
  },
  {
    icon: '👥',
    title: '20M DDoS attacks',
    description: '20.5M DDoS attacks in Q1 2025 alone',
  },
  {
    icon: '⚡️',
    title: 'Every day',
    description: '30 000 websites get hacked every single day',
  },
];

const Insights = () => {
  return (
    <div className="pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className="text-5xl mb-4">{insight.icon}</div>
              <p className="text-xl font-semibold text-white mb-2">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
