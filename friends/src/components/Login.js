import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [person, setPerson] = useState({username: '', password: ''})

  const handleChange = e => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
    console.log(person)
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', person)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/protected');
        console.log(res);
      })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={person.username}
          onChange={handleChange}
          placeholder="username"
        />
        <input
          type="password"
          name='password'
          value={person.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button>Log In</button>
      </form>
    </div>

)}


export default Login;