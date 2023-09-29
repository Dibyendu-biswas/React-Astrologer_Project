import React from 'react'
import { service } from '../utils/content'
import Product from './Product'
Product
const LoveRenuite = () => {
    const {id,subtitle,img,p1,p2,p3}=service[4]
    return (
      <>
  <Product id={id} subtitle={subtitle} img={img} p1={p1} p2={p2} p3={p3}/>
      </>
    )
}

export default LoveRenuite