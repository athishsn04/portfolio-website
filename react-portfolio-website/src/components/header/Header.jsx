import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/athish.JPG'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Athish Sujay Nath</h1>
        <h5 className="text-light"> Full Stack Developer</h5>
        <CTA />
        <HeaderSocials/>
        <a href='#contact' className='scroll-down'>Scroll Down</a>
        <div className="me">
        
          <img src={ME} alt="me" />

          
        </div>
      </div>
    </header>
  )
}

export default Header
