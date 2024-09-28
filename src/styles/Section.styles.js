import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 2.8rem;
  color: #333;

  &:after {
      content: "";
      width: 50px;
      height: 3px;
      background-color: #007bff;
      display: block;
      margin: 0.5rem auto;
    }
`;

export const Subtitle = styled.h2`
  font-size: 1rem;
  line-height: 1.4rem;
  font-weight: normal;
  color: #007bff;
`;

export const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
`;
