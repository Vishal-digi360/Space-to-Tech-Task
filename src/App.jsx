import React from "react";
import { CarouselWithContent } from "./components/Carousels";
import Navbar from "./components/Navbar";
import Section2 from "./components/Section2";
import ImgSlider from "./components/ImgSlider";
import Article from "./components/Article";
import Cosmocorpi from "./components/Cosmocorpi";
import ImgSection from "./components/ImgSection";
import Contatti from "./components/Contatti";
import HeroAnimation from "./components/HeroAnima/HeroAnimation";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 9000);
  }, []);

  return (
    <div className="pb-20">
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
          <Navbar />
        </>
      )}
    </div>
  );
}

export default App;
