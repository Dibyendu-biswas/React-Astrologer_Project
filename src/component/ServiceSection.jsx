import React from 'react'
import { service } from '../utils/content'
import { Link } from 'react-router-dom'
const ServiceSection = () => {
  return (
    <section>
      <div className="serviceContent">
      {
        service.slice(0,3).map((item,index)=>{
          const {id,idNo,title,img,pera}=item
          return (
            <>
            <div className='serviceItem' key={idNo}>
             <img className='serviceImg' src={img} alt={title} />
              <h3>{title}</h3>
              <p>{pera}</p>
              <Link to={id}>Read More</Link>
            </div>
            </>
          )
        })
      }
      </div>
    </section>
  )
}

export default ServiceSection