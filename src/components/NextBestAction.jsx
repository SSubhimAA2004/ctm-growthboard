


function NextBestAction({ action }) {

  const progress = 72;

  return (
    <section className="next-action-card">

      <div className="next-action-header">

        <div>
          <p className="next-action-label">
            AI NEXT BEST ACTION
          </p>

          <h2>
            {action.title}
          </h2>
        </div>

        <div className="priority-pill">
          HIGH PRIORITY
        </div>

      </div>

      <p className="action-description">
        {action.description}
      </p>

      <div className="progress-section">

        <div className="progress-top">
          <span>Mission Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

      </div>

      <div className="action-footer">

        <div className="action-stat">
          <span className="stat-label">
            TARGET
          </span>

          <span className="stat-value">
            {action.target}
          </span>
        </div>

        <div className="action-stat">
          <span className="stat-label">
            REWARD
          </span>

          <span className="stat-value reward">
            {action.reward}
          </span>
        </div>

      </div>

    </section>
  );
}

export default NextBestAction;


