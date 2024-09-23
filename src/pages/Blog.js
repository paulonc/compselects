import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
`;

const Blog = () => {
  return (
    <Section>
      <h1>Blog</h1>
      <p>Fique por dentro das últimas novidades e artigos sobre computação.</p>
    </Section>
  );
};

export default Blog;
