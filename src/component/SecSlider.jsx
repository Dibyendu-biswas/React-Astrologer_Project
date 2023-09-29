import React, { useEffect, useState } from 'react'
import { SliderTwo } from '../utils/content'
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
const SecSlider = () => {
  const [index,setIndex]=useState(0)
  const {name,img,desc}=SliderTwo[index]

  const currentindex=(number)=>{
    if(number >SliderTwo.length-1){
      return 0
    }
    if(number < 0){
      return SliderTwo.length - 1
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
  },[SliderTwo])
  return (
 <section className='sliderTwo'>
       <div className="twoContainer">
       <h2>What Our Client Say About Astrologer Das Prakash </h2>
       <p>{desc}</p>
       <div className='twoImgSec'>
        <img className='twoImg' src={img} alt="" />
        <span>{name}</span>
       </div>
       <div className='sliderBtn'>
       </div>
  <button className='prev'  onClick={prev}><FaChevronLeft/> </button>
  <button className='next' onClick={next}><FaChevronRight/> </button>
   </div>
 </section>
  )
}

export default SecSlider