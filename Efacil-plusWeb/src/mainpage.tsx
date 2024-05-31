import React, { useState } from 'react';
import Header from './components/Nav';
import Body from './components/Body';

const MainPage: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={isDarkMode ? "bg-primary-dark text-contrast-dark" : "bg-primary-light text-contrast-light"}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Body currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} isDarkMode={isDarkMode} />
    </div>
  );
};

export default MainPage;
