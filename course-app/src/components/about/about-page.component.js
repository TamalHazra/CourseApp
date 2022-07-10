import React from 'react'
import './about-page.styles.css'

export const About = () => {
  return (
    <div className='about-container'>
        <h1>This is about course</h1>
        <div>
        <img  className="about-container" src={require("../../assets/image2.jpg")}/></div>
    </div>
  )
}

// export default About