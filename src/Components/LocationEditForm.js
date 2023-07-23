import Map from "./Map";
import { useEffect, useState } from "react";

function LocationEditForm() {
  const [pollLocations, setPollLocations] = useState(null)
  
  // useEffect (() => {
  //   fetch("https://data.cityofnewyork.us/resource/utqd-4534.json")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setPollLocations(response)
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching address:', error);
  //     });
  // }, [])

  const [location, setLocation] = useState({
    buildingNumber: "",
    street: "",
    zip_code: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}?zip_code=${location.zipCode}`)
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
        <br />
        <label htmlFor="street">Street:</label>
        <input
          id="street"
          type="text"
          value={location.street}
          placeholder="street number or name"
          onChange={handleTextChange}
         
        />
        <br />
        <label htmlFor="zip_code">Zip Code:</label>
        <input
          id="zip_code"
          type = "number"
          value = {location.zip_code}
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