import React from "react";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import { useState } from "react";
import { testimonials } from "../mockData";

const Hero = styled.div`
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.5rem;
  text-align: center;
  padding: 0 1rem;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.7);

  h1 {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

const Section = styled.section`
  padding: 3rem 2rem;
  text-align: center;

  h2 {
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
  }
`;

const AboutSection = styled(Section)`
  background-color: #f4f4f9;

  p {
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.1rem;
    color: #555;
  }
`;

const TestimonialsSection = styled(Section)`
  background-color: #e9ecef;
  font-style: italic;

  blockquote {
    font-size: 1.3rem;
    color: #333;
    max-width: 600px;
    margin: 0 auto 1rem;
    position: relative;

    &:before {
      content: open-quote;
      font-size: 4rem;
      color: #007bff;
      position: absolute;
      top: -10px;
      left: -30px;
    }

    &:after {
      content: close-quote;
      font-size: 4rem;
      color: #007bff;
      position: absolute;
      bottom: -10px;
      right: -30px;
    }
  }

  cite {
    display: block;
    font-size: 1rem;
    color: #777;
    margin-top: 1rem;
  }
`;

const TestimonialsCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;

  button {
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
  }
`;

const EventsSection = styled(Section)`
  background-color: #fdfdfe;
`;

const EventCard = styled.div`
  padding: 2rem;
  margin: 1.5rem auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  text-align: left;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.5rem;
  }
`;

const Button = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.25rem;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1.5rem;
  display: inline-block;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <>
      <Hero>
        <div>
          <h1>Explore Nossos Livros e Envie Seu Manuscrito</h1>
          <Button to="/submissions">Envie Seu Manuscrito</Button>
        </div>
      </Hero>

      <Section>
        <h2>Destaques</h2>
        <Carousel />
      </Section>

      <AboutSection>
        <h2>Sobre a Editora</h2>
        <p>
          A Editora Compselects é comprometida com a democratização do
          conhecimento na área de Computação. Com mais de 200 livros publicados,
          buscamos sempre oferecer conteúdo de alta qualidade e inovador.
        </p>
        <Button to="/about">Saiba Mais Sobre Nós</Button>
      </AboutSection>

      <TestimonialsSection>
        <h2>Depoimentos</h2>
        <TestimonialsCarousel>
          <blockquote>{testimonials[currentTestimonial].text}</blockquote>
          <cite>{testimonials[currentTestimonial].author}</cite>
          <button onClick={nextTestimonial}>Próximo Depoimento</button>
        </TestimonialsCarousel>
      </TestimonialsSection>

      <EventsSection>
        <h2>Próximos Eventos</h2>
        <EventCard>
          <h3>Webinar: Inovações em Inteligência Artificial</h3>
          <p>Data: 25 de Outubro de 2024</p>
          <p>
            Participe deste evento online gratuito sobre as últimas inovações na
            área de IA.
          </p>
        </EventCard>
        <EventCard>
          <h3>Conferência: Engenharia de Software Moderna</h3>
          <p>Data: 12 de Novembro de 2024</p>
          <p>
            Um evento presencial que discutirá as práticas modernas de
            desenvolvimento de software.
          </p>
        </EventCard>
        <Button to="/events">Veja Mais Eventos</Button>
      </EventsSection>
    </>
  );
};

export default Home;
