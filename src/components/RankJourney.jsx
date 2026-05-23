


// ROOT FILE PATH
// src/components/RankJourney.jsx

import React from "react";

function RankJourney({ rankSection }) {
  if (!rankSection) {
    return (
      <section className="rank-journey-section glass-card">
        <div className="section-header-row">
          <div>
            <p className="section-kicker">GROWTH EVOLUTION</p>
            <h2 className="section-title">Your Rank Journey</h2>
          </div>
        </div>

        <div className="empty-state">
          <h3>No Rank Data Available</h3>
          <p>Rank evolution engine waiting for hydration.</p>
        </div>
      </section>
    );
  }

  const {
    current_rank,
    rank_percentage,
    next_rank_target,
    remaining_pairs,
    growth_badge,
    ranks = [],
  } = rankSection;

  return (
    <section className="rank-journey-section glass-card">
      <div className="section-header-row">
        <div>
          <p className="section-kicker">GROWTH EVOLUTION</p>

          <h2 className="section-title">
            Your Rank Journey
          </h2>
        </div>

        <div className="growth-badge">
          {growth_badge || "Growth Evolution"}
        </div>
      </div>

      <div className="rank-grid">
        {ranks.map((rank, index) => (
          <div
            className={`rank-card ${
              rank.active ? "rank-card-active" : ""
            }`}
            key={index}
          >
            <div className="rank-name">
              {rank.name}
            </div>

            <div className="rank-income">
              {rank.income}
            </div>

            <ul className="rank-points">
              {rank.points?.map((point, pointIndex) => (
                <li key={pointIndex}>
                  {point}
                </li>
              ))}
            </ul>

            <div className="rank-stage">
              {rank.stage}
            </div>
          </div>
        ))}
      </div>

      <div className="current-rank-wrapper">
        <div className="current-rank-label">
          YOUR CURRENT POSITION
        </div>

        <div className="current-rank-display">
          {current_rank}
          <span>
            — {rank_percentage}%
          </span>
        </div>

        <div className="next-rank-message">
          Complete {remaining_pairs} more active pairs to unlock{" "}
          {next_rank_target}
        </div>

        <div className="rank-progress-track">
          <div
            className="rank-progress-fill"
            style={{
              width: `${rank_percentage}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default RankJourney;


