"use client"

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import NavbarCTAButton from './NavbarCTAButton';
import { useScrollColorChange } from './useScrollColorChange';

interface NavItem {
  href: string;
  label: string;
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { bgColor, textColor } = useScrollColorChange();

  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const setMenuItemRef = useCallback((index: number) => (el: HTMLAnchorElement | null) => {
    menuItemsRef.current[index] = el;
  }, []);

  const navItems = useMemo<NavItem[]>(() => [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    // { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' },
  ], []);

  useEffect(() => {
    if (isMenuOpen && menuItemsRef.current[0]) {
      menuItemsRef.current[0]?.focus();
    } else if (!isMenuOpen && menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isMenuOpen) return;

      if (event.key === 'Escape') {
        toggleMenu();
        return;
      }

      if (event.key === 'Tab') {
        const focusableElements = menuItemsRef.current.filter(Boolean);
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        } else if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, toggleMenu]);

  return (
    <>
      <header className={`fixed  left-0 top-0 w-full z-50   transition-colors duration-300 ${bgColor}`} aria-label="Main navigation">
        <nav className="p-2 sm:p-4 lg:p-6 max-w-screen-xl mx-auto" >
          <div className="flex justify-between items-center gap-x-8 h-10">
            <div className='flex items-center space-x-14 flex-rows-2'>
              <div className='flex items-center space-x-2'>
                <button
                  aria-labelledby="menu-label"
                  ref={menuButtonRef}
                  onClick={toggleMenu}
                  className={`inline-flex items-center justify-center p-2 rounded-full z-50 hover:${textColor} text-navy border hover:rounded-full hover:outline-orange focus:ring-2 focus:ring-inset focus:ring-white`}
                  aria-expanded={isMenuOpen}
              aria-controls="slide-out-menu"
              aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
            > 
              {isMenuOpen ? (
                
                <AiOutlineClose className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" aria-hidden="true" /> 
              ) : (
                    <AiOutlineMenu className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" aria-hidden="true" />
               )}
            </button>
              <label className='text-navy/60 text-sm' id='menu'>Menu</label>
            </div>
              
            <span className='text-navy text-sm font-semibold'>Hello</span>
              
            </div>
            <NavbarCTAButton />
          </div>
        </nav>
      </header>

      {/* Slide-out menu */}
      <div
        ref={menuRef}
        className={`fixed inset-y-0 left-0 max-w-xs w-full bg-navy shadow-xl z-[60] transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
        id="slide-out-menu"
        aria-labelledby="menu-heading"
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="px-2 py-4 ">
            <div className="flex items-center justify-between mb-6">
              <Link 
                href="/" 
                className="flex-shrink-0" 
                onClick={toggleMenu}
                ref={setMenuItemRef(0)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span className="text-2xl font-medium text-gray-200" id="menu-heading">
                  <Image width={40} height={40} src="/logo1.png" alt="bihub technology logo"/>
                </span>
              </Link>
              <button
                onClick={toggleMenu}
                className="text-gray-200 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-label="Close menu"
                ref={closeButtonRef}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Menu">
              <ul className="mt-8 text-2xl sm:text-3xl md:text-4xl font-light">
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 text-white"
                      onClick={toggleMenu}
                      ref={setMenuItemRef(index + 1)}
                      tabIndex={isMenuOpen ? 0 : -1}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu} aria-hidden="true" />
      )}
       {/* <svg className="absolute top-0 left-0 w-full h-full " xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg> */}
    </>
  );
};

export default NavBar;