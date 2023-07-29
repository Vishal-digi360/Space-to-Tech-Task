import React from 'react'
import CosmoDesc from './CosmoDesc'

const Cosmocorpi = () => {
  return (
    <>
    <div className='relative'>
    <div className='px-3 flex flex-wrap items-center  justify-center gap-10 mt-20  bg-opacity-60 opacity-60'>
    <img src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/cosmocorpi_1.jpg" alt="" data-aos="zoom-in" data-aos-duration="1500" className='sm:w-80  w-32'/>
    <img src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/cosmocorpi_2.jpg" alt=""  data-aos="zoom-in" data-aos-duration="2000" className='sm:w-80 w-32' />
    <img src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/cosmocorpi_3.jpg" alt="" data-aos="zoom-in"  data-aos-duration="2500" className='sm:w-80 w-32'/>
    <img src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/cosmocorpi_4.jpg" alt="" data-aos="zoom-in"  data-aos-duration="3000" className='sm:w-80 w-32'/>
    </div>
    <CosmoDesc/>
    </div>
    </>
  )
}

export default Cosmocorpi