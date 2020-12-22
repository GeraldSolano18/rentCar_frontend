import { useState } from "react"
import { useHistory } from "react-router-dom";
import axios from 'axios'
import {Link} from 'react-router-dom'
import jwt from "jsonwebtoken";
import setAuthorizationToken from "../utils/setAuthorizationToken"

export const Login = () => {
let history = useHistory();
  const [data, setData] = useState({});
  const [error, setError]= useState(null);

  //EVENT FORM SUBMIT
  const handleSubmit = (event) =>{
    event.preventDefault(); 
    setError(null);
    axios({
      url: `http://localhost:4000/api/auth/login`,
      method: "POST",
      data:{
            "email": data.email,
            "password": data.password 
    },
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      const {token} = res.data
      localStorage.setItem("jwtToken", token)
      setAuthorizationToken(token)
      console.log(jwt.decode(token))
      history.push('/profile')
    }).catch(error =>{
      setError(error.response.data.message)
    })
  };

  //event for inputs
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <section className="container">
        {error !== null ?
          <div className="alert alert-danger">{error}</div>:
          null
        }
        

        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user"></i>
          Sign into your account
        </p>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
              
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <input type="submit" value="Login" className="btn btn-primary" />
        </form>

        <p className="my-1">
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </section>
    </div>
  );
};
