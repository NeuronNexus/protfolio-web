import React from 'react';

export default function Footer({ name }) {
  return (
    <footer className="py-8 text-center text-gray-600 border-t border-gray-200">
      <p>&copy; 2025 {name}. All rights reserved.</p>
    </footer>
  );
}