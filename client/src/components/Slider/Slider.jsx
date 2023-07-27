import React from 'react'
import './Slider.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img1 from './img1.jpg'
// import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'

const Slider = () => {

   const [currentSlide, setCurrentSlide] = React.useState(0)

   function prevSlide() {
      return (
         setCurrentSlide(currentSlide === 0 ? 2 : (currentSlide-1))
      )
   }

   function nextSlide() {
      return (
         setCurrentSlide(currentSlide === 2 ? 0 : (currentSlide+1))
      )
   }

   const data = [
      img1,
      img3,
      img4
   ];

  return (
   <div className='slider'>
      <div className="container" style={{transform : `translateX(-${currentSlide*100}vw)`}}>
         <img src={data[0]} alt="" />
         <img src={data[1]} alt="" />
         <img src={data[2]} alt="" />
      </div>
      <div className="icons">
         <div className="icon" onClick={prevSlide}>
            <ArrowBackIcon/>
         </div>
         <div className="icon" onClick={nextSlide}>
            <ArrowForwardIcon/>
         </div>
      </div>
   </div>
  )
}

export default Slider