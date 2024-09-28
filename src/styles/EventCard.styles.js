import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1px solid #007bff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const CardDate = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin: 0.5rem 0;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
  line-height: 1.4;
`;
