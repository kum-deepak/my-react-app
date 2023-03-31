import { useState } from "react";

import "./App.css";
import { allBooks } from "./data/books.js";

const years = [
  "All", 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971,
];

function Book({ book }) {
  return (
    <div className="book">
      <h3>{book.title} Hello</h3>
      <img src={`${book.cover}?text=${book.title}`} alt={book.title} />
      <p>Published in {book.year}</p>
    </div>
  );
}

function YearSelector({ year, setYear, setSelectedBooks }) {
  const onChange = (evt) => {
    let selectedYear = evt.target.value;
    if (selectedYear !== "All") {
      selectedYear = parseInt(selectedYear);
    }
    setYear(selectedYear);
  };

  const options = years.map((year) => <option key={year}>{year}</option>);

  return (
    <>
      <label>Year: </label>
      <select value={year} onChange={onChange}>
        {options}
      </select>
    </>
  );
}

function App() {
  const [year, setYear] = useState("All");

  let selectedBooks;
  if (year === "All") {
    selectedBooks = allBooks;
  } else {
    selectedBooks = allBooks.filter((book) => book.year === year);
  }

  const bookComponents = selectedBooks.map((book) => (
    <Book book={book} key={book.id}></Book>
  ));

  return (
    <div className="App">
      <h1>Books</h1>
      <div id="control">
        <p>
          Showing {selectedBooks.length} of {allBooks.length}
        </p>
        <YearSelector year={year} setYear={setYear} />
      </div>

      {bookComponents}
    </div>
  );
}

export default App;
