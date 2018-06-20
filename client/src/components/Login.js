import React from 'react'
import { login } from '../fakeAuth'

const Login = ({ history }) => {
  return (
  <div>
    <h3> You are on the Login Page </h3>
    <button onClick={ () => {
      login()
      history.push('/dashboard')
    }}>
      Login
    </button>
  </div>
  )
}

export default Login;
