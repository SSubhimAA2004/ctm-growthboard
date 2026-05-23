


function ProspectFollowups({ prospects = [] }) {
  const safeProspects = Array.isArray(prospects) ? prospects : [];

  const getPriorityClass = (priority) => {
    switch ((priority || "").toLowerCase()) {
      case "high":
        return "priority-high";
      case "medium":
        return "priority-medium";
      case "low":
        return "priority-low";
      default:
        return "priority-default";
    }
  };

  const getStatusClass = (status) => {
    switch ((status || "").toLowerCase()) {
      case "hot":
        return "status-hot";
      case "warm":
        return "status-warm";
      case "cold":
        return "status-cold";
      default:
        return "status-default";
    }
  };

  return (
    <section className="prospect-followups-section glass-card">
      <div className="section-glow"></div>

      <div className="section-header-row">
        <div>
          <div className="section-label">
            RELATIONSHIP MOMENTUM
          </div>

          <h2 className="section-title">
            Prospect Follow-Ups
          </h2>
        </div>

        <div className="prospect-counter">
          {safeProspects.length} Active
        </div>
      </div>

      <div className="prospect-list">
        {safeProspects.length === 0 ? (
          <div className="empty-state-card">
            <div className="empty-state-icon">
              ⏳
            </div>

            <h3>No Active Prospects</h3>

            <p>
              New prospects entering your pipeline will appear here
              automatically.
            </p>
          </div>
        ) : (
          safeProspects.map((prospect, index) => (
            <div
              key={prospect.id || index}
              className="prospect-card"
            >
              <div className="prospect-card-top">
                <div className="prospect-avatar">
                  {(prospect.name || "P")
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div className="prospect-info">
                  <h3>
                    {prospect.name || "Unnamed Prospect"}
                  </h3>

                  <p>
                    {prospect.location || "Unknown Location"}
                  </p>
                </div>

                <div
                  className={`priority-badge ${getPriorityClass(
                    prospect.priority
                  )}`}
                >
                  {prospect.priority || "Normal"}
                </div>
              </div>

              <div className="prospect-body-grid">
                <div className="prospect-metric">
                  <span className="metric-label">
                    Last Contact
                  </span>

                  <span className="metric-value">
                    {prospect.lastContact || "--"}
                  </span>
                </div>

                <div className="prospect-metric">
                  <span className="metric-label">
                    Next Follow-Up
                  </span>

                  <span className="metric-value">
                    {prospect.nextFollowup || "--"}
                  </span>
                </div>

                <div className="prospect-metric">
                  <span className="metric-label">
                    Interest Level
                  </span>

                  <span
                    className={`status-pill ${getStatusClass(
                      prospect.interest
                    )}`}
                  >
                    {prospect.interest || "Unknown"}
                  </span>
                </div>

                <div className="prospect-metric">
                  <span className="metric-label">
                    Pipeline Stage
                  </span>

                  <span className="metric-value">
                    {prospect.stage || "--"}
                  </span>
                </div>
              </div>

              <div className="prospect-note-box">
                <div className="note-label">
                  Next Best Conversation
                </div>

                <p>
                  {prospect.note ||
                    "Build trust, create clarity, and move toward activation."}
                </p>
              </div>

              <div className="prospect-actions">
                <button className="primary-action-btn">
                  Follow Up
                </button>

                <button className="secondary-action-btn">
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default ProspectFollowups;


