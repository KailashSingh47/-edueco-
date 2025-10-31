import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import all our page components
import SimulationPage from './components/SimulationPage';
import CheetahPage from './components/CheetahPage';
import LoadingPage from './components/LoadingPage';

// Import components that should be present on all pages
import SpotlightCursor from './components/SpotlightCursor';
import NatureBackground from './components/NatureBackground';

// Import styles for the entire application
import './styles/App.css';

function App() {
  // State to manage the initial loading screen
  const [isLoading, setIsLoading] = useState(true);

  // useEffect hook to run once when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // If the app is still loading, show the LoadingPage component
  if (isLoading) {
    return <LoadingPage />;
  }

  // Once loaded, show the main application with routing
  return (
    // THERE IS ONLY ONE BrowserRouter, AND IT HAS THE BASENAME
    <BrowserRouter>      {/* These components will be visible on all pages */}
      <SpotlightCursor />
      <NatureBackground />
      
      <Routes>
        {/* Redirect from the root URL to the cheetah intro page */}
        <Route path="/" element={<Navigate replace to="/cheetah" />} />
        
        {/* Route for the cheetah-themed intro page */}
        <Route path="/cheetah" element={<CheetahPage />} />
        
        {/* Route for the main simulation page. The `/*` allows for the "About" sub-route */}
        <Route path="/simulation/*" element={<SimulationPage />} />
      </Routes>
    </BrowserRouter> // <-- ONLY ONE CLOSING TAG
  );
}

export default App;