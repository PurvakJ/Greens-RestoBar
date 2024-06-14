import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import green from "../assets/green.png";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin: 0 3rem;
  font-weight: normal;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 2px;
    background-color: green;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
  }

  &.active {
    font-weight: bold;

    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const Image = styled.img`
  height: 50px;
  width: auto; /* Maintain aspect ratio */
  margin-right: auto; /* Push menu icon to the right on smaller screens */
  margin-left: 100px;
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
    margin-left: auto;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      <Image src={green} alt="Logo" />
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </MenuIcon>
      <NavLinks isOpen={isOpen}>
        <StyledNavLink exact to="/" activeClassName="active">Home</StyledNavLink>
        <StyledNavLink to="/menu" activeClassName="active">Menu</StyledNavLink>
        <StyledNavLink to="/about" activeClassName="active">About</StyledNavLink>
        <StyledNavLink to="/contact" activeClassName="active">Contact</StyledNavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
