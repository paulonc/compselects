import Hero from "../components/Hero";
import Section from "../components/Section";
import Carousel from "../components/Carousel";
import Testimonials from "../components/Testimonials";
import EventCard from "../components/EventCard";
import Button from "../components/Button";
import styled from "styled-components";
import { events } from "../mockData";

const AboutSection = styled.section`
  background-color: #f4f4f9;
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

const EventsSection = styled(Section)`
  background-color: #ffffff;
  padding: 4rem 2rem;
  text-align: center;
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const CustomButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  font-size: 1.2rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
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
          A Editora Compselects é comprometida com a democratização do
          conhecimento na área de Computação. Com mais de 200 livros publicados,
          buscamos sempre oferecer conteúdo de alta qualidade e inovador para
          profissionais e entusiastas da tecnologia.
        </p>
        <CustomButton to="/about">Saiba Mais Sobre Nós</CustomButton>
      </AboutSection>
      <Testimonials />
      <EventsSection title="Próximos Eventos">
        <EventGrid>
          {events.slice(0, 2).map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              description={event.description}
            />
          ))}
        </EventGrid>
        <CustomButton to="/events">Veja Mais Eventos</CustomButton>
      </EventsSection>
    </>
  );
};

export default Home;
