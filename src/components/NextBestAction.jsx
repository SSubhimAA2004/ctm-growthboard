


function NextBestAction({ action }) {
  return (
    <section className="next-action-card">
      <h2>{action.title}</h2>

      <p className="action-description">
        {action.description}
      </p>

      <div className="action-footer">
        <span>
          Target: {action.target}
        </span>

        <span>
          Reward: {action.reward}
        </span>
      </div>
    </section>
  );
}

export default NextBestAction;


