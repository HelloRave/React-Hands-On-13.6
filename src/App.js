import React, { useState } from "react";
import BookContext from "./BookContext";
import BookListing from "./BookListing";

export default function App() {
  const [books, setBooks] = useState({
    books: [
      {
        _id: Math.floor(Math.random() * 100000),
        title: "The Lord of the Rings",
        author: "J.R.R Tolkien"
      },
      {
        _id: Math.floor(Math.random() * 100000),
        title: "A Game of Thrones",
        author: "G.R.R Martin"
      },
      {
        _id: Math.floor(Math.random() * 100000),
        title: "Chronicles of Narina",
        author: "C.S. Lewis"
      }
    ]
  });

  return (
    <div className="App">
      <h1>Books</h1>
    </div>
  );
}
