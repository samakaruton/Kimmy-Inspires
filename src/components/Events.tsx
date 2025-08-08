import React from 'react';
import { events } from '../data/events';

const Events: React.FC = () => (
  <section id="events" className="section events" data-aos="fade-up">
    <h3>Upcoming Events</h3>
    <ul className="events-list">
      {events.map((event: string, idx: number) => (
        <li key={idx} data-aos="fade-left">{event}</li>
      ))}
    </ul>
  </section>
);

export default Events;
