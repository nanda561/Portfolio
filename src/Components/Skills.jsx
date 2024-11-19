import React from "react";
import "./Skills.css";
import { java,python,js,html,css,git,github,react,C,figma} from '../assets/Skills/Skills.js'; // Correct import

const Skills = () => {
  const skills = [
    { name: "Java", image: java },
    { name: "C/C++", image: C },
    { name: "Python", image: python},
    { name: "HTML", image: html },
    { name: "CSS", image: css},
    { name: "JavaScript", image: js },
    { name: "React", image: react },
    { name: "Figma", image: figma },
    { name: "GitHub", image: github },
    { name: "Git", image: git },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img
              src={skill.image}
              alt={skill.name}
              className="skill-icon"
            />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
