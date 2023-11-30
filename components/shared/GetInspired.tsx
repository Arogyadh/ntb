"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const images = [
  {
    name: "Be Part of a local festival",

    src: "/assets/be_part_of.jpg",
    href: "https://ntb.gov.np/en/vivah-panchami",
  },
  {
    name: "Meet the living Goddess Kumari",

    src: "/assets/living_goddess.jpeg",
    href: "https://ntb.gov.np/en/yomari-punhi",
  },
  {
    name: "Explore Chitwan",

    src: "/assets/explore_chitwan.jpeg",
    href: "https://ntb.gov.np/en/udhauli-parva",
  },
  {
    name: "Magic Pokhara",

    src: "/assets/magic_pokhara.jpeg",
    href: "https://ntb.gov.np/en/udhauli-parva",
  },
];

const GetInspired = () => {
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
    <div className="w-full h-full overflow-hidden bg-gray-200 mt-10 pt-12 ">
      <div className="text-7xl font-dancing ml-10">Get Inspired</div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.src}
              alt={`image ${index + 1}`}
              height={50}
              width={50}
              layout="responsive"
              className="p-7 rounded-[100px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <Link href={image.href}>
              <div className="flex justify-center items-center text-[15px]  md:font-bold md:text-2xl mb-10">
                {image.name}
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GetInspired;
