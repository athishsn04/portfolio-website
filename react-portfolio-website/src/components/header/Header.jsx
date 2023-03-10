import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/athish.JPG'
import HeaderSocials from './HeaderSocials'
import AnimatedHeader from './AnimatedHeader'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4> Hello I'm</h4>
        <div className='name'>
             <AnimatedHeader text="ATHISH SUJAY NATH" />

        </div>
                
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
