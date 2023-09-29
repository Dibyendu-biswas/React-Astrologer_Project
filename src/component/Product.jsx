import React from 'react'
import PageHero from './PageHero';

const Product = ({subtitle,img,p1,p2,p3}) => {
    console.log(p1);
  return (
 <>
 <PageHero title={subtitle}/>
    <section className='about'>
      <div className="aboutContent">
      <img src={img} alt="" className='shiv'/>
      <div className='aboutDetails'>
        <h2>{subtitle}</h2>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>     
      </div>
      </div>
    </section>
 </>
  )
}

export default Product