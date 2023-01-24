import React from 'react'
import { NavLink } from 'react-router-dom'
import Download from '../../assets/icons/download.svg'
import AboutMe from '../AboutMe'
import ProjectCard from '../ProjectCard'
import projectImage from '../../assets/images/projectImage.svg';
import arrow from '../../assets/icons/arrow-right.svg'

function MainPage() {
  return (
    <>
      <article id="Hero" className="hero-container">
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
      <article className="about-container">
        <AboutMe />
      </article>
      <article className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <ProjectCard title="Awesome Books" image={projectImage} tech={['React', 'HTML&CSS', 'JavaScript']}/>
        <ProjectCard title="Project 2" image={projectImage} tech={['React', 'HTML&CSS', 'JavaScript']}/>
        <button className="btn btn--blue btn--l">More Projects <img src={arrow} alt="arrow" /></button>
      </article>
    </>
  )
}

export default MainPage
