import React, { useState } from 'react'

import { faq } from '../utils/content'
import Questions from './Questions'
const Faq = () => {
      const [data,setData]=useState(faq)
  return (
      <section className='faq'>
            <div className="faqContainer">
                  {data.map((item)=>{
                  
                        return (
                             <Questions key={item.id} {...item}/>
                        )
                  })}
            </div>
      </section>
  )
}
export default Faq
