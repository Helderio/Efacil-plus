// Header.tsx
import React, { useState } from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Team from './Team';

const Header: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState<number | null>(null);

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

  // Chamando renderComponent dentro do retorno do componente para renderizar o componente atual
  return (
    <header className="bg-primary-dark text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">Logo do Site</h1>
        </div>

        {/* Links */}
        <nav>
          <ul className="flex">
            <li className="mr-6">
              <button className="text-white" onClick={() => setCurrentComponent(1)}>About</button>
            </li>
            <li className="mr-6">
              <button className="text-white" onClick={() => setCurrentComponent(2)}>Services</button>
            </li>
            <li className="mr-6">
              <button className="text-white" onClick={() => setCurrentComponent(3)}>Contact</button>
            </li>
            <li>
              <button className="text-white" onClick={() => setCurrentComponent(4)}>Team</button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Renderizando o componente atual */}
      {currentComponent !== null && renderComponent(currentComponent)}
    </header>
  );
};

export default Header;
