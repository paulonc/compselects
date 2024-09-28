import React from 'react';
import { SectionContainer, Title, Subtitle, Text } from '../styles/Section.styles';

const Section = ({ title, subtitle, children }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Text>{children}</Text>
    </SectionContainer>
  );
};

export default Section;
