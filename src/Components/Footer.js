
import { Link } from "react-router-dom";
import ElectionInfo from "../Pages/ElectionInfo";
import VoterInfo from "../Pages/VoterInfo";
import FAQ from "../Pages/FAQ";

function Footer() {
  return (
    <footer>
      <p>Poll Site Locator App</p>
      <Link to="/electioninfo">
        {" "}
        <button onClick={ElectionInfo}>Election Info</button>
      </Link>
      <Link to="/electioninfo">
        {" "}
        <button onClick={VoterInfo}>Voter Info</button>
      </Link>
      <Link to="/electioninfo">
        {" "}
        <button onClick={FAQ}>FAQ</button>
      </Link>
    </footer>
  );
}

export default Footer;

