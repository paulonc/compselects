import React from 'react';
import styled from 'styled-components';
import { authors } from '../mockData';
import Testimonials from "../components/Testimonials";

// Estilos principais
const Section = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.4;
  text-align: center;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const AuthorCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AuthorImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const AuthorName = styled.h2`
  font-size: 1.5rem;
  color: #111;
`;

const AuthorBio = styled.p`
  font-size: 1rem;
  color: #555;
`;

const AuthorLink = styled.a`
  display: block;
  margin-top: 1rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CallToAction = styled.div`
  background-color: #2c3e50;
  color: #fff;
  padding: 2rem;
  text-align: center;
  margin-top: 4rem;
`;

const Authors = () => {
  return (
    <Section>
      <Title>Autores em Destaque</Title>
      <Subtitle>Conheça nossos autores e suas contribuições.</Subtitle>

      <Grid>
        {authors.map((author) => (
          <AuthorCard key={author.id}>
            <AuthorImage src={author.image} alt={author.author} />
            <AuthorName>{author.author}</AuthorName>
            <AuthorBio>{author.bio}</AuthorBio>
            <AuthorLink href={author.publications}>Ver publicações</AuthorLink>
          </AuthorCard>
        ))}
      </Grid>

      <CallToAction>
        <h2>Seja um Autor</h2>
        <p>
          Publique com a nossa editora e alcance um público global. Oferecemos suporte completo no processo de publicação, revisões profissionais, e muito mais.
        </p>
        <p><strong>Benefícios:</strong> visibilidade, suporte editorial e parceria.</p>
        <p><strong>Requisitos:</strong> paixão pela escrita, compromisso com prazos e originalidade.</p>
      </CallToAction>
      <Testimonials role={"autores"} data={authors} />
    </Section>
  );
};

export default Authors;