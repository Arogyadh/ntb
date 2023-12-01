"use client";
import React, { useEffect } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

const images_ptg = [
  {
    name: "Kathmandu",
    src: "/assets/ktm.jpg",
    href: "/kathmandu",
  },
  {
    name: "Pokhara",
    src: "/assets/pokhara.jpg",
    href: "/pokhara",
  },

  {
    name: "Janakpur",
    src: "/assets/janakpur.jpeg",
    href: "/janakpur",
  },
  {
    name: "Chitwan",
    src: "/assets/chitwan.jpg",
    href: "/chitwan",
  },
  {
    name: "Lumbini",
    src: "/assets/lumbini.jpg",
    href: "/lumbini",
  },
  {
    name: "Everest",
    src: "/assets/Everest.jpg",
    href: "/everest",
  },
];

const images_ttd = [
  {
    name: "ADVENTURE",
    href: "/things-to-do/adventure",
    src: "/assets/adventure.jpeg",
    subClasses: [
      "TREKKING",
      "ZIP FLYING",
      "SKY DIVING",
      "BUNGEE JUMPING",
      "MOTOR BIKING",
      "RAFTING & KAYAKING",
      "CANYONING",
      "MOUNTAIN BIKING",
      "PARAGLIDING",
      "HIKING",
      "CAMPING",
      "CAVE EXPLORATION",
    ],
  },
  {
    name: "NATURE",
    href: "/things-to-do/nature",
    src: "/assets/nature.jpeg",
    subClasses: [
      "BIRD WATCHING",
      "MOUNTAIN VIEWING",
      "JUNGLE DISCOVERY",
      "BUTTERFLY WATCHING",
      "NAGARKOT SUNRISE AND SUNSET",
      "WETLANDS",
    ],
  },
  {
    name: "CULTURE",
    href: "/things-to-do/culture",
    src: "/assets/culture.jpeg",
    subClasses: [
      "TRADITIONAL CRAFTS",
      "MEET THE PEOPLE",
      "VILLAGE TOURS",
      "FOOD & CULINARY",
      "CULTURAL TOURS",
      "HOMESTAY",
      "HERITAGE WALK",
      " MUSEUM TOURS",
    ],
  },
  {
    name: "WELLNESS",
    href: "/things-to-do/wellness",
    src: "/assets/wellness.jpeg",
    subClasses: [
      "MEDITATION",
      "AYURVEDA",
      "FAITH HEALING",
      "PANCHAKARMA TREATMENT",
      "SOUND MEDITATION",
      "NATURAL HOT WATER SPRINGS IN NEPAL",
      "PILGRIMAGE TOURS",
    ],
  },
  {
    name: "OTHERS",
    href: "/things-to-do/others",
    src: "/assets/others.jpeg",
    subClasses: ["  DESTINATION WEDDING", "MICE", "GOLF"],
  },
];
const images_fe = [
  {
    name: "TIHAR",
    href: "/festivalsandevents/tihar",
    src: "/assets/tihar.jpeg",
  },
  {
    name: "INDRA JATRA",
    href: "/festivalsandevents/indrajatra",
    src: "/assets/indra.jpeg",
  },
  {
    name: "DASHAIN",
    href: "/festivalsandevents/dashain",
    src: "/assets/dashain.jpeg",
  },
  {
    name: "CHHAT PARVA",
    href: "/festivalsandevents/chhatparva",
    src: "/assets/chhat.jpeg",
  },
];
const images_pyt = [
  {
    name: "ABOUT NEPAL",
    href: "/plan-your-trip/about-nepal",
    src: "/assets/about-nepal.jpeg",
    subClasses: ["GEOGRAPHY", "WILDLIFE", "CLIMATE", "PEOPLE", "CULTURE"],
  },
  {
    name: "TRAVEL DETAILS",
    href: "/plan-your-trip/travel-details",
    src: "/assets/travel.jpg",
    subClasses: [
      "TOURIST VISA",
      "LOCAL TRANSPORTATION",
      "TIMS CARD",
      "TREKKING PERMIT",
      "PARK ENTRY FEES",
      "HERITAGE SITE ENTRY FEES",
      "TOURIST POLICE",
      "SAFETY IN THE MOUNTAINS",
    ],
  },
  {
    name: "BOOK YOUR TRIP",
    href: "/plan-your-trip/travel-details",
    src: "/assets/book.jpeg",
    subClasses: ["BOOK EXPERIENCE", "FLIGHTS"],
  },
  {
    name: "OTHERS",
    href: "/things-to-do/others",
    src: "/assets/others.jpeg",
    subClasses: ["  DESTINATION WEDDING", "MICE", "GOLF"],
  },
  {
    name: "TRIP IDEAS",
    href: "/plan-your-trip/trip-ideas",
    src: "/assets/trip-ideas.jpg",
    subClasses: [
      "TRAVEL WITH CHILDREN",
      "GANESH HIMAL TREK",
      "CHANDRAGIRI - CHITLANG - KULEKHANI",
      "PILGRIMAGE TO DOLESHWAR MAHADEV TEMPLE",
    ],
  },
];
const images = {
  images_fe,
  images_ptg,
  images_pyt,
  images_ttd,
};

