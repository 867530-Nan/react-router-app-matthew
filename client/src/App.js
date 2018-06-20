import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Product from './components/Product'

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/products/:id" component={Product} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App;