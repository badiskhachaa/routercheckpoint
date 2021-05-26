import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MovieRouter from './MovieRouter';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <MovieRouter />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals()
