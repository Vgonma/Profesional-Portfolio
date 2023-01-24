import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import projectImg from '../assets/images/projectImage.svg';

function ProjectCard({ title = 'Project', image, tech = [] }) {
  const [projectTitle, setProjectTitle] = useState(title);
  const [projectImg, setprojectImg] = useState(image);
  const [projectTech, setProjectTech] = useState(tech)

  return (
    <Link to={`projects/${projectTitle.split(' ').join('-').toLowerCase()}`} className="single-project-container">
        <img className="project-img" src={projectImg} alt={projectTitle} />
        <div className="project-info">
          <h3 className="project-title">{projectTitle}</h3>
          <div className="tech-stack-container">
          { projectTech.map((item, i) => (
            <div  className="tech" key={i}>{item}</div>
            )) }
          </div>
        </div>
    </Link>
  )
}

export default ProjectCard;
