import React from 'react'
import PageHero from '../component/PageHero'
import shiv from "../assets/shiv.png"
const About = () => {
  return (
    <>
    <PageHero title="about"/>
    <section className='about'>
      <div className="aboutContent">
      <img src={shiv} alt="" className='shiv'/>
      <div className='aboutDetails'>
        <h2>ABOUT ASTROLOGER DAS PRAKASH</h2>
        <p>Introducing Astrologer Das Prakash, a luminous guide through the celestial tapestry, offering profound insights and guidance to those seeking to navigate the intricacies of life. With a deep-rooted connection to the stars and an extensive knowledge of astrological arts, Das Prakash is a beacon of wisdom, illuminating paths and enriching lives.</p>
        <p>As you step into his world, you’ll find Astrologer Das Prakash’s presence to be both reassuring and enlightening. His calm and welcoming demeanor instantly sets a tranquil atmosphere, allowing individuals to open up and share their stories, dreams, and challenges. A gifted listener, he weaves these personal narratives into the fabric of his astrological insights, creating a profoundly tailored experience for each individual.</p>
        <p>Astrologer Das Prakash draws from a diverse spectrum of astrological traditions, including Western astrology, Vedic astrology, and ancient mystic teachings. This comprehensive approach empowers him to unravel the cosmic influences shaping one’s life journey. His studio becomes a sacred space where the interplay of planets and stars is translated into tangible guidance for navigating relationships, career, health, and personal growth. Beyond the confines of consultations, Astrologer Das Prakash’s passion for spreading cosmic awareness shines through workshops and seminars. </p>
      </div>
      </div>
    </section>
    </>
  )
}

export default About

