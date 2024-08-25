import React, { useState } from 'react';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}
        />
        <br />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleInputChange}
          style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px' }}
        ></textarea>
        <br />
        <button
          type="submit"
          style={{
            backgroundColor: '#F43596',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
