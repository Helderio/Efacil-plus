import React, { useState } from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Team from './Team';

const Header: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // Estado para controlar o modo atual

  // Função para renderizar o componente com base no link clicado
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

  // Função para alternar entre os modos claro e escuro
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <header className={isDarkMode ? "bg-primary-dark text-contrast-dark py-4" : "bg-primary-light text-contrast-light py-4"}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">E facil +</h1>
        </div>

        {/* Links */}
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

        {/* Botão de alternância de modo */}
        <button className={isDarkMode ? "bg-contrast-light text-primary-light px-4 py-2 rounded" : "bg-contrast-dark text-primary-dark px-4 py-2 rounded"} onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Renderizando o componente atual */}
      {currentComponent !== null && renderComponent(currentComponent)}
    </header>
  );
};

export default Header;

