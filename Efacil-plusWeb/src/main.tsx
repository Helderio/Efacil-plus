import { createRoot } from 'react-dom';
import './index.css';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  const toggleLightMode = () => {
    setDarkMode(false);
    document.documentElement.classList.remove('dark');
  };

  return (
    <div className={`bg-primary-${darkMode ? 'dark' : 'light'} text-secondary-${darkMode ? 'dark' : 'light'} min-h-screen flex flex-col justify-between`}>
      <header className="p-4">
        <h1 className="text-3xl font-bold mb-2">Welcome to My Website</h1>
        <p className="text-lg">This is the header content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </header>
      <footer className="p-4 bg-gray-200 dark:bg-gray-800">
        <p className="text-lg text-gray-600 dark:text-gray-400">This is the footer content. Ut id magna sit amet odio malesuada ultrices.</p>
      </footer>
      <div className="flex justify-center space-x-4 pb-4">
        <button onClick={toggleDarkMode} className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-4 py-2 rounded-md">Dark Mode</button>
        <button onClick={toggleLightMode} className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-md">Light Mode</button>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

