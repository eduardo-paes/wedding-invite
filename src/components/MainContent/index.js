import React from 'react';
import '../../App.css';
import './styles.css';

function MainContent() {
  return (
    <div className='main-content-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1 className='main-content-title'>{'Eduardo & Giovana'}</h1>
      <p className='main-content-paragraph'>O amor não cansa e nem se cansa...</p>
      <p className='main-content-paragraph'>20/08/2022</p>
    </div>
  );
}

export default MainContent;
