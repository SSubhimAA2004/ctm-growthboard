


import { useEffect, useState } from "react";

import { loadDashboard } from "../services/dashboardData";

export default function TribeStrength() {

  const [tribe, setTribe] = useState({
    total_business_ids: 0,
    active_builders: 0,
    weak_leg_side: "RIGHT",
    duplication_health: 0,
  });

  const [user, setUser] = useState({
    full_name: "",
    rank: "",
    user_id: "",
  });

  useEffect(() => {

    async function hydrateTribe() {

      const dashboard =
        await loadDashboard("100001");

      if (dashboard?.tribe) {
        setTribe(dashboard.tribe);
      }

      if (dashboard?.user) {
        setUser(dashboard.user);
      }
    }

    hydrateTribe();

  }, []);

  return (
    <section className="tribe-strength-wrapper">

      <div className="tribe-strength-card">

        {/* SECTION LABEL */}

        <div className="tribe-section-label">
          YOUR CURRENT TRIBE STRENGTH
        </div>

        {/* TOP ID */}

        <div className="tribe-top-id-block">

          <h1 className="tribe-owner-name">
            {user.full_name}
          </h1>

          <div className="tribe-top-id-label">
            TOP ID
          </div>

          <div className="tribe-top-id-number">
            100001
          </div>

          <div className="tribe-rank-status">
            {user.rank}
          </div>

          <div className="tribe-momentum-indicator">
            Momentum Stable
          </div>

        </div>

        {/* BINARY GRID */}

        <div className="tribe-binary-grid">

          {/* LEFT ID */}

          <div className="tribe-side-column">

            <div className="tribe-side-title">
              Raphael Raj Left ID
            </div>

            <div className="tribe-side-id">
              100002
            </div>

            <div className="tribe-side-status">
              Active
            </div>

          </div>

          {/* RIGHT ID */}

          <div className="tribe-side-column">

            <div className="tribe-side-title">
              Raphael Raj Right ID
            </div>

            <div className="tribe-side-id">
              100003
            </div>

            <div className="tribe-side-status">
              Active
            </div>

          </div>

        </div>

        {/* TRIBE METRICS */}

        <div className="tribe-metrics-grid">

          {/* OUTER LEFT */}

          <div className="tribe-metric-card">

            <div className="tribe-metric-label">
              OUTER LEFT
            </div>

            <div className="tribe-metric-value">
              {Math.floor(
                tribe.total_business_ids / 4
              )}
            </div>

            <div className="tribe-metric-subtext">
              Active Members
            </div>

            <div className="tribe-metric-status">
              Strong
            </div>

          </div>

          {/* INNER LEFT */}

          <div className="tribe-metric-card">

            <div className="tribe-metric-label">
              INNER LEFT
            </div>

            <div className="tribe-metric-value">
              {Math.floor(
                tribe.active_builders / 2
              )}
            </div>

            <div className="tribe-metric-subtext">
              Active Builders
            </div>

            <div className="tribe-metric-status">
              Stable
            </div>

          </div>

          {/* INNER RIGHT */}

          <div className="tribe-metric-card">

            <div className="tribe-metric-label">
              INNER RIGHT
            </div>

            <div className="tribe-metric-value">
              {Math.floor(
                tribe.active_builders / 2
              )}
            </div>

            <div className="tribe-metric-subtext">
              Active Builders
            </div>

            <div className="tribe-metric-status">
              Expanding
            </div>

          </div>

          {/* OUTER RIGHT */}

          <div className="tribe-metric-card">

            <div className="tribe-metric-label">
              OUTER RIGHT
            </div>

            <div className="tribe-metric-value">
              {Math.floor(
                tribe.total_business_ids / 4
              )}
            </div>

            <div className="tribe-metric-subtext">
              Active Members
            </div>

            <div className="tribe-metric-status weak">
              Weak Leg:
              {" "}
              {tribe.weak_leg_side}
            </div>

          </div>

        </div>

        {/* DUPLICATION HEALTH */}

        <div className="tribe-duplication-health">

          <div className="duplication-health-label">
            DUPLICATION HEALTH
          </div>

          <div className="duplication-health-bar">

            <div
              className="duplication-health-fill"
              style={{
                width: `${tribe.duplication_health}%`,
              }}
            />

          </div>

          <div className="duplication-health-score">
            {tribe.duplication_health}%
          </div>

        </div>

      </div>

    </section>
  );
}


