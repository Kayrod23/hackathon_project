
export default function VoterInfo() {

  
  return (
    <div>
      <h2>Voter Information</h2>
      <p>Requirements: {VoterInfo.VoterRequirements}</p>
      <section className="userInfo">
       <a href="https://www.elections.ny.gov/NYSBOE/download/voting/voteregform-eng-fillable.pdf">
       New York State Voter Registration Form
       </a>
      </section>
    </div>
  );
}

