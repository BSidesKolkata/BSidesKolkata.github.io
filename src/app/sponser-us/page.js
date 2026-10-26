import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const benefits = [
  {
    number: "1",
    title: "Be a Foundational Supporter of the First-Ever BSides in Kolkata",
    intro:
      "BSides Kolkata 2026 is the inaugural edition, giving your brand exclusive early visibility and recognition as a founding supporter of a historic community-driven security conference in Eastern India.",
    points: [],
    footer: "",
  },
  {
    number: "2",
    title: "Massive Brand Visibility Across Multiple Channels",
    intro: "Your brand gains high-impact exposure through:",
    points: [
      "Official conference website",
      "Program guides & brochures",
      "Banners, posters & standees",
      "Stage backdrops & signage",
      "Delegate kits, T-shirts & goodies",
      "Digital media & pre/post-event promotions",
    ],
    footer:
      "With a targeted cybersecurity audience, your visibility spans locally and internationally, enhancing your brand’s global footprint.",
  },
  {
    number: "3",
    title: "Engage Directly With Cybersecurity Professionals",
    intro: "Connect with a diverse, skilled, and influential audience:",
    points: [
      "Security engineers & architects",
      "Penetration testers",
      "SOC analysts",
      "Red, Blue & Purple teamers",
      "Threat hunters & malware analysts",
      "Cloud & DevSecOps professionals",
      "Researchers, students, startups & community leaders",
      "Government agencies & academia",
    ],
    footer:
      "This creates powerful pipelines for hiring, partnerships, and community engagement.",
  },
  {
    number: "4",
    title: "Build Strategic Partnerships & Business Opportunities",
    intro: "BSides Kolkata offers:",
    points: [
      "High-quality lead generation",
      "Direct sales opportunities",
      "Exposure to decision-makers and influencers",
      "Business expansion and collaboration channels",
      "Networking with industry leaders, researchers, and innovators",
    ],
    footer:
      "Your brand gets positioned at the center of India’s growing cybersecurity ecosystem.",
  },
  {
    number: "5",
    title: "Showcase Your Products, Services & Innovations",
    intro: "Promote your offerings through:",
    points: [
      "Exhibition booth spaces",
      "Live workshops",
      "Tool demos",
      "Live bug hunting sessions",
      "Product walkthroughs",
      "Hands-on engagement with practitioners",
    ],
    footer:
      "Note: Exhibition space is limited — priority goes to early sponsors.",
  },
  {
    number: "6",
    title: "Establish Thought Leadership and Industry Influence",
    intro: "Enhance your reputation by:",
    points: [
      "Delivering keynote sessions",
      "Participating in panel discussions",
      "Leading roundtables & community sessions",
      "Demonstrating technical expertise through workshops and labs",
    ],
    footer:
      "This positions your brand as a trusted leader shaping future cybersecurity innovation.",
  },
  {
    number: "7",
    title: "Media, PR & Social Media Amplification",
    intro: "Take advantage of:",
    points: [
      "Press releases & media mentions",
      "Interview opportunities",
      "Features in community channels",
      "High-volume social media reach",
      "Pre-event and post-event promotions",
    ],
    footer: "Your brand stays visible long after the event concludes.",
  },
  {
    number: "8",
    title: "Exclusive Sponsor Benefits & ROI",
    intro: "Get the most out of your investment with:",
    points: [
      "High-ROI sponsorship tiers",
      "Tailored custom packages",
      "Priority branding placement",
      "Early-bird discounts",
      "First-choice exhibition spaces",
    ],
    footer:
      "Every sponsorship rupee strengthens community learning, innovation, and broader cybersecurity awareness.",
  },
  {
    number: "9",
    title: "Support a Technical, Community-Driven Movement",
    intro: "BSides Kolkata is rooted in:",
    points: [
      "Deep technical content",
      "Open discussions",
      "Real-world research",
      "Workshops, tool demos & hands-on labs",
      "Knowledge-sharing and community values",
    ],
    footer:
      "Your support directly empowers students, professionals, researchers, and the entire cybersecurity community in Eastern India.",
  },
];

