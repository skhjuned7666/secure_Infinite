"use client";

import { BookOpen, Users, Shield, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: <BookOpen className='w-8 h-8' />,
      title: "Education First",
      description:
        "We prioritize quality education and skill development above all else.",
    },
    {
      icon: <Users className='w-8 h-8' />,
      title: "Community Focused",
      description: "Building a strong community of learners and educators.",
    },
    {
      icon: <Shield className='w-8 h-8' />,
      title: "Transparency",
      description:
        "Fully compliant with Indian laws and transparent in all our operations.",
    },
    {
      icon: <TrendingUp className='w-8 h-8' />,
      title: "Growth Oriented",
      description:
        "Helping individuals achieve personal and professional growth.",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Students" },
    { value: "50+", label: "Courses" },
    { value: "200+", label: "Affiliates" },
    { value: "95%", label: "Satisfaction Rate" },
  ];

  return (
    <section className='py-16 bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-black dark:text-white mb-4'>
            About Secure Infinite Association
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            We empower individuals through skill development, financial
            awareness, and personal growth. Our platform offers online recorded
            courses, knowledge resources, and digital services with transparent,
            commission-based payouts compliant with Indian laws.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
          <div className='bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-8'>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              Our Mission
            </h3>
            <p className='text-gray-700 dark:text-gray-300'>
              To empower individuals through accessible digital education, skill
              development, and transparent affiliate opportunities that foster
              personal growth and financial awareness.
            </p>
          </div>

          <div className='bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-8'>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              Our Vision
            </h3>
            <p className='text-gray-700 dark:text-gray-300'>
              To become India's leading digital learning platform that creates
              infinite opportunities for learners to achieve their personal and
              professional goals through quality education and ethical business
              practices.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 text-center'>
              <div className='text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
                {stat.value}
              </div>
              <div className='text-gray-600 dark:text-gray-400'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className='mb-16'>
          <h3 className='text-3xl font-bold text-center text-gray-900 dark:text-white mb-12'>
            Our Core Values
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <div
                key={index}
                className='bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 text-center'>
                <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4'>
                  {value.icon}
                </div>
                <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                  {value.title}
                </h4>
                <p className='text-gray-600 dark:text-gray-400'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
