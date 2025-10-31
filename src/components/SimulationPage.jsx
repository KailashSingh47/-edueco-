import React, { useState, useEffect } from 'react';
import { useSimulation } from '../hooks/useSimulation';
import { westernGhatsData } from '../data/westernGhatsData';
import { amazonData } from '../data/amazonData';
import { portugalData } from '../data/portugalData';
import { congoBasinData } from '../data/congoBasinData';
import { arcticData } from '../data/arcticData'; // <-- NEW IMPORT
import { greatBarrierReefData } from '../data/greatBarrierReefData'; // <-- NEW IMPORT
import RegionSelector from './RegionSelector';
import ControlPanel from './ControlPanel';
import ResultsDashboard from './ResultsDashboard';
import TeacherReport from './TeacherReport';
import SimulationStatus from './SimulationStatus';
import SpotlightCursor from './SpotlightCursor';
import NatureBackground from './NatureBackground';

const AboutPage = ({ onBack }) => (
  <div className="glass-card about-page">
    <button className="back-button" onClick={onBack}>← Back to Simulation</button>
    <h1>About EduEco</h1>
    <p>EduEco is an interactive web-based simulation platform designed for middle and high school classrooms.</p>
    <h2>How It Works</h2>
    <p>Select a region and manipulate key variables to see how your choices affect the ecosystem.</p>
    <h2>Our Data</h2>
    <p>The simulation logic is based on real environmental data from leading global organizations.</p>
    <ul>
      <li><strong>IPCC</strong></li>
      <li><strong>FAO</strong></li>
      <li><strong>UNEP</strong></li>
    </ul>
    <h2>Created With ❤️</h2>
    <p>This project was built with React and Vite.</p>
  </div>
);

// The main component for the simulation page
const allRegions = [
  westernGhatsData, 
  amazonData, 
  portugalData, 
  congoBasinData,
  arcticData, // <-- NEW REGION ADDED
  greatBarrierReefData // <-- NEW REGION ADDED
];

const SimulationPage = () => {
  const [selectedRegion, setSelectedRegion] = useState(westernGhatsData);
  const { variables, outcomes, updateVariable, reset } = useSimulation(selectedRegion);
  const [showAbout, setShowAbout] = useState(false);

  if (showAbout) {
    return (
      <div className="app">
        <SpotlightCursor />
        <NatureBackground />
        <main className="main-content">
          <AboutPage onBack={() => setShowAbout(false)} />
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <SpotlightCursor />
      <NatureBackground />
      <header className="app-header">
        <h1>🌍 EduEco: Learn. Simulate. Act.</h1>
        <p className="subtitle">Interactive Environmental Simulations for the Next Generation</p>
        <button onClick={() => setShowAbout(true)} className="about-link">About</button>
      </header>

      <main className="main-content">
        <RegionSelector regions={allRegions} selectedRegion={selectedRegion} onSelectRegion={setSelectedRegion} />
        <div className="glass-card region-story">
          <h3>About {selectedRegion.name}</h3>
          <p>{selectedRegion.story}</p>
        </div>
        <div className="simulation-container">
          <ControlPanel variables={variables} updateVariable={updateVariable} regionVariables={selectedRegion.variables} onReset={reset} />
          <ResultsDashboard outcomes={outcomes} regionName={selectedRegion.name} regionData={selectedRegion} />
        </div>
        <SimulationStatus outcomes={outcomes} />
        <div className="action-section">
          <h2>What Can You Do?</h2>
          <ul>
            <li>Support local NGOs working on conservation in the {selectedRegion.name.split(',')[1] || selectedRegion.name.split(',')[0]}.</li>
            <li>Advocate for policies promoting renewable energy and sustainable land use.</li>
            <li>Make informed consumer choices that support biodiversity and local economies.</li>
            <li>Educate your friends and family about the importance of this ecosystem.</li>
          </ul>
        </div>
        <TeacherReport region={selectedRegion} variables={variables} outcomes={outcomes} />
      </main>
    </div>
  );
};

export default SimulationPage;