import React from 'react';
import './App.css';
import Header from './components/Header/Header';  // Import the Header component
import AboutMe from './components/AboutMe/AboutMe';  // Import the AboutMe component
import Projects from './components/Projects/Projects';  // Import the Projects component
// import Skills from './components/Skills/Skills';  // Import the Skills component
// import Contact from './components/Contact/Contact';  // Import the Contact component

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      {/* <Skills />
      <Contact /> */}
    </div>
  );
}

export default App;
