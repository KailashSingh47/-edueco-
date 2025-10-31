import React from 'react';

const ResetButton = ({ onReset }) => {
  return (
    <button className="reset-button" onClick={onReset}>
      🔄 Reset to Defaults
    </button>
  );
};

export default ResetButton;