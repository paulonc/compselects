import React from 'react';
import { HeroContainer, HeroTitle, HeroText } from '../styles/Hero.styles';
import Button from './Button';

const Hero = () => (
  <HeroContainer>
    <div>
      <HeroTitle>Explore nossos Livros</HeroTitle>
      <HeroText>Faça parte do nosso time</HeroText>
      <Button to="/submissions">Envie Seu Manuscrito</Button>
    </div>
  </HeroContainer>
);

export default Hero;
