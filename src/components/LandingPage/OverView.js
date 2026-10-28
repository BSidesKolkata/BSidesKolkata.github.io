"use client";

import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { FaPauseCircle } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OverView = () => {
  const videoRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const linkRef = useRef(null);

  // Refs for the countdown timer
  const daysRef = useRef(null);
  const hoursRef = useRef(null);
  const minutesRef = useRef(null);
  const secondsRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // const targetDate = new Date("February 15, 2025 18:00:00");

  useEffect(() => {
    const targetDate = new Date("December 04, 2026 10:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeRemaining({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { scale: 0 },
        {
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // GSAP animations for h1, p, and Link on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h1Ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });

    tl.fromTo(
      h1Ref.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        pRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        linkRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      );

    gsap.fromTo(
      [
        daysRef.current,
        hoursRef.current,
        minutesRef.current,
        secondsRef.current,
      ],
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: daysRef.current,
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div
      id="overview"
      className="h-auto px-7 md:px-14 lg:px-28 py-28 flex flex-col md:flex-row gap-14"
    >
      <div className="relative w-full md:w-1/2">
        <video
          ref={videoRef}
          className="w-full h-full rounded-xl md:rounded-3xl border-4 border-white object-contain"
          src="/overview.mp4"
          loop
          poster="/thumbnail.png"
        >
          Your browser does not support the video tag.
        </video>
        <button
          onClick={handlePlayPause}
          className="absolute inset-0 flex justify-center items-center  w-full h-full"
        >
          {isPlaying ? (
            <FaPauseCircle size={50} className="text-white opacity-75" />
          ) : (
            <FaCirclePlay size={50} className="text-white opacity-75" />
          )}
        </button>
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <h1
          ref={h1Ref}
          className="text-white text-center md:text-start font-semibold text-5xl mb-7 font-[family-name:var(--font-protestG-regular)]"
        >
          Overview
        </h1>
        <p ref={pRef} className="text-[#fafafa] text-center md:text-start text-opacity-90 mb-10 md:mb-10">
          The BSides Kolkata is a premier event that brings together the hacking
          minds in cybersecurity from around the world. This annual gathering
          provides a platform for information security leaders to share
          insights, discuss emerging threats, and explore innovative solutions
          to safeguard our digital world. Attendees will have the opportunity to
          network with industry experts, learn about the latest trends and best
          practices, and gain valuable knowledge to protect their organizations
          from cyber threats.
        </p>
        <div className="flex gap-3 items-center justify-center md:gap-8 mb-14">
          <div className="flex flex-col items-center gap-1 md:gap-4">
            <h1
              ref={daysRef}
              className="text-white text-3xl md:text-5xl lg:text-7xl font-semibold font-[family-name:var(--font-protestG-regular)]"
            >
              {timeRemaining.days}
            </h1>
            <p className="text-[#F5BE3D] text-base md:text-xl lg:text-3xl font-normal text-opacity-90">
              Days
            </p>
          </div>
          <div className="text-5xl md:text-7xl text-white">&#58;</div>
          <div className="flex flex-col items-center gap-1 md:gap-4">
            <h1
              ref={hoursRef}
              className="text-white text-3xl md:text-5xl lg:text-7xl font-semibold font-[family-name:var(--font-protestG-regular)]"
            >
              {timeRemaining.hours}
            </h1>
            <p className="text-[#F5BE3D] text-base md:text-xl lg:text-3xl font-normal text-opacity-90">
              Hours
            </p>
          </div>
          <div className="text-5xl md:text-7xl text-start text-white">
            &#58;
          </div>
          <div className="flex flex-col items-center gap-1 md:gap-4">
            <h1
              ref={minutesRef}
              className="text-white text-3xl md:text-5xl lg:text-7xl font-semibold font-[family-name:var(--font-protestG-regular)]"
            >
              {timeRemaining.minutes}
            </h1>
            <p className="text-[#F5BE3D] text-base md:text-xl lg:text-3xl font-normal text-opacity-90">
              Minutes
            </p>
          </div>
          <div className="text-5xl md:text-7xl text-white">&#58;</div>
          <div className="flex flex-col items-center gap-1 md:gap-4">
            <h1
              ref={secondsRef}
              className="text-white text-3xl md:text-5xl lg:text-7xl font-semibold font-[family-name:var(--font-protestG-regular)]"
            >
              {timeRemaining.seconds}
            </h1>
            <p className="text-[#F5BE3D] text-base md:text-xl lg:text-3xl font-normal text-opacity-90">
              Seconds
            </p>
          </div>
        </div>
        <Link
          href="/"
          ref={linkRef}
          className="bg-primarybgimage text-center self-auto md:self-start h-fit shadow-primaryshadow text-white text-lg px-8 py-3 rounded-full transition-all duration-300 hover:scale-95"
        >
          Registration Will Start Soon
        </Link>
      </div>
    </div>
  );
};

export default OverView;
