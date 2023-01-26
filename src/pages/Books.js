import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { getAllBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);
  return (
    <div className="booksContainer">

      <div>
        {books.map((book) => (
          <Book
            category={book.category}
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
          />
        ))}

      </div>
      <hr />
      <Form />
    </div>
  );
};

export default Books;
