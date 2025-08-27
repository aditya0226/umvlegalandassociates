import BenefitsGrid from '../../../components/BenefitsGrid'

// SEO Metadata for Careers page
export const metadata = {
  title: "Careers | ZivaQ Pharmaceutical Inc. - Join Our Healthcare Innovation Team",
  description: "Join ZivaQ Pharmaceutical Inc. and build your future in pharmaceutical innovation. We offer career opportunities in R&D, manufacturing, regulatory affairs, and more. Global pharmaceutical company with growth opportunities.",
  keywords: [
    "pharmaceutical careers",
    "ZivaQ Pharmaceutical jobs",
    "healthcare careers",
    "pharmaceutical industry jobs",
    "research and development careers",
    "pharmaceutical manufacturing jobs",
    "regulatory affairs careers",
    "pharmaceutical company employment",
    "healthcare innovation careers",
    "pharmaceutical science jobs",
    "drug development careers",
    "New Jersey pharmaceutical jobs"
  ],
  openGraph: {
    title: "Careers at ZivaQ Pharmaceutical Inc.",
    description: "Join our team of healthcare innovators. Explore career opportunities in pharmaceutical research, development, and manufacturing.",
    url: "https://zivaqpharma.com/careers",
  },
};

export default function Careers() {

  const benefits = [
    {
      id: 1,
      title: "Global Exposure",
      description: "Be part of a company with a strong presence across North America, Asia, Africa, CIS, Middle East, and Latin America.",
      icon: "🌍",
      image: "/api/placeholder/300/200" // Globe with hands
    },
    {
      id: 2,
      title: "Innovation-Driven Culture",
      description: "Work alongside leading scientists, researchers, and professionals dedicated to healthcare advancement.",
      icon: "💡",
      image: "/api/placeholder/300/200" // Innovation/lightbulb
    },
    {
      id: 3,
      title: "Learning & Development",
      description: "Access training programs, workshops, and skill enhancement opportunities.",
      icon: "📚",
      image: "/api/placeholder/300/200" // Books/learning
    },
    {
      id: 4,
      title: "Ethical & Inclusive Workplace",
      description: "We value diversity, integrity, and collaboration.",
      icon: "🤝",
      image: "/api/placeholder/300/200" // Handshake
    },
    {
      id: 5,
      title: "Growth Opportunities",
      description: "Advance your career with a company that values internal talent and promotes from within.",
      icon: "📈",
      image: "/api/placeholder/300/200" // Growth chart
    }
  ]

  const opportunityAreas = [
    "Research & Development (R&D)",
    "Quality Assurance & Quality Control (QA/QC)",
    "Regulatory Affairs",
    "Manufacturing & Operations", 
    "Sales & Marketing",
    "International Business Development",
    "Corporate & Supply Chain Functions"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Word Cloud */}
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* Lightbulb Word Cloud */}
            <div className="relative inline-block mb-8">
              <div className="w-64 h-80 lg:w-80 lg:h-96 mx-auto relative">
                {/* Lightbulb Shape */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Bulb part */}
                  <div className="w-48 h-60 lg:w-60 lg:h-72 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 border-4 border-gray-300 relative overflow-hidden">
                    {/* Word cloud inside lightbulb */}
                    <div className="absolute inset-4 flex flex-wrap items-center justify-center text-center">
                      <span className="text-red-600 font-bold text-2xl lg:text-3xl m-1">CAREERS</span>
                      <span className="text-primary-500 font-semibold text-lg m-1">JOBS</span>
                      <span className="text-green-600 font-medium text-base m-1">GROWTH</span>
                      <span className="text-purple-600 font-bold text-xl m-1">FUTURE</span>
                      <span className="text-orange-500 font-medium text-sm m-1">FINANCE</span>
                      <span className="text-teal-600 font-semibold text-lg m-1">IDEAS</span>
                      <span className="text-pink-500 font-medium text-base m-1">TIME</span>
                      <span className="text-indigo-600 font-bold text-xl m-1">PLAN</span>
                      <span className="text-red-500 font-medium text-sm m-1">DESIGN</span>
                      <span className="text-primary-600 font-semibold text-base m-1">FOCUS</span>
                      <span className="text-green-500 font-medium text-sm m-1">LEAD</span>
                      <span className="text-yellow-600 font-bold text-lg m-1">THINK</span>
                      <span className="text-purple-500 font-medium text-sm m-1">WORK</span>
                      <span className="text-orange-600 font-semibold text-base m-1">TEAM</span>
                    </div>
                  </div>
                  
                  {/* Base of lightbulb */}
                  <div className="w-16 h-8 bg-gray-400 rounded-b-lg border-2 border-gray-300 mt-2">
                    <div className="w-full h-2 bg-gray-500 mt-2"></div>
                    <div className="w-full h-2 bg-gray-500 mt-1"></div>
                  </div>
                </div>

                {/* Hand with pen */}
                <div className="absolute -bottom-4 -right-8 lg:-right-12">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-orange-200 rounded-full flex items-center justify-center transform rotate-12">
                    <span className="text-2xl">✏️</span>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Careers at ZivaQ Pharmaceutical Inc.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 font-medium">
              Build Your Future. Shape Global Healthcare.
            </p>
          </div>
        </div>
      </div>

      {/* Company Description */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
            At ZivaQ Pharmaceutical Inc., we believe our greatest strength lies in our people. As a leading global pharmaceutical company, we are driven by innovation, guided by ethics, and united by a shared mission — to improve health and enrich lives worldwide.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            We are always looking for passionate, talented, and committed individuals to join our team and contribute to our vision of delivering high-quality, affordable medicines to patients across the globe.
          </p>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-16">
            Why Work With Us?
          </h2>
          
          <BenefitsGrid benefits={benefits} />
        </div>
      </div>

      {/* Areas of Opportunity */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
            Areas of Opportunity
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-8">
              We hire professionals across a variety of domains, including:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {opportunityAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 border-primary-500"
                >
                  <span className="text-gray-800 font-medium">• {area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Life at ZivaQ */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
            Life at ZivaQ
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Team image placeholder */}
            <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-8 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">👥</span>
                <p className="text-gray-600 font-medium">Collaborative Team Environment</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Our workplace is dynamic, collaborative, and inspiring. We foster an environment where new ideas are encouraged, achievements are celebrated, and every team member feels valued. At ZivaQ, you don't just get a job — you grow, you innovate, and make a difference in people's lives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Our Team CTA */}
      <div className="bg-gradient-to-r from-primary-600 to-purple-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Join Our Team
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg lg:text-xl text-white mb-8 leading-relaxed">
              If you are ready to be part of a forward-thinking organization that values innovation and excellence, we'd love to hear from you.
            </p>
            
            <div className="bg-white rounded-xl p-8 text-left">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Send Your Resume:</h3>
                  <a 
                    href="mailto:careers@zivaqpharma.com" 
                    className="text-primary-600 hover:text-primary-800 font-medium hover:underline"
                  >
                    careers@zivaqpharma.com
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Head Office:</h3>
                  <p className="text-gray-700">
                    One Tower Center Blvd, Suite 1510, East Brunswick, New Jersey, USA — 08816
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-600 italic">
                  "Your career journey starts here — where innovation meets opportunity."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}