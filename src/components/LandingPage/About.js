"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const h1AboutRef = useRef(null);
  const pAboutRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h1AboutRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });

    tl.fromTo(
      h1AboutRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
      pAboutRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );
  });

  return (
    <div
      id="about"
      className="h-auto px-7 md:px-14 lg:px-28 py-14 md:py-28 flex flex-col items-center text-center"
    >
      <h1
        ref={h1AboutRef}
        className="text-4xl text-white font-semibold mb-3 font-[family-name:var(--font-protestG-light)]"
      >
        <span className="text-[#eb4b19] font-[family-name:var(--font-protestG-regular)]">
          About Us
        </span>
      </h1>
      <p
        ref={pAboutRef}
        className="text-white text-center md:px-28"
      >
        BSides Kolkata is a dynamic, community-driven cybersecurity event
        dedicated to fostering the exchange of ideas, knowledge, and research
        within the infosec community. As part of the global Security BSides
        movement, which has made its mark across numerous countries, BSides
        Kolkata provides a platform where individuals passionate about
        cybersecurity can converge to discuss the latest advancements,
        challenges, and trends shaping the infosec industry. {" "}
        <br />
        Our mission is to create an open, inclusive, and collaborative
        environment where enthusiasts, professionals, and organizations can
        share insights, explore emerging threats, and develop strategies to
        enhance digital security. BSides Kolkata stands apart by encouraging
        deep engagement through hands-on workshops, technical talks, live
        demonstrations, Capture the Flag &#40;CTF&#41; competitions, and discussions
        with leading experts. {" "}
        <br />
        As security challenges continue to evolve in an increasingly
        interconnected world, BSides Kolkata offers a unique space to discuss
        cutting-edge cybersecurity research and solutions. Whether you&apos;re a
        seasoned expert or a newcomer to the field, this event provides a
        valuable opportunity to connect with like-minded individuals and
        collaborate on shaping the future of cybersecurity.{" "}
        <br />
        Join us at BSides Kolkata 2026 to be part of a growing community
        dedicated to bolstering the digital world through innovation,
        conversation, Networking and cooperation. Together, we are building a
        more secure future.
      </p>
    </div>
  );
};

export default About;
