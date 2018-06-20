import React from 'react'
import axios from 'axios' 

class Product extends React.Component { 
  state = { product: {} }

  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`)
    .then( response => this.setState({ product: response.data }))
    .catch( res => console.log(res) )
  }


  render() {
    //destructering code
    let { product: {name, description, price }} = this.state;
    return(
      <div>
        <h1>{this.state.product.name}</h1>
        <h3>{this.state.product.description}</h3>
        <h3>{this.state.product.price}</h3>
        <h3>{this.state.product.department}</h3>
      </div>
    )
  }
}

export default Product;