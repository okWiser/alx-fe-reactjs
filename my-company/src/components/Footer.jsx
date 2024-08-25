import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © 2024 Your Company. All rights reserved.
      <br />
      Get connected with us on social networks:
      <br />
      <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">
        Twitter
      </a>{' '}
      |{' '}
      <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </FooterContainer>
  );
};

export default Footer;
