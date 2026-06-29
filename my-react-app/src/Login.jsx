import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", response.data.token);
      setMessage("Login Successful");

      navigate("/");
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Invalid Email or Password"
      );
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-title">
          <h2>Welcome Back 👋</h2>
          <p>Login to continue using Manage X</p>
        </div>

        {message && <div className="login-alert">{message}</div>}

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>

        </form>

        <div className="bottom-text">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </div>

      </div>
    </div>
  );
}

export default Login;