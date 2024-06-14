import React from 'react';
import styled from 'styled-components';
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/facebook.svg";
import Facebook from "../assets/twitter.svg";
import green from "../assets/green.png";

const footerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 74, 57, 1)',
  color: 'white',
  boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%',
};

const containerStyle = {
  width: '80%',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginBottom: '1rem',
};

const sectionStyle = {
  flex: '1 1 200px',
  margin: '1rem',
};

const footerBottomStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '1px solid #ccc',
  paddingTop: '1rem',
  width: '100%',
  flexWrap: 'wrap',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginBottom: '0.5rem',
  display: 'block',
  fontSize: '0.9rem', // Adjust font size to ensure links fit well
};

const socialMediaStyle = {
  display: 'flex',
  gap: '1rem',
  marginTop: '1rem',
};

const footerBottomLinkContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'center', // Center align links on small screens
  width: '100%', // Make sure the container takes full width
  textAlign: 'center', // Center text on small screens
};

const copyrightStyle = {
  marginTop: '1rem',
  fontSize: '0.8rem', // Adjust font size for better fit
  textAlign: 'center', // Center text on all screens
  width: '100%', // Take full width to ensure proper alignment
};

const footerHeadingStyle = {
  cursor: 'pointer',
  transition: 'color 0.3s ease',
};

const socialMediaImgStyle = {
  width: '30px',
  height: '30px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
};

const Image = styled.img`
  height: 50px;
  width: 100px;
`;

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
            <Image src={green}/>
        </div>
        <div style={sectionStyle}>
          <h3 style={footerHeadingStyle}>About Us</h3>
          <a href="#" style={linkStyle}>Our Heritage</a>
          <a href="#" style={linkStyle}>Coffeehouse</a>
          <a href="#" style={linkStyle}>Our Company</a>
          <a href="#" style={linkStyle}>Responsibility</a>
          <a href="#" style={linkStyle}>Diversity</a>
          <a href="#" style={linkStyle}>Community</a>
          <a href="#" style={linkStyle}>Ethical Sourcing</a>
          <a href="#" style={linkStyle}>Environmental Stewardship</a>
          <a href="#" style={linkStyle}>Learn More</a>
        </div>
        <div style={sectionStyle}>
          <h3 style={footerHeadingStyle}>Quick Links</h3>
          <a href="#" style={linkStyle}>Privacy Policy</a>
          <a href="#" style={linkStyle}>FAQs</a>
          <a href="#" style={linkStyle}>Terms and Conditions</a>
          <a href="#" style={linkStyle}>Green Resto Bar India Mobile App Terms of Use</a>
          <a href="#" style={linkStyle}>Customer Service</a>
          <a href="#" style={linkStyle}>Green Resto Bar Rewards Day Offer</a>
          <a href="#" style={linkStyle}>Delivery</a>
          <a href="#" style={linkStyle}>Season's Gifting</a>
          <a href="#" style={linkStyle}>Offer for Beverage Subscription at Green Resto Bar</a>
          <a href="#" style={linkStyle}>Beverage Subscription</a>
        </div>
        <div style={sectionStyle}>
          <h3 style={footerHeadingStyle}>SOCIAL MEDIA</h3>
          <div style={socialMediaStyle}>
            <a href="https://www.instagram.com/greens_restobar/" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" style={{...socialMediaImgStyle, color: 'white'}} />
            </a>
            <a href="https://www.facebook.com/greens_restobar/" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" style={{...socialMediaImgStyle, color: 'white'}} />
            </a>
            <a href="https://twitter.com/greens_restobar/" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" style={{...socialMediaImgStyle, color: 'white'}} />
            </a>
            </div>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <div style={footerBottomLinkContainerStyle}>
          <a href="#" style={linkStyle}>Web Accessibility</a>
          <span>|</span>
          <a href="#" style={linkStyle}>Privacy Statement</a>
          <span>|</span>
          <a href="#" style={linkStyle}>Terms of Use</a>
          <span>|</span>
          <a href="#" style={linkStyle}>Contact Us</a>
        </div>
        <p style={copyrightStyle}>&copy; 2024 GREEN'S RESTOBAR. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;