import React, { useState } from 'react';
import { TestimonialsContainer, Quote, Author, NextButton } from '../styles/Testimonials.styles';
import { testimonials } from '../mockData';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <TestimonialsContainer>
      <Quote>{testimonials[currentTestimonial].text}</Quote>
      <Author>{testimonials[currentTestimonial].author}</Author>
      <NextButton onClick={nextTestimonial}>Próximo Depoimento</NextButton>
    </TestimonialsContainer>
  );
};

export default Testimonials;
