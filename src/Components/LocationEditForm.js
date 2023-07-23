import Map from "./Map";
import { useState } from "react";
const API = process.env.REACT_APP_API_URL;

function LocationEditForm() {
  const [pollLocations, setPollLocations] = useState(null)
  // const [nearby, setNearby] = useState(null)

  const [location, setLocation] = useState({
    buildingNumber: "",
    street: "",
    zipCode: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API}?zip_code=${location.zipCode}`)
      .then((response) => response.json())
      .then((response) => {
        setPollLocations(response.data)
      })
      .catch((error) => {
        console.error('Error fetching address:', error);
      });
  };

  const handleTextChange = (event) => {
    setLocation({ ...location, [event.target.id]: event.target.value });
  };
  return (
    <div>
      { pollLocations ? <Map pollLocations={pollLocations}/> : null}
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="buildingNumber">buildingNumber:</label>
        <input
          id="buildingNumber"
          value={location.buildingNumber}
          type="text"
          onChange={handleTextChange}
          placeholder="building number"
          required
        />
        
        <label htmlFor="street">Street:</label>
        <input
          id="street"
          type="text"
          value={location.street}
          placeholder="street number or name"
          onChange={handleTextChange}
         
        />
        <label htmlFor="zip_code">Zip Code:</label>
        <input
          id="zip_code"
          type = "text"
          value = {location.zipCode}
          placeholder= "ZIP Code"
          onChange={handleTextChange}
        />
        <br />
      </form>
        <button>Submit</button>
    </div>
    </div>
  );
}
export default LocationEditForm;