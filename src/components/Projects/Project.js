// React compoenent for a single project

import React from 'react';
import './Projects.css';

function Project({ title, description, link }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

export default Project;