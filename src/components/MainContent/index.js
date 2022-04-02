import React from 'react';
import './styles.css';

function MainContent() {
  return (
    <div className='main-content-container'>
      <img
        className='landing-img'
        alt="landing"
        src="/images/landing.jpg"
      />
      <div className='main-content-div'>
        <h1 className='main-content-title h1-eduardo'>Eduardo</h1>
        <h1 className='main-content-title h1-e'>{'&'}</h1>
        <h1 className='main-content-title h1-giovana'>Giovana</h1>
      </div>
    </div>
  );
}

export default MainContent;
