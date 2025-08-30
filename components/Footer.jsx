'use client'
import React from "react";

const Footer = () => {
  return (
  <footer className="relative overflow-hidden bg-gradient-to-br from-[#414345] via-[#414345] to-[#414345] text-white py-8 px-4 mt-8">
      {/* Animated SVG background with moving rectangles and lines */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
          {/* Moving vertical lines */}
          <rect x="0" y="0" width="4" height="320" fill="#5b7bb0" fillOpacity="0.18">
            <animate attributeName="x" values="0;1440;0" dur="12s" repeatCount="indefinite" />
          </rect>
          <rect x="360" y="0" width="4" height="320" fill="#7ea6e0" fillOpacity="0.13">
            <animate attributeName="x" values="360;0;1440;360" keyTimes="0;0.3;0.7;1" dur="16s" repeatCount="indefinite" />
          </rect>
          <rect x="720" y="0" width="4" height="320" fill="#ffffff" fillOpacity="0.09">
            <animate attributeName="x" values="720;1440;0;720" keyTimes="0;0.5;0.8;1" dur="18s" repeatCount="indefinite" />
          </rect>
          <rect x="1080" y="0" width="4" height="320" fill="#5b7bb0" fillOpacity="0.13">
            <animate attributeName="x" values="1080;0;1440;1080" keyTimes="0;0.2;0.8;1" dur="14s" repeatCount="indefinite" />
          </rect>
          {/* Moving rectangles */}
          <rect x="200" y="60" width="120" height="40" rx="8" fill="#7ea6e0" fillOpacity="0.13">
            <animate attributeName="x" values="200;1240;200" dur="14s" repeatCount="indefinite" />
          </rect>
          <rect x="1240" y="180" width="100" height="30" rx="6" fill="#ffffff" fillOpacity="0.08">
            <animate attributeName="x" values="1240;200;1240" dur="16s" repeatCount="indefinite" />
          </rect>
          <rect x="600" y="120" width="180" height="50" rx="10" fill="#5b7bb0" fillOpacity="0.10">
            <animate attributeName="x" values="600;900;600" dur="12s" repeatCount="indefinite" />
          </rect>

          {/* Moving law-related icons (gavel, scales, courthouse) */}
          {/* Gavel icon */}
          <g>
            <g transform="scale(1.2)">
              <g>
                <rect x="100" y="250" width="60" height="12" rx="6" fill="#e5e7eb" fillOpacity="0.18">
                  <animate attributeName="x" values="100;1280;100" dur="18s" repeatCount="indefinite" />
                </rect>
                <rect x="120" y="240" width="12" height="32" rx="6" fill="#e5e7eb" fillOpacity="0.22">
                  <animate attributeName="x" values="120;1300;120" dur="18s" repeatCount="indefinite" />
                </rect>
              </g>
            </g>
          </g>
          {/* Scales icon */}
          <g>
            <g transform="scale(1.1)">
              <g>
                <rect x="900" y="60" width="8" height="60" rx="4" fill="#e5e7eb" fillOpacity="0.18">
                  <animate attributeName="x" values="900;200;900" dur="20s" repeatCount="indefinite" />
                </rect>
                <rect x="880" y="110" width="48" height="8" rx="4" fill="#e5e7eb" fillOpacity="0.13">
                  <animate attributeName="x" values="880;180;880" dur="20s" repeatCount="indefinite" />
                </rect>
                <ellipse cx="890" cy="130" rx="10" ry="4" fill="#e5e7eb" fillOpacity="0.13">
                  <animate attributeName="cx" values="890;190;890" dur="20s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="918" cy="130" rx="10" ry="4" fill="#e5e7eb" fillOpacity="0.13">
                  <animate attributeName="cx" values="918;218;918" dur="20s" repeatCount="indefinite" />
                </ellipse>
              </g>
            </g>
          </g>
          {/* Courthouse icon */}
          <g>
            <g transform="scale(1.1)">
              <rect x="400" y="220" width="60" height="18" rx="4" fill="#e5e7eb" fillOpacity="0.13">
                <animate attributeName="x" values="400;1000;400" dur="22s" repeatCount="indefinite" />
              </rect>
              <rect x="420" y="200" width="20" height="20" rx="4" fill="#e5e7eb" fillOpacity="0.18">
                <animate attributeName="x" values="420;1020;420" dur="22s" repeatCount="indefinite" />
              </rect>
              <rect x="440" y="210" width="4" height="8" rx="2" fill="#e5e7eb" fillOpacity="0.22">
                <animate attributeName="x" values="440;1040;440" dur="22s" repeatCount="indefinite" />
              </rect>
            </g>
          </g>
                    {/* Law Book icon */}
          <g>
            <g transform="scale(1.05)">
              <rect x="200" y="40" width="36" height="28" rx="4" fill="#e5e7eb" fillOpacity="0.13">
                <animate attributeName="x" values="200;1100;200" dur="19s" repeatCount="indefinite" />
              </rect>
              <rect x="204" y="44" width="28" height="4" rx="2" fill="#e5e7eb" fillOpacity="0.18">
                <animate attributeName="x" values="204;1104;204" dur="19s" repeatCount="indefinite" />
              </rect>
              <rect x="204" y="52" width="20" height="3" rx="1.5" fill="#e5e7eb" fillOpacity="0.18">
                <animate attributeName="x" values="204;1104;204" dur="19s" repeatCount="indefinite" />
              </rect>
            </g>
          </g>
          {/* Shield icon */}
          <g>
            <g transform="scale(1.1)">
              <path d="M1300 80 Q1310 120 1320 80 Q1310 60 1300 80 Z" fill="#e5e7eb" fillOpacity="0.13">
                <animate attributeName="d" values="M1300 80 Q1310 120 1320 80 Q1310 60 1300 80 Z;M200 80 Q210 120 220 80 Q210 60 200 80 Z;M1300 80 Q1310 120 1320 80 Q1310 60 1300 80 Z" dur="21s" repeatCount="indefinite" />
              </path>
              <rect x="1307" y="75" width="6" height="10" rx="2" fill="#e5e7eb" fillOpacity="0.18">
                <animate attributeName="x" values="1307;207;1307" dur="21s" repeatCount="indefinite" />
              </rect>
            </g>
          </g>
          {/* Contract icon */}
          <g>
            <g transform="scale(1.08)">
              <rect x="700" y="260" width="40" height="24" rx="4" fill="#e5e7eb" fillOpacity="0.13">
                <animate attributeName="x" values="700;1200;700" dur="17s" repeatCount="indefinite" />
              </rect>
              <rect x="708" y="266" width="24" height="3" rx="1.5" fill="#e5e7eb" fillOpacity="0.18">
                <animate attributeName="x" values="708;1208;708" dur="17s" repeatCount="indefinite" />
              </rect>
              <rect x="708" y="272" width="16" height="3" rx="1.5" fill="#e5e7eb" fillOpacity="0.18">
                <animate attributeName="x" values="708;1208;708" dur="17s" repeatCount="indefinite" />
              </rect>
            </g>
          </g>
          {/* Column icon */}
          <g>
            <g transform="scale(1.1)">
              <rect x="1200" y="210" width="12" height="36" rx="4" fill="#e5e7eb" fillOpacity="0.13">
                <animate attributeName="x" values="1200;400;1200" dur="20s" repeatCount="indefinite" />
              </rect>
              <rect x="1196" y="246" width="20" height="6" rx="3" fill="#e5e7eb" fillOpacity="0.18">
                <animate attributeName="x" values="1196;396;1196" dur="20s" repeatCount="indefinite" />
              </rect>
            </g>
          </g>
        </svg>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border-b border-[#355072] pb-6">
        <div className="text-center md:text-left">
          <span className="font-bold text-xl tracking-tight">UMV Legal & Associates</span>
          <p className="text-sm text-[#dbeafe] mt-1">Comprehensive legal services with integrity and professionalism.</p>
        </div>
        <div className="text-center md:text-right text-sm text-[#dbeafe]">
          <div>Shreeram Building, Mahamandir, Jodhpur</div>
          <div>
            <a href="tel:+919967276861" className="hover:underline">+91 9967276861</a>
          </div>
          <div>
            <a href="mailto:umvlegalassosiates@gmail.com" className="hover:underline">umvlegalassosiates@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="relative z-10 text-center text-[#dbeafe] text-xs pt-4 opacity-80">
        © 2025 UMV Legal & Associates. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
