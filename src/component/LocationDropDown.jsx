import React, { useState } from 'react'
import { location } from '../utils/content'
import { Link } from 'react-router-dom'
const LocationDropDown = () => {
  const [dropDown,setDropDown]=useState(false)
  return (
    <>
    <ul
    className={dropDown ? "location-submenu clicked" : "location-submenu"}
     onClick={()=>setDropDown(!dropDown)}>
        {
          location.slice(0,3).map((item)=>{
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

export default LocationDropDown