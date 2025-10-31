import React, { useState, useEffect } from 'react';

const Slider = ({ label, icon, value, onChange, min, max, unit }) => {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    setIsPulsing(true);
    const timer = setTimeout(() => setIsPulsing(false), 300); // Duration of the pulse
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="slider-container">
      <div className="slider-header">
        <span className={`slider-icon ${isPulsing ? 'pulse' : ''}`}>{icon}</span>
        <span className="slider-label">{label}</span>
        <span className="slider-value">{value}{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider"
      />
    </div>
  );
};

export default Slider;