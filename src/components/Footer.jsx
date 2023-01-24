import React from 'react'
import {Link} from 'react-router-dom'
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
          <Link to="/" className="footer-header" onClick={scrollTop}>Home</Link>
          <a href="#About">About me</a>
          <a href="#Projects">Projects</a>
        </div>

        <div className="footer-subsection">
          <Link to="contact" className="footer-header" onClick={scrollTop}>Contact</Link>
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
