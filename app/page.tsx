import FestivalsandEvents from "@/components/shared/FestivalsandEvents";
import GetInspired from "@/components/shared/GetInspired";
import Hero from "@/components/shared/Hero";
import Map from "@/components/shared/Map";
import SeasonHighlights from "@/components/shared/SeasonHighlights";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <SeasonHighlights />
      <Map />
      <FestivalsandEvents />
      <GetInspired />
    </main>
  );
}
