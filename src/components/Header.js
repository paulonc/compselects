import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ImBooks } from "react-icons/im";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones para menu aberto e fechado
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #232f3e;
  padding: 1rem 2rem;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between; /* Espaço entre logo e menu */
  align-items: center;

  @media (max-width: 1024px) {
    padding: 0.5rem 1rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1024px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: #232f3e;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
`;

const NavItem = styled.li`
  color: #ffffff;
  white-space: nowrap;
  position: relative;
  margin: 0 1.5rem;
  font-weight: 500;

  &:hover {
    color: #ff9900;
  }

  & > a {
    text-decoration: none;
    color: inherit;
    padding: 0.5rem 0;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      transform: translateY(-2px);
    }
  }

  &.active::after {
    content: "";
    display: block;
    height: 2px;
    background: #ff9900;
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
  }

  @media (max-width: 1024px) {
    margin: 1rem 0;
  }
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: #ecf0f1;
  font-size: 1.5rem;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <Navbar>
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <Logo>
          <ImBooks /> Compselects
        </Logo>
      </Link>
      <MenuButton onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuButton>
      <NavList isOpen={menuOpen}>
        <NavItem
          className={location.pathname === "/" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem
          className={location.pathname === "/about" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/about">Sobre Nós</Link>
        </NavItem>
        <NavItem
          className={location.pathname === "/publications" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/publications">Publicações</Link>
        </NavItem>
        <NavItem
          className={location.pathname === "/authors" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/authors">Autores</Link>
        </NavItem>
        <NavItem
          className={location.pathname === "/submissions" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/submissions">Submissões</Link>
        </NavItem>
        <NavItem
          className={location.pathname === "/events" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/events">Eventos</Link>
        </NavItem>
        <NavItem
          className={location.pathname === "/blog" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/blog">Blog</Link>
        </NavItem>
        <NavItem
          className={location.pathname === "/contact" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/contact">Contato</Link>
        </NavItem>
      </NavList>
    </Navbar>
  );
};

export default Header;
