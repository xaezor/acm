import React, { useState, useEffect } from 'react';
import NetworkAnimation from './NetworkAnimation';
import { CountdownTimer } from './CountdownTimer';
import { Users } from 'lucide-react';
import "../main.css";

const HeroContent = () => {
  const [showNetwork, setShowNetwork] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    
    const timer = setTimeout(() => {
      setShowNetwork(true);
    }, 1470);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="hero-content">
      {/* Left Content Section */}
      <div className="hero-left-content">
        {/* ACM Logo/Header */}
        <div className="mb-6">
          <h1 className='titlez' style={{
            fontSize: isMobile ? "2.5rem" : "4rem",
            color: "black"
          }}>ACM Student Chapter</h1>
          <p style={{
            fontSize: isMobile ? "1rem" : "1.5rem",
            fontWeight: "bold",
            color: "blueviolet",
            marginTop: isMobile ? "-1rem" : "-2rem"
          }} className="text-cyan-300">XIM University</p>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold leading-tight`}>
            <span className='inov' style={{
              color: "blueviolet",
              fontSize: isMobile ? "1.8rem" : "inherit"
            }}>Innovate.</span>{' '}
            <span className='inov' style={{
              color: "red",
              fontSize: isMobile ? "1.8rem" : "inherit"
            }}>Code.</span>
            <span className='inov' style={{
              color: "green",
              fontSize: isMobile ? "1.8rem" : "inherit"
            }}>  Transform.</span>
          </h2>
          <p style={{
            fontSize: isMobile ? "1rem" : "1.2rem",
            color: "gray"
          }} className="text-gray-300 leading-relaxed max-w-lg">
            Join the premier computer science community at XIM University. Connect with like-minded innovators,
            participate in cutting-edge projects, and shape the future of technology.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-container">
          <div className="stat-item">
            <div className="stats-number text-cyan-400" style={{
              fontSize: isMobile ? "1.8rem" : "2.5rem"
            }}>500+</div>
            <div className="stats-label" style={{
              fontSize: isMobile ? "0.8rem" : "1rem"
            }}>Members</div>
          </div>
          <div className="stat-item">
            <div className="stats-number text-blue-400" style={{
              fontSize: isMobile ? "1.8rem" : "2.5rem"
            }}>50+</div>
            <div className="stats-label" style={{
              fontSize: isMobile ? "0.8rem" : "1rem"
            }}>Events</div>
          </div>
          <div className="stat-item">
            <div className="stats-number text-purple-400" style={{
              fontSize: isMobile ? "1.8rem" : "2.5rem"
            }}>25+</div>
            <div className="stats-label" style={{
              fontSize: isMobile ? "0.8rem" : "1rem"
            }}>Projects</div>
          </div>
        </div>

        {/* Action Buttons and Countdown */}
        <div className="action-container">
          <button className="join-button" style={{
            padding: isMobile ? "0.5rem 1.5rem" : "0.75rem 2rem",
            fontSize: isMobile ? "0.9rem" : "1rem"
          }}>
            <Users className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
            Join ACM Chapter
          </button>
          <CountdownTimer />
        </div>
      </div>

      {/* Right Network Animation Section */}
      {!isMobile && (
        <div className="network-container" style={{ 
          opacity: showNetwork ? 1 : 0, 
          transition: 'opacity 0.9s ease-in-out',
          marginTop: '-3rem'
        }}>
          {showNetwork && <NetworkAnimation />}
        </div>
      )}
    </div>
  );
};

export default HeroContent;
