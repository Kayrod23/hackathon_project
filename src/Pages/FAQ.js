import "../Style/FAQ.css"

const FAQ = () => {
  return (
    <div className="FAQ">

      <h3>Frequently Asked Questions</h3>

      <article>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h4>Q. It’s my first time voting!What do I need to do?</h4>
            </div>
            <div class="flip-card-back">
              <h5>A. Check your registration status, find your polling location, explore both early and day of voting options and research candidates</h5>
            </div>

          </div>
          </div>
        <div class = "flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h4>
                Q.Didn't make it in time to vote! What can I do?
              </h4>
            </div>
            <div class="flip-card-back">
              <h5>
                A.Not much you can do as we are only allowed to vote early. You can apply for absentee voting if you meet the criteria
              </h5>
            </div>
          </div>
          </div>

        
          <div class = "flip-card">
            <div class = "flip-card-inner">
              <div class = "flip-card-front">
          <h4>
            Q.Anything I need to bring to the poll site?
          </h4>
          </div>
          <div class = "flip-card-back">
          <h5>
            A.Government issued photo I.D and pen with black or blue ink
          </h5>
          </div>
          </div>
          </div>
          
          <div class = "flip-card"> 
          <div class ="flip-card-inner">
          <div class = "flip-card-front">

          <h4><a href="https://www.elections.ny.gov/FAQ.html">
            Q.Why should I even vote?
          </a>
          </h4>
          </div>
         <div class = "flip-card-back">
          <h6>
            A.You are the next generation. Voting now and participating in political decisions will ensure that you have a future to look forward to. If you want a future with a job, accessible healthcare, and anything else that is important to you, you need to fight for it.
          </h6>
          </div>
          </div>
          </div>
       
      </article>
    </div>
  );
}
export default FAQ;

