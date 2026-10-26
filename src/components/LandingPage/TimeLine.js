"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  { label: "CFP Opens" },
  { label: "CFP Closes" },
  { label: "Speaker Announcement" },
  { label: "Volunteers Open", date: "08 Dec 2025" },
  { label: "Volunteers Close", date: "23 Dec 2025" },
  { label: "Registration Starts" },
  { label: "Event Day 1" },
  { label: "Event Day 2" },
];

function Timeline() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".tl-item");

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
              // reset when completely out so it can replay nicely
              onLeave: () => gsap.set(item, { opacity: 0, y: 40, scale: 0.8 }),
              onLeaveBack: () =>
                gsap.set(item, { opacity: 0, y: 40, scale: 0.8 }),
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="schedule"
      ref={containerRef}
      className="h-auto px-7 md:px-14 lg:px-28 py-14 md:py-28"
    >
      {/* mobile: vertical center line, items alternate left/right */}
      <div className="flex flex-col gap-8 md:hidden relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/20" />
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={`m-${event.label}`}
              className="relative flex items-center tl-item"
            >
              <div className={`flex-1 ${isLeft ? "flex justify-end" : ""}`}>
                {isLeft && (
                  <div className="text-right">
                    <p className="text-sm text-[#eb4b19] font-semibold">
                      {event.label}
                    </p>
                    <p className="text-xs text-white text-opacity-90">
                      {event.date ? event.date : "To be announced"}
                    </p>
                  </div>
                )}
              </div>

              <div className="relative flex justify-center items-center w-8">
                <div className="w-3 h-3 rounded-full bg-[#eb4b19] border border-white shadow z-10" />
              </div>

              <div className={`flex-1 ${!isLeft ? "flex justify-start" : ""}`}>
                {!isLeft && (
                  <div className="text-left">
                    <p className="text-sm text-[#eb4b19] font-semibold">
                      {event.label}
                    </p>
                    <p className="text-xs text-white text-opacity-90">
                      {event.date ? event.date : "To be announced"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* desktop/tablet: horizontal line, items above/below */}
      <div className="hidden md:block">
        <div className="min-w-max flex items-center relative px-4">
          <div className="absolute left-4 right-4 h-[2px] bg-white/20 pointer-events-none" />

          <div className="flex w-full justify-between">
            {events.map((event, index) => {
              const isTop = index % 2 === 0;
              return (
                <div
                  key={`d-${event.label}`}
                  className="relative flex-1 flex justify-center tl-item"
                >
                  <div
                    className={`absolute w-max text-center ${
                      isTop ? "-translate-y-10" : "translate-y-10"
                    }`}
                  >
                    <p className="text-xs md:text-sm text-[#eb4b19] font-semibold">
                      {event.label}
                    </p>
                    <p className="text-[10px] md:text-xs text-white text-opacity-90">
                      {event.date ? event.date : "To be announced"}
                    </p>
                  </div>

                  <div className="w-3 h-3 rounded-full bg-[#eb4b19] border border-white shadow relative z-10" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
