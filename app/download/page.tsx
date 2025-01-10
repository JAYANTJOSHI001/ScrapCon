import Image from 'next/image'
import Link from 'next/link'

export default function Download() {
  return (
    <div className="bg-gradient-to-br from-[#F5E2C8] via-white to-[#F5E2C8] min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Download ScrapCon</h1>
        <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-md p-8 hover:bg-gradient-to-r hover:from-white hover:to-[#F5E2C8] transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <Image src="/app-screenshot.png" alt="ScrapCon App Screenshot" width={300} height={600} className="rounded-lg shadow-lg" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-4">Get ScrapCon on Your Device</h2>
              <p className="mb-6">Download the ScrapCon app to start managing your scrap efficiently and sustainably.</p>
              <div className="space-y-4">
                <a href="#" className="block bg-gradient-to-r from-[#18206F] to-[#17255A] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  <div className="flex items-center justify-center">
                    <svg className="h-8 w-8 mr-3" viewBox="0 0 384 512">
                      <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                    </svg>
                    <div>
                      <div className="text-xs">Download on the</div>
                      <div className="text-xl font-semibold font-sans -mt-1">App Store</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="block bg-gradient-to-r from-[#18206F] to-[#17255A] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  <div className="flex items-center justify-center">
                    <svg className="h-8 w-8 mr-3" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                    </svg>
                    <div>
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-xl font-semibold font-sans -mt-1">Google Play</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Why Download ScrapCon?</h3>
          <ul className="max-w-2xl mx-auto text-left list-disc list-inside space-y-2">
            <li>Access real-time scrap rates from multiple vendors</li>
            <li>Schedule convenient pickup times</li>
            <li>Track your environmental impact</li>
            <li>Earn rewards for sustainable scrap management</li>
            <li>Contribute to a cleaner, greener environment</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

