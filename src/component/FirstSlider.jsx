import React, { useEffect, useState } from 'react'
import { slider } from '../utils/content'
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
const FirstSlider = () => {
  const [index,setIndex]=useState(0)
  const {img}=slider[index]

  const currentindex=(number)=>{
    if(number >slider.length-1){
      return 0
    }
    if(number < 0){
      return slider.length - 1
    }
    return number
    
  }
  const prev=()=>{
    setIndex((index)=>{
      let pre=index -1
      return currentindex(pre)
    })
  }
  const next=()=>{
    setIndex((index)=>{
      let next=index +1
      return currentindex(next)
    })
  }
  useEffect(()=>{
    let slider=setTimeout(() => {
      setIndex(index + 1)
    }, 2000);
    return () => clearInterval(slider)
  },[slider])


  return (
    <section className='slider'>
    <div className='sliderContent'>
   <img className='sliderImg' src={img} alt="" />
   </div>
   <div className='sliderBtn'>
  <button className='prev'  onClick={prev}><FaChevronLeft/> </button>
  <button className='next' onClick={next}><FaChevronRight/> </button>
   </div>
</section>
 )
}

export default FirstSlider