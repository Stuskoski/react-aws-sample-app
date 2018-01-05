import React from 'react';
import Axios from 'axios';
import {
  Table,
  Image,
  Pagination
} from 'react-bootstrap';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import Constants from '../constants/Constants';

class ProductViewTable extends React.Component {

  constructor() {
    super();

    this.state = {
      products: [{}]
    }
  }


  componentDidMount() {
    var config = {
        headers: {
          'crossDomain': 'true',
          'Content-Type': 'text/html',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
          'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT'}
    };
    console.log(Constants.BASE_URL);

    Axios.get(Constants.BASE_URL, config)
      .then(data => {
        console.log(data);
        this.setState({
          products: ["Success"]
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({

          products: [{
            "name": "hero Product",
            "detail": "Lorem ipsum dolor sit amet",
            "price": "99",
            "hero": "OMG This just came out today!",
            "image": "http://placehold.it/100x100/999/CCC"
          },{
            "name": "Product 1",
            "detail": "Lorem ipsum dolor sit amet",
            "price": "99",
            "info": "This is the latest and greatest product from Derp corp.",
            "image": "http://placehold.it/100x100/999/CCC"
          },{
            "name": "Product 2",
            "detail": "Lorem ipsum dolor sit amet",
            "price": "99",
            "offer": "BOGOF",
            "image": "http://placehold.it/100x100/999/CCC"
          },{
            "name": "Product 3",
            "detail": "Lorem ipsum dolor sit amet",
            "price": "99",
            "image": "http://placehold.it/100x100/999/CCC"
          },{
            "name": "Product 4",
            "detail": "Lorem ipsum dolor sit amet",
            "price": "99",
            "offer": "No srsly GTFO",
            "image": "http://placehold.it/100x100/999/CCC"
          },{
            "name": "Product 5",
            "detail": "Lorem ipsum dolor sit amet",
            "price": "99",
            "image": "http://placehold.it/100x100/999/CCC"
          },{
            "name": "Product 6",
            "detail": "Lorem ipsum dolor sit amet",
            "price": "99",
            "info": "This is the latest and greatest product from Derp corp.",
            "offer": "info with offer",
            "image": "http://placehold.it/100x100/999/CCC"
          }]

        });
      });
    }


    render() {
      
      const columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Detail',
        accessor: 'detail',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        Header: 'Price',
        accessor: 'price'
      }, {
        Header: props => <span>Info</span>, // Custom header components!
        accessor: 'info'
      }, {
        Header: 'Offer',
        accessor: 'offer'
      }, {
        Header: 'Image',
        accessor: 'image',
        Cell: props => <Image src={props.value} circle/>
      }]

      return(
        <ReactTable
          data={this.state.products}
          columns={columns} />
      );

    }
  }

export default ProductViewTable
