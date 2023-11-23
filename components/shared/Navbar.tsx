"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

const components: {
  title: string;
  href: string;
  img: string;
  subClasses?: string[];
}[] = [
  {
    title: "ADVENTURE",
    href: "/things-to-do/adventure",
    img: "/assets/adventure.jpeg",
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
    title: "NATURE",
    href: "/things-to-do/nature",
    img: "/assets/nature.jpeg",
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
    title: "CULTURE",
    href: "/things-to-do/culture",
    img: "/assets/culture.jpeg",
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
    title: "WELLNESS",
    href: "/things-to-do/wellness",
    img: "/assets/wellness.jpeg",
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
    title: "OTHERS",
    href: "/things-to-do/others",
    img: "/assets/others.jpeg",
    subClasses: ["  DESTINATION WEDDING", "MICE", "GOLF"],
  },
];
const components_festivals: { title: string; href: string; img: string }[] = [
  {
    title: "TIHAR",
    href: "/festivalsandevents/tihar",
    img: "/assets/tihar.jpeg",
  },
  {
    title: "INDRA JATRA",
    href: "/festivalsandevents/indrajatra",
    img: "/assets/indra.jpeg",
  },
  {
    title: "DASHAIN",
    href: "/festivalsandevents/dashain",
    img: "/assets/dashain.jpeg",
  },
  {
    title: "CHHAT PARVA",
    href: "/festivalsandevents/chhatparva",
    img: "/assets/chhat.jpeg",
  },
];
const components_plan: {
  title: string;
  href: string;
  img: string;
  subClasses?: string[];
}[] = [
  {
    title: "TRIP IDEAS",
    href: "/plan-your-trip/trip-ideas",
    img: "/assets/trip-ideas.jpg",
    subClasses: [
      "TRAVEL WITH CHILDREN",
      "GANESH HIMAL TREK",
      "CHANDRAGIRI - CHITLANG - KULEKHANI",
      "PILGRIMAGE TO DOLESHWAR MAHADEV TEMPLE",
    ],
  },
  {
    title: "ABOUT NEPAL",
    href: "/plan-your-trip/about-nepal",
    img: "/assets/about-nepal.jpeg",
    subClasses: ["GEOGRAPHY", "WILDLIFE", "CLIMATE", "PEOPLE", "CULTURE"],
  },
  {
    title: "TRAVEL DETAILS",
    href: "/plan-your-trip/travel-details",
    img: "/assets/travel.jpg",
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
    title: "BOOK YOUR TRIP",
    href: "/plan-your-trip/travel-details",
    img: "/assets/book.jpeg",
    subClasses: ["BOOK EXPERIENCE", "FLIGHTS"],
  },
  {
    title: "OTHERS",
    href: "/things-to-do/others",
    img: "/assets/others.jpeg",
    subClasses: ["  DESTINATION WEDDING", "MICE", "GOLF"],
  },
];
const Navbar = () => {
  return (
    <NavigationMenu className="bg-gray-100">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Image
            src="/assets/ntb_logo-1663927863_resized1920.jpg"
            alt="logo"
            width={60}
            height={60}
            className="ml-[40px] mt-2 flex"
          />
        </NavigationMenuItem>
        <div className="mt-5 border-l-2 border-gray-300 h-[50px]"></div>

        <NavigationMenuItem>
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={150}
            height={150}
            className="ml-2 mt-2 flex mr-5"
          />
        </NavigationMenuItem>
        {/* Places to go */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="mt-3 mr-5 font-bold">
            <span className="hover:border-b-[3px]   border-yellow-400">
              Places to go
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-100">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <ListItem href="/kathmandu">
                <div className="flex flex-col items-center">
                  <Image
                    src="/assets/ktm.jpg"
                    width={200}
                    height={150}
                    alt="Kathmandu Logo"
                    layout="responsive"
                    objectFit="cover"
                  />
                  <div className="mt-2 font-bold text-gray-500 text-center">
                    Kathmandu
                  </div>
                </div>
              </ListItem>
              <ListItem href="/pokhara">
                <Image
                  src="/assets/pokhara.jpg"
                  width={200}
                  height={150}
                  alt="pokhara_logo"
                  layout="responsive"
                  objectFit="cover"
                />
                <div className="mt-2  font-bold text-gray-500 text-center">
                  Pokhara
                </div>
              </ListItem>
              <ListItem href="/everest">
                <Image
                  src="/assets/Everest.jpg"
                  width={200}
                  height={180}
                  alt="everest_logo"
                  layout="responsive"
                  objectFit="cover"
                />
                <div className="mt-5  font-bold text-gray-500 text-center">
                  Everest
                </div>
              </ListItem>
              <ListItem href="/janakpur">
                <Image
                  src="/assets/janakpur.jpeg"
                  width={200}
                  height={150}
                  alt="janakpur_logo"
                  layout="responsive"
                  objectFit="cover"
                />
                <div className="mt-2  font-bold text-gray-500 text-center">
                  Janakpur
                </div>
              </ListItem>
              <ListItem href="/chitwan">
                <Image
                  src="/assets/chitwan.jpg"
                  width={200}
                  height={150}
                  alt="chitwan_logo"
                  layout="responsive"
                  objectFit="cover"
                />
                <div className="mt-2 font-bold text-gray-500 text-center">
                  Chitwan
                </div>
              </ListItem>
              <ListItem href="/lumbini">
                <Image
                  src="/assets/lumbini.jpg"
                  width={200}
                  height={150}
                  alt="Lumbini Logo"
                  layout="responsive"
                  objectFit="cover"
                />
                <div className="mt-2 font-bold text-gray-500 text-center">
                  Lumbini
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Things to do */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="mt-3 mr-5 font-bold">
            <span className="hover:border-b-[3px]   border-yellow-400">
              Things to do
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-100">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  subClasses={component.subClasses}
                >
                  <Image
                    className="hover:opacity-[0.8]"
                    src={component.img}
                    width={200}
                    height={150}
                    alt={component.title}
                  />
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Festivals and events */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="mt-3 mr-5 font-bold">
            <span className="hover:border-b-[3px]   border-yellow-400">
              Festivals and events
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-100">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components_festivals.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  <Image
                    src={component.img}
                    width={200}
                    height={150}
                    alt={component.title}
                  />
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Plan your trip */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="mt-3 mr-5 font-bold">
            <span className="hover:border-b-[3px]   border-yellow-400">
              Plan Your Trip
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-100">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components_plan.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  subClasses={component.subClasses}
                >
                  <Image
                    src={component.img}
                    width={200}
                    height={150}
                    alt={component.title}
                  />
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { subClasses?: string[] }
>(({ className, title, subClasses, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-gray-600 text-xl font-bold leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
          {subClasses && (
            <ul className=" cursor-default list-disc text-sm leading-snug text-muted-foreground pl-5">
              {subClasses.map((subClass, index) => (
                <li key={index}>{subClass}</li>
              ))}
            </ul>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
