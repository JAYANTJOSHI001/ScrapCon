import { CheckCircle } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: "Vendor Listings",
      description: "Access a comprehensive dashboard displaying nearby scrap vendors, complete with real-time rate comparisons and estimated pickup times.",
      benefits: [
        "Compare rates from multiple vendors",
        "View estimated pickup times",
        "Make informed decisions based on customer reviews"
      ]
    },
    {
      title: "Seamless Pickup Requests",
      description: "Effortlessly schedule scrap pickups at your convenience with our user-friendly interface.",
      benefits: [
        "Select vendors based on your preferences",
        "Schedule pickups at convenient times",
        "Receive instant confirmation and updates"
      ]
    },
    {
      title: "Sustainability Tracking",
      description: "Monitor your environmental impact and contribute to a greener future with our sustainability metrics.",
      benefits: [
        "Track your carbon footprint reduction",
        "View equivalent environmental benefits (e.g., trees saved)",
        "Compete on leaderboards for added motivation"
      ]
    },
    {
      title: "Real-time Rate Updates",
      description: "Stay informed with up-to-the-minute scrap rates from various vendors in your area.",
      benefits: [
        "Access current market rates",
        "Make informed decisions on when to sell",
        "Maximize your earnings from scrap sales"
      ]
    },
    {
      title: "Vendor Management System",
      description: "A robust platform for scrap vendors to manage their business efficiently.",
      benefits: [
        "Update rates in real-time",
        "Manage customer requests easily",
        "Optimize routes for pickups"
      ]
    },
    {
      title: "Educational Resources",
      description: "Access a wealth of information about responsible scrap management and environmental conservation.",
      benefits: [
        "Learn about different types of recyclable materials",
        "Understand the impact of proper scrap disposal",
        "Stay updated on environmental regulations"
      ]
    }
  ]

  return (
    <div className="bg-gradient-to-br from-[#F5E2C8] via-white to-[#F5E2C8] min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">ScrapCon Features</h1>
        
        <div className="max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <section key={index} className="bg-white bg-opacity-90 rounded-lg shadow-md p-8 mb-8 hover:bg-gradient-to-r hover:from-white hover:to-[#F5E2C8] transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
              <p className="mb-6">{feature.description}</p>
              <h3 className="text-xl font-semibold mb-3">Key Benefits:</h3>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">Ready to Experience These Features?</h2>
          <a 
            href="/download" 
            className="bg-gradient-to-r from-[#18206F] to-[#17255A] text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Download ScrapCon Now
          </a>
        </div>
      </div>
    </div>
  )
}

