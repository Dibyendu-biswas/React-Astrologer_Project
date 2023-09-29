import React from 'react'
import bhole from "../assets/bholenath.png"
const ShivContact = () => {
  return (
    <section className='ShivContact'>
        <div className="bholeContainer">
        <div id='bhole'>
          <img className='bhole' src={bhole} alt="" />
        </div>
        <form >
        <div className='shivForm'>
        <div>
            <label >Name</label>
            <br />
            <input type="text"  placeholder='Name'/>
          </div>
          <div>
            <label >Email</label>
            <br />
            <input type="email"  placeholder='Email'/>
          </div>
          <div>
            <label >Message</label>
            <br />
            <textarea cols="60" rows="7" type="text"  placeholder='Message'/>
          </div>
        </div>
        <button>send</button>
        </form>
        </div>
    </section>
  )
}

export default ShivContact