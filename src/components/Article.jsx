import React from "react";
import Line from "./Line";

const Article = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center  my-20">
        <h1 className="text-white text-center">ESPLORA L'ARCHIVIO</h1>
        <Line />
      </div>

      <div className="text-white flex justify-between sm:px-40 px-6 ">
        <div>
          <h3 className="text-[32px] mt-5 mb-10 w-64 text-start italic " data-aos="zoom-in" data-aos-duration="1500">
            Mi sono consumato. Ho dato il mio flusso vitale alle mie opere,
            all’arte.
          </h3>
          <div className=" flex flex-col items-start justify-start sm:hidden">
          <img
          data-aos="fade-up"
          data-aos-duration="1000"
            className=" w-[340px] "
            src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/biografia.jpg"
            alt=""
          />
        </div>
          <div className="sm:pl-32 w-80 mt-6 "
           >
            <h4>

              Più di cinquant’anni di ricerca di un artista che si è mosso sulla
              linea dell’avanguardia, dal dopoguerra agli anni Duemila, tra
              linguaggi figurativi e astratti e attraverso la sperimentazione di
              tecniche e materiali artistici tra i più svariati: dai pigmenti
              pittorici tradizionali alle materie plastiche, dall’acciaio al
              vetro.
            </h4>

            <div className="flex flex-col items-start justify-center  my-10">
              <h1 className="text-white ">LEGGI LA BIOGRAFIA</h1>
              <Line />
            </div>
          </div>
        </div>
        <div className="">
          <img
          data-aos="fade-up"
          data-aos-duration="3000"
            className="sm:w-[500px] hidden sm:flex "
            src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/biografia.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Article;
