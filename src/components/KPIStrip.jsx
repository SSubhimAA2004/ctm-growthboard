

import { useEffect, useState } from "react";

import { loadDashboard } from "../services/dashboardData";

export default function KPIStrip() {

  const [metrics, setMetrics] = useState({
    active_pairs: 0,
    weekly_income: 0,
    team_growth: 0,
    momentum_score: 0,
  });

  useEffect(() => {
    async function hydrateKPIs() {

      const dashboard =
        await loadDashboard("100001");

      if (dashboard?.metrics) {
        setMetrics(dashboard.metrics);
      }
    }

    hydrateKPIs();
  }, []);

  return (
    <section className="kpi-strip-container">

      {/* ACTIVE PAIRS */}

      <div className="kpi-card">

        <div className="kpi-label">
          ACTIVE PAIRS
        </div>

        <div className="kpi-value">
          {metrics.active_pairs}
        </div>

        <div className="kpi-description">
          Strong tribe momentum accelerating
        </div>

      </div>

      {/* WEEKLY INCOME */}

      <div className="kpi-card">

        <div className="kpi-label">
          WEEKLY INCOME
        </div>

        <div className="kpi-value">
          ₹
          {metrics.weekly_income?.toLocaleString()}
        </div>

        <div className="kpi-description">
          Healthy money velocity expanding
        </div>

      </div>

      {/* TEAM GROWTH */}

      <div className="kpi-card">

        <div className="kpi-label">
          TEAM GROWTH
        </div>

        <div className="kpi-value">
          +{metrics.team_growth}
        </div>

        <div className="kpi-description">
          Duplication rhythm strengthening
        </div>

      </div>

      {/* MOMENTUM SCORE */}

      <div className="kpi-card">

        <div className="kpi-label">
          MOMENTUM SCORE
        </div>

        <div className="kpi-value">
          {metrics.momentum_score}
        </div>

        <div className="kpi-description">
          7-day execution momentum
        </div>

      </div>

    </section>
  );
}


