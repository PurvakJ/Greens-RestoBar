import React from 'react';
import styled from 'styled-components';
import ReviewForm from './ReviewForm'; // Import the ReviewForm component
import sahil from "../assets/sahil.png";

const ContactContainer = styled.div`
  padding: 2rem;
`;

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
  margin-top: 2rem;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;


const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 20%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
`;

const Description = styled.div`
  text-align: center;

  h4 {
    margin: 0.5rem 0;
    font-size: 1.5rem;
    color: #333;
  }

  h5 {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    color: #555;
  }

  p {
    font-size: 1rem;
    color: #777;
    margin-top: 0.5rem;
  }
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 49, 57, 1);
  color: white;
  font-weight: bold;
  width: 100%;
  border-radius: 25px;
  justify-content: center;

  h5 {
    margin: 0.5rem 0;
    padding: 1rem;
  }

  a{
    color: white;
  }
  @media (max-width: 650px) {
    display: grid;
    text-align: center;

    h5{
        padding:0.2rem;
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ImageContainer>
        <Image src={sahil} alt="Sahil" />
        <Description>
          <h4>Owner</h4>
          <h5>Sahil Singla</h5>
          <p>
            Sahil Singla is the proud owner of Green's Resto Bar. With years of
            experience in the hospitality industry, Sahil has brought a unique
            touch to the dining experience, blending traditional flavors with
            modern culinary techniques. Visit us to experience the best in
            dining and hospitality.
          </p>
        </Description>
      </ImageContainer>
      <Bar>
        <h5>Sahilsingla5950@gmail.com</h5>
        <h5>79863-37325</h5>
        <a href="https://www.instagram.com/greens_restobar/"><h5>Instagram</h5></a>
        <h5>Mall Rd, Baradari, Patiala, Punjab 147001</h5>
        <h5>Opens 11:00 a.m. to Closes 11:00 p.m.</h5>
      </Bar>
      <ReviewForm />
      <MapContainer>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4738640102896!2d76.392078075565!3d30.3374799747774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ecf42d64e5%3A0x14bf85b7d32d650e!2sGreen&#39;s%20Resto%20Bar!5e0!3m2!1sen!2sin!4v1717847205327!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></Iframe>
      </MapContainer>
    </ContactContainer>
  );
};

export default Contact;
