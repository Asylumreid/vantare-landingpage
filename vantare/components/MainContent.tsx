'use client'

import Image from 'next/image'

export default function MainContent() {
  return (
    <section className="py-20 bg-black" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center font-montserrat">ELEVATE YOUR MINDSET</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <Image
              src="/images/use-1.jpg"
              alt="Bottle Workout"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
            <p className="absolute bottom-4 left-4 text-white text-2xl font-semibold">Find Your Center</p>
          </div>
          <div className="relative">
            <Image
              src="/images/use-2.jpg"
              alt="Shoulder workout"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
            <p className="absolute bottom-4 left-4 text-white text-2xl font-semibold">Conquer Your Summit</p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-3xl font-semibold mb-8">
            &ldquo;The only limits that exist are the ones in your mind.&rdquo;
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto" />
        </div>
      </div>
    </section>
  )
}