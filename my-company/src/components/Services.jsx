import React from 'react';
import Footer from './Footer';

const Services = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '32px', color: '#333', fontWeight: 'bold' }}>Our Services</h1>
      <h2 style={{ fontSize: '20px', color: '#555' }}>What We Offer:</h2>
      <ul style={{ listStyle: 'none', fontSize: '16px', color: '#888' }}>
        <li>Web Design</li>
        <li>Mobile App Development</li>
        <li>SEO Optimization</li>
        <li>E-commerce Solutions</li>
      </ul>
    </div>
  );
};

export default Services;

