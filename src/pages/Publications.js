import React, { useState } from "react";
import styled from "styled-components";
import { books } from "../mockData";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Section = styled.section`
  flex: 1;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  input,
  select {
    padding: 0.75rem;
    margin: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 1rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin: 0.5rem;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const BookCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 150px;
    height: 220px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 5px;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #555;
  }

  a {
    margin-top: 1rem;
    display: inline-block;
    background-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    text-decoration: none;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const NoResultsMessage = styled.p`
  font-size: 1.5rem;
  color: #555;
  text-align: center;
  margin-top: 3rem;
`;

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterYear, setFilterYear] = useState("");

  const handleSearch = () => {};

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory
      ? book.category === filterCategory
      : true;
    const matchesYear = filterYear ? book.year === filterYear : true;

    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <PageContainer>
      <Section>
        <Title>Catálogo de Publicações</Title>

        <SearchBar>
          <input
            type="text"
            placeholder="Buscar por título ou autor"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="">Categoria</option>
            <option value="Programação">Livros de Programação</option>
            <option value="Artigos">Artigos Acadêmicos</option>
            <option value="Relatórios">Relatórios Técnicos</option>
          </select>
          <select onChange={(e) => setFilterYear(e.target.value)}>
            <option value="">Ano</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
          <button onClick={handleSearch}>Buscar</button>
        </SearchBar>

        {filteredBooks.length === 0 ? (
          <NoResultsMessage>Nenhum livro encontrado.</NoResultsMessage>
        ) : (
          <BookGrid>
            {filteredBooks.map((book) => (
              <BookCard key={book.id}>
                <img src={book.image} alt={book.title} />
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.year}</p>
                <a href={`/publications/${book.id}`}>Ver Detalhes</a>
              </BookCard>
            ))}
          </BookGrid>
        )}
      </Section>
    </PageContainer>
  );
};

export default Publications;
