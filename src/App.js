import React from 'react';
import './index.css';
import About from './components/About';
import Card from './components/Card';
import Contact from './components/Contact'
import Footer from './components/Footer';
import SkillRight from './components/Pages/SkillRight';
import Box from './components/Box';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init({
//   useClassNames: true,
// });

function App() 
{   
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-400">      
        <Card />          
        <About />
        <SkillRight />
        <Box />
        <Contact />
        {/* <Footer /> */}
    </div>
  );
}
  

export default App;
