import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, CardTitle, CardDate, CardDescription } from '../styles/EventCard.styles';

const EventCard = ({ title, date, description }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardDate>{date}</CardDate>
    <CardDescription>{description}</CardDescription>
  </CardContainer>
);

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EventCard;
