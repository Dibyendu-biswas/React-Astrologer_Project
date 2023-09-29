import React from 'react'
import Product from './Product'
import { service } from '../utils/content'
import PageHero from './PageHero'
const NegetiveEnergy = () => {
    const {id,subtitle,img,p1,p2,p3}=service[1]
  return (
    <>
    {/* <PageHero title={id}/> */}
<Product id={id} subtitle={subtitle} img={img} p1={p1} p2={p2} p3={p3}/>
    </>
  )
}

export default NegetiveEnergy