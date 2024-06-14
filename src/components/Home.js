import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import image1 from "../assets/image1.avif"; // Adjust these paths to your actual image paths
import image2 from "../assets/image2.avif";
import image3 from "../assets/image3.avif";
import image4 from "../assets/image4.avif";
import image5 from "../assets/image5.avif";
import image6 from "../assets/image6.avif";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpeg";
import image10 from "../assets/image10.jpeg";
import image11 from "../assets/image11.jpeg";
import image12 from "../assets/image13.jpeg";
import coffee from "../assets/coffee.png";
import greens from "../assets/greens.svg";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.png";
<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Satisfy&display=swap');
</style>


const HomeContainer = styled.div``;

const FullWidthBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgba(0, 49, 57, 1);
  display: flex;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  align-content: center;
  display: flex;
  margin-top: 10px;
`;

const CenterBox = styled.div`
  width: 80%;
  height: auto;
  background-color: rgba(0, 74, 57, 1);
  margin: 20px auto;
  align-items: center;
  border-radius: 25px;
  display: flex;
  padding: 1rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 1rem;
  }
`;

const CirclesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 3rem 6rem;
`;

const Circle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-size: cover;
  margin: 10px;
  position: relative;
  margin-top: 40px;

  &:after {
    content: attr(data-title);
    position: absolute;
    font-weight: bold;
    bottom: -35px;
    white-space: nowrap;
  }
`;

const BoxContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  position: relative;
  background-color: rgba(0, 0, 0, 0.1);
  boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.3)',
`;

const BoxTitle = styled.h2`
  margin-top: 50px;
  padding-top: 50px;
  margin-left: 100px;
`;

const BoxesWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  justify-content: center;
`;

const BoxInner = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.3)',
`;

const Box = styled.div`
  display: flex;
  height: 150px;
  width: 140px;
  min-width: 30%;
  box-sizing: border-box;
  text-align: center;
  margin: 20px;
  border-radius: 25px;
  background-color: white;
`;

const BoxImage = styled.img`
  width: 100px;
  height: 80%;
  padding: 1rem;
  border-radius: 25px;
  display: flex;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ArrowLeft = styled(ArrowButton)`
  left: 0;
`;

const ArrowRight = styled(ArrowButton)`
  right: 0;
`;

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const boxes = [
      { image: image7, text: "White and Brown Cooked Dish on White Ceramic Bowls" },
      { image: image8, text: "Shrimp Pasta Served on Gray Plate" },
      { image: image9, text: "Flat Lay Photography of Pasta Served in White Plate" },
      { image: image10, text: "Egg and Vegetable Dish" },
      { image: image11, text: "Shallow Multi Vegies Thin Crust Pizza" },
      { image: image12, text: "Black Espresso Maker With Cup" },
    ];
  
    const circles = [
      { image: image1, title: "Chicken" },
      { image: image2, title: "Pizza" },
      { image: image3, title: "Burger" },
      { image: image4, title: "Meal" },
      { image: image5, title: "Drinks" },
      { image: image6, title: "Dessert" },
    ];
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? boxes.length - 3 : prevIndex - 1));
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === boxes.length - 3 ? 0 : prevIndex + 1));
    };
  
    const heading = {
      color: 'rgba(0, 119, 77, 1)',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: '0 30px',
    };
  
    const upperbox = {
      color: 'white',
      fontSize: '20px',
      padding: '0 0 0 5rem',
      justifyContent: 'center',
      textAlign: 'center',
      alignContent: 'center',
    };

  
    const button1 = {
      border: '2px solid white',
      padding: '0.2rem',
      borderRadius: '25px',
      height: '50px',
      width: 'auto',
      cursor: 'pointer',
      marginRight: '50px',
      marginLeft: '50px'
    };
  
    const buttontext1 = {
      justifyContent: 'center',
      textAlign: 'center',
      alignContent: 'center',
      padding: '0 1rem 2rem 1rem',
      color: 'white',
      margin: '3px 0 5px 0',
    };
  
    const button2 = {
        border: '2px solid white',
        padding: '0.2rem',
        borderRadius: '25px',
        height: '50px',
        width: 'auto',
        cursor: 'pointer',
        backgroundColor: 'rgba(0, 104, 57, 1)',
        marginLeft: '20px',
      
        '@media (max-width: 768px)': {
          marginLeft: '0',
          marginTop: '20px',
        },
      
        '@media (max-width: 480px)': {
          marginLeft: '0',
          marginTop: '10px',
        },
      };
      
      const buttontext2 = {
        textAlign: 'center',
        padding: '0 1rem',
        color: 'white',
      };
      
      const text = {
        color: 'white',
        fontWeight: 'bold',
        padding: '0',
      
        '@media (max-width: 768px)': {
          padding: '0 1rem',
        },
      
        '@media (max-width: 480px)': {
          padding: '0 0.5rem',
        },
      };

      const Image = styled.img`
  height: 200px;
  width: 100px;

  @media (max-width: 768px) {
    height: 150px;
    width: 75px;
  }

  @media (max-width: 480px) {
    height: 120px;
    width: 60px;
  }
