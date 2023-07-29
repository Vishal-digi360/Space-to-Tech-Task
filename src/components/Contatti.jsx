import React from "react";
import Line from "./GlobalComp/Line";

const Contatti = () => {
  return (
    <>
      <div className="text-white sm:flex sm:flex-row-reverse">


        <h1 className="Playfair-font pl-5 text-3xl sm:hidden">Contatti</h1>

        <img
        className="my-10 px-4 w-96 sm:w-[700px]"
          src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/11/archivio-mario-russo-contatti.jpg"
          alt=""
        />


        <div className="text-gray-600 text-start pl-5 mt-10 flex flex-col items-start  justify-center">
        <h1 className="Playfair-font pl-5 text-5xl hidden sm:flex text-white ">Contatti</h1>

        <p  className="sm:px-20 mt-20">
          L’Archivio si propone di promuovere e sviluppare iniziative e attività
          culturali dirette ad approfondire la conoscenza e lo studio
          dell’attività artistica di Mario Russo. A questo scopo collabora
          attivamente con istituzioni pubbliche e private alla realizzazione di
          mostre e pubblicazioni relative all’opera dell’artista.
        </p>
        <p className="sm:px-20">Per ulteriori informazioni: </p>
        <div className="flex flex-col   my-10 sm:px-20">
          <h1 className="text-white sm:text-gray-600 ">INFO@ARCHIVIOMARIORUSSO.IT</h1>
          <Line />
        </div>
        </div>
      </div>
    </>
  );
};

export default Contatti;
