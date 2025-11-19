import React, { useState } from 'react';
import PasswordProtection from './components/PasswordProtection';
import HeaderHero from './components/HeaderHero';
import ScrollPinnedRows from "./components/ScrollPinnedRows";
import ContinuousStatsSection from './components/ContinuousStatsSection'; 
// import AnimatedStatsSection from './components/AnimatedStatsSection';

import ServicesSection from "./components/ServicesSection";
import HurdleScrollSection from './components/HurdleScrollSection';
import ProjectSection from './components/RotatingProjectSection';
import LettersHoverSection from './components/LettersHoverSection';
import SpeakersSection from './components/SpeakersSection';
import FooterSection from './components/FooterSection';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticate={handleAuthentication} />;
  }

  return (
    <div className="min-h-screen">
      <HeaderHero />
      <ScrollPinnedRows />
      <ContinuousStatsSection/>
      <ServicesSection />
      <HurdleScrollSection />
      <ProjectSection />
      <LettersHoverSection />
      <SpeakersSection />
      <FooterSection />
      
      
    </div>
  );
}

export default App;