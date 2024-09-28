import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 3rem 2rem;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    width: 50px;
    height: 3px;
    background-color: #007bff;
    display: block;
    margin: 0.5rem auto;
  }
`;
