

// FILE: src/pages/Dashboard.jsx

import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import KPIStrip from "../components/KPIStrip";
import WeeklyIncome from "../components/WeeklyIncome";
import RankJourney from "../components/RankJourney";
import ProspectFollowups from "../components/ProspectFollowups";
import MemberFollowups from "../components/MemberFollowups";
import DailyMissions from "../components/DailyMissions";

import { loadDashboard } from "../services/dashboardData";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    async function initializeDashboard() {
      const data = await loadDashboard();
      setDashboard(data);
    }

    initializeDashboard();
  }, []);

  if (!dashboard) {
    return (
      <div className="app-loader">
        Loading CTM GrowthBoard...
      </div>
    );
  }

  return (
    <div className="dashboard-shell">
      <Header
        user={dashboard.user}
        metrics={dashboard.metrics}
      />

      <main className="dashboard-content">
        <KPIStrip
          metrics={dashboard.metrics}
        />

        <div className="dashboard-grid">
          <WeeklyIncome
            income={dashboard.income}
          />

          <RankJourney
            rankJourney={dashboard.rankJourney}
          />
        </div>

        <div className="dashboard-grid">
          <ProspectFollowups
            prospects={dashboard.prospects}
          />

          <MemberFollowups
            members={dashboard.memberFollowups}
          />
        </div>

        <DailyMissions
          missions={dashboard.missions}
        />
      </main>
    </div>
  );
};

export default Dashboard;

