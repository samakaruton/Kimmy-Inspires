import React from 'react';
import { books } from '../data/books';

const Books: React.FC = () => (
  <section id="books" className="section books" data-aos="fade-up">
    <h3>Books</h3>
    <div className="books-grid">
      {books.map((book: { title: string; description: string }, idx: number) => (
        <div key={idx} className="book-card" data-aos="zoom-in">
          <h4>{book.title}</h4>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Books;

