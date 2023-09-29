import React from 'react'
import NumberCounting from './NumberCounting'

const NumberSection = () => {
  return (
    <div className='number'>
        <NumberCounting start={0} end={42875} duration={2000} title="SATISFIED CUSTOMERS"/>
        <NumberCounting start={1000} end={42875} duration={2000} title="HAPPY CLIENT"/>
        <NumberCounting title="YEAR OF EXPERIENCE" start={0} end={40
} duration={2000}/>
        <NumberCounting title="INTERNATIONAL AWARDS" start={0} end={148
} duration={2000}/>
    </div>
  )
}

export default NumberSection
