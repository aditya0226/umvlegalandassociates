import React from "react";
import Link from "next/link";
import { members } from "../../../components/TeamMemberCard";

const page = () => {
  const features = [
    {
      number: "01",
      title: "Commitment to Results",
      desc: "We prioritize integrity, professionalism, and excellence to achieve outcomes that protect your interests.",
    },
    {
      number: "02",
      title: "Client-First Approach",
      desc: "Your concerns are our priority, ensuring personalized strategies and clear communication every step of the way.",
    },
    {
      number: "03",
      title: "Comprehensive Legal Services",
      desc: "From complex cases to routine matters, we provide seamless, end-to-end legal support under one roof.",
    },
  ];
  return (
    <div>
      <section className="flex items-center justify-center min-h-[60vh] py-12 px-4 md:px-8 ">
        <div className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-[#1a3c4b] flex flex-col justify-center items-start p-8 md:p-12 md:w-1/2 text-white">
            <div className="mb-4">
              <span className="inline-block bg-white/20 px-4 py-2 rounded-lg text-lg md:text-xl font-bold tracking-wide">
                7+ Years Experience
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-2">
              We Provide Reliable
              <br />
              And Effective Legal Services
            </h2>
          </div>
          <div className="bg-white/60 backdrop-blur p-8 md:p-12 flex flex-col justify-center md:w-1/2">
            <span className="uppercase tracking-widest text-[#3b5c6b] text-xs md:text-sm font-semibold mb-2">
              About Us
            </span>
            <p className="text-gray-700 text-base md:text-lg">
              UMV Legal &amp; Associates stands as a trusted name in the legal
              industry, backed by over 7 years of experience delivering expert
              solutions. We are dedicated to providing clear, reliable, and
              results-driven legal services tailored to your needs. Experience
              professionalism and excellence with every step we take together.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-0 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10">
          Why to choose us
        </h2>

        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.number}
              className="flex-1 flex flex-col items-center text-center bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8"
            >
              <span
                className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#295c8a] to-[#b6e2e0] mb-4 select-none"
                style={{ WebkitTextStroke: "2px #295c8a" }}
              >
                {feature.number}
              </span>
              <span className="font-bold text-lg md:text-xl text-gray-800 mb-2">
                {feature.title}
              </span>
              <p className="text-gray-600 text-base md:text-lg">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="p-4">
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-8 flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a3c4b] tracking-wide uppercase mb-2">
              About UMV Legal &amp; Associates
            </h2>
            <h3 className="text-lg md:text-xl font-semibold italic text-[#295c8a] mb-2">
              Established in 2021
            </h3>
            <p className="text-gray-800 text-base md:text-lg mb-2">
              At UMV Legal &amp; Associates, we are the guardians of innovation
              and creativity. With a deep passion for intellectual property
              rights, we are dedicated to protecting, enhancing, and defending
              the invaluable assets of our clients. Our firm's reputation is
              built on a commitment to excellence, a thorough understanding of
              IP law, and a relentless pursuit of justice. UMV Legal &amp;
              Associates has emerged as a trusted name in the legal fraternity,
              delivering superior legal services that cater to the diverse needs
              of individuals, entrepreneurs, and businesses alike. With an
              unwavering commitment to excellence, we combine deep legal
              expertise with a client-centric approach to provide practical and
              result-driven solutions.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-white rounded-xl shadow p-5">
                <h4 className="text-md md:text-lg font-bold mb-1 text-[#295c8a] uppercase">
                  Our Mission
                </h4>
                <p className="text-gray-700 text-sm md:text-base">
                  Our mission is to provide unwavering support and exceptional
                  legal counsel to clients who value the power of their ideas.
                  We are here to secure your innovations, safeguard your brands,
                  and preserve your creative works. We believe that innovation
                  should be celebrated and that creativity should be protected,
                  and we make it our mission to turn those beliefs into actions.
                </p>
              </div>
              <div className="flex-1 bg-white rounded-xl shadow p-5">
                <h4 className="text-md md:text-lg font-bold mb-1 text-[#295c8a] uppercase">
                  Our Commitment
                </h4>
                <p className="text-gray-700 text-sm md:text-base">
                  At UMV Legal &amp; Associates, our mission is to protect your
                  rights, preserve your interests, and propel your success. We
                  understand that each client’s legal needs are unique, and we
                  pride ourselves on delivering solutions that are tailored,
                  effective, and practical.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg md:text-xl font-bold italic mb-1 text-[#295c8a]">
                Specialization in Intellectual Property Law
              </h3>
              <p className="text-gray-800 text-base md:text-lg mb-4">
                UMV Legal &amp; Associates is at the forefront of intellectual
                property law, offering a comprehensive suite of services
                designed to protect and enhance the value of your creations and
                innovations. Our intellectual property services include:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow p-5 flex flex-col items-start">
                <h4 className="text-lg md:text-xl font-bold mb-1 text-[#295c8a]">
                  Trademark
                </h4>
                <p className="text-gray-700 text-sm md:text-base">
                  300+ trademarks registered. We help secure your brand identity
                  and ensure legal protection for your business assets.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow p-5 flex flex-col items-start">
                <h4 className="text-lg md:text-xl font-bold mb-1 text-[#295c8a]">
                  Patent
                </h4>
                <p className="text-gray-700 text-sm md:text-base">
                  Comprehensive patent services for inventors and businesses,
                  from drafting to filing and protection against infringement.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow p-5 flex flex-col items-start">
                <h4 className="text-lg md:text-xl font-bold mb-1 text-[#295c8a]">
                  Copyright
                </h4>
                <p className="text-gray-700 text-sm md:text-base">
                  Legal protection for original works: art, literature, music,
                  software, and more. Licensing and infringement support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-4 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
          OUR TEAM
        </h2>
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center">
          {members.map((member, idx) => (
            <Link key={member.id} href={`/team/${member.id}`}>
              <div
                key={idx}
                className="min-h-[350px] relative rounded-2xl shadow-xl border border-blue-100 flex flex-col justify-end w-full max-w-xs overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group"
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 transition-all duration-300"></div>
                <div className="relative z-10 w-full flex flex-col items-center px-4 pb-6 pt-24">
                  <div className="w-full bg-white/90 rounded-xl p-4 flex flex-col items-center shadow-lg">
                    <div className="text-lg font-bold text-blue-900 text-center mb-1">
                      {member.name}
                    </div>
                    <div className="text-base text-blue-700 text-center font-medium mb-1">
                      {member.homeTitle}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
