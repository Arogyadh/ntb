"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import LocationOverlay from "./LocationOverlay";
import Card from "./Card";

type Location = {
  x: number;
  y: number;
  name: string;
};

const Map = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [activeLocations, setActiveLocations] = useState<Location[]>([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);

  const handleClick = (locationName: string) => {
    const location = activeLocations.find((loc) => loc.name === locationName);
    if (location) {
      setShowOverlay(true);
      setSelectedLocation(location);
    }
  };
  const handleMouseEnter = (location: Location) => {
    setHoveredLocation(location);
  };

  const handleMouseLeave = () => {
    setHoveredLocation(null);
  };
  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setSelectedLocation(null);
  };

  const handleButtonClick_WHS = () => {
    setActiveLocations([
      { x: 53, y: 72, name: "Chitwan-NationalPark" },
      { x: 63, y: 66, name: "Swayambhunath" },
      { x: 66, y: 67, name: "ChanguNarayan" },
      { x: 80, y: 62, name: "Sagarmatha-NationalPark" },
    ]);
    setButtonClicked(true);
  };
  const handleButtonClick_PA = () => {
    setActiveLocations([
      { x: 10, y: 11, name: "ApiNampa" },
      { x: 14, y: 25, name: "Khaptad" },
      { x: 18, y: 49, name: "Bardiya" },
      { x: 22, y: 55, name: "Banke" },
      { x: 44, y: 52, name: "Dorpatan-Hunting-Reserve" },
      { x: 48, y: 40, name: "Annapurna" },
      { x: 53, y: 70, name: "Chitwan" },
      { x: 95, y: 70, name: "Kanchanjunga" },
      { x: 90, y: 90, name: "Koshi-Tappu-WildlifeReserve" },
    ]);
  };
  const handleButtonClick_CT = () => {
    setActiveLocations([
      { x: 63, y: 64, name: "Kathmandu" },
      { x: 64, y: 68, name: "Patan" },
      { x: 66, y: 67, name: "Bhaktapur" },
      { x: 50, y: 55, name: "Pokhara" },
      { x: 38, y: 70, name: "Lumbini" },
    ]);
  };
  const handleButtonClick_ET = () => {
    setActiveLocations([
      { x: 83, y: 59, name: "Everest" },
      { x: 96, y: 65, name: "Kanchanjunga" },
      { x: 85, y: 59, name: "Lhoste" },
      { x: 89, y: 63, name: "Makalu" },
      { x: 82, y: 55, name: "ChoOyu" },
      { x: 42, y: 40, name: "Dhaulagiri" },
      { x: 55, y: 45, name: "Mount-Manaslu" },
      { x: 47, y: 42, name: "Annapurna-I" },
    ]);
  };
  const handleButtonClick_PS = () => {
    setActiveLocations([
      { x: 38, y: 70, name: "Lumbini" },
      { x: 61, y: 66, name: "Swayambhunath" },
      { x: 65, y: 65, name: "Boudhanath" },
      { x: 46, y: 35, name: "Jomsom&Muktinath" },
      { x: 63, y: 64, name: "Pashupatinath" },
    ]);
  };

  return (
    <>
      {/* Desktop view */}
      <div className="hidden md:block h-full w-full relative mt-10 pb-10 bg-slate-200">
        <div>
          <div className="font-dancing relative flex  mt-1 text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-gray-800 font-bold justify-start px-7">
            Places to go
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <div className="absolute md:mt-[50px] lg:mt-[70px] xl:mt-[100px] px-5 pb-2 flex space-x-2 space-y-3 flex-wrap md:flex-col md:space-y-3 md:items-start">
              <Button
                className="md:w-[150px] lg:w-[150px] xl:w-[250px] bg-[#F8CE1C] ml-2 hover:animate-gradient text-white rounded-full"
                onClick={handleButtonClick_WHS}
                variant="ghost"
              >
                World Heritage
              </Button>

              <Button
                className="md:w-[150px] lg:w-[150px] xl:w-[250px]  bg-[#F8CE1C]  hover:animate-gradient text-white rounded-full"
                onClick={handleButtonClick_PA}
                variant="ghost"
              >
                Protected Area
              </Button>

              <Button
                className="md:w-[150px] lg:w-[150px] xl:w-[250px]   bg-[#F8CE1C]  hover:animate-gradient text-white  rounded-full"
                onClick={handleButtonClick_CT}
                variant="ghost"
              >
                Cities and Towns
              </Button>

              <Button
                className="md:w-[150px] lg:w-[150px] xl:w-[250px]  bg-[#F8CE1C] hover:animate-gradient text-white  rounded-full"
                onClick={handleButtonClick_ET}
                variant="ghost"
              >
                Eight Thousanders
              </Button>

              <Button
                className="md:w-[150px] lg:w-[150px] xl:w-[250px]  bg-[#F8CE1C]  hover:animate-gradient text-white  rounded-full"
                onClick={handleButtonClick_PS}
                variant="ghost"
              >
                Pilgrimage Sites
              </Button>
            </div>
          </div>

          <div className="col-span-2 md:col-span-3  hidden md:flex">
            <div className="  w-full h-full relative">
              <Image
                src="/assets/map-1.png"
                alt="map image"
                layout="responsive"
                width={500}
                height={500}
              />
              {activeLocations.map((location, index) => (
                <div
                  key={index}
                  className="absolute "
                  onClick={() => handleClick(location.name)}
                  onMouseEnter={() => handleMouseEnter(location)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    position: "absolute",
                    top: `${location.y}%`,
                    left: `${location.x}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="inline-block animate-pulse">
                    <Image
                      src="/assets/tag.png"
                      alt="tag icon"
                      width={22}
                      height={22}
                    />
                  </div>
                  {hoveredLocation === location && (
                    <div
                      className="absolute top-0 left-0  bg-white shadow-md rounded-md"
                      style={{
                        position: "absolute",
                        top: `${location.y - 1200}%`,
                        left: `${location.x - 1800}%`,
                      }}
                    >
                      <Image
                        className="object-cover"
                        src={`/assets/${location.name}.jpg`}
                        alt={location.name}
                        layout="responsive"
                        height={200}
                        width={200}
                      />
                      <div className="flex text-3xl flex-row p-2 items-center justify-center font-dancing whitespace-nowrap">
                        {location.name}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {showOverlay && selectedLocation && (
              <LocationOverlay
                location={selectedLocation}
                onClose={handleCloseOverlay}
              />
            )}
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div
        className="h-full w-full relative mt-10 md:hidden"
        style={{
          backgroundImage: 'url("/assets/bg_map.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="font-dancing relative flex  mt-1 text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-gray-800 font-bold justify-start px-7">
          Places to go
        </div>
        <div className="flex flex-wrap h-full w-full space-x-2 space-y-2 pb-5 ">
          <Button
            autoFocus
            className="bg-[#f1e759] ml-2 mt-2"
            onClick={handleButtonClick_WHS}
            variant="ghost"
            size="sm"
          >
            World Heritage
          </Button>

          <Button
            className="bg-[#f1e759]"
            onClick={handleButtonClick_PA}
            variant="outline"
            size="sm"
          >
            Protected Area
          </Button>

          <Button
            className="bg-[#f1e759]"
            onClick={handleButtonClick_CT}
            variant="outline"
            size="sm"
          >
            Cities and Towns
          </Button>

          <Button
            className="bg-[#f1e759] "
            onClick={handleButtonClick_ET}
            variant="outline"
            size="sm"
          >
            Eight Thousanders
          </Button>

          <Button
            className=" bg-[#f1e759] "
            onClick={handleButtonClick_PS}
            variant="outline"
            size="sm"
          >
            Pilgrimage Sites
          </Button>
        </div>
        {buttonClicked &&
          activeLocations.map((location, index) => (
            <Card
              key={index}
              location={location}
              onClick={() => handleClick(location.name)}
            />
          ))}
        {showOverlay && selectedLocation && (
          <LocationOverlay
            location={selectedLocation}
            onClose={handleCloseOverlay}
          />
        )}
      </div>
    </>
  );
};

export default Map;
