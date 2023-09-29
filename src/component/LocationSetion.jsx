import React from 'react'
import { location } from '../utils/content'
import { Link } from 'react-router-dom'
const LocationSetion = () => {
  return (
    <section className=''>
    <div className="serviceContent">
    {
      location.slice(0,3).map((item,index)=>{
        const {id,title,img,pera}=item
        return (
          <>
          <div className='serviceItem' key={id}>
          
           <img className='locationImg' src={img} alt={title} />
            <Link to={id}><h3>{title}</h3></Link>
          </div>
          </>
        )
      })
    }
    </div>
  </section>
  )
}

export default LocationSetion