import React, { useEffect, useRef, useState } from 'react';
import intrologo from '../acmfull.png';
import halfLogo from '../acmhalf.png';
import anime from 'animejs';

const LogoTransition = () => {
  const logoRef = useRef(null);
  const [currentLogo, setCurrentLogo] = useState(intrologo);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    // Initial position (same as loader)
    anime.set(logoRef.current, {
      scale: 7,
      translateX: '0%',
    });

    // Animate to new position
    anime({
      targets: logoRef.current,
      scale: 7,
      translateX: '77%',
      translateY: '9%',
      duration: 1000,
      easing: 'easeOutQuad',
      delay: 200,
      complete: () => {
        setCurrentLogo(halfLogo);
        // Set animation complete after logo switch
        setTimeout(() => {
          setIsAnimationComplete(true);
        }, 100);
      }
    });
  }, []);

  return (
    <div 
      style={{
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        width: '80px',
        height: '80px',
        transition: 'transform 0.3s ease-in-out'
      }}
      ref={logoRef}
    >
      <img 
        src={currentLogo} 
        alt="ACM Logo" 
        style={{
          width: '100%',
          height: '100%',
          marginTop: '4.5rem',
          position: 'relative',
          zIndex: 10,
          objectFit: 'contain',
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </div>
  );
};

export default LogoTransition; 