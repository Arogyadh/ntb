import Image from "next/image";
import React from "react";

const Map = () => {
  return (
    <div className="w-full h-full relative">
      <div className="flex md:text-2xl lg:text-3xl xl:text-4xl text-black font-bold justify-center items-center underline">
        Places to visit
      </div>

      <div className="z-[-10] w-full h-full flex items-center justify-center px-20 py-20">
        <Image
          src="/assets/map-1.png"
          alt="map image"
          layout="responsive"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Map;
