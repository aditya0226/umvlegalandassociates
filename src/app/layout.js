import "./globals.css";
import QueryClientProviders from "../../utils/react-query/react-query";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import ColorWrapper from "../../utils/ColorWrapper";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import SmoothScrollbarWrapper from "../../components/SmoothScrollbarWrapper";
import Image from "next/image";
import logo from "../../public/images/logo-header.svg";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ColorWrapper>
          <QueryClientProviders>
            <ScrollToTop>
              <SmoothScrollbarWrapper>
                <div className='startingAnimation'>
                  <div className="containerr">
                    <div className="image">
                      <Image 
                        className="img" 
                        src={logo} 
                        alt="ZivaQ Pharmaceutical Logo"
                        width={1000} 
                        height={1000}
                        priority
                      />
                    </div>
                  </div>
                </div>
                <Header />
                <div id="smoothScroll" className="mt-[72px]" style={{ height: 'calc(100vh - 72px)' }}>
                  <div>
                    {children}
                  </div>
                  <Footer />
                </div>
              </SmoothScrollbarWrapper>
            </ScrollToTop>
          </QueryClientProviders>
        </ColorWrapper>
      </body>
    </html>
  );
}
