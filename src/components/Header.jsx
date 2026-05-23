

// FILE: src/components/Header.jsx

import React from "react";
import { User, BadgeCheck, Trophy } from "lucide-react";

const Header = ({
  user = {},
  metrics = {},
}) => {
  return (
    <header className="hero-section">
      <div className="hero-background-glow"></div>

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-badge">
            <BadgeCheck size={18} />
            <span>CTM GrowthBoard</span>
          </div>

          <h1 className="hero-title">
            Human Momentum
            <br />
            Operating System
          </h1>

          <p className="hero-description">
            Drive daily execution, accelerate duplication, stabilize
            repurchase momentum, and scale predictable tribe growth.
          </p>

          <div className="hero-stats">
            <div className="hero-stat-card">
              <div className="hero-stat-label">ACTIVE PAIRS</div>
              <div className="hero-stat-value">
                {metrics.activePairs || 0}
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-label">WEEKLY INCOME</div>
              <div className="hero-stat-value">
                ₹{metrics.weeklyIncome || 0}
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-label">TRIBE GROWTH</div>
              <div className="hero-stat-value">
                {metrics.teamGrowth || 0}
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-card">
            <div className="profile-avatar">
              <User size={42} />
            </div>

            <div className="profile-details">
              <h3>{user.fullName || "CTM Leader"}</h3>

              <p>
                Business ID:{" "}
                {user.businessId || "100001"}
              </p>

              <div className="profile-rank">
                <Trophy size={16} />
                <span>
                  {user.rank || "LEARNER"}
                </span>
              </div>
            </div>
          </div>

          <div className="ceiling-card">
            <div className="ceiling-label">
              PAIR CEILING PROGRESS
            </div>

            <div className="ceiling-progress-value">
              {metrics.activePairs || 0}/234
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${
                    Math.min(
                      ((metrics.activePairs || 0) / 234) * 100,
                      100
                    )
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


