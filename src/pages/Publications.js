import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
`;

const Publications = () => {
  return (
    <Section>
      <h1>Catálogo de Publicações</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean a erat nec sapien malesuada scelerisque. Curabitur fermentum magna ut dolor sodales, ut malesuada risus fringilla. Integer non odio quis lorem tempor vehicula nec vel libero.
      </p>
      <h2>Categorias</h2>
      <ul>
        <li>Livros de Programação</li>
        <li>Artigos Acadêmicos</li>
        <li>Relatórios Técnicos</li>
        <li>Jornais e Revistas Digitais</li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus dictum felis et justo cursus, non suscipit ligula hendrerit. Praesent et orci id leo consectetur luctus.
      </p>
    </Section>
  );
};

export default Publications;
