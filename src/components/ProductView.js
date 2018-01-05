import React from 'react';
import Axios from 'axios';
import {
  Table,
} from 'react-bootstrap';
import Constants from '../constants/Constants';

class ProductViewTable extends React.Component {
  constructor(props) {
    super(props)

    var config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    };

    Axios.get(Constants.BASE_URL, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  render(){
    return (
      <div>Hello</div>
    )
  }
}

export default ProductViewTable
