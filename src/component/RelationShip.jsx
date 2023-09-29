import React from 'react'
import { service } from '../utils/content'
import Product from './Product'
Product
const RelationShip = () => {
    const {id,subtitle,img,p1,p2,p3}=service[2]
  return (
    <>
<Product id={id} subtitle={subtitle} img={img} p1={p1} p2={p2} p3={p3}/>
    </>
  )
}

export default RelationShip