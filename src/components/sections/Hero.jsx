import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ name, tagline }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-5xl md:text-7xl font-light mb-4 animate-fadeInUp">
          {name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fadeInUp">
          {tagline}
        </p>
        <a 
          href="#projects" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105"
        >
          View My Work <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}