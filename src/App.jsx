import React from 'react'
import { CarouselWithContent } from './components/Carousels'
import Navbar from './components/Navbar'
import Section2 from './components/Section2'
import ImgSlider from './components/ImgSlider'
import Article from './components/Article'
import Cosmocorpi from './components/Cosmocorpi'

function App() {
  return (
    <div >
     
      <CarouselWithContent/>
      <Section2/>
      <ImgSlider/>
      
      <Article/>
      <Cosmocorpi/>
      
      <Navbar/>
      
     
    </div>
  )
}

export default App