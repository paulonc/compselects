import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from '../styles/StyledButton.styles';

const Button = ({ to, children }) => (
  <StyledButton as={Link} to={to}>
    {children}
  </StyledButton>
);

export default Button;
