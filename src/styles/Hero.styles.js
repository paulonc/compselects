import styled from 'styled-components';

export const HeroContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/images/backgroundImage.webp");
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 1rem;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.7);
`;

export const HeroTitle = styled.h1`
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

export const HeroText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
`;
