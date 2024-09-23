import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  padding: 2rem;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Compselects © 2024 - Todos os direitos reservados.</p>
      <p>Siga-nos nas redes sociais</p>
    </FooterContainer>
  );
};

export default Footer;
