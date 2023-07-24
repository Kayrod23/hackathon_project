import "../Style/FAQ.css"

const FAQ = () => {
  return (
    <div className="FAQ">

      <h3>Frequently Asked Questions</h3>

      <article>
        <h5>Q. It’s my first time voting!What do I need to do?</h5>
        <p>A. Check your registration status, find your polling location, explore both early and day of voting options and research candidates</p>
        <h5>
          Q.Didn't make it in time to vote! What can I do?
        </h5>
        <p>
          A.Not much you can do as we are only allowed to vote early. You can apply for absentee voting if you meet the criteria
        </p>
        <h5>
          Q.Anything I need to bring to the poll site?
        </h5>
        <p>
          A.Government issued photo I.D and pen with black or blue ink
        </p>
        <h5><a href="https://www.elections.ny.gov/FAQ.html">
          Q.Why should I even vote?
        </a>
        </h5>
        <p>
          A.You are the next generation. Voting now and participating in political decisions will ensure that you have a future to look forward to. If you want a future with a job, accessible healthcare, and anything else that is important to you, you need to fight for it.
        </p>
        </article>
    </div>
  );
}
export default FAQ;

