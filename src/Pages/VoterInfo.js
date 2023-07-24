export default function VoterInfo() {
  return (
    <div>
      <h2>Voter Information</h2>
      <h3>Requirements: {VoterInfo.VoterRequirements}</h3>

      <p>
        There are several requirements you must meet in order to be eligible to
        vote in New York City elections:
      </p>

      <p>
        <strong>Citizenship:</strong>You must be a U.S. citizen to vote in any
        election in NYC.
      </p>

      <p>
        <strong>Age:</strong> You must be at least 18 years old on or before the
        date of the election to be eligible to vote.
      </p>

      <p>
        {" "}
        <strong>Residency:</strong>You must be a resident of New York City and
        the county where you plan to vote for at least 30 days before the
        election.
      </p>

      <p>
        <strong>Registration:</strong> You must be registered to vote. The
        deadline for voter registration is typically 25 days before the
        election.
      </p>

      <p>
        <strong>Criminal Convictions:</strong> If you have been convicted of a
        felony, your voting rights are restored upon completion of your prison
        sentence and parole. You are eligible to vote even if you are on
        probation or have completed your parole.
      </p>

      <p>
        <strong>Mental Competency:</strong> You must not have been judged by a
        court to be mentally incompetent.
      </p>

      <p>
        {" "}
        <strong>Political Party Affiliation:</strong>New York has a closed
        primary system, which means you must be registered with a political
        party to vote in its primary election. However, you can vote in
        non-partisan elections and the general election regardless of your party
        affiliation.
      </p>

      <p>
        <strong>Photo ID:</strong> You do not need to show photo ID to vote in
        New York City elections. However, if you are a first-time voter who
        registered by mail, you may need to show ID when you vote for the first
        time.
      </p>

      <p>
        <strong>College Students:</strong> If you are a college student, you can
        choose to register to vote at your home address or your school address.
        However, you can only be registered in one place at a time. If you are
        registered at your home address, you can vote in person at your polling
        place or by absentee ballot. If you are registered at your school
        address, you can vote in person at your polling place or by absentee
        ballot.
      </p>

      <p>
        <strong>Homeless Voters:</strong> If you are homeless, you can register
        to vote using the address of a shelter, drop-in center, or other
        facility where you receive services. If you do not receive services from
        a shelter or other facility, you can register to vote using the address
        of a street corner or park where you spend a majority of your time.
      </p>

      <p>
        <strong>Victims of Domestic Violence:</strong> If you are a victim of
        domestic violence, you can register to vote without disclosing your
        address. You can also apply for an absentee ballot without disclosing
        your address.
      </p>
      <h3>How to Register to Vote:</h3>
      <section className="voter_registration">
        <h1>
          <a href="https://www.elections.ny.gov/NYSBOE/download/voting/voteregform-eng-fillable.pdf" >
          Need to register?
        </a>
        </h1>
      </section>
    </div>
  );
}