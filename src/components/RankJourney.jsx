


function RankJourney({ rank }) {
  return (
    <section className="rank-card">
      <h2>Rank Journey</h2>

      <div className="rank-box">
        <h3>{rank.currentRank}</h3>

        <p>{rank.progress}</p>
      </div>
    </section>
  );
}

export default RankJourney;


