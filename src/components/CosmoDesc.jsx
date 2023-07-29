import React from "react";
import Line from "./Line";

const CosmoDesc = () => {
  return (
    <>
      <div className="absolute sm:top-[10%] sm:left-[0%] top-[80%] left-[0%] inset-0   ">
        <div className="cursor-pointer text-white ">
          <div className="text-center">
            <h1 className="sm:text-[70px] text-[40px]"> Cosmocorpi</h1>
            <h2>1965 - 72</h2>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center  my-20">
              <h1 className="text-white text-center">ESPLORA</h1>
              <Line />
            </div>

            <p className="hover:text-white w-80 pl-24  text-gray-600 ">
              Metafora dell’energia vitale che si espande, queste opere
              processuali richiamano l’embrione, la sacca placentare e il ciclo
              crescita-morte-rigenerazione.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CosmoDesc;
