import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const CFP = () => {
  return (
    <div className="h-auto py-4 md:py-12 px-5 sm:px-10 md:px-24 lg:px-44">
      <div>
        <Link href="/">
          <div className="flex items-center text-[#eb4b19] hover:text-[#ff5b29] cursor-pointer mb-7">
            <FaArrowLeft className="mr-2" />
            <span className="text-sm md:text-lg">Back to Home</span>
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center text-start">
        <h1 className="text-white font-semibold text-3xl md:text-4xl mb-7 font-[family-name:var(--font-protestG-regular)]">
          Call for Speakers – BSides Kolkata 2026
        </h1>

        <div className="w-full flex flex-col items-start">
          <p className="text-white text-opacity-90 text-sm md:text-lg">
            BSides Security Conference 2026. Join one of Eastern India’s biggest
            cybersecurity events and share your research, tools, and real-world
            experiences with practitioners, engineers, and hackers from across
            the country.
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-7">
            The Call for Speakers is open to both new and experienced speakers
            who have practical, technical, and impactful content to share.
          </p>
        </div>

        {/* Important dates */}
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            Important Dates
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-2 px-5 md:px-10 list-disc space-y-1">
            <li>
              <span className="font-semibold">CFP opens:</span> 28 October 2026
            </li>
            <li>
              <span className="font-semibold">CFP closes:</span> 20 November 2026
            </li>
            <li>
              <span className="font-semibold">Speaker announcement:</span> 30
              November 2026
            </li>
          </ul>
        </div>

        {/* Topics of interest – intro */}
        <div className="self-start">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            Topics of interest
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-3">
            We welcome original, technically strong, and practical talks on (but
            not limited to) the following categories.
          </p>
        </div>

        {/* Final clean list (10 categories) */}
        {/* <div className="self-start mb-7">
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-2 px-5 md:px-10 list-disc space-y-3">
            <li>IOT</li>
            <li>Web</li>
            <li>SDN</li>
            <li>Radio</li>
            <li>Cloud</li>
            <li>Mobile</li>
            <li>Telecom</li>
            <li>Web3</li>
            <li>Satellites</li>
            <li>Networks</li>
            <li>Forensics</li>
            <li>Hardware</li>
            <li>Embedded</li>
            <li>ICS/SCADA</li>
            <li>Smart Cities</li>
            <li>Blockchain</li>
            <li>Web Application Hacking</li>
            <li>AI Hacking</li>
            <li>Malware Analysis</li>
            <li>Mobile Application Hacking</li>
            <li>Bug Bounty</li>
            <li>Red Teaming</li>
            <li>Cloud Security</li>
            <li>WLAN and Bluetooth Security</li>
            <li>New Vulnerabilities and Exploits</li>
            <li>Reverse Engineering</li>
            <li>Hardware / IoT / ICS / SCADA Security</li>
            <li>Firewall Evasion</li>
            <li>Blockchain Hacking</li>
            <li>Browser Security</li>
            <li>Social Engineering</li>
            <li>Physical Security</li>
            <li>Open Source Tool Release and Demo</li>
            <li>iOS Hacking</li>
            <li>Android Hacking</li>
            <li>Space Hacking</li>
            <li>ATM Hacking</li>
            <li>RF Hacking</li>
            <li>Car Hacking</li>
            <li>Web3.0</li>
            <li>Metaverse</li>
            <li>AI</li>
            <li>Cryptography</li>
            <li>Cloud</li>
            <li>Mobile</li>
            <li>Web</li>
            <li>Networks</li>
          </ul>
        </div> */}

        <div className="self-start mb-10 w-full mt-3">
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full text-white text-sm md:text-lg border border-white/20">
              <thead className="bg-white/10">
                <tr>
                  <th className="border border-white/20 px-3 py-2 text-left">
                    No
                  </th>
                  <th className="border border-white/20 px-3 py-2 text-left">
                    Generalized Category
                  </th>
                  <th className="border border-white/20 px-3 py-2 text-left">
                    Mapped Topics
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    1
                  </td>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    Network &amp; Infrastructure Security
                  </td>
                  <td className="border border-white/20 px-3 py-2">
                    Networks, SDN, WLAN &amp; Bluetooth Security, Firewall
                    Evasion, Telecom, Radio/RF Security/Hacking,
                    Satellites/Space Hacking, Smart Cities, ATM Security/Hacking
                  </td>
                </tr>
                <tr>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    2
                  </td>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    Web, API &amp; Browser Security
                  </td>
                  <td className="border border-white/20 px-3 py-2">
                    Web, Web Application Hacking, Browser Security, Bug Bounty,
                    New Vulnerabilities &amp; Exploits
                  </td>
                </tr>
                <tr>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    3
                  </td>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    Cloud, Virtualization &amp; Distributed Systems Security
                  </td>
                  <td className="border border-white/20 px-3 py-2">
                    Cloud, Cloud Security, Web3/Web3.0, Blockchain, Blockchain
                    Hacking, Metaverse
                  </td>
                </tr>
                <tr>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    4
                  </td>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    Mobile &amp; Wireless Device Security
                  </td>
                  <td className="border border-white/20 px-3 py-2">
                    Mobile, Mobile Application Security/Hacking, Android
                    Security/Hacking, iOS Security/Hacking
                  </td>
                </tr>
                <tr>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    5
                  </td>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    IoT, Embedded, Hardware &amp; Industrial Security
                  </td>
                  <td className="border border-white/20 px-3 py-2">
                    IoT, Hardware, Embedded, ICS/SCADA, Hardware/IoT/ICS/SCADA
                    Security, Car Hacking
                  </td>
                </tr>
                <tr>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    6
                  </td>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    Malware, Reverse Engineering &amp; Exploit Development
                  </td>
                  <td className="border border-white/20 px-3 py-2">
                    Malware Analysis, Reverse Engineering, New Exploits
                  </td>
                </tr>
                <tr>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    7
                  </td>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    AI, ML &amp; Emerging Tech Security
                  </td>
                  <td className="border border-white/20 px-3 py-2">
                    AI, AI Hacking/Security
                  </td>
                </tr>
                <tr>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    8
                  </td>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    Digital Forensics &amp; Incident Response
                  </td>
                  <td className="border border-white/20 px-3 py-2">
                    Forensics
                  </td>
                </tr>
                <tr>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    9
                  </td>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    Human-centric Security
                  </td>
                  <td className="border border-white/20 px-3 py-2">
                    Social Engineering, Physical Security
                  </td>
                </tr>
                <tr>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    10
                  </td>
                  <td className="border border-white/20 px-3 py-2 align-top">
                    Tools, Research &amp; Offensive Security Operations
                  </td>
                  <td className="border border-white/20 px-3 py-2">
                    Red Teaming, Open Source Tool Release/Demo, Cryptography
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-3">
            If your talk does not fit neatly into these topics but is clearly
            security-focused and practical, you are still encouraged to submit.​
          </p>
        </div>

        {/* Who should submit */}
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            Who should submit
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-2 px-5 md:px-10 list-disc space-y-2">
            <li>
              Security researchers, red/blue/purple teamers, malware analysts,
              reverse engineers.
            </li>
            <li>
              Engineers, developers, architects, and SREs with strong security
              learnings or failures to share.
            </li>
            <li>
              Bug bounty hunters, penetration testers, and consultants with
              real-world stories and techniques.
            </li>
            <li>
              Students and first-time speakers with solid technical work and a
              clear, well-structured proposal.
            </li>
          </ul>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-3">
            You do not need prior speaking experience; clear ideas, real impact,
            and honest technical depth matter more.
          </p>
        </div>

        {/* Submission guidelines */}
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            Submission guidelines
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-2">
            A strong proposal should be:
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-3 px-5 md:px-10 list-disc space-y-2">
            <li>
              <span className="font-semibold">Original:</span> Prefer work not
              presented or published elsewhere before the conference.
            </li>
            <li>
              <span className="font-semibold">Practical:</span> Include
              real-world examples, case studies, data, or demos wherever
              possible.
            </li>
            <li>
              <span className="font-semibold">Detailed:</span> Provide enough
              technical detail in the abstract and outline so reviewers
              understand the depth.
            </li>
            <li>
              <span className="font-semibold">Relevant:</span> Match the content
              to a security audience (no marketing, sales, or generic awareness
              talks).
            </li>
          </ul>

          <p className="text-white text-opacity-90 text-sm md:text-lg mb-2">
            Each submission must include:
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-3 px-5 md:px-10 list-disc space-y-2">
            <li>Talk title.</li>
            <li>
              Abstract (200–400 words) explaining the problem, your approach,
              and key takeaways.
            </li>
            <li>Outline with main sections and approximate time split.</li>
            <li>
              Speaker details: name, email, organization (optional), short bio,
              and previous speaking experience (if any).
            </li>
            <li>
              Disclosure status: whether this is exclusive research, ongoing
              work, or an updated version of a previous talk.
            </li>
          </ul>
          <p className="text-white text-opacity-90 text-sm md:text-lg">
            Product pitches, vendor sales talks, and purely promotional content
            will be rejected.
          </p>
        </div>

        {/* Review process */}
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            Review process
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg">
            All submissions will be reviewed by a technical review panel and the
            core conference team.
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-3">
            Talks are evaluated on originality, technical depth, clarity, and
            relevance to the community.
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-2">
            Preference may be given to:
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-3 px-5 md:px-10 list-disc space-y-2">
            <li>Exclusive or first-time public research.</li>
            <li>Talks with strong technical detail and concrete demos.</li>
            <li>Content that shares practical lessons teams can apply.</li>
          </ul>
          <p className="text-white text-opacity-90 text-sm md:text-lg">
            Due to limited slots, some good talks may still be declined; this is
            often due to overlap with already accepted topics or schedule
            limits, not just quality.
          </p>
        </div>

        {/* Speaker benefits */}
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            Speaker benefits
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-2">
            For accepted speakers (primary speaker per talk):
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-3 px-5 md:px-10 list-disc space-y-2">
            <li>Complimentary full conference pass.</li>
            
            <li>
              Access to speaker-only networking events and the post-conference networking.
            </li>
            <li>
              Recognition on the conference website and social media, plus an
              official speaker certificate.
            </li>
          </ul>
          <p className="text-white text-opacity-90 text-sm md:text-lg">
            In case of multiple speakers for a talk, only one speaker will be
            eligible for travel reimbursement; accommodation may be provided on
            a shared basis.
          </p>
        </div>

        {/* Terms and conditions */}
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            Terms and conditions
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-3 px-5 md:px-10 list-disc space-y-2">
            <li>
              All proposals must be submitted through the official CFP form;
              submissions via email or social media will not be considered.
            </li>
            <li>
              By submitting, you confirm that your content respects responsible
              disclosure and applicable laws.
            </li>
            <li>
              By agreeing to speak, you grant the organizers permission to
              record your session and share the slides and video with the
              community (with proper credit).
            </li>
            <li>
              Accepted speakers are expected to present in person unless the
              organizers explicitly agree to a remote format.
            </li>
            <li>
              The organizing team reserves the right to change the schedule,
              request edits, or withdraw an accepted talk in exceptional cases.
            </li>
          </ul>
        </div>

        {/* How to submit and contact */}
        <div className="self-start mb-10">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            How to submit and contact
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-3 px-5 md:px-10 list-disc space-y-2">
            <li>
              Submit your proposal using the “Call for Speakers / CFP” form
              linked on this page.
            </li>
            <li>
              For CFP-related questions, write to the CFP email listed on the
              event site.
            </li>
            <li>
              For sponsorship or registration queries, use the contact email
              provided on the main conference contact page.
            </li>
          </ul>

          <p className="text-white text-opacity-90 text-sm md:text-lg mb-3">
            Speakers are also encouraged to follow the event’s social media
            handles for updates, reminders, and tips about the CFP window and
            final program announcements.
          </p>
        </div>

        {/* CFP button placeholder */}
         <Link href="https://forms.gle/2txFTBBNfvkkhFoY7">
          <button className="bg-primarybgimage w-fit text-white text-lg px-9 mb-10 py-2 rounded-xl transition-shadow duration-100 ease-in-out flex items-center justify-center">
            SUBMIT YOUR CFP
          </button>
        </Link> 
      </div>
    </div>
  );
};

export default CFP;
