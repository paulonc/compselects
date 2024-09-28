import styled from 'styled-components';

export const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  background-color: #e9ecef;
  padding: 2rem;
  border-radius: 8px;
`;

export const Quote = styled.blockquote`
  font-size: 1.3rem;
  color: #333;
  max-width: 600px;
  margin: 0 auto 1rem;
  position: relative;

  &:before, &:after {
    font-size: 4rem;
    color: #007bff;
  }

  &:before {
    content: open-quote;
    position: absolute;
    top: -10px;
    left: -30px;
  }

  &:after {
    content: close-quote;
    position: absolute;
    bottom: -10px;
    right: -30px;
  }
`;

export const Author = styled.cite`
  display: block;
  font-size: 1rem;
  color: #777;
  margin-top: 1rem;
`;

export const NextButton = styled.button`
  margin-top: 1.5rem;
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
