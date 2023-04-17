import React from 'react'
import Footer from './Footer'
import us from '../imgs/us.png'
function About() {
  return (
    <div className='about-container'>
      <div className='container'>
        <h2 className='text-center display-2'>About Us</h2>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <img alt='us image' src={us} className='img img-fluid border border-5'></img>
          </div>
          <div className='col-12 col-md-6'>
            <p className='about-us-text'>Chambéry Antiques is a small family-owned business that specializes in providing customers with unique and high-quality antique pieces. Our passion for antiques started over 25 years ago, and we have since been traveling the globe in search of the finest pieces for our customers. Our collection ranges from vintage furniture, art pieces, and collectibles, all of which are sourced from public antique shows to private European collectors.</p>
            <p className='about-us-text'>We take pride in providing our customers with exceptional antique pieces that are not only aesthetically pleasing but also tell a story. Every item in our collection has its own unique history, and we love to share the story behind each piece with our customers. We believe that antique pieces bring character and warmth to any home, and we strive to help our customers find the perfect piece to add to their collection.</p>
            <p className='about-us-text'>At Chambéry Antiques, we are dedicated to providing our customers with that <i>perfect</i> piece for their home. Whether you are a seasoned collector or new to the world of antiques, we are confident that our collection will leave a lasting impression.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About