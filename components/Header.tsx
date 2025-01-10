'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1B2559] shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className={`text-2xl font-bold ${
        isScrolled ? 'text-white' : 'text-[#1B2559]'
      } hover:opacity-80 transition-opacity animate-fade-in`}
          >
            ScrapCon
          </Link>

          <button
            className={`md:hidden ${
        isScrolled ? 'text-white' : 'text-[#1B2559]'
      } hover:opacity-80 transition-opacity`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Features', 'Download'].map((item, index) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`${
        isScrolled ? 'text-white' : 'text-[#1B2559]'
      } hover:opacity-80 transition-opacity animate-fade-in delay-${index + 1}00 ${
                  item === 'Download' ? `${ isScrolled ? 'border-2 border-white': 'bg-[#1B2559] text-white'} px-6 py-2 rounded-full hover:bg-[#1b2555]` : ''
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div 
          className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'max-h-64 opacity-100 mt-4' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            {['Home', 'About', 'Features', 'Download'].map((item, index) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`${ isScrolled ? 'text-white' : 'text-[#1B2559]'} hover:opacity-80 transition-opacity ${
                  item === 'Download' ? 'bg-white text-[#1B2559] px-6 py-2 rounded-full text-center' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

