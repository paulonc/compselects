import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #2c3e50;
  padding: 1rem;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 100;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const NavItem = styled.li`
  color: white;
`;

const Header = () => {
  return (
    <Navbar>
      <NavList>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/about">Sobre Nós</Link></NavItem>
        <NavItem><Link to="/publications">Publicações</Link></NavItem>
        <NavItem><Link to="/authors">Autores</Link></NavItem>
        <NavItem><Link to="/submissions">Submissões</Link></NavItem>
        <NavItem><Link to="/events">Eventos</Link></NavItem>
        <NavItem><Link to="/blog">Blog</Link></NavItem>
        <NavItem><Link to="/contact">Contato</Link></NavItem>
      </NavList>
    </Navbar>
  );
};

export default Header;
