import React from 'react'
import ProjectCard from '../ProjectCard';
import project1 from '../../assets/images/bookstore-thumbnail.png';
import project2 from '../../assets/images/math-magician-thumbnail.png';
import project3 from '../../assets/images/SnapScan-thumbnail.png';

function ProjectsPage() {
  return (
    <div className="prjects-container">
      <ProjectCard link="https://snap-scan-on-rails.onrender.com/" title="Snap Scan" image={project3} tech={['Ruby', 'Ruby on Rails', 'HTML&CSS', 'Bootstrap', 'Scss']}/>
      <ProjectCard link="https://bookstore-0ob6.onrender.com/" title="Awesome Books" image={project1} tech={['React', 'HTML&CSS', 'JavaScript', 'Redux']}/>
      <ProjectCard link="https://math-magician-pi3w.onrender.com/" title="Math Magician" image={project2} tech={['React', 'HTML&CSS', 'JavaScript']}/>
    </div>
  )
}

export default ProjectsPage;
