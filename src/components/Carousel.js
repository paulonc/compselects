import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { books } from "../mockData";

const CarouselWrapper = styled.div`
  padding: 2rem;
  background-color: #f4f4f9;
`;

const BookCard = styled.div`
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 150px;
    height: 220px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 4px;
  }
`;

const BookTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const BookAuthor = styled.p`
  color: #777;
  font-size: 1rem;
  margin-bottom: 0.75rem;
`;

const BookDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-top: 0.5rem;
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(books);
  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {books.map((book) => (
          <BookCard key={book.id}>
            <img src={book.image} alt={book.title} />
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>Por {book.author}</BookAuthor>
            <BookDescription>{book.description}</BookDescription>
          </BookCard>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default Carousel;
