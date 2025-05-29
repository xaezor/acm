import React, { useState, useEffect } from 'react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="countdown-card" style={{
      width: isMobile ? '100%' : 'auto',
      padding: isMobile ? '1rem' : '1.5rem'
    }}>
      <div style={{
        margin: "0",
        padding: "0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '1rem' : '0'
      }}>
        <h3 style={{
          marginTop: "0",
          fontSize: isMobile ? "1.2rem" : "1.5rem",
          color: "gray"
        }}>Mind Spark</h3>
        <a style={{
          display: "flex",
          justifyContent: "right",
          marginTop: isMobile ? '0' : "-0.5rem",
          marginRight: isMobile ? '0' : "1rem",
          marginBottom: "0.5rem"
        }}>
          <button style={{
            backgroundColor: "gray",
            border: "none",
            padding: isMobile ? "0.5rem 1.5rem" : "0.75rem 2rem",
            color: "white",
            borderRadius: "0.5rem",
            fontWeight: "600",
            fontSize: isMobile ? '0.9rem' : '1rem',
            transition: "all 0.3s ease",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem"
          }} className="w-full mt-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300">
            Register Now
          </button>
        </a>
      </div>
      <div style={{
        marginTop: isMobile ? "1rem" : "1.5rem",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        width: isMobile ? "100%" : "30rem",
        gap: isMobile ? "0.5rem" : "1rem"
      }} className="grid grid-cols-4 gap-2 text-center">
        <div className="countdown-number" style={{
          padding: isMobile ? "0.5rem" : "1rem",
          fontSize: isMobile ? "1.2rem" : "1.5rem"
        }}>
          <div>{String(timeLeft.days).padStart(2, '0')}</div>
          <div className="countdown-label" style={{
            fontSize: isMobile ? "0.7rem" : "0.75rem"
          }}>Days</div>
        </div>
        <div className="countdown-number" style={{
          padding: isMobile ? "0.5rem" : "1rem",
          fontSize: isMobile ? "1.2rem" : "1.5rem"
        }}>
          <div>{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="countdown-label" style={{
            fontSize: isMobile ? "0.7rem" : "0.75rem"
          }}>Hours</div>
        </div>
        <div className="countdown-number" style={{
          padding: isMobile ? "0.5rem" : "1rem",
          fontSize: isMobile ? "1.2rem" : "1.5rem"
        }}>
          <div>{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="countdown-label" style={{
            fontSize: isMobile ? "0.7rem" : "0.75rem"
          }}>Min</div>
        </div>
        <div className="countdown-number" style={{
          padding: isMobile ? "0.5rem" : "1rem",
          fontSize: isMobile ? "1.2rem" : "1.5rem"
        }}>
          <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="countdown-label" style={{
            fontSize: isMobile ? "0.7rem" : "0.75rem"
          }}>Sec</div>
        </div>
      </div>
    </div>
  );
}; 