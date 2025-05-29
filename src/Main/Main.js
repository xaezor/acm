import React from 'react';
import "./main.css";
import HeroContent from './components/HeroContent';
import LogoTransition from './components/LogoTransition';
export const Main = () => {
  return (
    <>
      <LogoTransition />
      <div>
        <HeroContent />
      </div>
    </>
  );
};
