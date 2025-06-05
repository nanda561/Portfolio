import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A sample project description",
      techStack: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Another sample project description",
      techStack: ["React", "Firebase", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
    },
    {
      id: 3,
      title: "Project 3",
      description: "A third sample project description",
      techStack: ["React", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-[#1F252E]">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-[#27293d] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 flex flex-col"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-[#f9532d] text-white rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-[#f9532d] transition-colors"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-[#f9532d] transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;