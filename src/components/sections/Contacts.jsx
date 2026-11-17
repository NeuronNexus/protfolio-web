import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact({ email, linkedin, github }) {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-light mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-600 mb-12">
          Interested in working together? Let's create something impactful.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          <a 
            href={`mailto:${email}`} 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800"
          >
            <Mail size={20}/> Email Me
          </a>
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-gray-900"
          >
            <Linkedin size={20}/> LinkedIn
          </a>
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-gray-900"
          >
            <Github size={20}/> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}