`;
      
  
    const button3 = {
      padding: '0.5rem',
      borderRadius: '15px',
      height: '25px',
      width: '50px',
      cursor: 'pointer',
      backgroundColor: 'rgba(0, 74, 57, 1)',
      boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.3)',
      margin: '6rem 1rem 0 0'
    };
  
    const buttontext3 = {
      justifyContent: 'center',
      textAlign: 'center',
      alignContent: 'center',
      color: 'white',
      margin: '3px 0 5px 0',
    };
  
    const text1 = {
      padding: '1rem 10px',
      color: 'black',
    }
  
    const GreensImg = styled.div`
    margin-left: 93%;
  
    @media (max-width: 768px) {
      margin-left: 75%;
    }
  `;


    const TextContainer = styled.div`
  flex-grow: 1;
  padding: 0 2rem;
  color: white;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;
  
const First = styled.div`
  margin: 1rem auto; // 'auto' for horizontal centering
  background-color: rgba(0, 0, 0, 0.1);
  height: 100px;
  width: 80%;
  justify-content: center; // Center content horizontally
  align-items: center; // Center content vertically
  text-align: center; // Center text
  border-radius: 25px;
  display: flex;

  img {
    max-width: 100%;
    margin: 0.5rem;
  }

  @media (max-width: 1160px) {
    img {
      display: none;
    }
  }
`;



  const ArticleInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Article = styled.div`
  width: 24%;
  margin: 0 0.1rem 0 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const ArticlesContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: rgba(0, 74, 57, 1);
  border-radius: 100px 100px 0 0;
  position: relative; /* Ensure the text overlay is positioned relative to this container */
  padding: 15rem 0 4rem 0 ;
  text-align: center;
`;

const ArticleOuter = styled.div`
  position: absolute;
  padding: 10rem 0 0 0; 
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Satisfy, cursive;
  font-style: italic;
  font-size: 3.5rem;
  color: white;
  z-index: 10; /* Make sure the text is on top */
  text-align: center;

  @media (max-width: 1160px) {
    font-size: 3rem;
  }

  @media (max-width: 990px) {
    font-size: 2.2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }

`;

const imagepic14 = {
  borderRadius: '100px 0 100px 0',
};

const imagepic15 = {
  borderRadius: '100px 0 0 100px',
};

const imagepic16 = {
  borderRadius: '0 100px 0 100px',
};

const imagepic17 = {
  borderRadius: '0 100px 100px 0',
};

const color = {
    color: 'black'
}


return (
    <HomeContainer>
      <First>
        <img src={greens} alt="Greens" />
        <img src={greens} alt="Greens" />
        <img src={greens} alt="Greens" />
        <div>
          <p style={heading}>Welcome to Green's RestoBar</p>
          <p style={heading}>Experience the best dining experience with us.</p>
        </div>
        <img src={greens} alt="Greens" />
        <img src={greens} alt="Greens" />
        <img src={greens} alt="Greens" />
      </First>
      <FullWidthBox>
        <p style={heading}>
          Refreshingly Cool Alert!
        </p>
        <Link to="/contact" style={button1}>
          <p style={buttontext1}>
            KNOW MORE
          </p>
        </Link>
      </FullWidthBox>
      <CenterBox>
        <div>
          <Image src={coffee} alt="Coffee" />
        </div>
        <TextContainer>
          <h5 style={text}>
            Now Brewing<br /><br />Green's RestoBar Menu<br /><br />Indulge in season's feasting! Make your sips extra special with cold coffee with Icecream. Explore Menu.<br /><br />Starting From<br />Rs 250
          </h5>
        </TextContainer>
        <Link to="/menu" style={button2}>
          <p style={buttontext2}>
            MENU
          </p>
        </Link>
      </CenterBox>
      <CirclesContainer>
        {circles.map((circle, index) => (
          <Link to="/menu" style={color}>
            <Circle key={index} data-title={circle.title} style={{ backgroundImage: `url(${circle.image})` }} />
          </Link>
        ))}
      </CirclesContainer>
      <BoxContainer>
        <BoxTitle>Our Highlights</BoxTitle>
        <ArrowLeft onClick={handlePrevClick}>&lt;</ArrowLeft>
        <BoxesWrapper>
          <BoxInner style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
            {boxes.map((box, index) => (
              <Box key={index}>
                <div>
                  <BoxImage src={box.image} alt={`Box ${index + 1}`} />
                </div>
                <div style={text1}>
                  <h5>{box.text}</h5>
                </div>
                <Link to="/menu" style={button3}>
                  <h5 style={buttontext3}>MENU</h5>
                </Link>
              </Box>
            ))}
          </BoxInner>
        </BoxesWrapper>
        <ArrowRight onClick={handleNextClick}>&gt;</ArrowRight>
        <GreensImg>
          <img src={greens} alt="Greens" />
        </GreensImg>
      </BoxContainer>
      <ArticlesContainer>
        <ArticleOuter>
          GREEN'S RESTOBAR<br />RESTAURANT
        </ArticleOuter>
        <ArticleInner>
          <Article>
            <img src={image14} alt="image" style={imagepic14} />
          </Article>
          <Article>
            <img src={image15} alt="image" style={imagepic15} />
          </Article>
          <Article>
            <img src={image16} alt="image" style={imagepic16} />
          </Article>
          <Article>
            <img src={image17} alt="image" style={imagepic17} />
          </Article>
        </ArticleInner>
      </ArticlesContainer>
    </HomeContainer>
  );
};
  export default Home;