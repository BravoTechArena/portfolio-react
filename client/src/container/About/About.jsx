import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './About.scss'

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query)
    .then((data) => setAbouts(data))
    .catch(error => console.log(error))
  }, [])

  
  return (
    <>
      <h2 className='head-text'>
        I Turn Your <span>Dream</span><br/> to <span>Reality</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{durarion: 0.5, type: 'tween'}}
            className='app__profiles-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style ={{ marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style ={{ marginTop: 20}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__whitebg'
  )
