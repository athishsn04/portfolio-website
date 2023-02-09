import React from 'react'
import './about.css';
import dua from '../../assets/dua.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineProject} from 'react-icons/ai'
function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={dua} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5> Experience </h5>
              <small> 1+ Years Working experience</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5> Clients </h5>
              <small> 100+ Worldwide</small>
            </article>

            <article className="about__card">
              <AiOutlineProject className='about__icon'/>
              <h5> Projects </h5>
              <small> 10+ Completed Projects</small>
            </article>

            

            
          </div>
          <p>
              Hello, I am Athish. I am a new Grad student from Stevens Institute of Technology. I did my Master 
              of Science degree in <strong>Computer Engineering</strong>. Now I am working as a Full Stack Developer at 
              <strong>Poolular Inc</strong> from last three months.

            </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
