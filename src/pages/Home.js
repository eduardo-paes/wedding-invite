import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <MainContent />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
