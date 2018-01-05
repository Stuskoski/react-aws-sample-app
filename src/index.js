import React    from 'react';
import ReactDOM from 'react-dom';
import Header   from './components/Header'
import Game     from './components/Game'

import './index.css';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
