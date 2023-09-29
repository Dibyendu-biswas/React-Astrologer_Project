import React from 'react'
import { service } from '../utils/content'
import PageHero from './PageHero'
const LoveAstro = () => {
    const {subtitle,singleImg:img}=service[0]
  return (
    <>
    <PageHero title={subtitle}/>
    <section className='about'>
        <div className='aboutContent'>
            <img className='shiv' src={img} alt="" />
            <div className='aboutDetails'>
                <h2 className=''>{subtitle}</h2>
                <p>Embark on a voyage of love and self-discovery with Astrologer Das Prakash, a revered specialist in the realm of love astrology. With a profound connection to the celestial energies and their influence on matters of the heart, Das Prakash is your guiding light to unravel the mysteries of love and relationships.</p>
                <p>
                As a distinguished love astrology specialist, Astrologer Das Prakash possesses a rare gift for deciphering the intricate cosmic patterns that shape your romantic journey. His deep insight into the positions of planets and stars at the time of your birth unveils the secrets that govern your emotional connections, preferences, and compatibility.
                </p>
                <p>Navigating the complex landscape of love requires both insight and foresight, and that’s precisely where Das Prakash’s expertise shines. His personalized consultations offer a panoramic view of your love life, highlighting the strengths and potential challenges in your relationships. Whether you’re seeking to find your soulmate, enhance the harmony in an existing relationship, or heal from past heartaches, Das Prakash’s guidance provides the compass you need."</p>

            </div>
        </div>
    </section>
    </>
  )
}

export default LoveAstro