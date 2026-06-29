import React from 'react'
import "./about.css";

const Aboutus = () => {
  return (
    <div className="about-container">
      <div className="about-card">

        <h1>About Our Management Systems</h1>

        <p>
          We build smart and user-friendly management systems
          to simplify everyday tasks. Our platforms are designed
          for efficiency, organization, and better user experience
          in managing contacts, books, and travel bookings.
        </p>

        <div className="about-features">

          <div className="feature-box">
            <h2>📇 Contact Management System</h2>
            <p>
              Store, update, view, and delete contact details
              with ease. Helps users manage personal and
              professional contacts efficiently.
            </p>
          </div>

          <div className="feature-box">
            <h2>📚 Book Management System</h2>
            <p>
              Organize books, manage records, add new books,
              update book details, and maintain a complete
              digital library system.
            </p>
          </div>

          <div className="feature-box">
            <h2>🚆 Train Ticket Booking System</h2>
            <p>
              Book train tickets quickly, check availability,
              manage reservations, and simplify travel planning
              with a secure booking system.
            </p>
          </div>

          <div className="feature-box">
            <h2>🔒 Secure & Reliable</h2>
            <p>
              All our systems are designed with data security,
              smooth performance, and easy accessibility
              for better user experience.
            </p>
          </div>

        </div>

        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
            To develop modern digital solutions that make
            management simple, fast, and effective for users
            in different fields such as communication,
            education, and transportation.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Aboutus;