



function Footer({
  activePairs = 234,
  weeklyMomentum = "+18%",
  teamGrowth = "+46",
  systemStatus = "SYSTEM ACTIVE",
  year = "2026",
}) {
  return (
    <footer className="dashboard-footer glass-card">
      <div className="section-glow"></div>

      <div className="footer-main-grid">
        <div className="footer-brand-section">
          <div className="footer-logo-row">
            <div className="footer-logo-icon">
              ⚡
            </div>

            <div>
              <h2 className="footer-brand-title">
                CTM GrowthBoard
              </h2>

              <p className="footer-brand-subtitle">
                Human Momentum Operating System
              </p>
            </div>
          </div>

          <p className="footer-description">
            Built for elite execution, tribe duplication,
            leadership acceleration, and predictable
            momentum-driven income growth.
          </p>

          <div className="system-status-pill">
            <span className="status-indicator"></span>

            {systemStatus}
          </div>
        </div>

        <div className="footer-metrics-grid">
          <div className="footer-metric-card">
            <div className="footer-metric-label">
              ACTIVE PAIRS
            </div>

            <div className="footer-metric-value">
              {activePairs}
            </div>
          </div>

          <div className="footer-metric-card">
            <div className="footer-metric-label">
              WEEKLY MOMENTUM
            </div>

            <div className="footer-metric-value">
              {weeklyMomentum}
            </div>
          </div>

          <div className="footer-metric-card">
            <div className="footer-metric-label">
              TEAM GROWTH
            </div>

            <div className="footer-metric-value">
              {teamGrowth}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-row">
        <div className="footer-bottom-left">
          Momentum • Duplication • Leadership • Income
        </div>

        <div className="footer-copyright">
          © {year} CTM GrowthBoard
        </div>
      </div>
    </footer>
  );
}

export default Footer;


