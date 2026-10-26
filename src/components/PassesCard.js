import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const PassesCard = ({ title, desc, prize }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 500;
    if (isExpanded) {
      // Animate to height of 500px when expanded
      gsap.to(cardRef.current, {
        height: isSmallScreen ? "fit-content" : 600,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      // Animate to fit content when collapsed
      gsap.to(cardRef.current, {
        height: "fit-content",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isExpanded]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      ref={cardRef}
      className="bg-[#1A1A1A] rounded-lg shadow-lg p-8 flex flex-col items-start w-fit mb-6 overflow-hidden justify-between transition-transform duration-300 hover:scale-105"
      style={{ height: "fit-content" }} // Initial height
    >
      <div className="flex flex-col w-full items-start">
        <h2 className="text-2xl font-semibold text-white text-opacity-70 mb-3">
          {title}
        </h2>
        {prize ? (
          <p className="text-4xl font-medium text-white mb-6">INR {prize}</p>
        ) : (
          <>
            <p className="text-2xl text-start text-white mb-8">
              Will declare soon
            </p>
          </>
        )}
        <p className="text-base text-start text-white text-opacity-70 mb-8">
          {isExpanded ? desc : `${desc.slice(0, 100)}...`}
          <span
            onClick={toggleExpanded}
            className="text-[#eb4b19] cursor-pointer ml-1"
          >
            {" "}
            {isExpanded ? "Show Less" : "Show More"}
          </span>
        </p>
      </div>
      <button disabled className="bg-primarybgimage w-full cursor-not-allowed text-white text-lg px-5 py-2 rounded-xl transition-shadow duration-100 ease-in-out flex items-center justify-center">
        Register Now
      </button>
    </div>
  );
};

export default PassesCard;
