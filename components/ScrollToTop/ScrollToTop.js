"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Scrollbar from 'smooth-scrollbar';

export default function ScrollToTop({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Try to scroll the smooth scrollbar container first
    const scrollElement = document.getElementById('smoothScroll');
    if (scrollElement) {
      const scrollbar = Scrollbar.get(scrollElement);
      if (scrollbar) {
        // If smooth scrollbar is initialized, scroll instantly (no animation)
        scrollbar.scrollTo(0, 0, 0); // 0ms = instant scroll
      } else {
        // Fallback to regular scroll for the container
        scrollElement.scrollTo(0, 0);
      }
    } else {
      // Fallback to window scroll
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return children;
}