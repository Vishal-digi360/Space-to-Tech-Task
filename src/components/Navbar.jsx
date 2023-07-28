import React from 'react'
import { RiMenu3Line } from "react-icons/ri";


const Navbar = () => {
  return (
    <>
  <div className=" w-full  absolute top-0  ">
        <div className="flex justify-between sm:px-[82px] px-4 py-[18px] sm:bg-transparent sm:shadow-none">
          <img className="w-32 sm:w-40 text-white " src="http://archiviomariorusso.it/svg/logo.svg" alt="logo" />
          <button className="px-[16px] py-[12px] text-white text-3xl"><RiMenu3Line title='Menu'></RiMenu3Line></button>
        </div>
      </div>


    </>
  )
}

export default Navbar