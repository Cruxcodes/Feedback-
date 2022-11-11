import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Card>
      <h1>About this project</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, ad aliquid repellendus consectetur et non soluta est corporis nemo tempora.</p>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </Card>
  )
}

export default About