import React from "react";

type Location = {
  x: number;
  y: number;
  name: string;
};

type LocationOverlayProps = {
  location: Location;
  onClose: () => void;
};

const LocationOverlay: React.FC<LocationOverlayProps> = ({
  location,
  onClose,
}) => {
  // Mapping of location names to YouTube video URLs
  const videoUrls: { [key: string]: string } = {
    Chitwan_National_Park:
      "https://www.youtube.com/embed/GGHTF9QSpVg?si=WlbMNm7C90RnsWRB",
    Swayambhunath:
      "https://www.youtube.com/embed/yAwXDsgACtA?si=jDX61wdbsJNDbIoh",
    "ChanguNarayan Temple":
      "https://www.youtube.com/embed/9AgddSAfV-U?si=MRWW0Vofh2odw5Oc",
    "Sagarmatha National Park":
      "https://www.youtube.com/embed/xYq5gj_iMt8?si=d_mN2OQfshed3I4Z",
    Api_Nampa: "https://www.youtube.com/embed/5K1yU73lle8?si=1PH3tRkhTdO9gg5H",
  };

  const youtubeVideoUrl = videoUrls[location.name];
  return (
    <div className="overlay">
      <div className="video-container aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-16 lg:aspect-h-9">
        <iframe
          width="720"
          height="405"
          src={youtubeVideoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default LocationOverlay;
