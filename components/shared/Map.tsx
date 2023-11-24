"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import LocationOverlay from "./LocationOverlay";

type Location = {
  x: number;
  y: number;
  name: string;
};

const Map = () => {
  const [activeLocations, setActiveLocations] = useState<Location[]>([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const handleClick = (locationName: string) => {
    const location = activeLocations.find((loc) => loc.name === locationName);
    if (location) {
      setShowOverlay(true);
      setSelectedLocation(location);
    }
  };
  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setSelectedLocation(null);
  };

  const handleButtonClick_WHS = () => {
    setActiveLocations([
      { x: 53, y: 72, name: "Chitwan National Park" },
      { x: 63, y: 66, name: "Swayambhunath" },
      { x: 66, y: 67, name: "ChanguNarayan Temple" },
      { x: 80, y: 62, name: "Sagarmatha National Park" },
    ]);
  };
  const handleButtonClick_PA = () => {
    setActiveLocations([
      { x: 10, y: 11, name: "Api Nampa" },
      { x: 14, y: 25, name: "Khaptad" },
      { x: 18, y: 49, name: "Bardiya" },
      { x: 22, y: 55, name: "Banke" },
      { x: 44, y: 52, name: "Dorpatan Hunting Reserve" },
      { x: 48, y: 40, name: "Annapurna" },
      { x: 53, y: 70, name: "Chitwan" },
      { x: 95, y: 70, name: "Kjunga" },
      { x: 90, y: 90, name: "Koshi Tappu Wildlife Reserve" },
    ]);
  };
  const handleButtonClick_CT = () => {
    setActiveLocations([
      { x: 63, y: 64, name: "Kathmandu" },
      { x: 64, y: 68, name: "Patan" },
      { x: 66, y: 67, name: "Bhaktaur" },
      { x: 50, y: 55, name: "Pokhara" },
      { x: 38, y: 70, name: "Lumbini" },
    ]);
  };
  const handleButtonClick_ET = () => {
    setActiveLocations([
      { x: 53, y: 72, name: "Everest" },
      { x: 63, y: 66, name: "Kanchenjunga" },
      { x: 66, y: 67, name: "Lhoste" },
      { x: 80, y: 62, name: "Makalu" },
      { x: 80, y: 62, name: "Cho Oyu" },
      { x: 80, y: 62, name: "Dhaulagiri" },
      { x: 80, y: 62, name: "Mount Manaslu" },
      { x: 80, y: 62, name: "Annapurna I" },
    ]);
  };
  const handleButtonClick_PS = () => {
    setActiveLocations([
      { x: 53, y: 72, name: "Lumbini" },
      { x: 63, y: 66, name: "Swayambhunath" },
      { x: 66, y: 67, name: "Boudhanath" },
      { x: 80, y: 62, name: "Jomsom & Muktinath" },
      { x: 80, y: 62, name: "Pashupatinath" },
    ]);
  };

  return (
    <>
      <div className="h-full w-full absolute">
        <Image
          className="opacity-[0.4]"
          src="/assets/bg_map.jpg"
          alt="background map"
          fill
          objectFit="cover"
        />
        <div>
          <div className="flex m-10 md:text-2xl lg:text-3xl xl:text-4xl text-black font-bold justify-center items-center underline">
            Places to visit
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="absolute px-5 py-2 flex flex-col justify-between space-y-2">
              <Button
                className="sm:w-[150px] md:w-[250px] lg:w-[300px]"
                onClick={handleButtonClick_WHS}
                variant="outline"
              >
                World Heritage
              </Button>

              <Button
                className="sm:w-[150px] md:w-[250px] lg:w-[300px]"
                onClick={handleButtonClick_PA}
                variant="outline"
              >
                Protected Area
              </Button>

              <Button
                className="sm:w-[150px] md:w-[250px] lg:w-[300px]"
                onClick={handleButtonClick_CT}
                variant="outline"
              >
                Cities and Towns
              </Button>

              <Button
                className="sm:w-[150px] md:w-[250px] lg:w-[300px]"
                onClick={handleButtonClick_ET}
                variant="outline"
              >
                Eight Thousanders
              </Button>

              <Button
                className="sm:w-[150px] md:w-[250px] lg:w-[300px]"
                onClick={handleButtonClick_PS}
                variant="outline"
              >
                Pilgrimage Sites
              </Button>
            </div>
          </div>

          <div className="col-span-1 hidden md:flex">
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
                  style={{
                    position: "absolute",
                    top: `${location.y}%`,
                    left: `${location.x}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  title={location.name}
                >
                  <div className="inline-block animate-pulse">
                    <Image
                      src="/assets/tag.png"
                      alt="tag icon"
                      width={22}
                      height={22}
                    />
                  </div>
                  <div className="absolute opacity-[0.4] font-bold hover:opacity-[1] cursor-pointer text-black text-xs">
                    {location.name}
                  </div>
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
    </>

    // <div className="w-full h-full relative">
    //   <div className="flex md:text-2xl lg:text-3xl xl:text-4xl text-black font-bold justify-center items-center underline">
    //     Places to visit
    //   </div>
    //   <div className="absolute px-5 py-2 flex flex-row justify-between space-x-4">
    //     <Button onClick={handleButtonClick_WHS} variant="outline">
    //       World Heritage Sites
    //     </Button>

    //     <Button onClick={handleButtonClick_PA} variant="outline">
    //       Protected Area
    //     </Button>

    //     <Button onClick={handleButtonClick_CT} variant="outline">
    //       Cities and Towns
    //     </Button>

    //     <Button onClick={handleButtonClick_ET} variant="outline">
    //       Eight Thousanders
    //     </Button>

    //     <Button onClick={handleButtonClick_PS} variant="outline">
    //       Pilgrimage Sites
    //     </Button>
    //   </div>
    //   <div className="  w-full h-full relative">
    //     <Image
    //       src="/assets/map-1.png"
    //       alt="map image"
    //       layout="responsive"
    //       width={500}
    //       height={500}
    //     />
    //     {activeLocations.map((location, index) => (
    //       <div
    //         key={index}
    //         className="absolute "
    //         onClick={() => handleClick(location.name)}
    //         style={{
    //           position: "absolute",
    //           top: `${location.y}%`,
    //           left: `${location.x}%`,
    //           transform: "translate(-50%, -50%)",
    //         }}
    //         title={location.name}
    //       >
    //         <div className="inline-block animate-pulse">
    //           <Image
    //             src="/assets/tag.png"
    //             alt="tag icon"
    //             width={22}
    //             height={22}
    //           />
    //         </div>
    //         <div className="absolute opacity-[0.3] hover:opacity-[1] cursor-pointer text-black font-bold">
    //           {location.name}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   {showOverlay && selectedLocation && (
    //     <LocationOverlay
    //       location={selectedLocation}
    //       onClose={handleCloseOverlay}
    //     />
    //   )}
    // </div>
  );
};

export default Map;
