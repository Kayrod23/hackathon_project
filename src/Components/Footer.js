
import { Link } from "react-router-dom";
import ElectionInfo from "../Pages/ElectionInfo";
import VoterInfo from "../Pages/VoterInfo";
import FAQ from "../Pages/FAQ";
import '../Style/Footer.css';

function Footer() {
  return (
    <div className="Footer">
    <footer>
      
      <Link to="/electioninfo">
   
        <button onClick={ElectionInfo}>Election Info</button>
      </Link>
      <Link to="/voterinfo">
  
        <button onClick={VoterInfo}>Voter Info</button>
      </Link>
      <Link to="/faq">
        
        <button onClick={FAQ}>FAQ</button>
      </Link>
    </footer>
    </div>
  );
}

export default Footer;

