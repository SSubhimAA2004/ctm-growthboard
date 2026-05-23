

// FILE: src/pages/Login.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  Users,
  TrendingUp,
  Mail,
  Lock,
} from "lucide-react";

import { loginUser, validateStoredSession } from "../services/api";

import "../styles/pages/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);

    try {
      const response = await loginUser(formData);

      if (response?.success) {
        localStorage.setItem(
          "ctm_session",
          JSON.stringify(response.session || {})
        );

        navigate("/dashboard");
      } else {
        alert(response?.message || "Invalid login credentials");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }

    setLoading(false);
  }

  return (
    <div className="login-page">
      <div className="login-background-glow login-glow-1"></div>
      <div className="login-background-glow login-glow-2"></div>

      <div className="login-grid">
        {/* LEFT SIDE */}
        <section className="login-left-panel">
          <div className="login-brand">
            <div className="login-brand-icon">
              <Zap size={34} />
            </div>

            <div>
              <h2>CTM GrowthBoard</h2>
              <p>Execution Intelligence System</p>
            </div>
          </div>

          <div className="login-hero">
            <div className="login-badge">
              LIVE EXECUTION NETWORK
            </div>

            <h1>
              Build Momentum.
              <br />
              Scale Leadership.
              <br />
              Compound Results.
            </h1>

            <p>
              CTM GrowthBoard transforms daily activity into measurable
              duplication, tribe expansion, and leadership acceleration.
            </p>
          </div>

          <div className="login-stats-grid">
            <div className="login-stat-card">
              <TrendingUp size={22} />

              <h3>+46%</h3>

              <span>
                Faster execution consistency across active leaders
              </span>
            </div>

            <div className="login-stat-card">
              <Users size={22} />

              <h3>118%</h3>

              <span>
                Tribe momentum expansion through structured duplication
              </span>
            </div>

            <div className="login-stat-card">
              <Target size={22} />

              <h3>3X</h3>

              <span>
                Higher mission completion through guided action systems
              </span>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="login-right-panel">
          <div className="login-card">
            <div className="login-card-header">
              <div className="login-security-icon">
                <ShieldCheck size={24} />
              </div>

              <h2>Access Your Dashboard</h2>

              <p>
                Secure login to continue your execution journey.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="login-input-group">
                <Mail size={18} />

                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      email: event.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="login-input-group">
                <Lock size={18} />

                <input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      password: event.target.value,
                    })
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="login-submit-button"
                disabled={loading}
              >
                {loading ? "Launching..." : "Enter Mission Control"}

                <ArrowRight size={20} />
              </button>
            </form>

            <div className="login-footer">
              <div className="login-footer-row">
                <span className="status-dot"></span>

                Live Infrastructure Operational
              </div>

              <div className="login-footer-row">
                <ShieldCheck size={16} />

                End-to-end session protection enabled
              </div>
            </div>

            <div className="login-register-link">
              New to CTM?

              <Link to="/register">
                Create Business ID
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;


