import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const CodeOfConduct = () => {
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
      <div className="flex flex-col items-center">
        <h1 className="text-white md:text-start font-semibold text-start text-4xl md:text-5xl mb-7 font-[family-name:var(--font-protestG-regular)]">
          CAPTURE THE FLAG &#40;CTF&#41;
        </h1>
        <p className="text-white text-opacity-90 text-sm md:text-lg mb-7 ">
          Get ready for an adrenaline-fueled day of cybersecurity challenges at
          the BSides Kolkata 2026 Capture the Flag (CTF) event! Whether you are
          a seasoned cybersecurity professional or just dipping your toes into
          the world of hacking, this one-day competition promises to test your
          skills, expand your knowledge, and connect you with like-minded
          enthusiasts.
        </p>
        {/* <button className="bg-primarybgimage w-fit text-white text-lg px-9 mb-10 py-2 rounded-xl transition-shadow duration-100 ease-in-out flex items-center justify-center">
          REGISTER FOR CTF
        </button> */}
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19] ">
            Event Overview:
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-2 ">
            The BSides Kolkata 2026 CTF event is a hands-on, interactive
            cybersecurity competition where participants will solve a series of
            challenges across various categories, including but not limited to:
          </p>
          <ol className="text-white text-opacity-90 text-sm md:text-lg mb-2 px-5 md:px-10">
            <li className="list-disc">Cryptography</li>
            <li className="list-disc">Reverse Engineering</li>
            <li className="list-disc">Web Exploitation</li>
            <li className="list-disc">Binary Exploitation</li>
            <li className="list-disc">Forensics</li>
            <li className="list-disc">Steganography</li>
            <li className="list-disc">Network Analysis</li>
          </ol>
        </div>
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19] ">
            Why Participate:
          </p>
          <ol className="text-white text-opacity-90 text-sm md:text-lg mb-2 px-5 md:px-10">
            <li className="list-disc ">
              Test Your Skills: Put your cybersecurity knowledge to the test and
              challenge yourself with real-world scenarios.
            </li>
            <li className="list-disc ">
              Learn and Grow: Gain practical experience and learn new techniques
              from tackling diverse challenges.
            </li>
            <li className="list-disc ">
              Networking: Connect with fellow participants, share insights, and
              build relationships within the cybersecurity community.
            </li>
            <li className="list-disc ">
              Win Prizes: Compete for exciting prizes and bragging rights as you
              showcase your expertise.
            </li>
          </ol>
        </div>
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19] ">
            How to Participate:
          </p>
          <ol className="text-white text-opacity-90 text-sm md:text-lg mb-2 px-5 md:px-10">
            <li className="list-disc ">
              Registration: Register for the BSides Kolkata 2026 conference and
              indicate your interest in the CTF event using the registration
              button given below.
            </li>
            <li className="list-disc ">
              Team Formation: Form teams of 2 members or participate
              individually.
            </li>
            <li className="list-disc ">
              Competition Day: The details will be communicated to participants
              via email.
            </li>
            <li className="list-disc ">
              Scoring: Earn points by successfully solving challenges. The team
              or individual with the highest score at the end of the competition
              wins!
            </li>
          </ol>
        </div>
        <div className="self-start mb-7">
          <p className="text-xl font-semibold text-[#eb4b19] ">
            Rules for the Event:
          </p>
          <p className="text-xl font-semibold mb-2 text-[#eb4b19] ">
            General Rules:
          </p>
          <ol className="text-white text-opacity-90 text-sm md:text-lg mb-2 px-5 md:px-10">
            <li className="list-disc ">
              No Attacking the CTF Platform: Participants are strictly
              prohibited from attempting any attacks on the CTF platform itself.
              This includes, but is not limited to, exploiting vulnerabilities,
              attempting to gain unauthorized access, or disrupting the normal
              functioning of the platform.
            </li>
            <li className="list-disc ">
              Respect Towards Participants and Organizers: All participants are
              expected to treat each other and the organizers with respect and
              professionalism. Any form of harassment, discrimination, or
              disrespectful behavior will not be tolerated.
            </li>
            <li className="list-disc ">
              Flag Sharing Prohibited: Sharing flags or any solution details
              with other participants or outsiders is strictly prohibited.
              Participants should not collaborate on solving challenges or share
              answers in any form.
            </li>
            <li className="list-disc ">
              Confidentiality of Challenge Information: Participants must
              maintain the confidentiality of all information related to the
              challenges, including but not limited to challenge names,
              descriptions, attachments, and deployment URLs. This information
              should not be shared with anyone outside the event until the
              results are officially released.
            </li>
            <li className="list-disc ">
              Communication Through Designated Channels: All communications
              regarding the event, including questions, clarifications, and
              announcements, should be conducted through the designated Discord
              channel provided by the organizers. This approach streamlines
              communication and ensures that participants receive relevant
              information promptly. Please ensure to regularly check both the
              announcements channel within Discord and the Notices provided
              within the platform for any updates regarding the competition.
            </li>
            <li className="list-disc ">
              Fair Play: Participants are expected to engage in fair play
              throughout the competition. This includes refraining from any form
              of cheating, such as using automated tools or unauthorized
              assistance, and respecting the spirit of the competition.
              Participants should not attempt to brute force or fuzz challenge
              deployments unless explicitly specified by the organizers.
            </li>
            <li className="list-disc ">
              Code of Conduct: Participants must adhere to a code of conduct
              that promotes a positive and inclusive environment for all
              involved. Any behavior that violates this code, including but not
              limited to harassment, intimidation, or discrimination, will
              result in immediate disqualification and potential further
              consequences.
            </li>
            <li className="list-disc ">
              Legal Compliance: Participants must comply with all relevant laws
              and regulations, including those related to cybersecurity and data
              protection, throughout the duration of the event.
            </li>
            <li className="list-disc ">
              Right to Modify Rules: The organizing body reserves the right to
              modify or add any rules at any point during the event with ex post
              facto. Participants should adhere to any updates or changes
              communicated by the organizers.
            </li>
            <li className="list-disc ">
              Final Decision by Organizers: The decisions made by the organizing
              body will be final. Any disputes or issues arising during the
              event will be resolved according to the judgment of the
              organizers.
            </li>
          </ol>
        </div>
        <p className="text-white text-opacity-90 text-sm md:text-lg mb-7 ">
          Do not miss out on this thrilling opportunity to sharpen your
          cybersecurity skills, connect with peers, and win amazing prizes!
          Register for the BSides Kolkata 2026 CTF event today and get ready for
          an unforgettable experience.
        </p>
        <p className="text-white text-opacity-90 text-sm md:text-lg mb-7 ">
          By participating in the event, all participants agree to adhere to the
          rules outlined above. Failure to follow these rules may result in
          immediate disqualification from the competition, as determined by the
          organizing body.
        </p>
        {/* <button className="bg-primarybgimage w-fit text-white text-lg px-9 mb-10 py-2 rounded-xl transition-shadow duration-100 ease-in-out flex items-center justify-center">
          REGISTER FOR CTF
        </button> */}
      </div>
    </div>
  );
};

export default CodeOfConduct;
