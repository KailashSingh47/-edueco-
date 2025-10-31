import React from 'react';

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <div className="loading-content">
        <div className="cheetah-loader">
          <div className="cheetah-body">
            <div className="cheetah-spots"></div>
          </div>
          <div className="cheetah-head">
            <div className="cheetah-eye"></div>
            <div className="cheetah-mouth"></div>
          </div>
          <div className="cheetah-tail"></div>
        </div>
        <h1>Loading EduEco...</h1>
        <p>Preparing your environmental simulation.</p>
      </div>
    </div>
  );
};

export default LoadingPage;