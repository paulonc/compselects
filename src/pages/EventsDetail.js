import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { events } from "../mockData";

const EventDetailContainer = styled.div`
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const EventTitle = styled.h1`
  font-family: "Merriweather", serif;
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const EventImage = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const EventInfo = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-left: 5px solid #007bff;
  background-color: #f5f7fa;
  border-radius: 8px;
  line-height: 1.6;
`;

const EventAgenda = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  background-color: #f7f8fc;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  ul {
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.75rem;
    list-style: disc;
  }
`;

const RegistrationButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  color: white;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-align: center;
  max-width: 300px;
  margin: 2rem auto;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }
`;

const EventDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background-color: #f7f8fc;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));

  return (
    <EventDetailContainer>
      {event ? (
        <>
          <EventTitle>{event.title}</EventTitle>
          <EventImage style={{ backgroundImage: `url(${event.image})` }} />
          <EventInfo>
            <strong>Data:</strong> {new Date(event.date).toLocaleDateString()}
            <br />
            <strong>Local:</strong> {event.location}
          </EventInfo>
          <EventDescription>{event.summary}</EventDescription>
          <EventAgenda dangerouslySetInnerHTML={{ __html: event.agenda }} />
          <RegistrationButton target="_blank">Inscreva-se</RegistrationButton>
        </>
      ) : (
        <p>Evento não encontrado.</p>
      )}
    </EventDetailContainer>
  );
};

export default EventDetail;
