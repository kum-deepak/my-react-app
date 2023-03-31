import { useState } from "react";

import "./App.css";
import { allBooks } from "./data/books.js";

function Book({ book }) {
  return (
    <div className="book" key={book.id}>
      <h3>{book.title} Hello</h3>
      <img src={`${book.cover}?text=${book.title}`} alt={book.title} />
      <p>Published in {book.year}</p>
    </div>
  );
}

function YearSelector({ year, setYear, setSelectedBooks }) {
  const onChange = (evt) => {
    let selectedYear = evt.target.value;

    let books;
    if (selectedYear === "All") {
      books = allBooks;
    } else {
      selectedYear = parseInt(selectedYear);
      books = allBooks.filter((book) => book.year === selectedYear);
    }

    setYear(selectedYear);
    setSelectedBooks(books);
    console.log(books.length);
  };

  const years = Array.from({ length: 12 }, (e, i) => 1959 + i);
  const options = years.map((year) => <option key={year}>{year}</option>);

  return (
    <>
      <label>Year: </label>
      <select value={year} onChange={onChange}>
        <option>All</option>
        {options}
      </select>
    </>
  );
}

function App() {
  const [selectedBooks, setSelectedBooks] = useState(allBooks);
  const [year, setYear] = useState("All");

  const bookComponents = selectedBooks.map((book) => <Book book={book}></Book>);

  return (
    <div className="App">
      <h1>Books</h1>
      <div id="control">
        <p>
          Showing {selectedBooks.length} of {allBooks.length}
        </p>
        <YearSelector
          year={year}
          setYear={setYear}
          setSelectedBooks={setSelectedBooks}
        />
      </div>

      {bookComponents}
    </div>
  );
}

export default App;
