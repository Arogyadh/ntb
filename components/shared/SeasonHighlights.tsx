"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const images = [
  {
    name: "Kathmandu",
    src: "/assets/season_kathmandu.jpg",
    href: "https://ntb.gov.np/en/kathmandu",
  },

  {
    name: "Lumbini",
    src: "/assets/season_lumbini.jpg",
    href: "https://ntb.gov.np/en/lumbini-the-birthplace-of-buddhism",
  },
  {
    name: "Annapurna",
    src: "/assets/season_annapurna.jpg",
    href: "https://ntb.gov.np/en/annapurna",
  },
  {
    name: "Chitwan",
    src: "/assets/season_chitwan.jpg",
    href: "https://ntb.gov.np/en/chitwan-national-park",
  },

  {
    name: "Everest",
    src: "/assets/season_everest.jpg",
    href: "https://ntb.gov.np/en/everest",
  },
];

const SeasonHighlights = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      // Adjust slidesToShow based on screen width
      if (window.innerWidth <= 768) {
        setSlidesToShow(1); // On medium devices and lower, show 1 slide
      } else {
        setSlidesToShow(2); // On larger devices, show 2 slides
      }
    };

    // Initial call
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: slidesToShow, // Use the dynamic slidesToShow value
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="text-7xl font-dancing ml-5">Season Highlights</div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.src}
              alt={`image ${index + 1}`}
              height={50}
              width={50}
              layout="responsive"
              className="px-5 rounded-[100px]"
            />
            <Link href={image.href}>
              <div className="flex py-3 items-center justify-center font-bold text-2xl">
                {image.name}
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SeasonHighlights;
