import React, { useState, useEffect } from 'react';

const SimulationStatus = ({ outcomes }) => {
  // Calculate an overall score
  const overallScore = (outcomes.biodiversity + (100 - outcomes.co2Level) + outcomes.soilQuality + outcomes.localEconomy) / 4;

  let status, message, icon;

  if (overallScore > 65) {
    status = 'thriving';
    icon = '🌳';
    message = "Excellent work! Your choices have led to a thriving and balanced ecosystem.";
  } else if (overallScore > 35) {
    status = 'at-risk';
    icon = '⚠️';
    message = "The ecosystem is at risk. Your choices have mixed results. There's room for improvement.";
  } else {
    status = 'crisis';
    icon = '🚨';
    message = "Environmental crisis! Your choices have led to a critical decline in the ecosystem's health.";
  }

  // NEW: State to control the blinking animation
  const [shouldBlink, setShouldBlink] = useState(false);

  // NEW: Effect to trigger the blink when the status changes
  useEffect(() => {
    setShouldBlink(true); // Start blinking
    const timer = setTimeout(() => setShouldBlink(false), 2500); // Stop blinking after 2.5 seconds
    return () => clearTimeout(timer); // Cleanup the timer
  }, [status]); // This effect runs whenever the status string changes

  return (
    <div className={`simulation-status ${status} ${shouldBlink ? 'blink' : ''}`}>
      <div className="status-icon">{icon}</div>
      <div className="status-content">
        <h3>Ecosystem Status: {status.replace('-', ' ').toUpperCase()}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SimulationStatus;