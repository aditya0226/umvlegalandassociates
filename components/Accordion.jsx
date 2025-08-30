'use client'
import React, { useState } from "react";

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="flex flex-col gap-6 w-full">
      {items.map((item, idx) => (
        <div
          key={idx}
          onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
          className={
            openIndex === idx
              ? "bg-white opacity-90 rounded-2xl shadow-md p-6 transition-all border border-gray-200"
              : "bg-white opacity-90 rounded-2xl shadow p-6 cursor-pointer border border-gray-100"
          }
        >
          <div
            className="flex items-center justify-between"
            style={{ cursor: "pointer" }}
          >
            <div className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              {item.title}
              {openIndex === idx && <span className="text-2xl align-middle">.</span>}
            </div>
            <span className="text-2xl text-gray-400 ml-4 select-none">
              {openIndex === idx ? "-" : "+"}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
            style={{willChange: 'max-height, opacity'}}
          >
            <div className="text-gray-700 text-base md:text-lg">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
