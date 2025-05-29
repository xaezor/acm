import React from 'react';
import "./main.css";
import HeroContent from './components/HeroContent';
import LogoTransition from './components/LogoTransition';
import Perks from './components/Perks';
export const Main = () => {
  return (
    <>
      <LogoTransition />
      <div>
        <HeroContent />
      </div>
      <div>
        <Perks />
      </div>
    </>
  );
};
