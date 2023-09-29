import React, { useState } from 'react'
import { service } from '../utils/content'
import { Link } from 'react-router-dom'
const ServiceDropDown = () => {
  const [dropDown,setDropDown]=useState(false)
  return (
    <>
    <ul
    className={dropDown ? "services-submenu clicked" : "services-submenu"}
     onClick={()=>setDropDown(!dropDown)}>
        {
          service.map((item)=>{
            const{id,idNo}=item
            return (
              <li key={idNo} >
                <Link to={id}>{id}</Link>
              </li>
            )
          })
        }
    </ul>
    </>
  )
}

export default ServiceDropDown