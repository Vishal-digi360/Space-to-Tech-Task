import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HeroAnimation = () => {
  const [show, setShow] = useState(0);
  const [opacity, setOpacity] = useState(" opacity-0 ");
  const [scale, setScale] = useState(" opacity-0 ");

  useEffect(() => {
    setTimeout(() => {
      setOpacity(" opacity-5 ");
      setScale(" scale-95 ");
    }, 2000);

    setTimeout(() => {
      setShow(1);
      setOpacity(" opacity-10 ");
      setScale(" scale-95 ");
    }, 3000);
    setTimeout(() => {
      setShow(2);
      setOpacity(" opacity-20 ");
      setScale(" scale-90 ");
    }, 4000);

    setTimeout(() => {
      setShow(3);
      setOpacity(" opacity-25 ");
      setScale(" scale-75 ");
    }, 5000);
    setTimeout(() => {
      setShow(3);
      setOpacity(" opacity-40 ");
    }, 7000);
    setTimeout(() => {
      setShow(3);
      setOpacity(" opacity-100  ");
    }, 8000);
  }, []);

  return (
    <>
      <div className="h-screen overflow-hidden    ">
        <div className="flex  justify-center items-center ">
          <img
            className={` ${opacity}  duration-900 ${scale}   transition-transform  mt-24 sm:mt-2 `}
            src="http://archiviomariorusso.it/img/loader-bg.jpg"
            alt=""
          />
        </div>
        {console.log(show)}
        <div className="absolute w-full top-[50%]  ">
          <div className="flex items-center justify-center ">
            <div className="text-white text-[25px] sm:text-[55px] text-center flex flex-col items-center justify-center Playfair-font ">
              {show >= 1 && (
                <>
                  <h1 data-aos="flip-up">
                    Ho cercato di scavare fino all’impossibile,
                  </h1>
                </>
              )}

              {show >= 2 && (
                <>
                  <h2 data-aos="flip-up">
                    di andare all’origine, <span>ai primordi.</span>
                  </h2>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAnimation;
