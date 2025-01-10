import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-gradient-to-br from-[#F5E2C8] via-white to-[#F5E2C8] min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">About ScrapCon</h1>
        
        <div className="max-w-4xl mx-auto">
          <section className="bg-white bg-opacity-90 rounded-lg shadow-md p-8 mb-12 hover:bg-gradient-to-r hover:from-white hover:to-[#F5E2C8] transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              At ScrapCon, we&apos;re on a mission to revolutionize the scrap management industry in India. We believe in creating a sustainable future by connecting customers with verified scrap vendors through our innovative digital platform.
            </p>
            <p>
              Our goal is to address the challenges of fluctuating scrap rates, unpredictable vendor availability, and the lack of environmental awareness in the traditional scrap-selling ecosystem.
            </p>
          </section>

          <section className="bg-white bg-opacity-90 rounded-lg shadow-md p-8 mb-12 hover:bg-gradient-to-r hover:from-white hover:to-[#F5E2C8] transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <p className="mb-4">
                  ScrapCon was founded in 2023 by a team of environmental enthusiasts and tech innovators who recognized the need for a more efficient and sustainable approach to scrap management in India.
                </p>
                <p>
                  Inspired by the principles of the circular economy and driven by the desire to make a positive impact, we set out to create a platform that would benefit both consumers and the environment.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image 
                  src="/team-photo.jpg" 
                  alt="ScrapCon Team" 
                  width={500} 
                  height={300} 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </section>

          <section className="bg-white bg-opacity-90 rounded-lg shadow-md p-8 mb-12 hover:bg-gradient-to-r hover:from-white hover:to-[#F5E2C8] transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-[#BD1E1E] mb-2">10,000+</h3>
                <p>Users Registered</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-[#BD1E1E] mb-2">500+</h3>
                <p>Verified Vendors</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-[#BD1E1E] mb-2">1000+</h3>
                <p>Tons of Scrap Recycled</p>
              </div>
            </div>
          </section>

          <section className="bg-white bg-opacity-90 rounded-lg shadow-md p-8 hover:bg-gradient-to-r hover:from-white hover:to-[#F5E2C8] transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4">Join Us in Our Mission</h2>
            <p className="mb-4">
              We invite you to be a part of the ScrapCon community and contribute to a cleaner, greener future. Whether you&apos;re a customer looking to responsibly dispose of your scrap or a vendor wanting to expand your business, ScrapCon is here to support you.
            </p>
            <p>
              Together, we can make a significant impact on the environment and create a more sustainable world for generations to come.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

