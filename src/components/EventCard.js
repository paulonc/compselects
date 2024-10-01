import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled(Link)`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1.5rem;
  text-decoration: none;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: block;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const EventTitle = styled.h3`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 0.5rem;
`;

const EventDate = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const EventDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const EventCard = ({ id, title, date, description }) => {
  return (
    <CardContainer to={`/events/${id}`}>
      <EventTitle>{title}</EventTitle>
      <EventDate>{new Date(date).toLocaleDateString()}</EventDate>
      <EventDescription>{description}</EventDescription>
    </CardContainer>
  );
};

export default EventCard;
