import React from 'react';
import styled from 'styled-components';
import image1 from "../assets/res1.jpg";
import image2 from "../assets/res2.jpg";
import image3 from "../assets/res3.jpg";
import image4 from "../assets/res4.jpg";
import image5 from "../assets/res5.jpeg";
import image6 from "../assets/res6.jpg";
import sahil from "../assets/sahil.png";

const AboutContainer = styled.div`
  padding: 2rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 40%;
  height: 40%;
  max-height: 400px;
  border-radius: 15px;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.3);
  margin: ${({ reverse }) => (reverse ? '0 0 0 2rem' : '0 2rem 0 0')};

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 1rem 0;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  font-weight: bold;
  color: rgba(0, 74, 57, 1);
`;

const heading = {
    textAlign:'center',
    color: 'black',
    fontWeight: 'bold',
    color: 'rgba(0, 49, 57, 1)'
};

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Image1 = styled.img`
  width: 20%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
  margin-top: 5rem;
  @media (max-width: 768px) {
    width: 50%;
  }
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

const About = () => {
  return (
    <AboutContainer>
      <h1 style={heading}>About Us</h1>
      <p style={heading}>Learn more about our story and our team.</p>

      <Section>
        <Image src={image2} alt="Entry of the Restaurant" />
        <TextContainer>
          <h2>Welcome to Our Restaurant</h2>
          <p>Step into our restaurant and be greeted by a warm and inviting atmosphere. Our entryway sets the stage for a memorable dining experience.</p>
        </TextContainer>
      </Section>

      <Section reverse>
        <Image src={image1} alt="Dining Area" reverse />
        <TextContainer>
          <h2>The Dining Area</h2>
          <p>Enjoy your meal in our beautifully designed dining area, filled with vibrant vibes and a cozy ambiance.</p>
        </TextContainer>
      </Section>

      <Section>
        <Image src={image3} alt="Parties and Events" />
        <TextContainer>
          <h2>Celebrate with Us</h2>
          <p>Whether it's a birthday, engagement, or kitty party, we offer the perfect setting for all your celebrations. Let us make your special occasions unforgettable.</p>
        </TextContainer>
      </Section>

      <Section reverse>
        <Image src={image4} alt="Private Meeting Area" reverse />
        <TextContainer>
          <h2>Private Meeting Space</h2>
          <p>Looking for a private area to hold your meetings? We provide a secluded space to ensure your discussions remain confidential and productive.</p>
        </TextContainer>
      </Section>

      <Section>
        <Image src={image5} alt="Night View" />
        <TextContainer>
          <h2>Night View</h2>
          <p>Experience the luxury and vibrant nightlife at our restaurant. Our night view offers a perfect blend of elegance and excitement.</p>
        </TextContainer>
      </Section>

      <Section reverse>
        <Image src={image6} alt="Bar Area" reverse />
        <TextContainer>
          <h2>Bar and More</h2>
          <p>Our restaurant also features a well-stocked bar. Enjoy a wide variety of drinks and a lively atmosphere to complement your dining experience.</p>
        </TextContainer>
      </Section>
      <ImageContainer>
        <Image1 src={sahil} alt="Sahil" />
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
    </AboutContainer>
  );
};

export default About;
