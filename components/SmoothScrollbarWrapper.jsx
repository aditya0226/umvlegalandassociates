"use client";
import { useEffect } from "react";
import Scrollbar from 'smooth-scrollbar';

export default function SmoothScrollbarWrapper({ children }) {
  const options = {
    damping: 0.1,
    thumbMinSize: 20,
    renderByPixels: true,
    alwaysShowTracks: false,
    continuousScrolling: true
  }

  useEffect(() => {
    let scrollbar;

    const initScrollbar = () => {
      const scrollElement = document.getElementById('smoothScroll');
      if (scrollElement && window.innerWidth > 1000) {
        // Destroy existing scrollbar if it exists
        if (scrollbar) {
          scrollbar.destroy();
        }
        scrollbar = Scrollbar.init(scrollElement, options);
      } else if (scrollbar) {
        // Destroy scrollbar on smaller screens
        scrollbar.destroy();
        scrollbar = null;
      }
    };

    // Initialize scrollbar after component mount
    initScrollbar();

    // Handle window resize
    const handleResize = () => {
      initScrollbar();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      if (scrollbar) {
        scrollbar.destroy();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{
      backgroundImage: 'url(/images/homeAboutSection.jpg)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 'calc(100vh - 72px)',
      width: '100%'
    }}>
      {children}
    </div>
  );
}
