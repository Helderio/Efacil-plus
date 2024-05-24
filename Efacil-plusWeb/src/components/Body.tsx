import React from 'react';
import About from './pages/About'; // Importing the About component
import Services from './pages/Services'; // Importing the Services component
import Contact from './pages/Contact'; // Importing the Contact component
import Team from './pages/Team'; // Importing the Team component

interface BodyProps {
  currentComponent: number | null;
  isDarkMode: boolean;
setCurrentComponent: React.Dispatch<React.SetStateAction<number | null>>;
}

const Body: React.FC<BodyProps> = ({ currentComponent, isDarkMode, setCurrentComponent }) => {
  const renderComponent = (componentId: number | null) => {
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

  return (
    <div className={isDarkMode ? "bg-primary-dark text-contrast-dark" : "bg-primary-light text-contrast-light"}>
      {/* Render the selected component */}
      <div className="container mx-auto px-4 py-8">
        {currentComponent !== null && renderComponent(currentComponent)}
      </div>
    </div>
  );
};

export default Body;
