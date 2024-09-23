import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
`;

const Contact = () => {
  return (
    <Section>
      <h1>Contato</h1>
      <p>Entre em contato conosco para mais informações.</p>
      <form>
        <div>
          <label>Nome:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Mensagem:</label>
          <textarea name="message" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </Section>
  );
};

export default Contact;
