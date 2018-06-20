import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { isAuthenticated, logout } from '../fakeAuth'

const styles = { 
  active: {
    textDecoration: 'none', 
    fontWeight: 'bold',
    color: 'black'
  }
}

const additionalLinks = ( history ) => {
  if (isAuthenticated()) {
    return(
      <span>
        <NavLink activeStyle={styles.active} to="/dashboard">Dashboard</NavLink>
        {' '}
        <a href="" onClick={() => {
          logout()
          history.push('/login')
        }}
        > 
          Log Out 
        </a>
      </span>
    )
  } else {
    return (
      <NavLink activeStyle={styles.active} to="/login">Login</NavLink>
    )
  }
}

const NavBar = ({ history }) => (
  <nav>
    <NavLink exact to="/" activeStyle={styles.active} >Home</NavLink>
    {' '}
    <NavLink to="/about" activeStyle={styles.active} >About</NavLink>
    {' '}
    { additionalLinks(history) }
  </nav>
)

export default NavBar;


// state - a components current situation, and it has the ability to change
// props - passing information from parent to child

// WesBos.com
// username: mbpeterson19@gmail.com
// password: Yomomma1






