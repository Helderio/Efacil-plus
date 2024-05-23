import React from 'react';
import Header from './components/Nav'; // Importe o componente Header

const MainPage: React.FC = () => {
  return (
    <div>
      {/* Renderize o Header */}
      <Header />

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4">
        {/* Renderize o componente correspondente */}
        {/* Adicione o conteúdo de About, Services, Contact, e Team aqui, dependendo da lógica de renderização */}
      </div>
    </div>
  );
};

export default MainPage;
