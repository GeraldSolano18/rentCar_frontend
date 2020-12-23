import { useState } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import setAuthorizationToken from "../utils/setAuthorizationToken";

export const Register = () => {
  let history = useHistory();
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    axios({
      url: `http://localhost:4000/api/auth/register`,
      method: "POST",
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
        name: data.name,
        phone: data.phone,
        address: data.address,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthorizationToken(token);
        console.log(jwt.decode(token));
        history.push("/profile");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  //event for inputs
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="container">
      {error !== null ? (
        <div className="alert alert-danger">{error}</div>
      ) : null}
      <h1 className="large text-primary">REGISTER</h1>
      <p className="lead">
        <i className="fas fa-user"></i>
        Create Your account
      </p>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="phone"
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            onChange={handleChange}
            placeholder="address"
          />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>

      <p className="my-1">
        Already have an account? <Link to="/login">LOGIN</Link>
      </p>
    </section>
  );
};
