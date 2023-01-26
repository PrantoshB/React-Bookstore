import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="navigation">
    <h1>Bookstore CMS</h1>
    <ul>
      <li><Link to="/">Books</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
    <span className="material-symbols-outlined" id="user-icon">
      account_circle
    </span>
  </div>
);

export default Navigation;
