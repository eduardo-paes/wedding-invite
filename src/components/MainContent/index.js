import React from 'react';
import './styles.css';

function MainContent() {
  return (
    <div className='main-content-container'>
      <video className='video-player' autoPlay loop muted>
        <source src="/videos/video-1.mp4" type='video/mp4'/>
      </video>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      {/* { VideoPlayer() } */}
      <h1 className='main-content-title'>{'Eduardo & Giovana'}</h1>
      {/* <p className='main-content-paragraph'>O amor não cansa e nem se cansa...</p> */}
      {/* <p className='main-content-paragraph'>20/08/2022</p> */}
    </div>
  );
}

export default MainContent;