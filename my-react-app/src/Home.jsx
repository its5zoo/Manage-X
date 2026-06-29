import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-content">

        <h1 className="hero-title">
          Welcome To Smart Management System 🚀
        </h1>

        <p className="hero-subtitle">
          Manage your contacts, books, and train ticket bookings
          with speed, security, and simplicity — all in one platform.
        </p>

        <div className="services-text">
          <h2>Our Services</h2>

          <ul>
            <li>📇 Contact Management System</li>
            <li>📚 Book Management System</li>
            <li>🚆 Train Ticket Booking System</li>
          </ul>
        </div>

        <div className="hero-buttons">
          <button onClick={() => navigate("/signup")}>
            Get Started
          </button>

          <button onClick={() => navigate("/about")}>
            Learn More
          </button>
        </div>

      </div>

      <div className="home-bottom-text">
        <h2>Smart Solutions For Modern Needs</h2>
        <p>
          Our system is built to provide a seamless and efficient
          experience for users who want to organize, manage, and
          simplify their daily tasks professionally.
        </p>
      </div>
    </div>
  );
};

export default Home;