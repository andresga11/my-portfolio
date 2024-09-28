// React component for the projects section

import React from 'react';
import Project from './Project';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <Project
        title="My Portfolio"
        description="A personal portfolio website built with React."
        link="https://your-portfolio.com"
      />
      <Project
        title="Another Project"
        description="A description of another cool project."
        link="https://github.com/your-project"
      />
    </section>
  );
}

export default Projects;
