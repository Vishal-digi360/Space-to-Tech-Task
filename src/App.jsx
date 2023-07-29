import React from 'react'
import { CarouselWithContent } from './components/Carousels'
import Navbar from './components/Navbar'
import Section2 from './components/Section2'
import ImgSlider from './components/ImgSlider'
import Article from './components/Article'
import Cosmocorpi from './components/Cosmocorpi'
import ImgSection from './components/ImgSection'

function App() {
  return (
    <div className='pb-96' >
     
      <CarouselWithContent/>
      <Section2/>
      <ImgSlider/>
      
      <Article/>
      <Cosmocorpi/>
      <ImgSection/>
      <Navbar/>
      
     
    </div>
  )
}

export default App