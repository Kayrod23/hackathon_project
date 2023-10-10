
import { Link } from "react-router-dom";
import VoterInfo from "../Pages/VoterInfo";
import FAQ from "../Pages/FAQ";
import '../Style/Footer.css';

function Footer() {
  return (
    <div className="Footer">
    <footer>
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

