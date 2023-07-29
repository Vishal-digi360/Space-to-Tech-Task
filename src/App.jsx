import React from 'react'
import { CarouselWithContent } from './components/Carousels'
import Navbar from './components/Navbar'
import Section2 from './components/Section2'
import ImgSlider from './components/ImgSlider'
import Article from './components/Article'

function App() {
  return (
    <div >
     
      <CarouselWithContent/>
      <Section2/>
      <ImgSlider/>
      
      <Article/>
      
      <Navbar/>
      
     
    </div>
  )
}

export default App