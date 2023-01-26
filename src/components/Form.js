import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const createBook = (title, author, category) => (
  {
    item_id: uuidv4(),
    title,
    author,
    category,
  }
);

const Form = () => {
  const titleValue = useRef();
  const authorValue = useRef();
  const categoryValue = useRef();
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    const title = titleValue.current.value;
    const author = authorValue.current.value;
    const category = categoryValue.current.value;
    if (title !== '' && author !== '') {
      dispatch(addBook(createBook(title, author, category)));
      titleValue.current.value = '';
      authorValue.current.value = '';
    } else e.preventDefault();
  };

  return (
    <div>
      <h3 id="add-title">ADD NEW BOOK</h3>
      <form>
        <input type="text" name="title" placeholder="Add Book Title" ref={titleValue} required />
        <input type="text" name="author" placeholder="Add Book Author" ref={authorValue} required />
        <select name="book-category" id="book-category" ref={categoryValue}>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Biography">Biography</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <button className="add-book" type="button" onClick={clickHandler}>Add Book</button>
      </form>
    </div>
  );
};

export default Form;
