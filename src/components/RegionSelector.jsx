import React from 'react';

const RegionSelector = ({ regions, selectedRegion, onSelectRegion }) => {
  return (
    <div className="region-selector">
      <h2>Select a Region</h2>
      <div className="region-cards">
        {regions.map((region) => (
          <div
            key={region.name}
            className={`region-card ${selectedRegion.name === region.name ? 'active' : ''}`}
            onClick={() => onSelectRegion(region)} // <-- console.log removed
          >
            <h3>{region.name}</h3>
            <p>{region.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionSelector;