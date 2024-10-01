import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { events } from "../mockData";

const CalendarContainer = styled.div`
  padding: 3rem 2rem;
  background-color: #f4f4f9;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const CalendarTitle = styled.h1`
  font-family: "Merriweather", serif;
  font-size: 3rem;
  color: #007bff;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const EventCard = styled(Link)`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 800px;
  text-decoration: none;
  color: #333;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
  }
`;

const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const EventTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  font-family: "Merriweather", serif;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const EventDate = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #007bff;

  @media (max-width: 480px) {
    margin-top: 0.5rem;
  }
`;

const EventLocation = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0;
`;

const EventSummary = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 1rem;
`;

const EventsCalendar = () => {
  return (
    <CalendarContainer>
      <CalendarTitle>Calendário de Eventos</CalendarTitle>
      <EventList>
        {events.map((event) => (
          <EventCard to={`/events/${event.id}`} key={event.id}>
            <EventHeader>
              <EventTitle>{event.title}</EventTitle>
              <EventDate>{new Date(event.date).toLocaleDateString()}</EventDate>
            </EventHeader>
            <EventLocation>{event.location}</EventLocation>
            <EventSummary>{event.summary}</EventSummary>
          </EventCard>
        ))}
      </EventList>
    </CalendarContainer>
  );
};

export default EventsCalendar;
