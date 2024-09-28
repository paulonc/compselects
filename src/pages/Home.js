import Hero from "../components/Hero";
import Section from "../components/Section";
import Carousel from "../components/Carousel";
import Testimonials from "../components/Testimonials";
import EventCard from "../components/EventCard";
import Button from "../components/Button";
import styled from "styled-components";

const AboutSection = styled.section`
  background-color: #f4f4f9;
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

  p {
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.1rem;
    color: #555;
  }
`;

const Home = () => {
  return (
    <>
      <Hero />
      <Section title="Destaques">
        <Carousel />
      </Section>
      <AboutSection>
        <h2>Sobre a Editora</h2>
        <p>
          A Editora Compselects é comprometida com a democratização do conhecimento na área de Computação.
          Com mais de 200 livros publicados, buscamos sempre oferecer conteúdo de alta qualidade e inovador.
        </p>
        <Button to="/about">Saiba Mais Sobre Nós</Button>
      </AboutSection>

      <Testimonials />
      <Section title="Próximos Eventos">
        <EventCard
          title="Webinar: Inovações em Inteligência Artificial"
          date="25 de Outubro de 2024"
          description="Participe deste evento online gratuito sobre as últimas inovações na área de IA."
        />
        <EventCard
          title="Conferência: Engenharia de Software Moderna"
          date="12 de Novembro de 2024"
          description="Um evento presencial que discutirá as práticas modernas de desenvolvimento de software."
        />
        <Button to="/events">Veja Mais Eventos</Button>
      </Section>
    </>
  );
};

export default Home;
