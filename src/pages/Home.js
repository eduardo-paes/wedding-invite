import React from 'react';
import '../App.css';
import Invitation from '../components/Invitation';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="main-root">
      <MainContent />
      <Invitation />
      <Footer />
    </div>
  );
}

export default Home;
