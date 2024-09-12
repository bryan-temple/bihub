'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-navy/80 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange">
          Bihub Technology
        </Link>
        <nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul
            id="main-menu"
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex md:space-x-4 absolute md:static left-0 right-0 top-full md:top-auto bg-navy/80 md:bg-transparent p-4 md:p-0`}
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`block py-2 px-4 rounded transition duration-300 ${
                    pathname === item.path
                      ? 'bg-orange text-navy'
                      : 'text-beige hover:bg-orange/20'
                  }`}
                  aria-current={pathname === item.path ? 'page' : undefined}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;