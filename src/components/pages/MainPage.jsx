import React from 'react'
import { Fade } from 'react-reveal'
// Component imports
import { Link, NavLink } from 'react-router-dom'
import Download from '../../assets/icons/download.svg'
import AboutMe from '../AboutMe'
import ProjectCard from '../ProjectCard'
import projectImage from '../../assets/images/projectImage.svg';
import arrow from '../../assets/icons/arrow-right.svg'

function MainPage() {
  return (
    <>
    <Fade top distance="5%">
        <article id="Hero" className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Hello! I'm <br/>
              <NavLink to="about" className="primary hero-title hero-name"> Victor Gonzalez</NavLink>
              <br/>Full-stack Dev</h1>
            <p>This is my personal portfolio</p>
            <div className="hero-button-container">
            <NavLink to="projects" className="btn btn--blue">Projects</NavLink>
            <a href="https://drive.google.com/uc?export=download&id=1nrVjNaG5Ilzo1vOYRtQ1VDgV0FerHEm3" target="_blank" >
              <button className="btn btn--outline"><img className="icon" src={Download} alt="download" /> Resume</button>
            </a>
            </div>
          </div>
        </article>
        <article className="about-container">
          <AboutMe />
        </article>
          <article className="projects-container">
            <div className="projects-title-container">
              <h2 className="projects-title">Projects</h2>
            </div>
              <ProjectCard title="Awesome Books" image={projectImage} tech={['React', 'HTML&CSS', 'JavaScript']}/>
              <ProjectCard title="Project 2" image={projectImage} tech={['React', 'HTML&CSS', 'JavaScript']}/>
              <Link to='projects' className="btn btn--blue btn--l">More Projects <img src={arrow} alt="arrow" /></Link>
          </article>
      </Fade>
    </>
  )
}

export default MainPage
