import React from "react";
import Line from "../GlobalComp/Line";

const ImgSection = () => {
  return (
    <div className="mt-48 ">
      <div className="flex items-center justify-evenly">
        <img
          className="w-32 h-48 sm:w-80 sm:h-[440px]"
          src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/Trittico_2.png"
          alt=""
        />
        <img
          className="mt-32 w-32 h-48 sm:w-80 sm:h-[440px]"
          src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/Trittico_1.png"
          alt=""
        />
        <img
          className="mt-56 w-32 h-48 sm:w-80 sm:h-[440px]"
          src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/Trittico_3.png"
          alt=""
        />
      </div>

      <div className="text-white w-96 sm:w-[700px] sm:pl-56 px-3">
        <h2>ANTOLOGIA CRITICA</h2>
        <p className="text-gray-600">
          Di Mario Russo hanno scritto, a partire dagli anni Cinquanta, alcuni
          tra i più influenti critici d’arte torinesi, tra cui: Giorgio Brizio,
          Mirella Bandini, Angelo Dragone, Edoardo di Mauro, Elisabetta
          Tolosano.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center  my-10">
        <h1 className="text-white ">LEGGI LA BIOGRAFIA</h1>
        <Line />
      </div>
    </div>
  );
};

export default ImgSection;
