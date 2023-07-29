import React from "react";

const Section2 = () => {
  return (
    <>

    <div className="flex sm:justify-between justify-around mt-10 ">
      <img
      className="w-1/3 hover:scale-105 duration-500"
      
        src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/intro_1.png"
        data-aos="fade-up"
     data-aos-duration="2500"
        alt=""
      />
      <p className="text-[#a1a1a1] hidden  sm:flex sm:flex-col text-center items-center justify-center w-1/3 px-10 ">
        L’Archivio Mario Russo conserva l’intero corpus dei dipinti, disegni e
        sculture e la documentazione relativa all’opera, e alla vita,
        dell’artista che operò principalmente in ambiente torinese, a livello
        nazionale e con qualche incursione internazionale. L’archivio
        rappresenta uno strumento di ricostruzione documentaria, filologica e
        storica delle sue opere, e ne promuove la conservazione e la
        valorizzazione.
      </p>
      <img
      className="w-1/3 hover:scale-105 duration-500"
      data-aos="fade-up"
     data-aos-duration="2500"
        src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/intro_2.png"
        alt=""
      />
      </div>

      <div className="sm:hidden my-10">
      <p className="text-[#a1a1a1] px-14 " data-aos="fade-up"
     data-aos-duration="1500">
        L’Archivio Mario Russo conserva l’intero corpus dei dipinti, disegni e
        sculture e la documentazione relativa all’opera, e alla vita,
        dell’artista che operò principalmente in ambiente torinese, a livello
        nazionale e con qualche incursione internazionale. <br /> <br /> L’archivio
        rappresenta uno strumento di ricostruzione documentaria, filologica e
        storica delle sue opere, e ne promuove la conservazione e la
        valorizzazione.
      </p>
      </div>
    </>
  );
};

export default Section2;
