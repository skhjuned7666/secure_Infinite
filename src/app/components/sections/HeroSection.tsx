"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import LiquidEther from "@/app/components/LiquidEther";

export default function HeroSection({
  scrollToCourses,
  scrollToAffiliate,
}: {
  scrollToCourses: () => void;
  scrollToAffiliate: () => void;
}) {
  return (
    <section className='relative bg-gradient-to-r from-black to-blue-800 text-white py-35 md:py-47 overflow-hidden'>
      {/* LiquidEther Background */}
      <div className='absolute inset-0 z-0'>
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Overlay to maintain readability */}
      <div className='absolute inset-0 bg-black/40 z-10'></div>

      <div className='container mx-auto px-4 relative z-20'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Empowering Infinite Learning
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-blue-100'>
            Master new skills, earn commissions, and grow with our digital
            education platform.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              onClick={scrollToCourses}
              className='bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 flex items-center justify-center'>
              Explore Courses
              <ChevronRight className='ml-2 w-5 h-5' />
            </button>
            <button
              onClick={scrollToAffiliate}
              className='bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 flex items-center justify-center'>
              Join Affiliate Program
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
