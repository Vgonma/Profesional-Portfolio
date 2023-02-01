import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Fade } from 'react-reveal'
// Component imports
import Me from '../../assets/images/Vic_smile.jpg'
import RightArrow from '../../assets/icons/arrow-right.svg'
import Skill from '../Skill'
import speaker from '../../assets/icons/speakerphone.svg'
import code from '../../assets/icons/code.svg'
import languages from '../../assets/icons/languages.png'
import template from '../../assets/icons/template.svg'
import phone from '../../assets/icons/device-mobile.svg'
import world from '../../assets/icons/worldwide.png'

const fullText = `I am a full stack developer who can make any project look simple through my experience as a coding teacher. I believe software development is no longer the future, it has become the present. It is involved in everything we see and interact with and it is very important to be able to exploit it and develop the best software possible through best practices and thorough testing.
<br><br>
In order to achieve that I studied at  Microverse, a remote software development program that uses pair programming and project building to teach development. At Microverse, I learned to communicate with many people from different cultures and time zones, as well as organize and adapt to work as a team. I also learned the importance of writing clean code and how to ensure that the code is written the best way possible.\nWhenever I am not programming I like to spend my time studying game development and game engines since I want to one day publish my own. In other cases, you can find me playing a challenging video game. I am particularly fond of the Souls series and I play through them whenever I can.\nIf you are interested in working together don’t hesitate to contact me. I am always open.`;

const shortText = `I am a full stack developer who can make any project look simple through my experience as a coding teacher. I believe software development is no longer the future, it has become the present. It is involved in everything we see and interact with and it is very important to be able to exploit it and develop the best software possible through best practices and thorough testing.
`


function AboutPage() {
  const [text, setText] = useState(fullText);
  const [showMore, setShowMore] = useState(false);
  // const textArea = document.getElementById('textArea');
  
  
  useEffect(() => {
    document.getElementById('textArea').innerHTML = text;
  },[text])

  function changeTextLength() {
    
  }

  return (
    <Fade top distance="5%">
      <div className="about-page-container">
        <section className="aboutme-info-container">
          <div className="aboutme-image-container">
            <img src={Me} alt="Victor Gonzalez" />
          </div>
          <div className="aboutme-text-container">
            <h1 className="aboutme-title title--big">Victor Gonzalez</h1>
            <p id="textArea" className="about-card-p">
              {text} <br/> <span onClick={changeTextLength}>more...</span>
            </p>
          </div>
          <button className="aboutme-btn btn btn--m btn--blue">
                <Link to="/contact">Contact me</Link> 
                <img className="icon" src={RightArrow} alt="more" />
              </button>
        </section>


        {/* <div className="about-card-container">
          <div className="about-page-card">
            <div className="about-card-img-container">
              <img className="about-card-me" src={Me} alt="Victor Gonzalez" />
            </div>
            <h3 className="about-card-title title--big">Victor Gonzalez</h3>
            <section className="about-page-card-text-container">
              <p className="about-card-p">
              I am a full stack developer who can make any project look simple through my experience as a coding teacher. I believe software development is no longer the future, it has become the present. It is involved in everything we see and interact with and it is very important to be able to exploit it and develop the best software possible through best practices and thorough testing.
              <br/><br/>
              In order to achieve that I studied at  Microverse, a remote software development program that uses pair programming and project building to teach development. At Microverse, I learned to communicate with many people from different cultures and time zones, as well as organize and adapt to work as a team. I also learned the importance of writing clean code and how to ensure that the code is written the best way possible.
              <br/><br/>
              Whenever I am not programming I like to spend my time studying game development and game engines since I want to one day publish my own. In other cases, you can find me playing a challenging video game. I am particularly fond of the Souls series and I play through them whenever I can. 
              <br/><br/>
              If you are interested in working together don’t hesitate to contact me. I am always open.

              </p>
              <button className="aboutme-btn btn btn--m btn--blue">
                <Link to="/contact">Contact me</Link> 
                <img className="icon" src={RightArrow} alt="more" />
              </button>
            </section>
          </div>
        </div> */}
        <section className="my-skills-container">
          <h2  className="my-skills-title">My Skills</h2>
          <Fade top distance="5%">

          
          <div className="skills-grid">
            <Skill
              title="Frontend and Backend"
              image={code}
              text="I know how various tools such as: HTML/CSS, React, Redux, Bootstrap, Tailwind and nodejs"
              />
            <Skill
              title="Programming Languages"
              image={languages}
              text="I work with this languages: C/C++, Java, JavaScript, Python, and Ruby."
              />
            <Skill
              title="Other tools"
              image={template}
              text="Some other tools that I know how to use are: Git and Github, Linux, MySql, and Jest."
            />
            <Skill
              title="Comunication"
              image={speaker}
              text="I can communicate in an effective way with people from various cultures around the world to collaborate in the project and fulfill any requiremetns."
            />
            <Skill
              title="Responsiveness"
              image={phone}
              text="I develop websites to be responsive and work well on any size of screen and always giving the user the best experience possible."
            />
            <Skill
              title="Remote"
              image={world}
              text="I can work with people from all over the world using various platforms like Zoom, Microsoft Teams, Skype, Discord and more."
            />
          </div>
          </Fade>
        </section>
      </div>
    </Fade>
  )
}

export default AboutPage;
