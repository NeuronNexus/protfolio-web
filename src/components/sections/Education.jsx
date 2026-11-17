import React from 'react';

export default function Education({ educationData }) {
  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-light text-center mb-12">Education</h2>
        {educationData.map((ed, i) => (
          <div key={i} className="text-center text-gray-700">
            <h3 className="text-2xl font-medium">{ed.degree}</h3>
            <p className="text-indigo-600">{ed.institution}</p>
            <p className="text-gray-500">{ed.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}