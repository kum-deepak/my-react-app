import { useState } from 'react'

import './App.css'
import { allBooks } from "./data/books.js";

function Book({book}) {
  return (
    <div className="book" key={book.id}>
      <h3>{book.title} Hello</h3>
      <img src={`${book.cover}?text=${book.title}`}  alt={book.title}/>
      <p>Published in {book.year}</p>
    </div>
  )

}

function App() {
  const [count, setCount] = useState(0);
  const [selectedBooks, setSelectedBooks] = useState(allBooks);

  const bookComponents = selectedBooks.map(book => <Book book={book}></Book>);

  return (
    <div className="App">
      <h1>Learning React</h1>
      {bookComponents}
    </div>
  )
}

export default App
