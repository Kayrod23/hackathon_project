import "../Style/FAQ.css"

const FAQ = () => {
  return (
    <div className="FAQ">

      <h3>Frequently Asked Questions:</h3>

      <article className="allFlip">
      <div className ="flip-card"> 
       <div className ="flip-card-inner"> 
       <div className = "flip-card-front">
  
        <h4>Q. It’s my first time voting!What do I need to do?</h4> 
      </div>
      <div className = "flip-card-back">
        <h5>A. Check your registration status, find your polling location, explore both early and day of voting options and research candidates</h5>
        </div>
        </div>
        </div>

        <div className ="flip-card"> 
       <div className ="flip-card-inner"> 
       <div className = "flip-card-front">
        <h4>
          Q.Didn't make it in time to vote! What can I do?
        </h4>
        </div>
        <div className = "flip-card-back">
        <h5>
          A.Not much you can do as we are only allowed to vote early. You can apply for absentee voting if you meet the criteria
        </h5>
        </div>
        </div>
        </div>

        <div className ="flip-card"> 
       <div className ="flip-card-inner"> 
       <div className = "flip-card-front">
        <h4>
          Q.Anything I need to bring to the poll site?
        </h4>

        </div>
        <div className = "flip-card-back">
        <h5>
          A.Government issued photo I.D and pen with black or blue ink
        </h5>
        </div>
        </div>
        </div>
        
        <div className ="flip-card"> 
       <div className ="flip-card-inner"> 
       <div className = "flip-card-front">
        <h4>
          Q.What do I do if I encounter problems while voting in New York City?
        </h4>
        </div>
        <div className = "flip-card-back">
        <h5>
          A.If you encounter any issues while voting in New York City, seek assistance from poll workers or election officials at your polling location. You can also call the Election Protection Hotline at 866-OUR-VOTE (866-687-8683) for help.
        </h5>
        </div>
        </div>
        </div>

        <div className ="flip-card"> 
       <div className ="flip-card-inner"> 
       <div className = "flip-card-front">
        <h4>
          Q.What happens if I make a mistake on my ballot in New York City?
        </h4>
        </div>
        <div className = "flip-card-back">
        <h5>
         A.If you make a mistake on your ballot in New York City, you can request a new one from poll workers or election officials at your polling place.
        </h5>
        </div>
        </div>
        </div>

        <div className ="flip-card"> 
       <div className ="flip-card-inner"> 
       <div className = "flip-card-front">
        <h4>
          Q.Can I vote in New York City if I'm a student or live in a different part of the city from my permanent address?
        </h4> 
        </div>
        <div className = "flip-card-back">
        <h5>
         A.If you are a student or living in a different part of New York City from your permanent address, you can choose to register and vote in the area where you are currently residing.
        </h5> 
        </div>
        </div>
        </div>


        <div className ="flip-card"> 
       <div className ="flip-card-inner"> 
       <div className = "flip-card-front">
        <h4>
          Q.Can I vote in New York City if I have a criminal record?
        </h4>
        </div>
        <div className = "flip-card-back">
        <h5>
          A.In New York City, individuals with felony convictions regain their voting rights upon completion of their prison sentence. You are eligible to vote once you have been released from incarceration, even if you are on parole.
        </h5>
        </div>
        </div>
        </div>


        <div className ="flip-card"> 
       <div className ="flip-card-inner"> 
       <div className = "flip-card-front">
        <h4>
          Q.What are the different methods of voting in New York City (in-person, mail-in, early voting)?
        </h4>
        </div>
        <div className = "flip-card-back">
        <h5>
          A.In New York City, you can vote in person on Election Day, participate in early voting at designated locations, or vote by absentee ballot if you qualify.
        </h5>
        </div>
        </div>
        </div>

        <div className ="flip-card"> 
       <div className ="flip-card-inner"> 
       <div className = "flip-card-front">
        <h4>
          Q.Why should I even vote?
        </h4>
        </div>
        <div className = "flip-card-back">
        <h5>
          A.You are the next generation. Voting now and participating in political decisions will ensure that you have a future to look forward to.
        </h5>
        </div>
        </div>
        </div>
        </article>
    </div>
  );
}
export default FAQ;

