import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const createBook = (title, author) => (
  {
    item_id: uuidv4(),
    title,
    author,
    category: 'Adventure',
  }
);

const Form = () => {
  const titleValue = useRef();
  const authorValue = useRef();
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    const title = titleValue.current.value;
    const author = authorValue.current.value;

    if (title !== '' && author !== '') {
      dispatch(addBook(createBook(title, author)));
      titleValue.current.value = '';
      authorValue.current.value = '';
    } else e.preventDefault();
  };

  return (
    <div>
      <form>
        <input type="text" name="title" id="title" placeholder="Add Book Title" ref={titleValue} required />
        <input type="text" name="author" id="author" placeholder="Add Book Author" ref={authorValue} required />
        <button type="button" onClick={clickHandler}>Add Book</button>
      </form>
    </div>
  );
};

export default Form;
