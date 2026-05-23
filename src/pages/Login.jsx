

import { ArrowRight, Mail, Lock, UserPlus } from "lucide-react";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-background-glow"></div>

      <div className="login-container">
        {/* BRAND HEADER */}
        <div className="login-brand">
          <div className="brand-logo">⚡</div>

          <div className="brand-content">
            <h1>CTM GrowthBoard</h1>
            <p>Execution Intelligence System</p>
          </div>
        </div>

        {/* LIVE BADGE */}
        <div className="live-badge">
          <span className="live-dot"></span>
          LIVE EXECUTION NETWORK
        </div>

        {/* HERO */}
        <div className="hero-content">
          <h2>
            Execute Daily.
            <br />
            Compound Forever.
          </h2>

          <h3>Welcome back, Leader.</h3>

          <p>
            This is your mission control center.
            <br />
            Let’s continue building your legacy today.
          </p>
        </div>

        {/* LOGIN CARD */}
        <div className="login-card">
          <div className="card-lock">🔒</div>

          <h4>Mission Control Access</h4>

          <p>Enter your credentials to access your dashboard</p>

          {/* EMAIL */}
          <div className="input-group">
            <label>Email Address</label>

            <div className="input-wrapper">
              <Mail size={20} />
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="input-group">
            <label>Password</label>

            <div className="input-wrapper">
              <Lock size={20} />
              <input type="password" placeholder="Enter your password" />
            </div>
          </div>

          {/* OPTIONS */}
          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button className="forgot-password">
              Forgot Password?
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button className="login-button">
            Enter Mission Control
            <ArrowRight size={22} />
          </button>
        </div>

        {/* NEW USER CTA */}
        <div className="new-user-card">
          <div className="new-user-left">
            <div className="new-user-icon">
              <UserPlus size={24} />
            </div>

            <div>
              <span className="new-user-label">
                New user?
              </span>

              <h5>Create Your Business ID</h5>

              <p>
                Start your execution journey today.
              </p>
            </div>
          </div>

          <button className="business-button">
            Create Business ID
            <ArrowRight size={20} />
          </button>
        </div>

        {/* FOOTER */}
        <div className="login-footer">
          🔐 Secure. Private. Built for Leaders.
        </div>
      </div>
    </div>
  );
}

