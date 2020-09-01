import React from 'react';
import './App.css';
import Home from './components/home';
import AboutMe from './components/aboutMe';
import Education from './components/education';

import TechnicalSkills from './components/technicalSkills';
import Projects from './components/projects';

import SoftSkills from './components/soft';
import Experience from './components/experience';
import Interests from './components/interests';
import Volunteer from './components/volunteer';
import Navbar from './components/navbar';
import Certi from './components/Certificates';


function App() {
  return (
    <div className="App">
    <Navbar />
    <AboutMe />
    <Education />
    <Experience />
    <Certi />
    <TechnicalSkills />
    <Projects />
    <SoftSkills />
    <Volunteer />
    <Interests />


    </div>
  );
}

export default App;
