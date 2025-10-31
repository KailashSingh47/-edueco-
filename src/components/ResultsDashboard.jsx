import React from 'react';

const getHealthColor = (value) => {
  if (value > 65) return '#4CAF50';
  if (value > 35) return '#FFC107';
  return '#F44336';
};

const MetricBar = ({ label, icon, value, isInverse }) => {
  const displayValue = isInverse ? (100 - value) : value;
  const color = getHealthColor(displayValue);
  
  return (
    <div className="metric">
      <div className="metric-header">
        <span className="metric-icon">{icon}</span>
        <span className="metric-label">{label}</span>
      </div>
      <div className="metric-bar-container">
        <div className="metric-bar" style={{ width: `${displayValue}%`, backgroundColor: color }}></div>
      </div>
      <span className="metric-value">{Math.round(displayValue)}%</span>
    </div>
  );
};

// Using the dynamic species list from props
const BiodiversityVisual = ({ score, speciesList }) => {
  const numVisible = Math.round((score / 100) * speciesList.length);

  return (
    <div className="biodiversity-visual">
      <h3>Biodiversity Health</h3>
      <div className="species-container">
        {speciesList.map((species, i) => (
          <div
            key={species.name}
            className="species-item"
            style={{
              opacity: i < numVisible ? 1 : 0.1,
              transform: `scale(${i < numVisible ? 1 : 0.5}) translateY(${i < numVisible ? '0px' : '10px'})`,
              transitionDelay: `${i * 0.1}s`,
            }}
          >
            <span className="species-icon">{species.icon}</span>
            <span className="species-name">{species.name}</span>
          </div>
        ))}
      </div>
      <p className="visual-caption">
        {score > 70 ? "Ecosystem is thriving." : score > 40 ? "Species are at risk." : "Critical loss of life."}
      </p>
    </div>
  );
};

const ResultsDashboard = ({ outcomes, regionName, regionData }) => {
  return (
    <div className="dashboard">
      <h2>Ecosystem Outcomes for {regionName}</h2>
      
      <BiodiversityVisual score={outcomes.biodiversity} speciesList={regionData.speciesList} />

      <MetricBar label="CO₂ Levels" icon="💨" value={outcomes.co2Level} isInverse={true} />
      <MetricBar label="Soil Quality" icon="🌱" value={outcomes.soilQuality} />
      <MetricBar label="Local Economy" icon="💰" value={outcomes.localEconomy} />
    </div>
  );
};

export default ResultsDashboard;