import React from 'react'
import arrow from  "../assets/arrow.png"
import wp from  "../assets/WhatsApp.svg.png"
const FirstNavTag = () => {
  return (
    <nav className='firstNav'>
        <div className='first'>
            <h3>pandithdasprakash1@gmail.com</h3>
            <img src={arrow} alt="" className='icon'/>
            <h3>Get a Free Reading Now!</h3>
            <img src={wp} alt="" className='icon' />
            <h3>+1 (647) 642-4061</h3>
        </div>
    </nav>
  )
}

export default FirstNavTag