

import React from "react";

import {
  Shield,
  TrendingUp,
  Zap,
  Target,
  ArrowRight,
} from "lucide-react";

import "../styles/pages/login.css";
import "../styles/animations/premium-motion.css";

export default function Login() {
  return (
    <div className="login-page motion-grid">
      <div className="login-grid">
        {/* =========================================
            LEFT PANEL
        ========================================= */}
        <section className="login-left-panel">
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

          <div className="login-hero">
            <div className="hero-badge live-indicator glass-premium">
              <span className="live-indicator-dot"></span>

              GLOBAL EXECUTION NETWORK
            </div>

            <h2 className="hero-title">
              Build Momentum.
              <br />
              Scale Leadership.
              <br />
              Compound Results.
            </h2>

            <p className="hero-description">
              CTM GrowthBoard transforms daily
              action into measurable duplication,
              leadership acceleration, and tribe
              expansion through a live execution
              operating system.
            </p>
          </div>

          <div className="hero-metrics">
            <div className="metric-card hover-lift motion-shimmer">
              <TrendingUp size={22} />

              <h3>+46%</h3>

              <p>
                Faster execution consistency
                across active leaders
              </p>
            </div>

            <div className="metric-card hover-lift motion-shimmer">
              <Target size={22} />

              <h3>118%</h3>

              <p>
                Tribe momentum expansion through
                structured duplication
              </p>
            </div>

            <div className="metric-card hover-lift motion-shimmer">
              <Shield size={22} />

              <h3>3X</h3>

              <p>
                Higher mission completion through
                guided action systems
              </p>
            </div>
          </div>
        </section>

        {/* =========================================
            RIGHT PANEL
        ========================================= */}
        <section className="login-right-panel">
          <div className="login-card glass-premium motion-float">
            <div className="login-card-header">
              <div className="status-pill">
                <span className="status-dot"></span>

                LIVE SYSTEM
              </div>

              <h2>Mission Control Access</h2>

              <p>
                Enter your execution workspace
                and activate your daily momentum
                engine.
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
              <p>
                End-to-end encrypted session
                security enabled
              </p>

              <button className="secondary-button">
                Create Business ID
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

