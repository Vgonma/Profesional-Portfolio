import React from 'react'
import {Link} from 'react-router-dom'
import RightArrow from '../assets/icons/arrow-right.svg'
import Me from '../assets/Vic_smile.jpg'

function AboutMe() {
  return (
    <div id="About" className="about-card-container">
      <div className="about-card">
        <div className="about-card-img-container">
          <img className="about-card-me" src={Me} alt="Victor Gonzalez" />
        </div>
      <section className="about-card-text-container">
        <h3 className="about-card-title">About Me</h3>
        <p className="about-card-p">
        I am a software engineer passionate about solving challenges and developing new apps. Some technologies that I enjoy working on are JavaScript, React, Ruby, and Python.
        
        I enjoy working with people and collaborating to build big projects. I have worked with people from around the world and collaborated as a team as well as take actions as the team leader to complete projects on time. Some other technologies that I work with to acomplish this projects were Github and Git.

        I love learning new technologies and testing my skills to always keep improving.
        </p>
        <button className="btn btn--m btn--outline">
          <Link to="about">More About Me</Link> 
          <img className="icon" src={RightArrow} alt="more" />
        </button>
      </section>
      </div>
    </div>
  )
}

export default AboutMe
