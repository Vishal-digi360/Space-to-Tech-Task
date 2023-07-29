import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import HeroAnimation from "../components/Loader/HeroAnimation";
import Section2 from "../components/HomeComp/Section2";
import ImgSlider from "../components/HomeComp/ImgSlider";
import Article from "../components/HomeComp/Article";
import Cosmocorpi from "../components/HomeComp/Cosmocorpi";
import ImgSection from "../components/HomeComp/ImgSection";
import Contatti from "../components/HomeComp/Contatti";
import { CarouselWithContent } from "../components/HomeComp/Carousels";
import Navbar from "../components/GlobalComp/Navbar";

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
