import React from "react";
import "./Skills.css"; 
import {java} from '../assets/Skills/Skills.js';

const Skills = () => {
  return (
    <section className="skills-container">
      <h2 className="skills-title">MY SKILLS</h2>
      <div className="orbit-container">
        <div className="orbit">
          <div className="skill-icon html-icon">HTML</div>
          <div className="skill-icon css-icon">CSS</div>
          <div className="skill-icon js-icon">JavaScript</div>
          <div className="skill-icon react-icon">React</div>
          <div className="skill-icon python-icon">Python</div>
          <div className="skill-icon git-icon">Git</div>
          <div className="skill-icon java-icon"><img src={java} alt="Java" className="icon-image" /></div>
          <div className="skill-icon cpp-icon">C/C++</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
