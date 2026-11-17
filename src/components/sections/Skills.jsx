import React from 'react';

export default function Skills({ skillsData }) {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-light mb-12">Skills</h2>
        <div className="grid md:grid-cols-4 gap-10">
          {skillsData.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div key={i} className="group text-center">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                  <Icon size={30} className="text-gray-700 group-hover:text-indigo-600" />
                </div>
                <h3 className="font-medium mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}