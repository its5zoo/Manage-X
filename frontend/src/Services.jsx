import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="services-container">
      <h1>Our Services</h1>

      <p className="services-subtitle">
        We provide reliable and user-friendly solutions to simplify your daily
        tasks. Explore our range of services designed for efficiency,
        convenience, and security.
      </p>

      <div className="services-grid">
        {/* Train Ticket Booking */}
        <div className="service-card">
          <div className="service-icon">🚆</div>
          <h2>Train Ticket Booking</h2>
          <p>
            Book train tickets quickly and securely. Search available trains,
            reserve your preferred seats, and manage your travel plans with
            ease.
          </p>
        </div>

        {/* Contact Management */}
        <div className="service-card">
          <div className="service-icon">👥</div>
          <h2>Contact Management</h2>
          <p>
            Store, organize, update, search, and delete contacts effortlessly
            using our secure and easy-to-use Contact Management System.
          </p>
        </div>

        {/* Book Management */}
        <div className="service-card">
          <div className="service-icon">📚</div>
          <h2>Book Management</h2>
          <p>
            Organize your book collection by adding, updating, viewing, and
            deleting records in one place with an intuitive interface.
          </p>
        </div>
      </div>

      <div className="contact-section">
        <h3>Need More Services?</h3>

        <p>
          Our team is continuously developing innovative solutions to meet your
          needs. Feel free to reach out to us for custom services, technical
          support, or project collaboration.
        </p>

        <button onClick={() => setShowContact(!showContact)}>
          {showContact ? "Hide Contact Details" : "Contact Us"}
        </button>

        {showContact && (
          <div className="contact-info">
            <h2>📞 Get In Touch</h2>

            <p>
              <strong>📱 Phone :</strong> 9040107065
            </p>

            <p>
              <strong>📧 Email :</strong> ishanmishra2006@gmail.com
            </p>

            <blockquote>
              ❝ Success is built on great ideas, but great ideas begin with a
              simple conversation. Let's connect and create something amazing
              together! ❞
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;