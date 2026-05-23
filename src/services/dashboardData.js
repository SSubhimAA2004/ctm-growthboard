

// FILE: src/services/dashboardData.js

export async function loadDashboard() {
  return {
    user: {
      fullName: "CTM Leader",
      businessId: "CTM100001",
      rank: "LEARNER",
    },

    metrics: {
      activePairs: 18,
      weeklyIncome: 24500,
      teamGrowth: 126,
    },

    income: {
      todayTop: 2500,
      todayLeft: 1800,
      todayRight: 1600,
      todayTotal: 5900,

      weekTop: 9200,
      weekLeft: 8100,
      weekRight: 7200,
      weekTotal: 24500,

      monthTop: 32000,
      monthLeft: 28400,
      monthRight: 25100,
      monthTotal: 85500,
    },

    rankJourney: {
      currentRank: "LEARNER",
      nextRank: "LAUNCHER",
      progress: 68,
    },

    prospects: [],

    memberFollowups: [],

    missions: [],
  };
}

