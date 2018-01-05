import React            from 'react';
import ReactDOM         from 'react-dom';
import Header           from './components/Header'
import Game             from './components/Game'
import BasicExample     from './components/BasicExample'
import ProductViewTable from './components/ProductView'

import './index.css';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <ProductViewTable />,
  document.getElementById('root')
);
