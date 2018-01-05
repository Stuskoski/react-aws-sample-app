import React from 'react';
import Axios from 'axios';
import {
  Table,
  Image
} from 'react-bootstrap';
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


  render(){
    return (

      <Table striped bordered condensed hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Detail</th>
            <th>Info</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map(this.renderProduct)}
        </tbody>
      </Table>
      )
    }

    renderProduct(product, index){
      return (
        <tr key ={index}>
				<td>{index + 1}</td>
				<td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.detail}</td>
        <td>{product.info}</td>
        <td>
          <Image src={product.image} circle responsive />
        </td>
			</tr>
      );
    }
  }

export default ProductViewTable
