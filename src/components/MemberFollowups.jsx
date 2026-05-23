



function MemberFollowups({ members = [], activeBuilderScore = 0 }) {
  const safeMembers = Array.isArray(members) ? members : [];

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
      case "active":
        return "status-active";
      case "duplicating":
        return "status-duplicating";
      case "needs support":
        return "status-support";
      case "follow up":
        return "status-followup";
      default:
        return "status-default";
    }
  };

  const getInactivityText = (daysInactive) => {
    if (daysInactive === 0) return "Active today";
    if (daysInactive === 1) return "Yesterday";
    return `${daysInactive || 0} days inactive`;
  };

  return (
    <section className="member-followups-section glass-card">
      <div className="section-glow"></div>

      <div className="section-header-row">
        <div>
          <div className="section-label">
            LEADERSHIP RETENTION
          </div>

          <h2 className="section-title">
            Member Follow-Ups
          </h2>

          <p className="section-description">
            Strong leadership support creates stronger tribe
            duplication and retention.
          </p>
        </div>

        <div className="builder-score-card">
          <span className="builder-score-label">
            ACTIVE BUILDERS
          </span>

          <h3 className="builder-score-value">
            {activeBuilderScore}%
          </h3>
        </div>
      </div>

      <div className="member-followups-grid">
        {safeMembers.length === 0 ? (
          <div className="empty-state-card">
            <div className="empty-state-icon">
              🚀
            </div>

            <h3>No Member Alerts</h3>

            <p>
              Your active tribe follow-up queue will appear here
              automatically.
            </p>
          </div>
        ) : (
          safeMembers.map((member, index) => (
            <div
              key={member.id || index}
              className="member-followup-card"
            >
              <div className="member-followup-top">
                <div className="member-avatar">
                  {(member.name || "M")
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div
                  className={`status-badge ${getStatusClass(
                    member.status
                  )}`}
                >
                  {member.status || "Active"}
                </div>
              </div>

              <div className="member-content">
                <h3 className="member-name">
                  {member.name || "Unnamed Member"}
                </h3>

                <p className="member-issue">
                  {member.issue ||
                    "Leadership consistency support required"}
                </p>

                <div className="member-meta-row">
                  <span className="member-last-active">
                    ⏱ {getInactivityText(member.daysInactive)}
                  </span>

                  <span
                    className={`priority-pill ${getPriorityClass(
                      member.priority
                    )}`}
                  >
                    {member.priority || "Medium"}
                  </span>
                </div>
              </div>

              <div className="member-note-box">
                <div className="note-label">
                  Retention Insight
                </div>

                <p>
                  {member.note ||
                    "Structured support within the first 7 days increases duplication momentum."}
                </p>
              </div>

              <div className="member-actions">
                <button className="primary-action-btn">
                  Connect
                </button>

                <button className="secondary-action-btn">
                  View Profile
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="member-footer-note">
        New members who receive structured guidance within
        their first 7 days show dramatically stronger long-term
        duplication momentum.
      </div>
    </section>
  );
}

export default MemberFollowups;


