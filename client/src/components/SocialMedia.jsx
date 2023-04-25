import React from 'react'
import { BsTwitter, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://twitter.com/pstsmoq">
        <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://facebook.com/kingsley.chibuike.54">
        <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://wa/+2348105311007">
        <BsWhatsapp />
        </a>
      </div>
      <div>
        <a href="https://linkedin.com/lordbravo11">
        <BsLinkedin />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
