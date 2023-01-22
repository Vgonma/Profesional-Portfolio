import React from 'react'
import { NavLink } from 'react-router-dom'
import Download from '../../assets/icons/download.svg'

function MainPage() {
  return (
    <article className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Hello! I'm <br/>
          <NavLink to="about" className="primary hero-title hero-name"> Victor Gonzalez</NavLink>
          <br/>Full-stack Dev</h1>
        <p>This is my personal portfolio</p>
        <div className="hero-button-container">
        <NavLink to="projects" className="btn btn--blue">Projects</NavLink>
        <button className="btn btn--outline"><img className="icon" src={Download} alt="download" /> Resume</button>
        </div>
      </div>

    </article>
  )
}

export default MainPage
