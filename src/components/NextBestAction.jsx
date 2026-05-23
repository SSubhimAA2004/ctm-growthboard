


import { useEffect, useState } from "react";

import { loadDashboard } from "../services/dashboardData";

export default function NextBestAction() {

  const [actionData, setActionData] =
    useState({
      priority_action: "",
      action_reason: "",
      impact_score: 0,
      checklist: [],
    });

  useEffect(() => {

    async function hydrateAction() {

      const dashboard =
        await loadDashboard("100001");

      if (dashboard?.nextAction) {
        setActionData(
          dashboard.nextAction
        );
      }
    }

    hydrateAction();

  }, []);

  return (
    <section className="next-action-wrapper">

      <div className="next-action-card">

        {/* TOP LABELS */}

        <div className="next-action-topbar">

          <div className="execution-priority-label">
            EXECUTION PRIORITY
          </div>

          <div className="momentum-detected">
            Momentum Opportunity Detected
          </div>

        </div>

        {/* IMPACT BADGE */}

        <div className="impact-badge">
          HIGH IMPACT
        </div>

        {/* MAIN ACTION */}

        <h1 className="action-headline">
          {actionData.priority_action}
        </h1>

        {/* DESCRIPTION */}

        <p className="action-description">
          {actionData.action_reason}
        </p>

        {/* METRICS ROW */}

        <div className="action-metrics-grid">

          <div className="action-metric-card">

            <div className="metric-label">
              POTENTIAL IMPACT
            </div>

            <div className="metric-value positive">
              +18%
            </div>

          </div>

          <div className="action-metric-card">

            <div className="metric-label">
              ESTIMATED TIME
            </div>

            <div className="metric-value">
              45 MIN
            </div>

          </div>

          <div className="action-metric-card">

            <div className="metric-label">
              MOMENTUM SCORE
            </div>

            <div className="metric-value primary">
              {actionData.impact_score}
            </div>

          </div>

        </div>

        {/* CHECKLIST */}

        <div className="action-checklist">

          {actionData.checklist?.map(
            (item, index) => (
              <div
                className="checklist-item"
                key={index}
              >

                <div className="checklist-number">
                  {index + 1}
                </div>

                <div className="checklist-text">
                  {item}
                </div>

              </div>
            )
          )}

        </div>

        {/* CTA BUTTONS */}

        <div className="action-buttons-row">

          <button className="primary-action-btn">
            Start Execution
          </button>

          <button className="secondary-action-btn">
            View Mission Queue
          </button>

        </div>

        {/* FOOTER INSIGHT */}

        <div className="reinforcement-insight">

          Highest conversion probability occurs
          within 24 hours after presentation
          or emotional breakthrough conversation.

        </div>

      </div>

    </section>
  );
}


