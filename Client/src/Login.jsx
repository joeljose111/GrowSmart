import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import "./App.css"

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [Status,setStatus] = useState(false)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(res => {
            console.log("login: " + res.data);
            if(res.data.Status === "Success") {
                if(res.data.role === "admin") {
                    navigate('/Dashboard')
                } else {
                    navigate('/Dashboard')
                }
            }
            else setStatus(true)
        }).catch(err => console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-100 a">
      <div className="bg-white p-3 rounded b">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
            {Status?<p style={{ color: 'red' }}>Incorrect Email/Password</p>:""}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
          </form>
          <p>Already Have an Account?</p>
          <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Sign Up
          </Link>
        
      </div>
    </div>
    )
}

export default Login;