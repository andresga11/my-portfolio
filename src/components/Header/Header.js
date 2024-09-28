import React from 'react';
import './Header.css'; // Import your CSS styles

function Header() {
  return (
    <header>
      <h1>Andres Gallego</h1>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
