"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import HeroSection from "@/app/components/sections/HeroSection";
import AboutSection from "@/app/components/sections/AboutSection";
import CoursesSection from "@/app/components/sections/CoursesSection";
import AffiliateSection from "@/app/components/sections/AffiliateSection";
import ContactSection from "@/app/components/sections/ContactSection";
import CtaSection from "@/app/components/sections/CtaSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";

export default function Home() {
  // Refs for section scrolling
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const affiliateRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div ref={homeRef} id='home'>
        <HeroSection
          scrollToCourses={() => scrollToSection(coursesRef)}
          scrollToAffiliate={() => scrollToSection(affiliateRef)}
        />
      </div>

      {/* About Section */}
      <div ref={aboutRef} id='about'>
        <AboutSection />
      </div>

      {/* Courses Section */}
      <div ref={coursesRef} id='courses'>
        <CoursesSection />
      </div>

      {/* Affiliate Program Banner */}
      <section className='py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Join Our Affiliate Program
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto text-blue-100'>
            Earn commissions by promoting our courses. No investment required,
            fully transparent payouts.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <button
              onClick={() => scrollToSection(affiliateRef)}
              className='bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300'>
              Learn More
            </button>
            <Link
              href='/register'
              className='bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300'>
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* Affiliate Section */}
      <div ref={affiliateRef} id='affiliate'>
        <AffiliateSection />
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <div ref={contactRef} id='contact'>
        <ContactSection />
      </div>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
