import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.25rem;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1.5rem;
  display: inline-block;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
