import React from 'react';
import { Link } from 'react-router-dom'; // <-- IMPORT LINK

const CheetahPage = () => {
  return (
    <div className="cheetah-page">
      <div className="cheetah-runner">
        <div className="cheetah-body">
          <div className="cheetah-spots"></div>
        </div>
        <div className="cheetah-head">
          <div className="cheetah-eye"></div>
          <div className="cheetah-mouth"></div>
        </div>
        <div className="cheetah-tail"></div>
        <div className="dust-particles"></div>
      </div>
      <div className="page-content">
        <h1>Speed is Essential</h1>
        <p>In nature, the cheetah's speed is key to its survival. In our world, speed in taking action against climate change is just as critical. Let's get started.</p>
        
        {/* FIX: Use Link instead of <a> */}
        <Link to="/simulation" className="cta-button">Start Simulation</Link>
      </div>
    </div>
  );
};

export default CheetahPage;