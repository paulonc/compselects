import styled from "styled-components";

const TestimonialsSection = styled.section`
  background-color: #f9f9f9;
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
    font-family: "Merriweather", serif;

    &:after {
      content: "";
      width: 60px;
      height: 3px;
      background-color: #007bff;
      display: block;
      margin: 0.5rem auto;
    }
  }

  p {
    max-width: 750px;
    margin: 0 auto;
    font-size: 1.2rem;
    line-height: 1.8;
    color: #555;
    padding-bottom: 2rem;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
  position: relative;
  font-style: italic;
`;

const Author = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Role = styled.p`
  font-size: 1rem;
  color: #999;
`;

const Testimonials = (props) => {
  return (
    <TestimonialsSection>
      <h2>O que nossos {props.role} estão dizendo</h2>
      <TestimonialGrid>
        {props.data.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <TestimonialText>"{testimonial.text}"</TestimonialText>
            <Author>{testimonial.author}</Author>
            <Role>{testimonial.role}</Role>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialsSection>
  );
};

export default Testimonials;
