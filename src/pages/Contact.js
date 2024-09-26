import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormAndInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem; /* Adiciona distância entre o parágrafo e o formulário */
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  width: 100%;
  margin-right: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input, textarea {
    width: 100%;
    padding: 0.8rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;
    resize: none;
  }

  textarea {
    height: 150px;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddressSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 100%;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  iframe {
    margin-top: 1rem;
    border: 0;
    width: 100%;
    height: 32rem;
    border-radius: 8px;
  }
`;

const MapContainer = styled.div`
  flex: 1;
  max-width: 500px;
`;

const Contact = () => {
  return (
    <Section>
      <h1>Contato</h1>
      <p>Entre em contato conosco para mais informações.</p>
      
      <FormAndInfoContainer>
        <FormContainer>
          <form>
            <FormGroup>
              <label>Nome:</label>
              <input type="text" name="name" placeholder="Seu nome" />
            </FormGroup>
            <FormGroup>
              <label>Email:</label>
              <input type="email" name="email" placeholder="Seu email" />
            </FormGroup>
            <FormGroup>
              <label>Email:</label>
              <input type="telefone" name="telefone" placeholder="Seu telefone" />
            </FormGroup>
            <FormGroup>
              <label>Email:</label>
              <input type="assunto" name="assunto" placeholder="Assunto" />
            </FormGroup>
            <FormGroup>
              <label>Mensagem:</label>
              <textarea name="message" placeholder="Escreva sua mensagem aqui..." />
            </FormGroup>
            <Button type="submit">Enviar</Button>
          </form>
        </FormContainer>

        <MapContainer>
          <AddressSection>
            <h2>Nosso Endereço</h2>
            <p>Av. Aprígio Veloso 882 – Bairro Universitário</p>
            <p>Campina Grande – PB – CEP: 58429-900 – Brasil</p>
            <p>Telefone: (83) 2101-1073</p>
            <p>Email: pre@ufcg.edu.br</p>

            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7916.474543657527!2d-35.91908535940181!3d-7.213752327217538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e2c7816c38f%3A0xd98e854f0b0d6fe1!2sUFCG%20-%20Campus%20Campina%20Grande!5e0!3m2!1spt-BR!2sbr!4v1727385365513!5m2!1spt-BR!2sbr"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </AddressSection>
        </MapContainer>
      </FormAndInfoContainer>
    </Section>
  );
};

export default Contact;
