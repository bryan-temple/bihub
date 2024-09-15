"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import Image from 'next/image';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/#menu', label: 'Our Expertise' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/portfolio', label: 'Portfolio' },
  ];

  return (
    <>
      <nav style={{ backgroundColor: bgColor }} className="fixed left-0 top-0 w-full z-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 ">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-orange/50 hover:text-white hover:bg-orange hover:rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isMenuOpen ? (
                <AiOutlineClose className="block h-10 w-10" aria-hidden="true" />
              ) : (
                <AiOutlineMenu className="block h-10 w-10" aria-hidden="true" />
              )}
            </button>
            {/* <Link href="/" className="flex-shrink-0">
              <h1 style={{ color: textColor }} className="text-2xl font-bold">
                Weez<span className="text-gold italic">Kitchen</span>
              </h1>
            </Link> */}

                      <Image src="/logo.png" width={50} height={50} alt="Bihub Technology logo " />
                      
         </div>
        </div>
      </nav>

      {/* Slide-out menu */}
      <div className={`fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl z-30 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="h-full flex flex-col justify-between">
          <div className="px-4 py-6">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex-shrink-0" onClick={toggleMenu}>
                <h1 className="text-2xl font-bold text-gray-900">
                  B<span className="text-gold italic">T</span>
                </h1>
              </Link>
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-800"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-50">
            <div className="flex justify-center space-x-6 mb-4">
              <AiOutlineInstagram className="text-3xl text-[#C13584] cursor-pointer" />
              <AiOutlineFacebook className="text-3xl text-[#3B5998] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleMenu} />
      )}
    </>
  );
};

export default NavBar;