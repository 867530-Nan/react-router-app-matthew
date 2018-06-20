import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../fakeAuth'
import axios from 'axios'

class Dashboard extends React.Component {
  
  state = { products: [] } 

  componentDidMount() {
    axios.get('/api/products')
    .then( res => this.setState({ products: res.data }))
  }

  render() {
    return(
      <ul>
        { this.state.products.map( p => {
          return(
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
          )
        }
        )}
      </ul>
    )
  }
}

export default Dashboard;