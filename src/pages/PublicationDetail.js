import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { books } from "../mockData";

const Section = styled.section`
  padding: 3rem 5%;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
`;

const BookDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 3rem;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const BookImage = styled.img`
  width: 250px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BookInfo = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: #007bff;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  a {
    margin-top: 1rem;
    display: inline-block;
    background-color: #007bff;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    width: fit-content;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const BookSection = styled.div`
  margin-top: 2rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  ul {
    list-style-type: disc;
    margin-left: 1.5rem;
    color: #666;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const PublicationDetail = () => {
  const { id } = useParams();
  const bookId = Number(id);
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return (
      <Section>
        <Title>Publicação não encontrada</Title>
      </Section>
    );
  }

  return (
    <Section>
      <Title>{book.title}</Title>
      <BookDetail>
        <BookImage src={book.image} alt={book.title} />
        <BookInfo>
          <h2>Autor: {book.author}</h2>
          <p>
            <strong>Descrição:</strong> {book.description}
          </p>
          <p>
            <strong>Ano de Publicação:</strong> {book.year}
          </p>
          <p>
            <strong>Categoria:</strong> {book.category}
          </p>
          <a href={book.downloadLink ? book.downloadLink : "#"}>
            {book.downloadLink ? "Download" : "Download Indisponível"}
          </a>
        </BookInfo>
      </BookDetail>
      {/* Seção adicional para mais informações */}
      <BookSection>
        <h3>Descrição Completa</h3>
        <p>{book.fullDescription}</p>
      </BookSection>
      <BookSection>
        <h3>Sumário</h3>
        <ul>
          {book.summary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </BookSection>
      <BookSection>
        <h3>Informações Adicionais</h3>
        <p>{book.additionalInfo}</p>
      </BookSection>
    </Section>
  );
};

export default PublicationDetail;
