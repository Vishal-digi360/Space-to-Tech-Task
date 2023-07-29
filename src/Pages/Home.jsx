import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import HeroAnimation from "../components/HeroLoading/HeroAnimation";
import Section2 from "../components/Section2";
import ImgSlider from "../components/ImgSlider";
import Article from "../components/Article";
import Cosmocorpi from "../components/Cosmocorpi";
import ImgSection from "../components/ImgSection";
import Contatti from "../components/Contatti";
import { CarouselWithContent } from "../components/Carousels";
import Navbar from "../components/Navbar";

function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 9000);
  }, []);

  return (
    <div >
      {!show && (
        <>
          <HeroAnimation />
        </>
      )}

      {show && (
        <>
          <CarouselWithContent />
          <Section2 />
          <ImgSlider />

          <Article />
          <Cosmocorpi />
          <ImgSection />
          <Contatti />
          <Navbar/>
        </>
      )}
    </div>
  );
}

export default Home;
