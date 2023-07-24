import Map from "./Map";
import { useState } from "react";


function LocationEditForm() {
  const [pollLocations, setPollLocations] = useState(null)
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState({
    buildingNumber: "",
    street: "",
    zip_code: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location.buildingNumber}%${location.street}%20NYC%20USA&key=${process.env.REACT_APP_GOOGLE_API}`)
    .then((response) => response.json())
      .then((response) => {
        setUser(response.results[0].geometry.location);
      })
      .catch((error) => {
        console.error('Error fetching address:', error);
      });

    fetch(`${process.env.REACT_APP_API_URL}?zip_code=${location.zip_code}`)
      .then((response) => response.json())
      .then((response) => {
        setPollLocations(response);
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
      { pollLocations ? <Map pollLocations={pollLocations} user={user}/> : null}
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="buildingNumber">Building number:</label>
        <input
          id="buildingNumber"
          value={location.buildingNumber}
          type="text"
          onChange={handleTextChange}
          placeholder="building number"
          required
        />
        
        <label htmlFor="street">Street Name:</label>
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
          value = {location.zip_code}
          placeholder= "Zip code"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
    </div>
  );
}
export default LocationEditForm;