import React, { useState } from 'react';
import Header from './components/Nav'; // Import the Header component
import Body from './components/Body';

const MainPage: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [currentComponent, setCurrentComponent] = useState<number | null>(null);

  return (
    <div className={isDarkMode ? "bg-primary-dark text-contrast-dark" : "bg-primary-light text-contrast-light"}>
      {/* Render the Header */}
      <Header />

      {/* Main content */}
      <div className="container mx-auto px-4 mt-8"> {/* Add margin-top for separation */}
        {/* Render the corresponding component */}
        {/* Add the content of About, Services, Contact, and Team here, depending on the rendering logic */}
        <Body currentComponent={currentComponent} isDarkMode={isDarkMode} setCurrentComponent={setCurrentComponent} />
      </div>
    </div>
  );
};

export default MainPage;



