'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (buttonRef.current) {
        const scrollY = window.scrollY
        const scale = Math.max(1, 1 + (scrollY * 0.001))
        const opacity = Math.max(0.5, 1 - (scrollY * 0.002))
        buttonRef.current.style.transform = `scale(${scale})`
        buttonRef.current.style.opacity = opacity.toString()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/vantare.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute bottom-20 right-20">
        <a 
          href="https://sg.shp.ee/78qZpDE" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button 
            ref={buttonRef}
            className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
          >
            Buy Now
          </button>
        </a>
      </div>
    </section>
  )
}