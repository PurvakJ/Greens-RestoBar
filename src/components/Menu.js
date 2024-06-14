import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import image1 from "../assets/veg1.jpg";
import image2 from "../assets/veg2.jpg";
import image3 from "../assets/veg3.jpeg";
import image4 from "../assets/veg4.jpg";
import image5 from "../assets/veg5.jpg";
import image6 from "../assets/veg6.jpg";
import image7 from "../assets/veg7.jpg";
import image8 from "../assets/veg8.jpeg";
import image9 from "../assets/veg9.jpg";
import resto1 from "../assets/resto1.avif";
import resto2 from "../assets/resto2.avif";
import resto3 from "../assets/resto3.avif";
import resto4 from "../assets/resto4.avif";
import resto5 from "../assets/resto5.avif";
import resto6 from "../assets/resto6.avif";
import resto7 from "../assets/resto7.avif";
import resto8 from "../assets/resto8.avif";
import useOnScreen from './useOnScreen';

const MenuContainer = styled.div`
  padding: 2rem;
`;

const BoxContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  position: relative;
  background-color: rgba(0, 49, 57, 1);
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
`;

const BoxTitle = styled.h2`
  margin-top: 50px;
  padding-top: 50px;
  margin-left: 100px;
  color: white;
`;


const BoxTitle1 = styled.h2`
text-align: center;
  margin-top: 50px;
  padding-top: 50px;
  color: rgba(0, 49, 57, 1);
`;

const BoxesWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Create 3 columns */
  gap: 20px; /* Space between items */
  justify-content: center;
  padding: 2rem;

  @media (max-width: 1024px) { /* Tablet */
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) { /* Mobile */
    grid-template-columns: 1fr;
  }
`;

const Box = styled.div`
  display: flex;
  height: auto;
  box-sizing: border-box;
  text-align: left;
  border-radius: 25px;
  background-color: white;
  padding: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

const BoxImage = styled.img`
  width: 150px;
  max-height: 150px;
  height: 80%;
  border-radius: 25px;
  margin-right: 20px; /* Margin between image and text */
  align-self: center; /* Center the image vertically */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text1 = styled.div`
  margin: -10px 0 0 0;
  color: black;
  justify-content: center;
  align-self: center;
`;

const Text2 = styled.div`
  margin: -30px 0 0 0;
  color: black;
`;

const Text = styled.div`
  color: grey;
`;

const CollageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Create 4 columns */
  gap: 10px; /* Space between items */
  justify-content: center;
    padding: 2rem;
    border-radius: 25px;
  @media (max-width: 1024px) { /* Tablet */
    grid-template-columns: repeat(2, 1fr);
  }
`;


const CollageImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 10px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  margin: 15% auto;
  padding: 20px;
  width: 80%;
  max-width: 700px;
`;

const ModalImage = styled.img`
  width: 100%;
  border-radius: 15px;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 25px;
  color: white;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
`;

const BoxComponent = ({ box, onClick }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <Box ref={ref} isVisible={isVisible} onClick={() => onClick(box.image)}>
      <BoxImage src={box.image} alt={box.text2} />
      <TextContainer>
        <Text>
          <h4>{box.text2}</h4>
        </Text>
        <Text1>
          <h5>{box.text}</h5>
        </Text1>
        <Text2>
          <h5>{box.text1}</h5>
        </Text2>
      </TextContainer>
    </Box>
  );
};

const CollageComponent = ({ image, onClick }) => (
  <CollageImage src={image} alt="Collage" onClick={() => onClick(image)} />
);

const Menu = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  const boxes = [
    { image: image1, text2: "Paneer Tikka:", text: "Delightful grilled paneer with rich spices.", text1: "Rs. 330" },
    { image: image2, text2: "Soya Masala Chaap:", text: "Soya chunks cooked in spicy masala.", text1: "Rs. 250" },
    { image: image3, text2: "Manchurian:", text: "Crispy veggie balls in a tangy sauce.", text1: "Rs. 230" },
    { image: image4, text2: "Veg Chopsey:", text: "Stir-fried veggies in a flavorful sauce.", text1: "Rs. 220" },
    { image: image5, text2: "Sandwich:", text: "Fresh and hearty with a variety of fillings.", text1: "Rs. 180" },
    { image: image6, text2: "Pizza:", text: "Loaded with toppings and gooey cheese.", text1: "Rs. 250" },
    { image: image7, text2: "Burger:", text: "Juicy patty with fresh lettuce and tomatoes.", text1: "Rs. 200" },
    { image: image8, text2: "Paneer Tikka Roll:", text: "Spicy paneer wrapped in soft bread.", text1: "Rs. 320" },
    { image: image9, text2: "Malai Kofta:", text: "Creamy curry with delicious veggie koftas.", text1: "Rs. 280" },
  ];

  const collageImages = [resto1, resto2, resto3, resto4, resto5, resto6, resto7, resto8];

  return (
    <MenuContainer>
      <BoxContainer>
        <BoxTitle>Our Menu</BoxTitle>
        <BoxesWrapper>
          {boxes.map((box, index) => (
            <BoxComponent box={box} key={index} onClick={openModal} />
          ))}
        </BoxesWrapper>
      </BoxContainer>

      <BoxTitle1>GREEN'S RESTOBAR MENU</BoxTitle1>
      <CollageWrapper>
        {collageImages.map((image, index) => (
          <CollageComponent image={image} key={index} onClick={openModal} />
        ))}
      </CollageWrapper>

      <Modal isOpen={modalOpen}>
        <ModalContent>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <ModalImage src={modalImage} alt="Enlarged" />
        </ModalContent>
      </Modal>
    </MenuContainer>
  );
};

export default Menu;
