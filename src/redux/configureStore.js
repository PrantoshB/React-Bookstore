import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
},
applyMiddleware((thunk)));

export default store;
