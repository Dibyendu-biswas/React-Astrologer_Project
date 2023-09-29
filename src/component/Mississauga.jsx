import React from 'react'
import Product from './Product'
import { location } from '../utils/content'
const Mississauga = () => {
    const {id,subtitle,img,p1,p2,p3}=location[4]
    return (
      <>
  <Product id={id} subtitle={subtitle} img={img} p1={p1} p2={p2} p3={p3}/>
      </>
    )
}

export default Mississauga