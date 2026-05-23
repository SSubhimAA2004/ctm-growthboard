


import React from "react";
import "../styles/dashboard.css";

function ProspectForm() {

  return (

    <div className="prospect-page">

      {/* BACKGROUND GLOW */}
      <div className="prospect-background-glow"></div>

      {/* LEFT SIDE */}
      <div className="prospect-left">

        {/* LOGO */}
        <div className="prospect-logo-box">

          <div className="ctm-logo">

            <div className="ctm-circle"></div>

            <div className="ctm-human"></div>

            <div className="ctm-head"></div>

            <div className="ctm-money-line"></div>

            <div className="ctm-money-arrow"></div>

            <div className="ctm-hand"></div>

          </div>

        </div>

        {/* LABEL */}
        <div className="prospect-system-label">
          TRIBE EXPANSION ENGINE
        </div>

        {/* TITLE */}
        <h1 className="prospect-title">
          Add New Prospect
        </h1>

        {/* TAGLINE */}
        <p className="prospect-tagline">
          Every new relationship expands tribe momentum and future money velocity.
        </p>

        {/* FEATURES */}
        <div className="prospect-feature-grid">

          <div className="prospect-feature-card">
            ⚡ Daily Prospect Activation
          </div>

          <div className="prospect-feature-card">
            📈 Relationship Momentum Tracking
          </div>

          <div className="prospect-feature-card">
            🏆 Tribe Growth Acceleration
          </div>

          <div className="prospect-feature-card">
            💰 Pair Creation Opportunity
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="prospect-right">

        <div className="prospect-card">

          {/* HEADER */}
          <div className="prospect-card-label">
            NEW PROSPECT ENTRY
          </div>

          <h2 className="prospect-card-title">
            Prospect Form
          </h2>

          <p className="prospect-card-subtitle">
            Add and track new tribe opportunities
          </p>

          {/* FORM */}
          <div className="prospect-form-grid">

            {/* EMAIL */}
            <div className="prospect-field">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
              />
            </div>

            {/* PHONE */}
            <div className="prospect-field">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
              />
            </div>

            {/* PROSPECT NAME */}
            <div className="prospect-field">
              <label>Prospect Name</label>
              <input
                type="text"
                placeholder="Enter prospect name"
              />
            </div>

            {/* PROSPECT PHONE */}
            <div className="prospect-field">
              <label>Prospect Phone Number</label>
              <input
                type="text"
                placeholder="Enter prospect phone number"
              />
            </div>

          </div>

          {/* BUTTON */}
          <button className="prospect-submit-button">
            Add Prospect To Pipeline
          </button>

          {/* FOOTER */}
          <div className="prospect-footer-text">
            Consistent relationship movement creates long-term tribe expansion.
          </div>

        </div>

      </div>

    </div>

  );
}

export default ProspectForm;



