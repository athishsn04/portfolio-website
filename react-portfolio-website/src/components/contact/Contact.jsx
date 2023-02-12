import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wvg31co', 'template_rwdp7z6', form.current, 'NwG6jOIErV-nmuH-G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In touch </h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          
          
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>athishsn@gmail.com</h5>
            <a href="mailto:athishsn@gmail.com" target={'_blank'}>Send a Mail</a>
          </article>

          <article className="contact__option">
            <AiOutlineMessage className='contact__option-icon'/>
            <h4>Text </h4>
            <h5>+1 201-699-3890</h5>
            <a href="tel:+12016993890" target={'_blank'}>Text me on</a>
          </article>
          

        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='Name' placeholder='Your Full Name' required />
          <input type="email" name='Email' placeholder='Your Email-ID' required/>
          <textarea name="message"  rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
