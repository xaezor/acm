import React from 'react';

const Perks = () => {
  const benefits = [
    {
      id: 1,
      text: 'Access to exclusive research papers and journals'
    },
    {
      id: 2,
      text: 'Networking opportunities with industry professionals'
    },
    {
      id: 3,
      text: 'Discounts on conferences and workshops'
    },
    {
      id: 4,
      text: 'Opportunities for career advancement'
    },
    {
      id: 5,
      text: 'Free online courses and certifications'
    }
  ];

  return (
    <div className="perks-container" style={{
      color: 'rgb(0, 0, 0)',
      borderradius: '0.5em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      marginTop: '-13rem'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.54)',      
        border: '1px solid #e8e8e8',
        width: '50vw',
        right: '0',
        borderRadius: '3rem 0 0  3rem',
        boxShadow: '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff'
      }}>

      </div>
      <div style={{
        background: 'rgba(255, 255, 255, 0.54)',      
        border: '1px solid #e8e8e8',
        width: '50vw',
        right: '0',
        borderRadius: '3rem 0 0  3rem',
        boxShadow: '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff'
      }}>
      <h2 style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        textAlign: 'center',
        color: '#333'
      }}>
        Perks of being a member of ACM Member
      </h2>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        marginTop: '2rem'
      }}>
        {benefits.map((benefit) => (
          <div key={benefit.id} style={{
            padding: '1.5rem',
            borderRadius: '10px',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <p style={{
              margin: 0,
              fontSize: '1.1rem',
              lineHeight: '1.5',
              color: '#555'
            }}>
              • {benefit.text}
            </p>
          </div>
        ))}
      </div>

      <div style={{
        textAlign: 'center',
        marginTop: '1rem',
        marginBottom: '1rem'
      }}>
        <button style={{
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          ':hover': {
            backgroundColor: '#0056b3'
          }
        }}>
          Join ACM
        </button>
      </div>
    </div></div>
  );
};

export default Perks; 