import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, Float, Stars } from '@react-three/drei';
import { FigurineModel } from './FigurineModel';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  theme: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <div className="relative w-full h-screen bg-gray-50 dark:bg-studio-900 overflow-hidden flex flex-col md:flex-row transition-colors duration-300">
      
      {/* Text Content */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 h-full pt-20 md:pt-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200/50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-full w-fit mb-6 transition-colors">
          <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
          <span className="text-xs font-semibold tracking-wider text-gray-600 dark:text-gray-300 uppercase">Next Gen Personalization</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900 dark:text-white transition-colors">
          Immortalize <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-amber-600 dark:from-gold-400 dark:to-amber-700">
            Yourself in 3D
          </span>
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md transition-colors">
          Turn your photos into premium, handcrafted 3D figurines. The perfect gift for weddings, birthdays, or just to celebrate you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-black font-bold rounded-lg hover:bg-gold-400 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gold-500/20">
            Start Creating <ArrowRight size={20} />
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-white/10 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-white/20 transition-all backdrop-blur-sm border border-gray-200 dark:border-white/10">
            <Play size={20} fill="currentColor" /> Watch Video
          </button>
        </div>

        <div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
          <div className="flex -space-x-3">
            {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-studio-900 overflow-hidden">
                    <img src={`https://picsum.photos/50/50?random=${i}`} alt="User" />
                </div>
            ))}
          </div>
          <p>Loved by 10,000+ happy customers</p>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 md:relative md:w-1/2 h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent dark:from-studio-900 dark:via-transparent md:bg-gradient-to-r md:from-gray-50 dark:md:from-studio-900 z-10 pointer-events-none transition-colors duration-300" />
        
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Environment preset="city" />
            <group position={[0,0,0]}>
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                   <FigurineModel />
                </Float>
            </group>
            
            {theme === 'dark' && (
              <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            )}
            <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};