const Page = () => {
  return (
    <div className="h-auto px-5 sm:px-10 md:px-24 lg:px-44 py-10 md:py-16">
      <div>
        <Link href="/">
          <div className="flex items-center text-[#eb4b19] hover:text-[#ff5b29] cursor-pointer mb-7">
            <FaArrowLeft className="mr-2" />
            <span className="text-sm md:text-lg">Back to Home</span>
          </div>
        </Link>
      </div>

      {/* Hero / Intro */}
      <section className="mb-10">
        <h1 className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl mb-5 font-[family-name:var(--font-protestG-regular)]">
          Sponsor BSides Kolkata 2026
        </h1>
        <p className="text-white text-opacity-90 text-sm md:text-lg mb-4">
          BSides Kolkata 2026 marks the launch of an independent,
          community-driven, deeply technical, and one of the biggest
          cybersecurity conferences in the heart of Eastern India. This is our
          first edition, and your support as a sponsor will directly help build
          a strong, open, and collaborative security community that thrives on
          knowledge-sharing and innovation.
        </p>
        <p className="text-white text-opacity-90 text-sm md:text-lg">
          By sponsoring BSides Kolkata 2026, you are not just backing an event —
          you are investing in the next generation of cybersecurity talent,
          strengthening the local ecosystem, and positioning your organization
          as a leader in security excellence.
        </p>
      </section>

      {/* Section title */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#eb4b19]">
          Why Sponsor BSides Kolkata?
        </h2>
        <p className="text-white text-opacity-90 text-sm md:text-lg mt-2">
          Sponsorship unlocks branding, networking, hiring, and
          thought-leadership opportunities with a highly focused security
          audience.
        </p>
      </section>

      {/* Numbered cards grid */}
      <section className="grid gap-6 md:gap-8 md:grid-cols-2">
        {benefits.map((benefit) => (
          <div
            key={benefit.number}
            className="border border-white/15 rounded-xl p-5 md:p-6 bg-white/5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-[#eb4b19] flex items-center justify-center text-white font-semibold text-sm">
                {benefit.number}
              </div>
              <h3 className="text-white font-semibold text-base md:text-lg">
                {benefit.title}
              </h3>
            </div>

            <div className="text-white text-opacity-90 text-sm md:text-base space-y-2">
              {/* intro */}
              {benefit.intro && <p>{benefit.intro}</p>}

              {/* bullets */}
              {benefit.points && benefit.points.length > 0 && (
                <ul className="space-y-1">
                  {benefit.points.map((line) => (
                    <li
                      key={line}
                      className="pl-4 before:content-['•'] before:mr-2 before:text-[#eb4b19]"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              )}

              {/* footer */}
              {benefit.footer && <p>{benefit.footer}</p>}
            </div>
          </div>
        ))}
      </section>

      {/* Custom packages + contact */}
      <section className="mt-10 md:mt-12 border border-white/15 rounded-xl p-5 md:p-6 bg-white/5 backdrop-blur-sm">
        <h2 className="text-xl md:text-2xl font-semibold text-[#eb4b19] mb-3">
          Custom Sponsorship Packages
        </h2>
        <p className="text-white text-opacity-90 text-sm md:text-lg mb-4">
          We also offer customized sponsorship packages to suit your needs,
          combining branding, technical engagement, and community impact in the
          way that best fits your organization.
        </p>
        <p className="text-white text-opacity-90 text-sm md:text-lg mb-4">
          To explore sponsorship options, discuss benefits, or design a tailored
          package, reach out to the BSides Kolkata organizing team.
        </p>
        <h3 className="text-lg md:text-xl font-semibold text-[#eb4b19] mb-2">
          Sponsorship Contact
        </h3>
        <div className="text-white text-opacity-90 text-sm md:text-lg space-y-1">
          <p>
            Email:{" "}
            <a
              href="mailto:contact@bsideskolkata.in"
              className="text-[#eb4b19] underline underline-offset-2"
            >
              contact@bsideskolkata.in
            </a>
          </p>
          <p>
            CC:{" "}
            <a
              href="mailto:bsideskolkata@gmail.com"
              className="text-[#eb4b19] underline underline-offset-2"
            >
              bsideskolkata@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
