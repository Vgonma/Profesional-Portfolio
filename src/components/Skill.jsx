import React, { useState } from 'react'

function Skill({image, title, text}) {
  const [skillImage, setSkillImage] = useState(image);
  const [skillTitle, setSkillTitle] = useState(title);
  const [skillText, setSkillText] = useState(text);

  return (
    <div className="skill-card">
      <div className="skill-image-container">
        <img src={image} alt="skill" />
        <h3 className="skill-title">{title}</h3>
      </div>
      <p className="skill-text">{text}</p>
    </div>
  )
}

export default Skill;
