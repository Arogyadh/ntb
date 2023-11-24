"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [scrollScale, setScrollScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scale based on scroll position
      const scrollPosition = window.scrollY;
      const maxScroll = 500; // Adjust this value based on when you want the max zoom
      const scale = Math.min(1 + scrollPosition / maxScroll, 2);

      // Update the state with the calculated scale
      setScrollScale(scale);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div
        style={{
          transform: `scale(${scrollScale})`,
        }}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
      >
        <Image src="/assets/overlay.svg" alt="overlay" layout="fill" />
      </div>
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src="/assets/hero-1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
