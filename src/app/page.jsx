import Image from "next/image";
import Link from "next/link";
import Accordion from "../../components/Accordion";
import { members } from "../../components/TeamMemberCard";

export default function HomePage() {
  // Sample client reviews (replace with dynamic data as needed)
  const clientReviews = [
    {
      name: "Amit Sharma",
      rating: 5,
      text: "Excellent legal advice and very professional team. Highly recommended!",
      date: "2 weeks ago",
    },
    {
      name: "Priya Desai",
      rating: 4,
      text: "Quick response and clear guidance. Helped me resolve my issue smoothly.",
      date: "1 month ago",
    },
    {
      name: "Rahul Mehta",
      rating: 5,
      text: "Very knowledgeable and supportive throughout my case.",
      date: "3 months ago",
    },
  ];
  // Results/Stats cards data
  const statsCards = [
    { value: "300 +", label: "Loyal Clients" },
    { value: "1500 +", label: "Meetings & Consultations" },
    { value: "500 +", label: "Documentations" },
  ];

  // Areas of Practice cards data
  const practiceCards = [
    {
      title: "Intellectual Property Law",
      desc: "Safeguarding innovation and creativity, we assist in the registration and enforcement of copyrights, trademarks, patents, designs, and geographic indications, backed by a profound understanding of IP laws and litigation.",
    },
    {
      title: "Corporate and Commercial Law Solutions",
      desc: "From seamless company incorporation to ensuring compliance under the Companies Act, 2013, we provide expert counsel in shareholder agreements, mergers, acquisitions, and corporate governance to protect your business interests.",
    },
    {
      title: "Taxation and GST Advisory Expertise",
      desc: "Our advisory services encompass GST compliance, audits, appeals, and tax structuring, ensuring adherence to the latest provisions of the GST Act and tax laws.",
    },
    {
      title: "Civil Litigation Excellence",
      desc: "Our legal acumen in civil litigation spans across contract disputes, property matters, tort claims, and recovery suits. We ensure meticulous application of the Code of Civil Procedure (CPC) and related statutory provisions to achieve favorable outcomes.",
    },
    {
      title: "Family and Matrimonial Law Care",
      desc: "Navigating sensitive family disputes with discretion, we handle matters of divorce, child custody, maintenance, and domestic violence, ensuring confidentiality and empathetic legal guidance.",
    },
    {
      title: "Criminal Defense",
      desc: "Our defense strategies cover an array of cases under the Indian Penal Code (IPC), including white-collar crimes, cyber offenses, and bail applications. We advocate zealously for your rights in criminal proceedings.",
    },
    {
      title: "Alternative Dispute Resolution (ADR)",
      desc: "We excel in arbitration, mediation, and conciliation to resolve disputes effectively, minimizing time for our clients.",
    },
    {
      title: "Property and Real Estate Law",
      desc: "From RERA compliance to lease agreements and property documentation, we provide robust advisory services in real estate matters, ensuring clarity and legal sanctity.",
    },
  ];
  // Why Choose Us cards data
  const whyChooseUsCards = [
    {
      icon: "📑",
      title: "Best Attorneys",
      desc: "Since inception, we offer only right and accurate solutions to our valuable clients.",
    },
    {
      icon: "🔗",
      title: "Fight For Justice",
      desc: "We deal with complex cases and defending the court cases without getting worried about anything.",
    },
    {
      icon: "🧑‍⚖️",
      title: "7+ Years Of Experience",
      desc: 'Having been in the law practice areas for more than 7+ years, we have developed skills "how to deal with court cases."',
    },
    {
      icon: "👨‍💼",
      title: "Excellent Lawyers",
      desc: "Each lawyer in UMV Legal & Associates team is having excellence in their practice areas and defending clients in courts.",
    },
    {
      icon: "🏛️",
      title: "Best Case Strategy",
      desc: "Developed a proven strategy to defend the cases and help clients to get a verdict in their favor.",
    },
    {
      icon: "🧠",
      title: "Innovative Legal Solutions",
      desc: "We leverage advanced legal research tools, technology, and creative problem-solving to address novel and complex challenges effectively.",
    },
    {
      icon: "🧑‍💼",
      title: "Accessible and Responsive Representation",
      desc: "Our legal team remains approachable and responsive, providing clear updates and actionable advice throughout your legal journey.",
    },
    {
      icon: "⚖️",
      title: "Future-Focused Legal Counsel",
      desc: "At UMV Legal & Associates, we not only address present challenges but also help clients plan proactively for long-term legal security and compliance.",
    },
  ];

  const faqItems = [
    {
      title: "What types of legal services do you offer?",
      description:
        "We provide a wide range of legal services, including but not limited to, civil litigation, corporate law, criminal defense, divorce and family law, intellectual property rights, contracts and agreements, real estate law, and estate planning. Our team is equipped to handle complex legal issues and provide tailored advice for your specific needs.",
    },
    {
      title: "How do I know if I need legal representation?",
      description:
        "If you are facing any legal dispute, need assistance with contracts, or require guidance on compliance and regulations, it’s advisable to seek legal representation. Some common scenarios include business disputes, divorce, criminal charges, property issues, and intellectual property matters. A legal professional can provide you with the necessary insights to protect your rights and interests.",
    },
    {
      title: "How long does it take to resolve a legal issue?",
      description:
        "The timeline to resolve a legal issue depends on the nature of the case and the specific circumstances involved. For some matters, like contract review or simple agreements, resolution can be achieved relatively quickly. However, more complex cases such as litigation, divorce proceedings, or criminal defense may take longer. We will work with you to provide an estimated timeline based on your situation and keep you updated throughout the process.",
    },
  ];

  return (
    <main className="">
      <section className="w-full text-white py-20 px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center drop-shadow-lg">
          UMV Legal & Associates
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-center max-w-2xl font-light">
          Advocates & Solicitors providing quick, valuable, and ethical legal
          solutions for all your needs.
        </p>
        <div className="flex gap-6 flex-wrap justify-center">
          <Link
            href="/about"
            className="bg-white text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition text-lg"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="bg-blue-700 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-800 transition text-lg"
          >
            Contact
          </Link>
        </div>
      </section>
      <section className="w-full py-16 px-2 md:px-8 flex flex-col items-center ">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 md:gap-8 justify-center items-stretch">
          <div
            className="flex-1 rounded-2xl p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-xl"
          >
            <div
              className="absolute inset-0 bg-blue-900/80 backdrop-blur"
              aria-hidden="true"
            ></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Emergency Cases ?</h2>
              <p className="mb-2 text-lg">
                Contact for Quick Legal Assistance :
              </p>
              <p className="mb-2 text-lg font-semibold">Call Us Now</p>
              <p className="text-2xl font-extrabold">+91 9967276861</p>
            </div>
          </div>
          <div className="flex-1 rounded-2xl p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div
              className="absolute inset-0 bg-blue-900/80 backdrop-blur"
              aria-hidden="true"
            ></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Need Legal Help?</h2>
              <p className="mb-4 text-lg">
                Fix an Appointment for Advice / Guidance / Assistance on any
                Legal Matter :
              </p>
              <Link
                href="/contact-us"
                className="bg-white text-blue-900 font-bold py-3 px-6 rounded-full inline-flex items-center hover:bg-blue-100 transition text-lg"
              >
                FIX AN APPOINTMENT <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
          <div
            className="flex-1 rounded-2xl p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-xl"
          >
            <div
              className="absolute inset-0 bg-blue-900/80 backdrop-blur"
              aria-hidden="true"
            ></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Working Hours</h2>
              <div className="flex flex-col gap-2 text-lg">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>10.00 am- 09.00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10.00 am- 06.00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-2 md:px-8 flex flex-col items-center">
        <div
          className="w-full bg-white/60 backdrop-blur max-w-7xl flex flex-col-reverse md:flex-row gap-12 md:gap-20 items-center rounded-3xl p-8 md:p-16 shadow-2xl"
        >
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold mb-4 text-blue-900">
              About Us
            </h2>
            <div className="text-2xl font-bold mb-1">
              UMV Legal & Associates
            </div>
            <div className="text-2xl font-semibold text-blue-700 mb-4">
              Advocates & Solicitors.
            </div>
            <p className="mb-4 text-lg">
              <span className="font-bold">Founded and established in 2021</span>{" "}
              by a young and dynamic Advocate & Solicitor{" "}
              <span className="font-bold">Mr. Aditya Singh</span> with a belief
              to provide quick and valuable solutions in various legal segments
              with strong emphasis on quality and ethics.
            </p>
            <p className="mb-4 text-lg">
              Our team provides services in the legal field at domestic as well
              as international levels. Our prime focus is to simplify the legal
              complications and hurdles of our clients by adopting the best
              possible ways in accordance with the prevailing laws. Our legal
              brains provide the result of any legal complications of our
              clients at the blink of an eye.
            </p>
            <p className="mb-8 text-lg">
              Our young and dynamic legal eagles not only remain updated with
              the recent legal amendments but also stay a step ahead of the
              others by adopting and using the latest technology.
            </p>
            <Link
              href="/about"
              className="inline-block border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition font-bold rounded-full px-8 py-3 text-lg"
            >
              Read More &rarr;
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full h-auto flex items-center justify-center">
              <Image
                src="/images/homeAboutSection.jpg"
                alt="Gavel and law books"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl w-full h-auto object-cover opacity-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-4 flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-light text-white text-center mb-2 tracking-wide">
          WHY CHOOSE US?
        </h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
          WE HAVE GREAT RESULTS
        </h2>
        <p className="text-lg md:text-xl text-blue-100 text-center mb-12 max-w-3xl font-light">
          There is a big difference between a satisfied client and a loyal
          client. We never settle for 'satisfied.'
        </p>
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 justify-center items-center">
          {statsCards.map((card) => (
            <div
              key={card.label}
              className="flex-1 min-w-[260px] bg-blue-900/80 rounded-2xl p-10 flex flex-col items-center shadow-xl"
            >
              <div className="text-4xl font-bold text-white mb-2">
                {card.value}
              </div>
              <div className="text-xl text-blue-100 font-medium text-center">
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full py-20 px-4 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
          OUR AREAS OF PRACTICEx
        </h2>
        <p className="text-lg md:text-xl text-center mb-10 max-w-4xl text-white">
          At UMV Legal & Associates, we specialize in a diverse spectrum of
          legal services, meticulously designed to meet the evolving needs of
          our clients. Here’s an overview of our core practice areas:
        </p>
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceCards.map((card) => (
            <div
              key={card.title}
              className="bg-white/60 backdrop-blur rounded-xl shadow-md border border-gray-200 p-8 flex flex-col items-center text-center h-full justify-between"
            >
              <div>
                <div className="font-bold text-xl mb-2">{card.title}</div>
                <div className="text-gray-700 mb-6 text-base">{card.desc}</div>
              </div>
              <button className="border-2 border-blue-700 text-blue-700 font-semibold rounded-md px-6 py-2 hover:bg-blue-700 hover:text-white transition mt-4">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full py-20 px-4 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
          Why Choose Us
        </h2>
        <p className="text-lg md:text-xl text-center mb-10 max-w-3xl text-white">
          UMV Legal & Associates & his team have been offering legal solutions
          with a higher success rate for more than 7+ years.
        </p>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsCards.map((card, idx) => (
            <div
              key={card.title}
              className="bg-white/60 backdrop-blur rounded-xl shadow-md border border-gray-200 p-8 flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <span className="mb-4 text-5xl">{card.icon}</span>
              <div className="font-extrabold text-xl mb-2 text-blue-900">
                {card.title}
              </div>
              <div className="text-gray-700 text-base">{card.desc}</div>
            </div>
          ))}
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
      <section className="w-full py-20 px-4 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
          FAQ's
        </h2>
        <div className="w-full max-w-3xl">
          <Accordion items={faqItems} defaultOpen={0} />
        </div>
      </section>
      <section className="w-full py-20 px-4 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-white">
          Client Reviews
        </h2>
        <p className="text-lg md:text-xl text-center mb-10 max-w-2xl text-white">
          See what our clients are saying about us on Google.
        </p>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {clientReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white/60 backdrop-blur rounded-lg shadow border border-gray-200 px-6 py-5 flex flex-col w-full max-w-sm min-h-[240px]"
            >
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl mr-3">
                  {review.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900 text-base leading-tight">
                    {review.name}
                  </span>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < review.rating
                        ? "text-yellow-400 text-lg"
                        : "text-gray-300 text-lg"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="text-gray-800 text-base mb-2 line-clamp-5">
                {review.text}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
