import React from 'react';
import './styles.css';

function MainContent() {
  
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

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
