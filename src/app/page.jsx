import image1 from '../images/image1.png';
import Image from 'next/image';
import Link from 'next/link';

// SEO Metadata for Home page
export const metadata = {
  title: 'ZivaQ Pharmaceutical Inc. - Leading Global Pharmaceutical Company',
  description: 'ZivaQ Pharmaceutical Inc. is a leading global pharmaceutical company specializing in research & development, complex generics, and innovative healthcare solutions. WHO-GMP certified.',
  keywords: [
    'pharmaceutical company',
    'ZivaQ Pharmaceutical',
    'global pharmaceutical',
    'healthcare solutions',
    'WHO-GMP certified',
    'pharmaceutical manufacturing',
    'complex generics',
    'drug development',
    'FDA approved',
    'pharmaceutical research',
    'medicine manufacturer',
    'healthcare innovation'
  ],
  openGraph: {
    title: 'ZivaQ Pharmaceutical Inc. - Leading Global Pharmaceutical Company',
    description: 'Leading global pharmaceutical company specializing in innovative healthcare solutions.',
    url: 'https://zivaqpharma.com',
  },
};

const HomePage = () => {
  const features = [
    {
      icon: "🔬",
      title: "Research & Development",
      description: "Cutting-edge pharmaceutical research and innovative drug development solutions."
    },
    {
      icon: "⚕️",
      title: "Quality Assurance",
      description: "WHO-GMP, USFDA, and ISO certified manufacturing with rigorous quality control."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Serving healthcare needs across continents with trusted pharmaceutical solutions."
    },
    {
      icon: "💊",
      title: "Diverse Portfolio",
      description: "Generic formulations, branded generics, nutraceuticals, and specialty drugs."
    }
  ];

  const therapeuticAreas = [
    "Cardiology", "Neurology", "Gastroenterology", 
    "Dermatology", "Anti-infectives", "Oncology"
  ];

  const coreValues = [
    { title: "Integrity", desc: "In everything we do" },
    { title: "Innovation", desc: "As a constant pursuit" },
    { title: "Compassion", desc: "For patients and partners alike" },
    { title: "Sustainability", desc: "In growth and social responsibility" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-primary-200 rounded-full opacity-30 animate-pulse delay-150"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary-400 rounded-full opacity-25 animate-pulse delay-300"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  ZivaQ Pharmaceutical Inc.
                </h1>
                <p className="text-xl lg:text-2xl font-light mb-8 leading-relaxed">
                  Advancing healthcare and enhancing lives globally through innovative, affordable, and high-quality pharmaceutical solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 text-center">
                  Learn More About Us
                </Link>
                <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors duration-200 text-center">
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <Image 
                  src={image1} 
                  width={500} 
                  height={300} 
                  alt="ZivaQ Pharmaceutical" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Why Choose ZivaQ Pharmaceutical?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to addressing the world's most pressing health challenges through innovative pharmaceutical solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-6">Who We Are</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Established with a vision to become a trusted global healthcare partner, ZivaQ Pharmaceutical Inc is a research-driven pharmaceutical company based in the heart of New Jersey.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  From this strategic location, we manage a wide spectrum of pharmaceutical operations including product development, regulatory affairs, marketing, global partnerships, and customer service.
                </p>
                <Link href="/about" className="inline-flex items-center text-primary-600 hover:text-primary-800 font-semibold">
                  Read More About Us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary-800 mb-6">Our Therapeutic Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {therapeuticAreas.map((area, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm">
                      <span className="text-gray-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-8">What We Do</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              ZivaQ specializes in the development, manufacturing, and marketing of a comprehensive range of pharmaceutical products — including generic formulations, branded generics, nutraceuticals, and specialty drugs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We also provide contract manufacturing and private labeling services to global clients, ensuring regulatory compliance and unmatched quality at every stage of the production cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Commitment to Quality</h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
              At the core of our operations is an unyielding commitment to quality, compliance, and ethical business practices. All our manufacturing partners operate under stringent international standards.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {['USFDA', 'WHO-GMP', 'ISO'].map((cert, index) => (
                <div key={index} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">{cert}</h3>
                  <p className="text-sm opacity-90">Certified & Compliant</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                To be recognized as a global leader in affordable and accessible healthcare, empowering lives through trust, transparency, and transformative science.
              </p>
              <Link href="/research-and-development" className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Explore Our R&D
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-8 text-center lg:text-left">Our Core Values</h2>
              <div className="space-y-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{value.title}</h3>
                      <p className="text-gray-600">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to advance healthcare globally. Whether you're a healthcare provider, distributor, or looking for career opportunities, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Explore Careers
            </Link>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
