import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import ServiceDropDown from './ServiceDropDown'
import LocationDropDown from './LocationDropDown'
const SecNavTag = () => {
  const [isOpen,setIsOpen]=useState(false)
  const [location,setLocation]=useState(false)
  return (
    <nav className='secNav'>
    <div className='sec'>
        <img src={logo} alt="" className='logo'/>
        <div className='secContent'>
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to='/service'
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
              <h4>service</h4>
              <Link >
              {
                isOpen && <ServiceDropDown/>
              }
              </Link>
            </Link>
            <Link to='/locations'
                onMouseEnter={() => setLocation(true)}
                onMouseLeave={() => setLocation(false)}
            >
              <h4>Locations</h4>
              <Link >
              {
                location && <LocationDropDown/>
              }
              </Link>
            </Link>
            <Link to='/contact'>contact us</Link>
        </div>
    </div>
</nav>
  )
}

export default SecNavTag