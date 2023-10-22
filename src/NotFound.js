import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="counter_container main">
      <h1>404 - Not Found</h1>
      <p>The page you're looking for does not exist currently, hold tight...</p>



      <Link className="button" to={'/counter'}> Back to App</Link>
    </div>
  );
}

export default NotFound;
