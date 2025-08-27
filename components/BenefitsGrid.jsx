'use client'

import { useState } from 'react'

export default function BenefitsGrid({ benefits }) {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <div
          key={benefit.id}
          className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform overflow-hidden ${
            hoveredCard === benefit.id ? 'scale-105' : ''
          }`}
          onMouseEnter={() => setHoveredCard(benefit.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Image */}
          <div className="w-full h-48 relative overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              {/* Placeholder image content based on benefit type */}
              {benefit.id === 1 && (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-2xl">🌍</span>
                </div>
              )}
              {benefit.id === 2 && (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                    </svg>
                  </div>
                  <span className="text-2xl">💡</span>
                </div>
              )}
              {benefit.id === 3 && (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <span className="text-2xl">📚</span>
                </div>
              )}
              {benefit.id === 4 && (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h3v7c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-7h3v6h2.5l1.5 2h2l-2-3.5c.4-.6.5-1.3.5-2V9c0-1.1-.9-2-2-2h-5.5c-.8 0-1.5.7-1.5 1.5S9.7 10 10.5 10H12v8H9v-7H4v7h3v2H4c-1.1 0-2-.9-2-2v-2h2z"/>
                    </svg>
                  </div>
                  <span className="text-2xl">🤝</span>
                </div>
              )}
              {benefit.id === 5 && (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                  </div>
                  <span className="text-2xl">📈</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {benefit.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
