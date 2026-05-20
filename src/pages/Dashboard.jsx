


import Header from "../components/Header";
import KPIStrip from "../components/KPIStrip";
import NextBestAction from "../components/NextBestAction";
import TribeStrength from "../components/TribeStrength";
import WeeklyIncome from "../components/WeeklyIncome";
import RankJourney from "../components/RankJourney";
import ProspectFollowups from "../components/ProspectFollowups";
import MemberFollowups from "../components/MemberFollowups";
import DailyMissions from "../components/DailyMissions";
import Footer from "../components/Footer";

import { dashboardData } from "../services/dashboardData";

function Dashboard() {

  return (

    <div className="dashboard-container">

      <Header />

      <KPIStrip metrics={dashboardData.metrics} />

      <NextBestAction action={dashboardData.nextBestAction} />

      <TribeStrength data={dashboardData.tribeStrength} />

      <WeeklyIncome data={dashboardData.weeklyIncome} />

      <RankJourney data={dashboardData.rankJourney} />

      <ProspectFollowups prospects={dashboardData.prospectFollowups} />

      <MemberFollowups members={dashboardData.memberFollowups} />

      <DailyMissions missions={dashboardData.dailyMissions} />

      <Footer />

    </div>

  );
}

export default Dashboard;


