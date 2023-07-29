import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
});

const HeroCard = () => {
  return (

    <div className=" bg-[#141414] h-screen flex flex-col justify-center items-center ">
        <div className="-rotate-45 ">
      <div className="flex justify-end items-end mb-4 gap-4 ">
        <img
        data-aos="fade-right" data-aos-duration="2500"
          className="sm:h-96 sm:w-72 h-40 w-32"
          src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/archivio_mario_russo_canvas_1.jpg"
          alt=""
        />
        <img
          data-aos="fade-left" data-aos-duration="2500"
          className="sm:w-96 sm:h-72 w-40 h-32"
          src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/archivio_mario_russo_canvas_2.jpg"
          alt=""
        />
      </div>

      <div className="flex gap-4 ">
        <img
          data-aos="fade-right" data-aos-duration="2500"
          className="sm:w-96 sm:h-72 w-40 h-32"
          src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/archivio_mario_russo_canvas_3.jpg"
          alt=""
        />
        <img
          data-aos="fade-left" data-aos-duration="2500"
          className="sm:h-96 sm:w-72 h-40 w-32"
          src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/archivio_mario_russo_canvas_4.jpg"
          alt=""
        />
      </div>
      </div>
    </div>
  );
};

export default HeroCard;
