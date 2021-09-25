import React from 'react';
import './App.css';
import About from './components/About';
import Card from './components/Card';
import Footer from './components/Footer';
import SkillRight from './components/Pages/SkillRight';


function App() {
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-300">
      <Card />
      <About />
      <SkillRight />
      <Footer />
    </div>
  );
}

export default App;
