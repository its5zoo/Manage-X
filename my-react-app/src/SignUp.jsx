import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

function SignUp() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
  });

  const [message,setMessage]=useState("");

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();

    try{

      await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      setMessage("Registration Successful");

      setTimeout(()=>{
        navigate("/login");
      },1500);

    }catch(error){

      setMessage(
        error.response?.data?.message ||
        "Registration Failed"
      );

    }
  };

  return (

    <div className="signup-page">

      <div className="signup-card">

        <div className="signup-title">
          <h2>Create Account 🚀</h2>
          <p>Join Manage X today</p>
        </div>

        {message && <div className="signup-alert">{message}</div>}

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>

          <button className="signup-btn">
            Create Account
          </button>

        </form>

        <div className="bottom-text">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </div>

  );
}

export default SignUp;