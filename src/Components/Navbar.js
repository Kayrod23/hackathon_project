import { Link } from 'react-router-dom';
import "../Style/Navbar.css"

export default function Navbar() {
    return (
        <div className="Navbar">
        <Link to={"/"}>
        <h1>Poll Site Locator</h1>
        </Link>
        <p>Poll Hours: 6am - 9pm*</p>
        </div>
    );
}
 