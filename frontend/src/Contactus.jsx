import React, { useState } from "react";
import { createContact } from "./services/contact_services";
import { useNavigate } from "react-router-dom";
import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      phoneno: phone,
      password,
      city,
      address,
    };

    try {
      await createContact(contactData);

      alert("Contact Added Successfully!");

      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setCity("");
      setAddress("");

      navigate("/contact-list");
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setCity("");
    setAddress("");
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Add Contact</h2>

        <form onSubmit={handleSubmit} className="contact-form">

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          <div className="form-group full-width">
            <label>Address</label>
            <textarea
              rows="4"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>

          <div className="button-group">
            <button type="submit" className="save-btn">
              Save Contact
            </button>

            <button
              type="reset"
              className="reset-btn"
              onClick={resetForm}
            >
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ContactUs;