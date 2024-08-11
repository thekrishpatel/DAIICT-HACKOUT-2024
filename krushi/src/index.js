import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure you import Router
import App from './App'; // Adjust the path if necessary

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
