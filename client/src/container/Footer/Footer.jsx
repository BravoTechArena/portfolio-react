import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,

    }

    client.create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)

      })
  }

  return (
    <>
      <h2 className='head-text'>Reach out to me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href="mailto:klordbravo@gmail.com" className='p-text'>Mail</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='email' />
          <a href="tel:+2348105311007" className='p-text'>Call</a>
        </div>
      </div>

      {!isFormSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input type="text" placeholder='Your Name' className='p-text' value={name} onChange={handleChangeInput} name='name' />
        </div>
        <div className='app__flex'>
          <input type="email" placeholder='Your Email' className='p-text' value={email} onChange={handleChangeInput} name='email' />
        </div>
        <div>
          <textarea 
            className='p-text'
            name='message'
            value={message}
            placeholder='Your Message'
            onChange={handleChangeInput}
            />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}> {loading ? 'Sending' : 'Send Message'} </button>
      </div>
      :
      <div>
        <h3 className='head-text'>Thank you for contacting me!</h3>
      </div>}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
