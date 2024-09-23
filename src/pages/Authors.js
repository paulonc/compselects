import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
`;

const Authors = () => {
  return (
    <Section>
      <h1>Autores em Destaque</h1>
      <p>Conheça nossos autores e suas contribuições.</p>
    </Section>
  );
};

export default Authors;
