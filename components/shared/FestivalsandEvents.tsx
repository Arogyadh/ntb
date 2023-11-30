"use client";
import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
const images = [
  {
    name: "Vivah Panchami",
    date: "28TH NOVEMBER",
    src: "/assets/vivah_panchami.jpg",
    href: "https://ntb.gov.np/en/vivah-panchami",
  },
  {
    name: "Yomari Punhi",
    date: "8TH DECEMBER",
    src: "/assets/yomari-punhi.jpg",
    href: "https://ntb.gov.np/en/yomari-punhi",
  },
  {
    name: "Udhauli Parva",
    date: "8TH DECEMBER",
    src: "/assets/udhauli-parva.jpg",
    href: "https://ntb.gov.np/en/udhauli-parva",
  },
];

const FestivalsandEvents = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="text-7xl font-dancing ml-10 mt-10">
        Events & Festivals
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Link href={image.href}>
              <Image
                src={image.src}
                alt={`image ${index + 1}`}
                height={50}
                width={50}
                layout="responsive"
                className="p-7 rounded-[100px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              />
              <div
                className="flex items-center text-[10px] justify-center md:text-[12px] "
                style={{ color: "#F8CE1C" }}
              >
                {image.date}
              </div>
              <div className="flex justify-center items-center text-[15px]  md:font-bold md:text-2xl">
                {image.name}
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FestivalsandEvents;
