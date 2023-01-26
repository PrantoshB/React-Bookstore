import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const currentStatus = useSelector((state) => state.categories);

  const showStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categories-page">
      <h4>{currentStatus}</h4>
      <button type="button" onClick={showStatus}>Check Status</button>
    </div>
  );
};

export default Categories;
