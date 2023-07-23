import { Link } from 'react-router-dom';
import Search from "../Pages/Search";
import Home from "../Pages/Home";
import './Navbar.css';
export default function Navbar() {
    return (
        <div className="Navbar">
        <h1>Poll Site Locator</h1>
        <Link to="/"> <button onClick={Home}>Home</button></Link>
        <Link to="/search"><button onClick={Search}>Search</button></Link>
        <button>Map</button>
   
        </div>
    );
}


    //  {/* <button>User's Address</button>
    //     <button>My Poll Site</button>
    //     <button>My Poll Site Reviews</button>
    //     <button>My Poll Site Ratings</button>
       
    //      */}