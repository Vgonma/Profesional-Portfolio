import React from 'react'
import {Link} from 'react-router-dom'
// Component imports
import Me from '../../assets/images/Vic_smile.jpg'
import RightArrow from '../../assets/icons/arrow-right.svg'

function AboutPage() {
  return (
    <div id="About" className="about-card-container">
      <div className="about-card">
        <div className="about-card-img-container">
          <img className="about-card-me" src={Me} alt="Victor Gonzalez" />
        </div>
      <section className="about-card-text-container">
        <h3 className="about-card-title">Victor Gonzalez</h3>
        <p className="about-card-p">
        I am a full stack developer who can make any project look simple through my experience as a coding teacher. I believe software development is no longer the future, it has become the present. It is involved in everything we see and interact with and it is very important to be able to exploit it and develop the best software possible through best practices and thorough testing.
<br/><br/>
In order to achieve that I studied at  Microverse, a remote software development program that uses pair programming and project building to teach development. At Microverse, I learned to communicate with many people from different cultures and time zones, as well as organize and adapt to work as a team. I also learned the importance of writing clean code and how to ensure that the code is written the best way possible.
<br/><br/>
Whenever I am not programming I like to spend my time studying game development and game engines since I want to one day publish my own. In other cases, you can find me playing a challenging video game. I am particularly fond of the Souls series and I play through them whenever I can. 
<br/><br/>
If you are interested in working together don’t hesitate to contact me. I am always open.

        </p>
        <button className="btn btn--m btn--blue">
          <Link to="contact">Contact me</Link> 
          <img className="icon" src={RightArrow} alt="more" />
        </button>
      </section>
      </div>
    </div>
  )
}

export default AboutPage;
