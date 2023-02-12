import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/1480.gif'
import IMG2 from '../../assets/bg.jpg'


const data =[
  {
    id:1, 
    image: IMG2,
    title:'Crypto curreny dashboard',
    github:'https://github.com/',
    demo:'https://github.com',
  },
  {
    id:2, 
    image: IMG2,
    title:'Crypto curreny dashboard',
    github:'https://github.com/',
    demo:'https://github.com',
  },
  {
    id:3, 
    image: IMG2,
    title:'Crypto curreny dashboard',
    github:'https://github.com/',
    demo:'https://github.com',
  },
  {
    id:4, 
    image: IMG2,
    title:'Crypto curreny dashboard',
    github:'https://github.com/',
    demo:'https://github.com',
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github,demo}) => {
          return(
            <article key={id}  className='portfolio__item'>
            <div className='portfolio__item-image'>
             <img src={image} alt='title'/>
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target={'_blank'}> GitHub</a>
            <a href={demo} className='btn btn-primary' target={'_blank'}>Live Demo</a>
            </div>
          </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio
