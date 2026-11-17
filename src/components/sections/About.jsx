import React from 'react';

export default function About({ bio }) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-light mb-8">About</h2>
        <p className="text-xl text-gray-600 leading-relaxed">{bio}</p>
      </div>
    </section>
  );
}