import React from 'react';

export default function Projects({ projectsData }) {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-light mb-16">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <div 
              key={project.id} 
              className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <div className="text-sm text-gray-500 mb-2">{project.year}</div>
              <h3 className="text-2xl font-medium mb-3 text-indigo-600">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}