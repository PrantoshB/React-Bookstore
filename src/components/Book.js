/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Progress } from 'antd';
import { removeBook } from '../redux/books/books';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const progress = Math.floor(Math.random() * 85 + 10);
  const chapter = Math.floor(Math.random() * 20 + 1);
  return (
    <div className="bookContainer">
      <div className="book-and-button">
        <p id="category">{category}</p>
        <h2 id="title">{title}</h2>
        <p id="author">{author}</p>
        <div className="buttonsContainer">
          <button type="button">Comments</button>
          <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="prog-chapt">
        <div className="progressBar">
          <Progress
            type="circle"
            width={80}
            format={() => ''}
            strokeWidth={10}
            strokeColor={{
              '0%': '#307bbe',
              '100%': '#379cf6',
            }}
            trailColor="#e8e8e8"
            percent={progress}
          />
          <div className="percent">
            <h2 id="percent">
              {progress}
              %
            </h2>
            <p>Completed</p>
          </div>
        </div>
        <div className="currentChapt">
          <p id="chapthead">CURRENT CHAPTER</p>
          <p id="chaptname">
            Chapter
            {chapter}
          </p>
          <button id="update" type="button">UPDATE PROGRESS</button>
        </div>
      </div>

    </div>

  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
