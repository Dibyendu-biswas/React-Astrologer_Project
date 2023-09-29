import React from 'react'
import { location } from '../utils/content'
import Product from './Product'
const Brampton = () => {
    const {id,subtitle,img,p1,p2,p3}=location[0]
    return (
      <>
  <Product id={id} subtitle={subtitle} img={img} p1={p1} p2={p2} p3={p3}/>
      </>
    )
}

export default Brampton