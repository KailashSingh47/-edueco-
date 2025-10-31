import React from 'react';
import Slider from './Slider';
import ResetButton from './ResetButton';

const ControlPanel = ({ variables, updateVariable, regionVariables,onReset  }) => {
  return (
    <div className="control-panel">
      <h2>Control Your Region's Future</h2>
      {Object.keys(regionVariables).map(key => {
        const config = regionVariables[key];
        return (
          <Slider
            key={key}
            label={config.label}
            icon={config.icon}
            value={variables[key]}
            onChange={(value) => updateVariable(key, value)}
            min={config.min}
            max={config.max}
            unit={config.unit}
          />
        );
      })}
       <ResetButton onReset={onReset} /> {/* <-- ADD THIS BUTTON */}
    </div>
  );
};

export default ControlPanel;