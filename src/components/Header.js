import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #34495e;
  padding: 1rem 2rem;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between; /* Espaço entre logo e menu */
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  color: #ecf0f1;
  position: relative;
  margin: 0 1.5rem;
  font-weight: 500;

  &:hover {
    color: #1abc9c;
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
    height: 3px;
    background: #1abc9c;
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
  }
`;

const Logo = styled.h1`
  color: #ecf0f1;
  font-size: 1.5rem;
  margin: 0;
`;

const Header = () => {
  const location = useLocation();

  return (
    <Navbar>
      <Link to="/">
        <Logo>Compselects</Logo>
      </Link>
      <NavList>
        <NavItem className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">Sobre Nós</Link>
        </NavItem>
        <NavItem
          className={location.pathname === "/publications" ? "active" : ""}
        >
          <Link to="/publications">Publicações</Link>
        </NavItem>
        <NavItem className={location.pathname === "/authors" ? "active" : ""}>
          <Link to="/authors">Autores</Link>
        </NavItem>
        <NavItem
          className={location.pathname === "/submissions" ? "active" : ""}
        >
          <Link to="/submissions">Submissões</Link>
        </NavItem>
        <NavItem className={location.pathname === "/events" ? "active" : ""}>
          <Link to="/events">Eventos</Link>
        </NavItem>
        <NavItem className={location.pathname === "/blog" ? "active" : ""}>
          <Link to="/blog">Blog</Link>
        </NavItem>
        <NavItem className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contato</Link>
        </NavItem>
      </NavList>
    </Navbar>
  );
};

export default Header;
