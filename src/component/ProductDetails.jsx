import React from 'react'
import rasi from "../assets/rasi.png"
import banner from "../assets/banner.png"
const ProductDetails = () => {
   
  return (
    <section className='productDetail'>
        <div className='productContent'>
            <div className="rasi">
                <div className='rasiContent'>
                    <h3>Premier Astrological Counsel from a Respected Canadian Astrologer</h3>
                    
                        <p>Embark on a journey of cosmic wisdom and profound self-discovery with Astrologer Das Prakash, a trusted luminary in the realm of astrology based in Canada. With an unwavering commitment to providing top astrological advice, Das Prakash is your guiding light to unravel the mysteries of the stars and navigate life’s intricate tapestry.</p>
                        <p>
                        As a revered astrologer, Das Prakash brings a wealth of experience and expertise to the table. His deep understanding of celestial phenomena and their impact on human lives makes him a sought-after advisor for those seeking clarity, direction, and solutions to life’s myriad challenges.
                        </p>
                        <p>Whether you’re grappling with career decisions, relationship dynamics, health concerns, or simply seeking a deeper understanding of your life’s purpose, Astrologer Das Prakash stands as a beacon of trusted insight. His meticulous analysis of your astrological chart, combined with his intuitive perception, unveils the hidden threads that weave through your destiny.</p>
                    
                </div>
                <div id='rasiImg'>
                <img src={rasi} className='rasiImg' alt="" />
                </div>
            </div>
            <div className="poster">
            <div className='rasiContent'>
                    <h2>Preeminent and Renowned Astrologer in Canada</h2>
                    
                        <p>Astrologer Das Prakash’s fame is not simply built on predictions, but on his ability to bridge the gap between the celestial and the terrestrial. Through his perceptive readings, he unveils the mysteries of the cosmos, offering a unique perspective that resonates deeply with personal experiences and challenges. His insights extend beyond the stars, delving into the intricate threads that weave the fabric of destiny.</p>
                        <p>
                        What truly sets Astrologer Das Prakash apart is his unwavering commitment to his clients’ well-being. Each consultation is a transformative experience, where his sage counsel acts as a guiding force, illuminating paths, dispelling doubts, and empowering individuals to navigate life’s labyrinthine corridors with confidence and clarity.
                        </p>
                        <p>The recognition of Astrologer Das Prakash’s brilliance isn’t confined to mere accolades; it is etched in the countless success stories of those whose lives he has touched. His guidance has been instrumental in shaping destinies, fostering harmonious relationships, and propelling individuals towards their highest potential.</p>
                    
                </div>
                <div id='posterImg'>
                <img className="posterImg" src={banner} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDetails