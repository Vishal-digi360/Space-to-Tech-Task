import React from "react";
import Slider from "react-slick";
import { HiChevronRight,HiChevronLeft } from "react-icons/hi2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const arry = [
    {
        img: "https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/archivio_3.png",
  
      },
      {
        img: "https://archiviomariorusso.it/admin/wp-content/uploads/2020/11/archivio_2_cosmo.png",

      },
  {
    img: "https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/acciaio_gallery_7.jpg",

  },
  {
    img: "https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/archivio_1.png",
  
  },
  {
    img: "https://archiviomariorusso.it/admin/wp-content/uploads/2020/11/archivio_3_comso.png",

  },
  {
    img: "https://archiviomariorusso.it/admin/wp-content/uploads/2020/11/archivio_4_acciai.png",

  },
  {
    img: "https://archiviomariorusso.it/admin/wp-content/uploads/2020/11/archivio_2_cosmo.png",

  },
  {
    img: "https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/archivio_1.png",
  
  },

];

const ImgSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    
    nextArrow: <HiChevronRight />,
    prevArrow: <HiChevronLeft />,
    // prevArrow: true,
    // nextArrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,

        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,

        },
      },
    ],
  };
  return (
    <>
      <div className="flex justify-center items-center pt-5 pb-10">
       
         
      </div>
      <div className=" px-5 p-1 lg:pb-12">
        <Slider {...settings}>
          {arry.map((item) => {
            return (
              <>
                <div className="w-full  flex justify-center items-center gap-16">
                    <img
                    
                      className="w-64 lg:w-[280px] lg:h-[280px]  h-64  mt-14 hover:scale-105 duration-500 "
                      src={item.img}
                      alt=""
                    />
                 
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default ImgSlider;
