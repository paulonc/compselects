import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 2rem 0;
  color: #007bff;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
`;

const TeamSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3rem 0;
  flex-wrap: wrap;
`;

const TeamMember = styled.div`
  margin: 1rem;
  text-align: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #777;
  }
`;

const PartnersSection = styled.div`
  margin: 4rem 0;
  background-color: #f4f4f9;
  padding: 2rem 0;
`;

const PartnerLogos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  img {
    width: 120px;
    margin: 1rem;
  }
`;

const About = () => {
  return (
    <Section>
      <Title>Sobre Nós</Title>

      <Subtitle>História e Missão</Subtitle>
      <Text>
        A Editora Compselects foi fundada há mais de 30 anos com o compromisso
        de promover o conhecimento na área de Computação. Nossa missão é
        democratizar o acesso a conteúdos de alta qualidade, oferecendo livros,
        artigos e recursos que abordam as mais diversas áreas da tecnologia e
        ciência da computação.
      </Text>
      <Text>
        Ao longo dos anos, publicamos mais de 200 livros e firmamos parcerias
        com as mais renomadas instituições de ensino e pesquisa. Acreditamos que
        o conhecimento é a chave para a inovação, e continuamos a buscar
        maneiras de entregar conteúdos relevantes e inovadores para a comunidade
        acadêmica e profissional.
      </Text>

      <Subtitle>Nossa Equipe</Subtitle>
      <TeamSection>
        <TeamMember>
          <img src="https://avatars.githubusercontent.com/u/94625698" alt="Editor 1" />
          <h3>Paulo Victor</h3>
          <p>Editor-Chefe</p>
        </TeamMember>
        <TeamMember>
          <img src="https://avatars.githubusercontent.com/u/70920004" alt="Editor 2" />
          <h3>Alfredo Andrade</h3>
          <p>Editor Assistente</p>
        </TeamMember>
        <TeamMember>
          <img src="https://avatars.githubusercontent.com/u/91812687" alt="Editor 3" />
          <h3>Gabriel Victor</h3>
          <p>Revisor    </p>
        </TeamMember>
      </TeamSection>

      <Subtitle>Parceiros</Subtitle>
      <PartnersSection>
        <Text>
          Temos orgulho de contar com o apoio de nossos parceiros institucionais
          e corporativos.
        </Text>
        <PartnerLogos>
          <img src="/assets/images/partner1.webp" alt="Parceiro 1" />
          <img src="/assets/images/partner2.jpeg" alt="Parceiro 2" />
          <img src="/assets/images/partner3.png"alt="Parceiro 3" />
        </PartnerLogos>
      </PartnersSection>
    </Section>
  );
};

export default About;
