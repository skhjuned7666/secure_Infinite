"use client";

import Link from "next/link";
import { ChevronRight, Play, Star, Users } from "lucide-react";
import LiquidEther from "@/app/components/LiquidEther";

export default function HeroSection({
  scrollToCourses,
  scrollToAffiliate,
}: {
  scrollToCourses: () => void;
  scrollToAffiliate: () => void;
}) {
  return (
    <section className='relative bg-gradient-to-r from-black to-blue-800 text-white py-20 md:py-32 overflow-hidden'>
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
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          {/* Text Content */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Empowering Infinite Learning
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl'>
              Master new skills, earn commissions, and grow with our digital
              education platform.
            </p>

            {/* Stats/Features */}
            <div className='flex flex-wrap justify-center lg:justify-start gap-8 mb-10'>
              <div className='flex items-center'>
                <Star className='text-yellow-400 mr-2' />
                <span>4.9/5 Rating</span>
              </div>
              <div className='flex items-center'>
                <Users className='text-blue-400 mr-2' />
                <span>10K+ Students</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
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

          {/* Image Content */}
          <div className='flex-1 flex justify-center'>
            <div className='relative'>
              {/* Main Image */}
              <img
                src='/images/herogirl1.png'
                alt='Learning Platform'
                className='w-full max-w-md h-auto object-cover '
              />

              {/* Floating Elements */}
              <div className='absolute -top-6 -right-6 bg-white text-blue-600 py-2 px-4 rounded-lg shadow-lg font-bold'>
                <span>New Courses</span>
              </div>
              <div className='absolute -bottom-6 -left-6 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg font-bold'>
                <span>50% Off</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
