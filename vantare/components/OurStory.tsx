'use client'

import { useEffect, useRef } from 'react'

export default function OurStory() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.pageYOffset
        const sectionPosition = sectionRef.current.offsetTop
        const sectionHeight = sectionRef.current.offsetHeight
        const windowHeight = window.innerHeight

        if (scrollPosition + windowHeight > sectionPosition && scrollPosition < sectionPosition + sectionHeight) {
          const distance = scrollPosition - sectionPosition
          const parallaxElements = sectionRef.current.querySelectorAll('.parallax')
          
          parallaxElements.forEach((el, index) => {
            const speed = 0.05 + (index * 0.02)
            const yOffset = Math.min(distance * speed, 50) // Limit the maximum offset
            if (el instanceof HTMLElement) {
              el.style.transform = `translateY(${yOffset}px)`
            }
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="bg-black text-white py-20 relative overflow-hidden" id="our-story">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-bold mb-8 text-center font-montserrat parallax">ONE FOOT IN</h2>
        <p className="text-lg mb-6 parallax">
          Every journey begins with a single step. At Vantare, we believe in the power of that first step, the moment you decide to transform your life and elevate your potential.
        </p>
        <p className="text-lg mb-6 parallax">
          Our story is one of transformation, growth, and the relentless pursuit of excellence. We&apos;ve walked the path of personal development and now we&apos;re here to guide you on your journey.
        </p>
        <p className="text-2xl font-semibold mb-6 text-center parallax">
          Build your story, elevate your potential
        </p>
        <p className="text-lg parallax">
          Vantare is more than just a brand; it&apos;s a lifestyle. We&apos;re here to help you transform your everyday moments into milestones, to push beyond your limits and discover the extraordinary within you.
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500 to-transparent opacity-10" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent" />
    </section>
  )
}