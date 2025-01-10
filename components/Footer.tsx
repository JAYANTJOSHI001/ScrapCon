import Link from 'next/link'
import  { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1B2559] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 animate-slide-up">
            <h3 className="text-xl font-bold mb-2">ScrapCon</h3>
            <p className="text-sm opacity-90">Transforming scrap management for a sustainable future.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0 animate-slide-up delay-100">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li><Link href="/" className="hover:opacity-80 transition-opacity">Home</Link></li>
              <li><Link href="/features" className="hover:opacity-80 transition-opacity">Features</Link></li>
              <li><Link href="/about" className="hover:opacity-80 transition-opacity">About Us</Link></li>
              <li><Link href="/download" className="hover:opacity-80 transition-opacity">Download App</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0 animate-slide-up delay-200">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">Email: info@scrapcon.com</p>
            <p className="text-sm">Phone: +91 1234567890</p>
          </div>
          <div className="w-full md:w-1/4 animate-slide-up delay-300">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label={`Follow us on Facebook`}
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Facebook />
                  </div>
                </a>
                <a 
                  href="#" 
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label={`Follow us on  Instagram`}
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Instagram />
                  </div>
                </a>
                <a 
                  href="#" 
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label={`Follow us on Twitter`}
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Twitter />
                  </div>
                </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4 text-sm text-center opacity-90">
          © 2023 ScrapCon. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

