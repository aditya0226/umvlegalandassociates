// SEO Metadata for Contact page
export const metadata = {
  title: "Contact Us | ZivaQ Pharmaceutical Inc. - Get in Touch",
  description: "Contact ZivaQ Pharmaceutical Inc. for business inquiries, product information, or partnerships. Located in East Brunswick, New Jersey. Phone: +1 (484) 456-0012",
  keywords: [
    "contact ZivaQ Pharmaceutical",
    "pharmaceutical company contact",
    "ZivaQ Pharmaceutical address",
    "pharmaceutical business inquiries",
    "East Brunswick pharmaceutical",
    "pharmaceutical partnerships",
    "ZivaQ Pharmaceutical phone",
    "pharmaceutical company New Jersey",
    "healthcare company contact",
    "pharmaceutical distributor contact"
  ],
  openGraph: {
    title: "Contact ZivaQ Pharmaceutical Inc.",
    description: "Get in touch with ZivaQ Pharmaceutical for business inquiries, product information, or partnerships.",
    url: "https://zivaqpharma.com/contact-us",
  },
};

import ContactForm from '../../../components/ContactForm'

export default function ContactUs() {

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                {/* Red Phone Icon */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 relative">
                  <svg viewBox="0 0 200 400" className="w-full h-full text-red-500 fill-current">
                    {/* Phone handset */}
                    <ellipse cx="100" cy="60" rx="40" ry="50" />
                    <ellipse cx="100" cy="340" rx="40" ry="50" />
                    
                    {/* Concentric circles on top */}
                    <circle cx="100" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="100" cy="60" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="100" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
                    
                    {/* Concentric circles on bottom */}
                    <circle cx="100" cy="340" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="100" cy="340" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="100" cy="340" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
                    
                    {/* Coiled cord */}
                    <path d="M 100 110 Q 120 130 100 150 Q 80 170 100 190 Q 120 210 100 230 Q 80 250 100 270 Q 120 290 100 310" 
                          stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">Contact Us</h1>
                  <p className="text-lg lg:text-xl text-gray-600 italic">We're Here to Connect With You</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-2xl">
                Whether you have a business inquiry, need product information, or are interested in 
                partnering with us, the ZivaQ Pharmaceutical Inc. team is ready to assist you.
              </p>
              
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-2xl">
                We value strong relationships with healthcare providers, distributors, regulatory authorities, 
                and customers worldwide. Your questions, feedback, and suggestions help us serve you better.
              </p>
            </div>

            {/* Right Side - Decorative phone cord */}
            <div className="hidden lg:block relative">
              <div className="absolute right-0 top-0">
                <svg viewBox="0 0 300 200" className="w-full h-48 text-red-500">
                  <path d="M 0 100 Q 50 80 100 100 Q 150 120 200 100 Q 250 80 300 100" 
                        stroke="currentColor" strokeWidth="12" fill="none" strokeLinecap="round"/>
                  <path d="M 0 100 Q 50 120 100 100 Q 150 80 200 100 Q 250 120 300 100" 
                        stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Information */}
          <div className="space-y-12">
            {/* Get in Touch */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
              
              {/* Head Office */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 text-red-500 mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Head Office — USA</h3>
                    <p className="text-gray-600">ZivaQ Pharmaceutical Inc.</p>
                    <p className="text-gray-600">One Tower Center Blvd, Suite 1510</p>
                    <p className="text-gray-600">East Brunswick, New Jersey, USA — 08816</p>
                  </div>
                </div>
              </div>

              {/* Email Contacts */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 text-red-500">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email:</h3>
                  </div>
                </div>
                <div className="ml-9 space-y-1">
                  <p className="text-gray-700">General Inquiries: <a href="mailto:info@zivaqpharma.com" className="text-primary-600 hover:underline">info@zivaqpharma.com</a></p>
                  <p className="text-gray-700">Careers: <a href="mailto:careers@zivaqpharma.com" className="text-primary-600 hover:underline">careers@zivaqpharma.com</a></p>
                  <p className="text-gray-700">Business Partnerships: <a href="mailto:business@zivaqpharma.com" className="text-primary-600 hover:underline">business@zivaqpharma.com</a></p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-6 h-6 text-red-500">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone: <a href="tel:+14844560012" className="text-primary-600 hover:underline">+1 (484) 456-0012</a></h3>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Business Hours</h2>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Monday – Friday:</span> 9:00 AM – 6:00 PM (EST)</p>
                <p><span className="font-semibold">Saturday & Sunday:</span> Closed</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <ContactForm />
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-full mb-8">
            <h2 className="text-2xl font-bold">Follow Us!</h2>
          </div>
          
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Stay updated with our latest news, product launches, and industry insights:
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-700">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn: [ZivaQ LinkedIn URL]</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span>Twitter: [ZivaQ Twitter URL]</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-primary-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook: [ZivaQ Facebook URL]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}