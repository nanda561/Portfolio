import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A sample project description that showcases the main features and purpose of this project in a concise way.",
      techStack: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Another sample project description highlighting the key aspects and technologies used in building this solution.",
      techStack: ["React", "Firebase", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
    },
    {
      id: 3,
      title: "Project 3",
      description: "A third sample project description explaining the main features and technical challenges overcome in this project.",
      techStack: ["React", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1F252E] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          My <span className="text-[#f9532d]">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#27293d] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#f9532d] text-white rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-[#f9532d] transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" /> 
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-[#f9532d] transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" /> 
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;