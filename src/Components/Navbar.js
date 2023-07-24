import { Link } from 'react-router-dom';

import "../Style/Navbar.css"

export default function Navbar() {
    return (
        <div className="Navbar">
        <Link to={"/"}>
        <h1>Poll Site Locator</h1>
        </Link>
        {/* <Link to="/"> <button onClick={Home}>Home</button></Link>
        <button>Map</button> */}
        </div>
    );
}


    // <button>User's Address</button>
    //     <button>My Poll Site</button>
    //     <button>My Poll Site Reviews</button>
    //     <button>My Poll Site Ratings</button>
       
    //      