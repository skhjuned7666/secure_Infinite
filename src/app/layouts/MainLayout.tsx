"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Settings, Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";
import { useAuth } from "@/app/hooks/useAuth";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, signOut } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only show section navigation on the home page
  const isHomePage = pathname === "/";

  return (
    <div className='min-h-screen bg-transparent text-foreground'>
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-transparent backdrop-blur-sm shadow-sm py-2"
            : "bg-transparent py-4"
        }`}>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <Link href='/' className='flex items-center space-x-2'>
              <img
                src='/images/logo.png'
                alt='Secure Infinite Association Logo'
                className='w-100 h-10 object-contain'
              />
            </Link>

            {/* Desktop Navigation */}
            {isHomePage ? (
              <nav className='hidden md:flex items-center space-x-8'>
                <Link
                  href='/#home'
                  className='font-medium transition-colors hover:text-blue-600 text-gray-700 dark:text-gray-300'>
                  Home
                </Link>
                <Link
                  href='/#about'
                  className='font-medium transition-colors hover:text-blue-600 text-gray-700 dark:text-gray-300'>
                  About
                </Link>
                <Link
                  href='/#courses'
                  className='font-medium transition-colors hover:text-blue-600 text-gray-700 dark:text-gray-300'>
                  Courses
                </Link>
                <Link
                  href='/#affiliate'
                  className='font-medium transition-colors hover:text-blue-600 text-gray-700 dark:text-gray-300'>
                  Affiliate
                </Link>
                <Link
                  href='/#contact'
                  className='font-medium transition-colors hover:text-blue-600 text-gray-700 dark:text-gray-300'>
                  Contact
                </Link>
              </nav>
            ) : null}

            {/* Auth Buttons */}
            <div className='hidden md:flex items-center space-x-4'>
              {isAuthenticated ? (
                <div className='flex items-center space-x-4'>
                  <Link
                    href='/dashboard'
                    className='text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium'>
                    Dashboard
                  </Link>
                  <button
                    onClick={signOut}
                    className='text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium'>
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    href='https://mysecureacademy.in/home/login'
                    className='text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium'>
                    Sign In
                  </Link>
                  <Link
                    href='https://mysecureacademy.in/home/sign_up'
                    className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors'>
                    Register
                  </Link>
                </>
              )}
            </div>

            {/* Theme Toggle and Settings */}
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className='md:hidden mt-4 pb-4'>
              <div className='flex flex-col space-y-3'>
                {isHomePage && (
                  <>
                    <Link
                      href='/#home'
                      className='text-left font-medium py-2 px-4 rounded-lg transition-colors text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      onClick={() => setIsMenuOpen(false)}>
                      Home
                    </Link>
                    <Link
                      href='/#about'
                      className='text-left font-medium py-2 px-4 rounded-lg transition-colors text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      onClick={() => setIsMenuOpen(false)}>
                      About
                    </Link>
                    <Link
                      href='/#courses'
                      className='text-left font-medium py-2 px-4 rounded-lg transition-colors text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      onClick={() => setIsMenuOpen(false)}>
                      Courses
                    </Link>
                    <Link
                      href='/#affiliate'
                      className='text-left font-medium py-2 px-4 rounded-lg transition-colors text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      onClick={() => setIsMenuOpen(false)}>
                      Affiliate
                    </Link>
                    <Link
                      href='/#contact'
                      className='text-left font-medium py-2 px-4 rounded-lg transition-colors text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      onClick={() => setIsMenuOpen(false)}>
                      Contact
                    </Link>
                  </>
                )}
                <div className='flex space-x-2 pt-2'>
                  {isAuthenticated ? (
                    <>
                      <Link
                        href='/dashboard'
                        className='flex-1 text-center py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium'
                        onClick={() => setIsMenuOpen(false)}>
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          signOut();
                          setIsMenuOpen(false);
                        }}
                        className='flex-1 text-center py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium'>
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href='/signin'
                        className='flex-1 text-center py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium'
                        onClick={() => setIsMenuOpen(false)}>
                        Sign In
                      </Link>
                      <Link
                        href='/register'
                        className='flex-1 text-center py-2 px-4 rounded-lg bg-blue-600 text-white font-medium'
                        onClick={() => setIsMenuOpen(false)}>
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className='pt-20'>{children}</main>

      {/* Footer */}
      <footer className='bg-gray-100 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 mt-16'>
        <div className='container mx-auto px-4 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
              <div className='flex items-center space-x-2 mb-4'>
                <div className='flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white font-bold'>
                  {/* Using custom logo.png in footer too */}
                  <img
                    src='/images/logo.png'
                    alt='Secure Infinite Association Logo'
                    className='w-5 h-5 object-contain'
                  />
                </div>
                <span className='text-lg font-bold text-gray-900 dark:text-white'>
                  SIA
                </span>
              </div>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                Empowering Infinite Learning through digital education and skill
                development.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                Platform
              </h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/courses'
                    className='text-gray-600 dark:text-gray-400 hover:text-blue-600'>
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href='/books'
                    className='text-gray-600 dark:text-gray-400 hover:text-blue-600'>
                    Books & Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href='/affiliate'
                    className='text-gray-600 dark:text-gray-400 hover:text-blue-600'>
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    href='/career'
                    className='text-gray-600 dark:text-gray-400 hover:text-blue-600'>
                    Career Guidance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                Company
              </h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/about'
                    className='text-gray-600 dark:text-gray-400 hover:text-blue-600'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-gray-600 dark:text-gray-400 hover:text-blue-600'>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href='/terms'
                    className='text-gray-600 dark:text-gray-400 hover:text-blue-600'>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href='/privacy'
                    className='text-gray-600 dark:text-gray-400 hover:text-blue-600'>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                Legal
              </h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/refund'
                    className='text-gray-600 dark:text-gray-400 hover:text-blue-600'>
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href='/kyc'
                    className='text-gray-600 dark:text-gray-400 hover:text-blue-600'>
                    KYC Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href='/compliance'
                    className='text-gray-600 dark:text-gray-400 hover:text-blue-600'>
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400'>
            <p>
              © {new Date().getFullYear()} Secure Infinite Association. All
              rights reserved.
            </p>
            <p className='mt-2 text-sm'>
              Transparent, compliant, and commission-based digital learning
              platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