const Navbar = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  interface ImageItem {
    name: string;
    href: string;
    src: string;
    subClasses?: string[];
  }
  const renderImageSection = (images: ImageItem[]) => (
    <Slider {...settings} className="max-w-[1200px]">
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image.src}
            alt={`image ${index + 1}`}
            height={50}
            width={50}
            layout="responsive"
            className="p-7 rounded-[100px] cursor-pointer hover:opacity-[0.8]"
            loading="lazy"
          />
          <Link href={image.href}>
            <div className="flex text-gray-500 justify-center items-center text-[15px] md:font-bold md:text-2xl mb-10">
              {image.name}
            </div>
          </Link>
          {image.subClasses && (
            <div className="flex flex-col text-gray-600 text-[10px] mb-10">
              {image.subClasses.map((subclass, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center text-left mb-[2px] ml-10"
                >
                  <ul>
                    <li className="before:bg-yellow-500 before:w-2 before:h-2 before:rounded-full before:inline-block">
                      <span className="ml-2 hover:text-gray-900">
                        {subclass}
                      </span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </Slider>
  );

  return (
    <NavigationMenu className="bg-gray-100">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Image
            src="/assets/ntb_logo-1663927863_resized1920.jpg"
            alt="logo"
            width={50}
            height={50}
            className=" flex ml-[40px] mt-2 hover:opacity-[0.8]"
            priority
          />
        </NavigationMenuItem>
        <div className="hidden mt-5 border-l-2 border-gray-300 h-[50px] sm:flex"></div>

        <NavigationMenuItem>
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={150}
            height={150}
            className="ml-2 mt-2 flex mr-5 hover:opacity-[0.8]"
            priority
          />
        </NavigationMenuItem>
        {/* Places to go */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="mt-3 mr-5 font-bold hidden lg:flex">
            <span className="hover:border-b-[3px] border-yellow-400">
              Places to go
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-100">
            {renderImageSection(images.images_ptg)}
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Things to do */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="mt-3 mr-5 font-bold hidden lg:flex">
            <span className="hover:border-b-[3px]   border-yellow-400">
              Things to do
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-100 ">
            {renderImageSection(images.images_ttd)}
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Festivals and events */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="mt-3 mr-5 font-bold hidden lg:flex">
            <span className="hover:border-b-[3px]   border-yellow-400">
              Festivals and events
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-100">
            {renderImageSection(images.images_fe)}
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Plan your trip */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="mt-3 mr-5 font-bold hidden lg:flex">
            <span className="hover:border-b-[3px]   border-yellow-400">
              Plan Your Trip
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-100">
            {renderImageSection(images.images_pyt)}
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Hamburger */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex mt-5 lg:hidden md:ml-[400px] sm:ml-[300px] ">
            <span>
              <Image
                src="/assets/hamburger.png"
                width={15}
                height={15}
                alt="hamburger"
              />
            </span>
          </NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
