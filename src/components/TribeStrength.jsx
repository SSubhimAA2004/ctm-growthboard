


function TribeStrength({ tribe }) {
  return (
    <section className="tribe-card">
      <h2>Tribe Strength</h2>

      <div className="tribe-stats">
        <div>
          <span>Total Members</span>
          <strong>{tribe.totalMembers}</strong>
        </div>

        <div>
          <span>Active Builders</span>
          <strong>{tribe.activeBuilders}</strong>
        </div>

        <div>
          <span>Left Volume</span>
          <strong>{tribe.leftVolume}</strong>
        </div>

        <div>
          <span>Right Volume</span>
          <strong>{tribe.rightVolume}</strong>
        </div>
      </div>
    </section>
  );
}

export default TribeStrength;


