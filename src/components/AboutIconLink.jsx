import React from 'react'

import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

const AboutIconLink = () => {
  return (
    <div className="aboutLink">
        <Link to='/about'>
        <FaQuestion size={30} color='white' />
        </Link>
    </div>
  )
}

export default AboutIconLink