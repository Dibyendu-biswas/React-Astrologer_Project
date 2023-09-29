import React from 'react'
import logo from "../assets/logo.png"
import { nav } from '../utils/content'
import { service } from '../utils/content'
import { location } from '../utils/content'
import {AiOutlineArrowRight} from "react-icons/ai"
const OverallView = () => {
  return (
    <section className='overallView'>
        <div className='list'>
            <div className='item1'>
                <img src={logo} alt="" />
                <h3>
                Das Prakash is world famous personality today. This is all because of his work and dedication to serve people. 
                </h3>
            </div>
            <div className='item2'>
                <h2>Quick Links</h2>
                {
                    nav.map((item)=>{
                        const {id,name}=item
                        return(
                            <div className='item2List' key={id}>
                            <AiOutlineArrowRight/>
                            <h3>{name}</h3>
                            </div>
                        )
                    })
                }
            </div>
            <div className='item2'>
                <h2>Astrology Services</h2>
                {
                    service.map((item)=>{
                        const {id,idNo}=item
                        return(
                            <div className='item2List' key={idNo}>
                                <AiOutlineArrowRight/>
                                <h3>{id}</h3>
                            </div>
                        )
                    })
                }
            </div>
            <div className='item2'>
                <h2>Astrology Cities</h2>
                {
                    location.map((item)=>{
                        const {id,idNo}=item
                        return(
                            <div className='item2List' key={idNo}>
                                <AiOutlineArrowRight/>
                                <h3>{id}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default OverallView