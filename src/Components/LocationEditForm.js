
import { useState, useEffect } from "react";
import {  Link, useParams} from "react-router-dom";


const API = process.env.REACT_APP_API_URL;


function LocationEditForm() {
  
let {id} = useParams()
  const [location, setLocation] = useState({
    buildingNumber: "",
    street: "",
    zipCode: "",
    
  });

  useEffect(() => {
   
    fetch(`${API}/locations`)
      .then((response) => response.json())
      .then((response) => {
        
        setLocation(response.data)
      })
      .catch((error) => {
        console.error('Error fetching address:', error);
      });
  }, []);

  

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  const handleTextChange = (event) => {
    setLocation({ ...location, [event.target.id]: event.target.value });
  };
  return (
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
          type = "number"
          value = {location.zipCode}
          placeholder= "ZIP Code"
          onChange={handleTextChange}
          
        />

        <br />

       
      </form>
      <Link to={`/locations/${id}`}>
        <button>Submit</button>
      </Link>
    </div>
  );
}
export default LocationEditForm;