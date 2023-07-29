import { Carousel, Typography } from "@material-tailwind/react";
import HeroCard from "./HeroCard";
import Pay from "./Pay";

export function CarouselWithContent() {
  return (
    <>
      <Carousel className="overflow-hidden ">
        <div className="relative h-screen w-full">
          <HeroCard />
        </div>
        <div className="relative h-screen w-screen bg-[#141414]">
          <div className="flex justify-center items-center h-screen">
            <video
              src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/11/Loop_home-page.mp4"
              autoPlay
              playsInline
              muted
              loop
            ></video>
          </div>
        </div>
        <div className="relative h-screen w-full">
          <img
            src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/11/canvas_acciai-1500x833.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </div>
      </Carousel>
      {/* <div className="absolute inset-0  h-full w-full  bg-black/75"> */}

      <Pay />
      {/* </div> */}
    </>
  );
}
