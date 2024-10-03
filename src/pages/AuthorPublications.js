import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { authors } from '../mockData'; // Importando os dados de autores

const Section = styled.section`
  padding: 2rem;
`;

const AuthorDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const AuthorImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const AuthorBio = styled.p`
  font-size: 1rem;
  color: #666;
`;

const PublicationsList = styled.div`
  margin-top: 2rem;
`;

const PublicationLink = styled.a`
  display: block;
  font-size: 1.2rem;
  color: #0077cc;
  text-decoration: none;
  margin-bottom: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const AuthorPublications = () => {
  const { id } = useParams(); // Captura o parâmetro de rota
  const author = authors.find((author) => author.id === parseInt(id)); // Encontra o autor pelo id

  if (!author) {
    return <p>Autor não encontrado.</p>;
  }

  return (
    <Section>
      <AuthorDetails>
        <AuthorImage src={author.image} alt={`Imagem de ${author.author}`} />
        <AuthorInfo>
          <AuthorName>{author.author}</AuthorName>
          <AuthorBio>{author.bio}</AuthorBio>
        </AuthorInfo>
      </AuthorDetails>

      <PublicationsList>
        <h2>Publicações</h2>
        <PublicationLink href={author.publications}>
          Ver publicações de {author.author}
        </PublicationLink>
      </PublicationsList>
    </Section>
  );
};

export default AuthorPublications;