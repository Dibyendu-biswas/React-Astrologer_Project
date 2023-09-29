import React from 'react'
import Product from './Product'
import { location } from '../utils/content'
import PageHero from './PageHero'
const Caledon = () => {
    const {id,subtitle,img,p1,p2,p3}=location[1]
    return (
      <>
      {/* <PageHero title={id}/> */}
  <Product id={id} subtitle={subtitle} img={img} p1={p1} p2={p2} p3={p3}/>
      </>
    )
}

export default Caledon