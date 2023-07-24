import '../Style/VoterInfo.css';
export default function VoterInfo() {
  return (
      <div className="Voter_Info">
      <h2>Voter Information</h2>
      <p>Requirements: {VoterInfo.VoterRequirements}</p>
      <section className="userInfo"></section>
    </div>
  );
}
