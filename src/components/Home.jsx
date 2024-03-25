import { useEffect, useState } from "react";
import Banner from "./Banner";
import Book from "./Book";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <div>
        <h1 className="text-4xl font-bold text-center my-10">Books</h1>
        <div className="grid grid-cols-3 gap-10">
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
