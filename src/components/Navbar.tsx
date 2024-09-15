"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import Image from 'next/image';
import AnimatedCircleButton from './AnimatedCircleButton';

interface NavItem {
  href: string;
  label: string;
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstFocusableElementRef = useRef<HTMLElement | null>(null);
  const lastFocusableElementRef = useRef<HTMLElement | null>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setBgColor('#fff');
        setTextColor('#000');
      } else {
        setBgColor('transparent');
        setTextColor('#fff');
      }
    };
    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  const navItems: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/#menu', label: 'Our Expertise' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/portfolio', label: 'Portfolio' },
  ];

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      // Set focus to the first focusable element when menu opens
      firstFocusableElementRef.current?.focus();
    } else {
      // Return focus to the menu button when menu closes
      menuButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isMenuOpen) return;

      if (event.key === 'Escape') {
        toggleMenu();
      }

      if (event.key === 'Tab') {
        // Trap focus within the menu
        if (!event.shiftKey && document.activeElement === lastFocusableElementRef.current) {
          event.preventDefault();
          firstFocusableElementRef.current?.focus();
        } else if (event.shiftKey && document.activeElement === firstFocusableElementRef.current) {
          event.preventDefault();
          lastFocusableElementRef.current?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, toggleMenu]);

  return (
    <>
      <header className="fixed left-0 top-0 w-full z-20 transition-colors duration-300" aria-label="Main navigation">
        <nav style={{ backgroundColor: bgColor }} className="max-w-8xl mx-auto px-6 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-4 rounded-full text-navy hover:text-navy border border-beige hover:rounded-full hover:outline-orange focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
              aria-controls="slide-out-menu"
              aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {isMenuOpen ? (
                <AiOutlineClose className="block h-10 w-10" aria-hidden="true" />
              ) : (
                <AiOutlineMenu className="block h-10 w-10" aria-hidden="true" />
              )}
            </button>
            <Link href="/" className="flex-shrink-0" aria-label="Bihub technology home">
               <h1 className="text-2xl font-light text-navy"> {/* style={{ color: textColor }}  */}
                BiHub<span className="text-beige italic text-semibold">Technology</span>
              </h1>
            </Link>
            <AnimatedCircleButton onClick={() => {}} />
          </div>
        </nav>
      </header>

      {/* Slide-out menu */}
      <div
        ref={menuRef}
        className={`fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl z-30 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
        id="slide-out-menu"
        aria-labelledby="menu-heading"
        role="dialog"
        aria-modal="true"
      >
        <div className="h-full flex flex-col justify-between">
          <div className="px-4 py-6">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex-shrink-0" onClick={toggleMenu} ref={firstFocusableElementRef}>
                <h1 className="text-2xl font-bold text-gray-900" id="menu-heading">
                  B<span className="text-gold italic">T</span>
                </h1>
              </Link>
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-label="Close menu"
              >
                <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Menu">
              <ul className="mt-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-800"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="px-4 py-6 bg-gray-50">
            <div className="flex justify-center space-x-6 mb-4">
              <a 
                href="#" 
                aria-label="Instagram" 
                className="text-[#C13584] hover:text-[#E1306C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C13584] rounded-full p-1"
              >
                <AiOutlineInstagram className="text-3xl" />
              </a>
              <a 
                href="#" 
                aria-label="Facebook" 
                className="text-[#3B5998] hover:text-[#4267B2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3B5998] rounded-full p-1"
                ref={lastFocusableElementRef}
              >
                <AiOutlineFacebook className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleMenu} aria-hidden="true" />
      )}
    </>
  );
};

export default NavBar;