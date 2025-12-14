import React from 'react';
import { Upload, Scan, PackageCheck } from 'lucide-react';
import { Step } from '../types';

export const Process: React.FC = () => {
  const steps: Step[] = [
    {
      title: "Upload Photos",
      description: "Upload front, side, and back photos of the person or pet you want to turn into a figurine.",
      icon: Upload
    },
    {
      title: "3D Modeling",
      description: "Our expert artists and AI algorithms create a high-fidelity 3D model for your approval.",
      icon: Scan
    },
    {
      title: "Print & Ship",
      description: "We print using industrial-grade resin and hand-paint your figurine before shipping worldwide.",
      icon: PackageCheck
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How It Works</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We've simplified the process of creating custom 3D figurines. From your camera roll to your shelf in three easy steps.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

        {steps.map((step, index) => (
          <div key={index} className="relative group">
            <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-none hover:border-gold-500/50 transition-all hover:-translate-y-2 duration-300">
              <div className="w-24 h-24 rounded-full bg-gray-50 dark:bg-studio-800 border border-gray-200 dark:border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all">
                <step.icon size={40} className="text-gold-500" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold-500 text-black font-bold flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};