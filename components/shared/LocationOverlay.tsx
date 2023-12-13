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
    "Chitwan-NationalPark": "https://www.youtube.com/embed/GGHTF9QSpVg",
    Swayambhunath:
      "https://www.youtube.com/embed/SxrckxfNHrk?si=3Tf8m2UuNQ0GoAG2",
    ChanguNarayan:
      "https://www.youtube.com/embed/bfaYQrO7q9I?si=BWiRkclLEzzfN2bf",
    "Sagarmatha-NationalPark":
      "https://www.youtube.com/embed/xYq5gj_iMt8?si=hSrNyxrXvs3xQeC0",
    ApiNampa: "https://www.youtube.com/embed/t3oZXvX5gbg?si=nMmWFD2Jw2qTqJ5U",
    Khaptad: "https://www.youtube.com/embed/h6Ocify-CUA?si=PotMKtLRjDftWdPN",
    Bardiya: "https://www.youtube.com/embed/lm6xJfYwSMc?si=Cz350mVnXCbzADHZ",
    Banke: "https://www.youtube.com/embed/-CB1jkAQTXM?si=rIT3v4CLAxxEhOEu",
    "Dorpatan-Hunting-Reserve":
      "https://www.youtube.com/embed/DK0Awn1GSdQ?si=Ih8vssxqq8cVmRG8",
    Annapurna: "https://www.youtube.com/embed/zp72WjMVhTQ?si=pZkKcPYOyOx2jjzX",
    Chitwan: "https://www.youtube.com/embed/GGHTF9QSpVg",
    Kanchanjunga:
      "https://www.youtube.com/embed/S92p0NGJZeU?si=CbWiSaUnsiladqMj",
    "Koshi-Tappu-WildlifeReserve":
      "https://www.youtube.com/embed/0zGGucpFWBs?si=tnbHyjntHrZVtvg8",
    Kathmandu: "https://www.youtube.com/embed/h3FMFNZvbwc?si=uhxhIHrRVSLuT-lN",
    Patan: "https://www.youtube.com/embed/TqBLxKah2eU?si=D6Xd7THNXFWhaMix",
    Bhaktapur: "https://www.youtube.com/embed/fdOdI2mFnUU?si=ZF1OHSmSAX5TuDpf",
    Pokhara: "https://www.youtube.com/embed/Ip6RDWerxtQ?si=mBRQFFrWRi9NEHwq",
    Lumbini: "https://www.youtube.com/embed/S69Odyq2dXk?si=D8Cr4AA3_-yH9Q39",
    Everest: "https://www.youtube.com/embed/Zz9oI3B6v4c?si=pa_wDCOmEZkSNoAE",
    Lhoste: "https://www.youtube.com/embed/OTQtiIFbA6g?si=BzpwDVDAf9pUw53F",
    Makalu: "https://www.youtube.com/embed/9ITMV7VShUg?si=RmJCVdg1k0-VCYiV",
    ChoOyu: "https://www.youtube.com/embed/vVhhcleZtsU?si=DqQoJ9ZDhQI34VVm",
    Dhaulagiri: "https://www.youtube.com/embed/cHpo4V5No0A?si=TVm70xNqSy5ksmJX",
    "Mount-Manaslu":
      "https://www.youtube.com/embed/-S9Zkx-m5bo?si=-ePkA1cuKuce47rk",
    "Annapurna-I":
      "https://www.youtube.com/embed/P_bGSEKO_Q4?si=H05ScD2ZoFiippeS",
    Boudhanath: "https://www.youtube.com/embed/c_vqAIOT-9U?si=KybYdfg5MGBDvZx6",
    "Jomsom&Muktinath":
      "https://www.youtube.com/embed/-0O65DaJXjY?si=LLe46dkL8mxumaxz",
    Pashupatinath:
      "https://www.youtube.com/embed/17KvUDLFeMw?si=5pH73jhy0knxTq0N",
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
