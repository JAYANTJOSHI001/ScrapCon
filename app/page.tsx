'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Smartphone, RefreshCcw, BarChart3, CheckCircle } from 'lucide-react'
import { Toast } from '@/components/ui/toast'
import { Skeleton } from '@/components/ui/skeleton'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const features = [
    {
      icon: <Smartphone className="w-8 h-8 mb-4" />,
      title: "Vendor Listings",
      description: "Compare scrap rates and pickup times from multiple vendors in your area."
    },
    {
      icon: <RefreshCcw className="w-8 h-8 mb-4" />,
      title: "Seamless Pickup Requests",
      description: "Schedule pickups at your convenience with just a few taps."
    },
    {
      icon: <BarChart3 className="w-8 h-8 mb-4" />,
      title: "Sustainability Tracking",
      description: "Monitor your carbon footprint reduction and compete on leaderboards."
    }
  ]

  return (
    <div className="bg-[#A5C5E7]">
      {/* Hero Section */}
      <section className="relative bg-[#1B2559] text-white min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-20 text-center relative">
          {isLoading ? (
            <>
              <Skeleton className="h-16 w-3/4 mx-auto mb-6" />
              <Skeleton className="h-8 w-2/4 mx-auto mb-8" />
              <Skeleton className="h-12 w-48 mx-auto" />
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float text-balance">
                Transform Scrap Management with ScrapCon
              </h1>
              <p className="text-xl mb-8 animate-slide-up delay-200 max-w-2xl mx-auto opacity-90 text-balance">
                Connect with verified scrap vendors, get transparent rates, and track your environmental impact.
              </p>
              <button 
                onClick={() => setShowToast(true)}
                className="btn-secondary group inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1B2559] text-balance">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="hover-card bg-[#A5C5E7] p-8 rounded-lg text-[#1B2559] group"
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="opacity-90 text-balance">{feature.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-[#1B2559]/70">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Available Now
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1B2559] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10K+', label: 'Active Users' },
              { value: '500+', label: 'Vendors' },
              { value: '1M+', label: 'Transactions' },
              { value: '50K+', label: 'Downloads' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center hover-card p-6 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold mb-2 shine-effect">
                  {stat.value}
                </div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#1B2559] text-balance">
            Ready to Transform Your Scrap Management?
          </h2>
          <Link 
            href="/download" 
            className="btn-primary group inline-flex items-center"
          >
            Download ScrapCon Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {showToast && (
        <Toast 
          message="Welcome to ScrapCon! 🎉" 
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  )
}

