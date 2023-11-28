// Card.tsx

import Image from "next/image";
import React from "react";

type CardProps = {
  key: number;
  location: any;
  onClick: () => void;
};

const Card = ({ key, location, onClick }: CardProps) => {
  const handleClick = () => {
    onClick(); // Trigger the onClick callback provided by the parent component
  };

  return (
    <div
      className=" relative w-full h-full flex  flex-wrap md:hidden mt-2"
      onClick={handleClick}
    >
      <div className=" w-full  flex flex-col  bg-white shadow-md rounded-md">
        <Image
          className="object-cover "
          src={`/assets/${location.name}.jpg`}
          alt={location.name}
          layout="responsive"
          height={200}
          width={200}
        />
        <div className="flex mx-2 text-2xl flex-row p-2 items-center justify-center font-dancing whitespace-nowrap">
          {location.name}
        </div>
      </div>
    </div>
  );
};

export default Card;
