import React from 'react'
import {Link} from 'react-router-dom'
import LinkedIn from '../assets/logos/Linkedin.svg'
import GitHub from '../assets/logos/github_icon.svg'


function Footer() {

  function scrollTop() {
    window.scrollTo(0,0);
  }

  return (
    <div className="footer-container">
      <div className="footer">
        <Link to="/" className="footer-title" onClick={scrollTop}>Victor G.</Link>
        <div className="footer-subsection">
          <Link to="/" className="footer-header" onClick={scrollTop}>Home</Link>
          <a href="#About">About me</a>
          <a href="#Projects">Projects</a>
        </div>
        <div className="footer-subsection">
          <Link to="contact" className="footer-header" onClick={scrollTop}>Contact</Link>
          <a href="#">Mail</a>
          <a href="https://www.linkedin.com/in/victor-gonzalez-massimi/" target="_blank">Linkedin</a>
        </div>
        <div className="footer-subsection">
          <p className="footer-header">Social</p>
          <div className="social-icons-container">
            <a href="https://www.linkedin.com/in/victor-gonzalez-massimi/" target="_blank"><img src={LinkedIn} alt="LinkedIn" /></a>
            <a href="https://github.com/Vgonma" target="_blank"><img src={GitHub} alt="GitHub" /></a>
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
