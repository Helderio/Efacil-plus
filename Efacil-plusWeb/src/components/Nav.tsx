import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Team from './pages/Team';

const Header: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const renderComponent = (componentId: number) => {
    switch (componentId) {
      case 1:
        return <About />;
      case 2:
        return <Services />;
      case 3:
        return <Contact />;
      case 4:
        return <Team />;
      default:
        return null;
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <header className={isDarkMode ? "bg-primary-dark text-contrast-dark py-4" : "bg-primary-light text-contrast-light py-4"}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">E facil +</h1>
        </div>

        <nav>
          <ul className="flex">
            <li className="mr-6">
              <button className={isDarkMode ? "text-contrast-dark" : "text-contrast-light"} onClick={() => setCurrentComponent(1)}>About</button>
            </li>
            <li className="mr-6">
              <button className={isDarkMode ? "text-contrast-dark" : "text-contrast-light"} onClick={() => setCurrentComponent(2)}>Services</button>
            </li>
            <li className="mr-6">
              <button className={isDarkMode ? "text-contrast-dark" : "text-contrast-light"} onClick={() => setCurrentComponent(3)}>Contact</button>
            </li>
            <li>
              <button className={isDarkMode ? "text-contrast-dark" : "text-contrast-light"} onClick={() => setCurrentComponent(4)}>Team</button>
            </li>
          </ul>
        </nav>

        {/* Adicionando ícones de sol e lua para alternar o modo */}
        <button className={isDarkMode ? "bg-contrast-light text-primary-light px-4 py-2 rounded" : "bg-contrast-dark text-primary-dark px-4 py-2 rounded"} onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {currentComponent !== null && renderComponent(currentComponent)}
    </header>
  );
};

export default Header;
