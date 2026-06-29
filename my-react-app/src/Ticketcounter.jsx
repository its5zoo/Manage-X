import React, { useState } from "react";
import "./Ticketcounter.css";

const initialState = {
  from: "",
  to: "",
  date: "",
  trainClass: "",
  passengers: ""
};

const Ticketcounter = () => {
  const [formData, setFormData] = useState(initialState);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert("🔍 Searching Trains...");
    console.log(formData);
  };

  const resetHandler = () => {
    setFormData(initialState);
  };

  return (
    <div className="ticket-page">

      <div className="ticket-card">

        {/* Header */}
        <div className="ticket-header">

          <span className="train-icon">🚆</span>

          <h1>Railway Ticket Booking</h1>

          <p>
            Find the best trains for your journey in just a few seconds.
          </p>

        </div>

        {/* FORM */}
        <form onSubmit={onSubmitHandler}>

          {/* From */}
          <div className="ticket-input-group">
            <label>From Station</label>
            <input
              type="text"
              name="from"
              placeholder="Enter Source Station"
              value={formData.from}
              onChange={changeHandler}
              required
            />
          </div>

          {/* To */}
          <div className="ticket-input-group">
            <label>To Station</label>
            <input
              type="text"
              name="to"
              placeholder="Enter Destination Station"
              value={formData.to}
              onChange={changeHandler}
              required
            />
          </div>

          {/* Row */}
          <div className="ticket-row">

            <div className="ticket-input-group">
              <label>Journey Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={changeHandler}
                required
              />
            </div>

            <div className="ticket-input-group">
              <label>Train Class</label>
              <select
                name="trainClass"
                value={formData.trainClass}
                onChange={changeHandler}
                required
              >
                <option value="">Select Class</option>
                <option value="Sleeper">Sleeper (SL)</option>
                <option value="3A">AC 3 Tier (3A)</option>
                <option value="2A">AC 2 Tier (2A)</option>
                <option value="1A">First AC (1A)</option>
                <option value="CC">Chair Car (CC)</option>
                <option value="General">General</option>
              </select>
            </div>

          </div>

          {/* Passengers */}
          <div className="ticket-input-group">
            <label>Passengers</label>
            <input
              type="number"
              name="passengers"
              min="1"
              max="6"
              placeholder="Enter Number of Passengers"
              value={formData.passengers}
              onChange={changeHandler}
              required
            />
          </div>

          {/* Buttons */}
          <div className="button-group">

            <button className="search-btn" type="submit">
              🔍 Search Train
            </button>

            <button
              className="reset-btn"
              type="button"
              onClick={resetHandler}
            >
              Reset
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default Ticketcounter;