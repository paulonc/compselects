import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.4;
  text-align: center;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #111111;
  text-align: center;
`;

const Authors = () => {
  return (
    <Section>
      <Title>Autores em Destaque</Title>
      <Subtitle>Conheça nossos autores e suas contribuições.</Subtitle>

    </Section>
  );
};

export default Authors;
