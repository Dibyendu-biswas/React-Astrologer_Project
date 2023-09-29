import React, { useState } from 'react'
import {BsFillArrowRightCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs"
const Questions = ({title,desc}) => {
 const[isOpen,setIsOpen]=useState(false)

  return (
    <article className='question'>
    <header>
          <button onClick={()=>setIsOpen(!isOpen)}>
          {
                isOpen? <BsFillArrowDownCircleFill/> :<BsFillArrowRightCircleFill/>
          }
          </button>
          <h4 className={isOpen ? "active":null} >{title} <hr /> </h4>
    </header>
          <div className='ani'>
          {
                isOpen && (<p>{desc}</p>)
          }
          </div>
</article>
  )
}

export default Questions