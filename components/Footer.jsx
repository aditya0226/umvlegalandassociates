import React from "react";

const Footer = () => {
  return (
    <div>
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">
            Contact ZivaQ Pharmaceutical Inc.
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">
                Head Office - New Jersey, USA
              </h4>
              <p className="text-gray-300 mb-4">
                One Tower Center Blvd, Suite 1510
                <br />
                East Brunswick, New Jersey, United States – 08816
              </p>
              <a
                href="mailto:info@zivaqpharma.com"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                info@zivaqpharma.com
              </a>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-semibold italic">
                  "Where Innovation Meets Care"
                </p>
                <p className="text-gray-400 mt-2">ZivaQ Pharmaceutical Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Footer;
