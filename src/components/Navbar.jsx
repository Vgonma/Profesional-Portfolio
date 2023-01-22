import React from 'react';
import { useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import cross from '../assets/icons/cross.svg';
import hamburger from '../assets/icons/hamburger.svg';

function Navbar() {
  const navRef = useRef();

  const toggleNavbar = () => {
    navRef.current.classList.toggle('responsive-nav');
  };

  return (
    <header className='navbar'>
      <div className='logo'>
        <Link to={'/'} className="nav-link" >Victor G.</Link>
      </div>
      <nav ref={navRef} className='nav'>
        <div className="nav-name">Victor Gonzalez</div>
        <NavLink to={'/'} className="nav-link" onClick={toggleNavbar}>Home</NavLink>
        <NavLink to={'about'} className="nav-link" onClick={toggleNavbar}>About</NavLink>
        <NavLink to={'projects'} className="nav-link" onClick={toggleNavbar}>Projects</NavLink>
        <NavLink to={'contact'} className="nav-link" onClick={toggleNavbar}>Contact Me</NavLink>
        <button className='nav-btn nav-close-btn' onClick={toggleNavbar}>
          <img src={cross} />
        </button>
        <div className="copyright">© 2023 Victor Gonzalez</div>
      </nav>
      <button className='nav-btn' onClick={toggleNavbar}>
        <img src={hamburger} />
      </button>
    </header>
  );
}

export default Navbar;
