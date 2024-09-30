"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import AnimatedCircleButton from './AnimatedCircleButton';
import Image from 'next/image';

interface NavItem {
  href: string;
  label: string;
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

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
    { href: '/contact', label: 'Contact Us' },
  ];

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
      <header className="fixed left-0 top-0 w-full z-50 transition-colors duration-300" aria-label="Main navigation">
        <nav style={{ backgroundColor: bgColor }} className=" p-4 sm:p-6 lg:p-8">
          <div className="flex justify-between items-center gap-x-8 h-16">
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 sm:p-3 md:p-4 rounded-full z-50 text-navy hover:text-navy border border-beige hover:rounded-full hover:outline-orange focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
              aria-controls="slide-out-menu"
              aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {isMenuOpen ? (
                <AiOutlineClose className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" aria-hidden="true" />
              ) : (
                <AiOutlineMenu className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" aria-hidden="true" />
              )}
            </button>
            {/* <Link 
                href="/" 
                className="flex-shrink-0 md:block hidden"
              >
              <Image width={60} height={50} src="/logo.png" alt="bihub technology logo"/>
            </Link> */}
            <AnimatedCircleButton onClick={() => {}} />
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
          <div className="px-4 py-6 ">
            <div className="flex items-center justify-between mb-8">
              <Link 
                href="/" 
                className="flex-shrink-0" 
                onClick={toggleMenu}
                ref={setMenuItemRef(0)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span className="text-2xl font-medium text-gray-900" id="menu-heading">
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
    </>
  );
};

export default NavBar;