import { useState, useEffect } from 'react';

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-md">
      <nav className="max-w-4xl mx-auto flex items-center justify-between p-4">
        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li><a href="#about" className="font-medium hover:underline">About</a></li>
          <li><a href="#resume" className="font-medium hover:underline">Resume</a></li>
          <li><a href="#projects" className="font-medium hover:underline">Projects</a></li>
          <li><a href="#blog" className="font-medium hover:underline">Blog</a></li>
          <li><a href="#contact" className="font-medium hover:underline">Contact</a></li>
        </ul>
        {/* Dark/Light Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-sm"
        >
          {darkMode ? '🌙 Dark' : '☀️ Light'}
        </button>
      </nav>
    </header>
  );
}
