import React from 'react'

const PageHero = ({title}) => {
  return (
    <section className='pageHero'>
        <div className='pageDiv'>
            <h3>{title}</h3>
        </div>
    </section>
  )
}

export default PageHero