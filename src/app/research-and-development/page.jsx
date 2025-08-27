import React from "react";

// SEO Metadata for this page
export const metadata = {
  title: "Research & Development | ZivaQ Pharmaceutical Inc. - Innovation in Healthcare",
  description: "ZivaQ Pharmaceutical's R&D division develops advanced formulations, complex generics, and novel drug delivery systems. Leading pharmaceutical research and development for global healthcare solutions.",
  keywords: [
    "pharmaceutical research and development",
    "drug development",
    "complex generics",
    "novel drug delivery systems",
    "NDDS",
    "pharmaceutical formulation",
    "bioequivalence studies",
    "stability testing",
    "pharmaceutical innovation",
    "ZivaQ Pharmaceutical",
    "FDA compliance",
    "WHO-GMP standards",
    "pharmaceutical manufacturing",
    "nutraceutical research",
    "regulatory affairs"
  ],
  openGraph: {
    title: "Research & Development | ZivaQ Pharmaceutical Inc.",
    description: "Leading pharmaceutical research and development for innovative healthcare solutions. Specializing in complex generics, NDDS, and advanced formulations.",
    url: "https://zivaqpharma.com/research-and-development",
  },
};

const ResearchAndDevelopment = () => {
  const focusAreas = [
    {
      title: "Complex Generics",
      description: "Developing high-value, hard-to-make generics with bioequivalence to branded products."
    },
    {
      title: "Novel Drug Delivery Systems (NDDS)",
      description: "Enhancing patient convenience and treatment effectiveness through innovative dosage forms."
    },
    {
      title: "Stability & Compatibility Studies",
      description: "Ensuring product performance across diverse storage and environmental conditions."
    },
    {
      title: "Process Optimization",
      description: "Designing efficient, cost-effective manufacturing processes without compromising quality."
    },
    {
      title: "Nutraceutical Research",
      description: "Creating evidence-based supplements for preventive healthcare and wellness."
    }
  ];

  const capabilities = [
    "State-of-the-art laboratories equipped with modern analytical and formulation tools.",
    "In-house pilot plant for scale-up studies.",
    "Dedicated bioequivalence & stability testing units.",
    "Compliance with USFDA, WHO-GMP, and ISO standards."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-20 h-20 bg-primary-200 rounded-full opacity-30 animate-pulse delay-150"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary-400 rounded-full opacity-25 animate-pulse delay-300"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Research & Development
            </h1>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 mb-8">
                <img 
                  src="/api/placeholder/400/250" 
                  alt="Scientist with microscope" 
                  className="w-full max-w-md mx-auto rounded-lg mb-4"
                />
                <p className="text-xl lg:text-2xl font-semibold italic">
                  Innovating for a Healthier Tomorrow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Introduction Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              At ZivaQ Pharmaceutical Inc., innovation is the heartbeat of our organization. Our Research & Development (R&D) division is dedicated to transforming scientific discoveries into life-changing healthcare solutions.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              We focus on developing advanced formulations, complex generics, and novel drug delivery systems that address evolving medical needs while ensuring safety, efficacy, and patient compliance.
            </p>
          </div>
        </div>

        {/* R&D Focus Areas Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
              Our R&D Focus Areas
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-l-4 border-primary-500">
                <h3 className="text-xl font-bold text-primary-800 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities & Capabilities Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-8">
                Facilities & Capabilities
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <div className="order-2 lg:order-1">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                    <img 
                      src="/api/placeholder/400/300" 
                      alt="Laboratory equipment" 
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Our R&D infrastructure includes:
                  </h3>
                  <ul className="space-y-4">
                    {capabilities.map((capability, index) => (
                      <li key={index} className="flex items-start space-x-3 text-white">
                        <div className="w-2 h-2 bg-primary-300 rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-lg leading-relaxed">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collaborations & Expertise Section */}
        <div className="mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 text-center mb-8">
                Collaborations & Expertise
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-center">
                We collaborate with global research institutions, universities, and industry experts to accelerate product development. Our scientists bring diverse expertise in formulation science, pharmacology, and regulatory affairs, ensuring that every product meets the highest international benchmarks.
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory Excellence Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 text-center mb-8">
              Regulatory Excellence
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our R&D team works closely with our regulatory affairs department to compile dossier submissions for global markets, ensuring smooth and timely product registrations in multiple jurisdictions.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At ZivaQ, we believe that every innovation brings us one step closer to a healthier world. Through continuous research, technological advancements, and strategic collaborations, we are shaping the future of healthcare — today.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl">
            <p className="text-xl lg:text-2xl font-semibold italic">
              "Where Innovation Meets Care — Advancing Healthcare Through Science"
            </p>
            <p className="text-lg mt-4 opacity-90">
              ZivaQ Pharmaceutical Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchAndDevelopment;
