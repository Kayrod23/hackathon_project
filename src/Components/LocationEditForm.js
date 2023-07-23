
import { useState, useEffect } from "react";
import {  Link, useParams} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


function LocationEditForm() {
  
let {id} = useParams()
//  const [data, setData] = useState(false)
  const [location, setLocation] = useState({
    site_number: "",
    street: "",
    zip_code: "",
    
  });

  useEffect(() => {
   
    fetch(`${API}/locations`)
      .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
      .then((response) => {
        
        setLocation(response.data);
        // setData(true)
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
        <label htmlFor="site_number">site number:</label>
        <input
          id="site_Number"
          value={location.site_number}
          type="text"
          onChange={handleTextChange}
          placeholder="site number"
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
          placeholder= "00000"
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