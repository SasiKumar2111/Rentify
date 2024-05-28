import "./login.css";
import React, { useState } from 'react';
import Navbar from "../navbar/nav";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function Login() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8006/login", { mail, password });
      // Check if login was successful
      if (response.status === 200) {
        // Redirect or perform any other action upon successful login
        navigate("/");
      } else {
        // Handle other status codes if needed
        setError("Login failed. Please check your credentials and try again.");
      }
    } catch (err) {
      // Handle errors from the server
      if (err.response && err.response.data) {
        setError(err.response.data.error || "An unexpected error occurred.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <hr />
      <div className="login">
        <div className="login-border">
          <h1>LOGIN</h1><br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">ENTER YOUR EMAIL</label><br /><br />
            <input
              type="text"
              id="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            /><br /><br />
            <label htmlFor="password">ENTER YOUR PASSWORD</label><br /><br />
            <input
              className="pass"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br /><br /><br />
            <input className="submit" type="submit" value="SIGN IN" /><br /><br />
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
