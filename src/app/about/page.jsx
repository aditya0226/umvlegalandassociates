import React from "react";

// SEO Metadata for About page
export const metadata = {
  title: "About Us | ZivaQ Pharmaceutical Inc. - Leading Global Pharmaceutical Company",
  description: "Learn about ZivaQ Pharmaceutical Inc., a US-based pharmaceutical company committed to delivering high-quality, affordable, and innovative healthcare solutions globally. WHO-GMP certified.",
  keywords: [
    "about ZivaQ Pharmaceutical",
    "pharmaceutical company USA",
    "WHO-GMP certified",
    "healthcare solutions",
    "pharmaceutical manufacturing",
    "East Brunswick pharmaceutical",
    "global pharmaceutical company",
    "FDA compliant medicines",
    "pharmaceutical innovation",
    "generic medicines",
    "nutraceuticals",
    "pharmaceutical quality",
    "healthcare accessibility",
    "pharmaceutical values",
    "medical expertise"
  ],
  openGraph: {
    title: "About ZivaQ Pharmaceutical Inc.",
    description: "Leading US-based pharmaceutical company delivering innovative healthcare solutions globally.",
    url: "https://zivaqpharma.com/about",
  },
};

const AboutUs = () => {
  const coreValues = [
    {
      icon: "💡",
      title: "Innovation",
      description: "We embrace science and technology to develop next-generation healthcare solutions."
    },
    {
      icon: "🤝",
      title: "Integrity", 
      description: "We operate with honesty, transparency, and ethical responsibility."
    },
    {
      icon: "⭐",
      title: "Quality",
      description: "We follow strict USFDA, WHO-GMP, and ISO-certified protocols."
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "We work towards expanding access to essential medicines for all."
    }
  ];

  const whatWeDo = [
    {
      title: "Innovative Formulations",
      description: "Creating advanced drug delivery systems for better patient compliance.",
      icon: "🔬"
    },
    {
      title: "Generic Medicines", 
      description: "Offering cost-effective alternatives without compromising on quality.",
      icon: "💊"
    },
    {
      title: "Nutraceuticals",
      description: "Promoting preventive healthcare and overall wellness.",
      icon: "🌱"
    }
  ];

  return (
    <>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 lg:py-32">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">About ZivaQ Pharmaceutical</h1>
              <p className="text-xl lg:text-2xl font-light leading-relaxed">
                Committed to delivering high-quality, affordable, and innovative healthcare solutions across the globe
              </p>
            </div>
          </div>
        </div>

        {/* Main About Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-6">Who We Are</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ZivaQ Pharmaceutical Inc. is a US-based pharmaceutical company committed to delivering high-quality, affordable, and innovative healthcare solutions across the globe. Headquartered at One Tower Center Blvd, Suite 1510, East Brunswick, New Jersey, we specialize in the development, manufacturing, and distribution of a broad portfolio of pharmaceutical formulations across key therapeutic areas.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At ZivaQ, our foundation is built on integrity, science, and a deep commitment to patient well-being. We operate with global standards of compliance, including cGMP, WHO-GMP, and regulatory protocols in all our processes—from research and manufacturing to packaging and distribution.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With a strong presence in the United States and emerging global markets, ZivaQ combines modern technology with medical expertise to create products that improve lives.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl text-white">🏢</span>
                    </div>
                    <p className="text-primary-800 font-semibold">Est. in New Jersey, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-primary-500">
                <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To improve health outcomes by providing innovative, affordable, and high-quality pharmaceutical products globally.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be a leading name in pharmaceuticals, trusted for our science, ethics, and unwavering commitment to patient care.
                </p>
              </div>
            </div>

            {/* What We Do */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">What We Do</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  From research and development to manufacturing and global distribution, ZivaQ is engaged in every stage of the pharmaceutical value chain.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {whatWeDo.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">Our Core Values</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  These fundamental principles guide everything we do and shape our commitment to excellence.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{value.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary-800 mb-3">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality & Compliance */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl shadow-xl p-8 lg:p-12 mb-20">
              <div className="text-center text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Quality & Compliance</h2>
                <p className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
                  At ZivaQ, quality is non-negotiable. Every product is manufactured in compliance with USFDA, WHO-GMP, and ISO standards, ensuring safety, efficacy, and consistency. Our in-house quality control labs perform rigorous testing, while our regulatory team ensures full compliance with IP, BP, USP, and EP standards.
                </p>
                <div className="grid md:grid-cols-4 gap-6 mt-8">
                  {['USFDA', 'WHO-GMP', 'ISO', 'cGMP'].map((cert, index) => (
                    <div key={index} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                      <p className="font-semibold text-lg">{cert}</p>
                      <p className="text-sm opacity-90">Certified</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Global Footprint & Future */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Global Footprint</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With an expanding presence across continents, ZivaQ partners with healthcare providers, distributors, and government health systems to deliver medicines where they are needed the most. Our logistics network ensures timely supply, even in remote markets.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Looking Ahead</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The future of healthcare lies in innovation, and at ZivaQ, we are investing in advanced research, strategic collaborations, and sustainable business practices to address the evolving needs of patients worldwide.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-20">
              <div className="bg-gradient-to-r from-green-500 to-primary-600 text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Driven by Innovation, Guided by Responsibility
                </h3>
                <p className="text-lg lg:text-xl mb-6">
                  We aim to be a globally recognized name in pharmaceuticals—delivering not just medicines, but better health outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
