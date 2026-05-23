


function DailyMissions({
  momentumScore = 0,
  momentumLabel = "Strong Execution Rhythm",
  missions = [],
}) {
  const safeMissions = Array.isArray(missions) ? missions : [];

  const calculateProgress = (completed, target) => {
    if (!target || target === 0) return 0;
    return Math.min(
      Math.round((completed / target) * 100),
      100
    );
  };

  return (
    <section className="daily-missions-section glass-card">
      <div className="section-glow"></div>

      <div className="daily-missions-header">
        <div className="daily-missions-heading">
          <div className="section-label">
            DAILY EXECUTION
          </div>

          <h2 className="section-title">
            Daily Missions
          </h2>

          <p className="section-description">
            Consistent small actions compound into tribe-wide
            momentum acceleration.
          </p>
        </div>

        <div className="momentum-display-card">
          <span className="momentum-label">
            TODAY'S MOMENTUM
          </span>

          <h3 className="momentum-score">
            {momentumScore}%
          </h3>

          <p className="momentum-text">
            {momentumLabel}
          </p>
        </div>
      </div>

      <div className="daily-missions-grid">
        {safeMissions.length === 0 ? (
          <div className="empty-state-card">
            <div className="empty-state-icon">
              🎯
            </div>

            <h3>No Missions Loaded</h3>

            <p>
              Your live execution mission queue will appear
              here automatically.
            </p>
          </div>
        ) : (
          safeMissions.map((mission, index) => {
            const completed = mission.completed || 0;
            const target = mission.target || 0;

            const progress = calculateProgress(
              completed,
              target
            );

            return (
              <div
                key={mission.id || index}
                className="mission-card"
              >
                <div className="mission-card-top">
                  <div className="mission-icon">
                    🎯
                  </div>

                  <div className="mission-count">
                    {completed}/{target}
                  </div>
                </div>

                <div className="mission-content">
                  <h3 className="mission-title">
                    {mission.title ||
                      "Complete Mission"}
                  </h3>

                  <p className="mission-description">
                    {mission.description ||
                      "Daily execution creates compounding tribe momentum."}
                  </p>
                </div>

                <div className="mission-progress-wrapper">
                  <div className="mission-progress-track">
                    <div
                      className="mission-progress-fill"
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>

                  <div className="mission-progress-row">
                    <span className="mission-progress-text">
                      {progress}% Complete
                    </span>

                    <span className="mission-status">
                      {progress >= 100
                        ? "Completed"
                        : "In Progress"}
                    </span>
                  </div>
                </div>

                <div className="mission-footer">
                  <button className="primary-action-btn">
                    Continue Execution
                  </button>

                  <button className="secondary-action-btn">
                    Open Queue
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="daily-missions-insight">
        Execution consistency compounds into predictable
        duplication, pair movement, and long-term tribe
        momentum.
      </div>
    </section>
  );
}

export default DailyMissions;


