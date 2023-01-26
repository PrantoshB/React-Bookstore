import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const GET_BOOKS = 'GET_BOOKS';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CgMjn0O45ITkQbdSriqK/books';

const getAllBooks = createAsyncThunk(
  GET_BOOKS,
  async (post, { dispatch }) => {
    const response = await fetch(url);
    const data = await response.json();
    const books = Object.keys(data).map((id) => ({
      ...data[id][0],
      item_id: id,
    }));
    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
  },
);

const addBook = createAsyncThunk(
  ADD,
  async (book, { dispatch }) => {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    dispatch({
      type: ADD,
      payload: book,
    });
  },
);

const removeBook = createAsyncThunk(
  REMOVE,
  async (id, { dispatch }) => {
    await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: REMOVE,
      payload: id,
    });
  },
);

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return [...state.filter((book) => book.item_id !== action.payload)];
    default:
      return state;
  }
};

export { getAllBooks, addBook, removeBook };
export default bookReducer;
