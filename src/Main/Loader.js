import React, { useEffect, useRef, useState } from 'react';
import  anime  from 'animejs';
import intrologo from './acmfull.png';
import './main.css';

const diamondColors = [
  'rgba(0,191,255,0.12)',
  'rgba(0,119,182,0.18)',
  'rgba(0,191,255,0.08)',
  'rgba(0,119,182,0.10)'
];

const Loader = ({ onFinish }) => {
  const loaderRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    anime({
      targets: '.loader-logo',
      scale: [3, 4],
      opacity: [0, 1],
      duration: 1800,
      easing: 'easeInOutQuad',
      complete: () => {
        setTimeout(() => {
          anime({
            targets: loaderRef.current,
            opacity: [1, 0],
            duration: 800,
            easing: 'easeInOutQuad',
            complete: () => {
              setLoading(false);
              if (onFinish) onFinish();
            },
          });
        }, 1200);
      },
    });
    anime({
      targets: '.diamond-bg',
      scale: [0.9, 1.1, 0.95, 1],
      opacity: [0.5, 1, 0.7, 1],
      duration: 2200,
      delay: anime.stagger(200),
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
    });
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div ref={loaderRef} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      transition: 'opacity 0.8s',
      background: 'transparent',
      backdropFilter: 'blur(10px)',
      overflow: 'hidden',
    }}>
      
      {/* Animated diamonds */}
      <div style={{position:'absolute',top:0,left:0,width:'100vw',height:'100vh',zIndex:2,display:'flex',alignItems:'center',justifyContent:'center'}}>
        {[0,1,2,3].map(i => (
          <svg
            key={i}
            className="diamond-bg"
            width={340 + i*80}
            height={340 + i*80}
            style={{position:'absolute',zIndex:2,opacity:0.7-i*0.15}}
            viewBox="0 0 340 340"
          >
            <polygon
              points="170,0 340,170 170,340 0,170"
              fill={diamondColors[i]}
            />
          </svg>
        ))}
      </div>
      {/* Loader logo */}
      <div className="loader-logo" style={{
        width: 180,
        height: 180,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3,
      }}>
        <img src={intrologo} alt="Intro Logo" style={{ width: 120, height: 120 }} />
      </div>
    </div>
  );
};

export default Loader;