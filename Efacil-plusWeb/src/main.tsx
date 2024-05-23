import { render } from 'react-dom';
import './index.css';
import { useState } from 'react';
import MainPage from './mainpage'; // Importe o componente da página inicial do seu aplicativo

function App() {
  const [currentPage] = useState(<MainPage />); // Defina a página inicial como estado inicial
  return (
    <div>
      {/* Renderize a página atual */}
      {currentPage}
    </div>
  );
}

render(<App />, document.getElementById('root'));

