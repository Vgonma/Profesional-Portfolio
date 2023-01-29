import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import LinkedIn from '../assets/logos/Linkedin.svg'
import GitHub from '../assets/logos/github.svg'
import Mail from '../assets/logos/email.svg'


function Footer() {

  function scrollTop() {
    window.scrollTo(0,0);
  }

  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-subsection">
        <Link to="/" className="footer-title" onClick={scrollTop}>Victor G.</Link>
        <a href="mailto:victorgmassimi@hotmail.com">victorgmassimi@hotmail.com</a>
        </div>
        <div className="footer-subsection">
          <NavLink to="/" className="footer-header" onClick={scrollTop}>Home</NavLink>
          <NavLink to="about" className="footer-header" onClick={scrollTop}>About Me</NavLink>
          <NavLink to="projects" className="footer-header" onClick={scrollTop}>Projects</NavLink>

        </div>

        <div className="footer-subsection">
          <div>
            <NavLink to="contact" className="footer-header" onClick={scrollTop}>Contact</NavLink>
          </div>
          <div className="social-icons-container">
            <a href="https://www.linkedin.com/in/victor-gonzalez-massimi/" target="_blank"><img src={LinkedIn} alt="LinkedIn" /></a>
            <a href="https://github.com/Vgonma" target="_blank"><img src={GitHub} alt="GitHub" /></a>
            <a href="mailto:victorgmassimi@hotmail.com" target="_blank"><img src={Mail} alt="GitHub" /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2022 Victor Gonzalez</p>
      </div>
    </div>
  )
}

export default Footer
