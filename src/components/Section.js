import React from 'react';
import { SectionContainer, SectionTitle } from '../styles/Section.styles';

const Section = ({ title, children }) => (
  <SectionContainer>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionContainer>
);

export default Section;
