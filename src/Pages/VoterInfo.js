export default function VoterInfo() {

  
  return (
    <div>
      <h2>Voter Information</h2>
      <p>Requirements:</p>
      {/* <section className="userInfo"> */}
      <p>As of my last update in September 2021, the requirements for voting in New York City (NYC) are as follows:<p/>

      <div class="flip-card">
      <div class="flip-card-inner">
      <div class="flip-card-front">
      <h3>Citizenship</h3>
      </div>
      <div class="flip-card-back">
       <h5>You must be a U.S. citizen to vote in any election in NYC.</h5> 
       </div>
       </div>
      </div>

      <div class="flip-card">
      <div class="flip-card-inner">
      <div class="flip-card-front">
       <h3>Age</h3>  
       </div>
       <div class="flip-card-back">
        <h5> You must be at least 18 years old on or before the date of the election to be eligible to vote.</h5> 
        </div>
        </div>
      </div>

      <div class="flip-card">
      <div class="flip-card-inner">
      <div class="flip-card-front">
        <h3>Residency</h3>
        </div>
        <div class="flip-card-back">
        <h5>You must be a resident of New York City and the county where you plan to vote for at least 30 days before the election.</h5>
        </div>
        </div>
      </div>

      <div class="flip-card">
      <div class="flip-card-inner">
      <div class="flip-card-front">
        <h3>Registration</h3>
        </div>
        <div class="flip-card-back">
<h5> You must be registered to vote. The deadline for voter registration is typically 25 days before the election.</h5>
</div>
</div>
</div>
      <div class="flip-card">
      <div class="flip-card-inner">
      <div class="flip-card-front">
      <h3>Criminal Convictions:</h3>
      </div>
      <div class="flip-card-back">
      <h5> If you have been convicted of a felony, your voting rights are restored upon completion of your prison sentence and parole. You are eligible to vote even if you are on probation or have completed your parole.</h5>
      </div>
      </div>
      </div>
      <div class="flip-card">
      <div class="flip-card-inner">
      <div class="flip-card-front">
<h3>Mental Competency</h3>
</div>
<div class="flip-card-back">
<h5> You must not have been judged by a court to be mentally incompetent.</h5>
</div>
      </div>
      </div>

      <div class="flip-card">
      <div class="flip-card-inner">
      <div class="flip-card-front">
<h3>Political Party Affiliation</h3>
</div>
<div class="flip-card-back">
<h6>New York has a closed primary system, which means you must be registered with a political party to vote in its primary election. However, you can vote in non-partisan elections and the general election regardless of your party affiliation.</h6>
</div>
      </div>
      </div>
It's important to note that voting requirements can change over time, so I recommend checking the most up-to-date information on the official website of the New York City Board of Elections or the New York State Board of Elections to ensure you have the latest information regarding voter eligibility and requirements in NYC</p>
<section className="userInfo">
<a href="https://www.elections.ny.gov/NYSBOE/download/voting/voteregform-eng-fillable.pdf">
Need to register?
</a>
</section>
    </div>
  );
}