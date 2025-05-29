import React from 'react';
import './All.css';

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <h1>Association for<br />Computing Machinery</h1>
        <p>
          ACM-XIM Chapter is a leading technical student chapter in XIM University, committed to inspiring young tech enthusiasts to explore the limitless potential of technology. With the support of the <strong>Association for Computing Machinery (ACM)</strong>, the chapter has organized a range of exciting events in web development, IoT, AI, ML, Cloud Computing, and more. The chapter has quickly become a hub for innovation and learning in technology, attracting some of the brightest and most talented students from across the university.
        </p>
      </div>
      <div className="tilted-badge">
        <div className="badge-inner">
          ACM<br />Student<br />Chapter
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
