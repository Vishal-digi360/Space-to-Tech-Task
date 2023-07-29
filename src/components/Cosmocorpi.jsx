import React from 'react'
import CosmoDesc from './CosmoDesc'

const Cosmocorpi = () => {
  return (
    <>
    <div className='relative'>
    <div className='px-3 sm:flex sm:flex-wrap items-center sm:flex-row flex flex-col justify-center gap-10 mt-20  bg-opacity-60 opacity-60'>
    <img src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/cosmocorpi_1.jpg" alt="" data-aos="zoom-in" data-aos-duration="1500" className='w-80'/>
    <img src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/cosmocorpi_2.jpg" alt=""  data-aos="zoom-in" data-aos-duration="2000" className='w-80' />
    <img src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/cosmocorpi_3.jpg" alt="" data-aos="zoom-in"  data-aos-duration="2500" className='w-80'/>
    <img src="https://archiviomariorusso.it/admin/wp-content/uploads/2020/10/cosmocorpi_4.jpg" alt="" data-aos="zoom-in"  data-aos-duration="3000" className='w-80'/>
    </div>
    <CosmoDesc/>
    </div>
    </>
  )
}

export default Cosmocorpi