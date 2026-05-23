

import React from "react";

import {
  Zap,
  ArrowRight,
} from "lucide-react";

import "../styles/pages/login.css";
import "../styles/animations/premium-motion.css";

export default function Login() {
  return (
    <div className="login-page motion-grid">
      <div className="login-container">
        {/* =========================================
            BRAND
        ========================================= */}
        <div className="login-brand">
          <div className="login-brand-icon motion-glow motion-float">
            <Zap size={34} strokeWidth={2.5} />
          </div>

          <div className="login-brand-text">
            <h1>CTM GrowthBoard</h1>

            <p>
              Execution Intelligence System
            </p>
          </div>
        </div>

        {/* =========================================
            HERO
        ========================================= */}
        <div className="login-hero">
          <div className="hero-badge glass-premium live-indicator">
            <span className="live-indicator-dot"></span>

            LIVE EXECUTION NETWORK
          </div>

          <h2 className="hero-title">
            Execute Daily.
            <br />
            Compound Forever.
          </h2>

          <p className="hero-description">
            Your mission control centre for
            disciplined execution, duplication,
            leadership growth, and momentum
            expansion.
          </p>
        </div>

        {/* =========================================
            LOGIN CARD
        ========================================= */}
        <div className="login-card glass-premium motion-float">
          <div className="login-card-header">
            <h3>Mission Control Access</h3>

            <p>
              Enter your execution workspace
            </p>
          </div>

          <form className="login-form">
            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="login-button"
            >
              Enter Mission Control

              <ArrowRight size={18} />
            </button>
          </form>

          <div className="login-footer">
            <button className="secondary-button">
              Create Business ID
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


