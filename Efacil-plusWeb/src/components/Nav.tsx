import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setCurrentComponent: React.Dispatch<React.SetStateAction<number | null>>;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, setCurrentComponent }) => {

  const handleNavigationClick = (componentId: number) => {
    setCurrentComponent(componentId);
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
              <button className={isDarkMode ? "text-contrast-dark" : "text-contrast-light"} onClick={() => handleNavigationClick(1)}>Sobre nos</button>
            </li>
            <li className="mr-6">
              <button className={isDarkMode ? "text-contrast-dark" : "text-contrast-light"} onClick={() => handleNavigationClick(2)}>Servicos</button>
            </li>
            <li className="mr-6">
              <button className={isDarkMode ? "text-contrast-dark" : "text-contrast-light"} onClick={() => handleNavigationClick(3)}>Contactos</button>
            </li>
            <li>
              <button className={isDarkMode ? "text-contrast-dark" : "text-contrast-light"} onClick={() => handleNavigationClick(4)}>Membros</button>
            </li>
          </ul>
        </nav>

        {/* Adicionando ícones de sol e lua para alternar o modo */}
        <button className={isDarkMode ? "bg-contrast-light text-primary-light px-4 py-2 rounded" : "bg-contrast-dark text-primary-dark px-4 py-2 rounded"} onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
