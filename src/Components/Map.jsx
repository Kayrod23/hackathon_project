import { useMemo, useState } from "react";
import { GoogleMap, InfoWindow, MarkerF, useLoadScript} from "@react-google-maps/api";

function Map({pollLocations, user}) {
    const center = useMemo(() => ({ lat: 40.8, lng: -73.79 }), []);
    const [toggle, setToggle] = useState(null);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
      });
      if (!isLoaded) return (
        <div>
            <h1> Loading...</h1>
        </div>);

        console.log(toggle);
    return (
      <GoogleMap zoom={10} center={user ? user : center} mapContainerClassName="map-container">
        {user ? console.log(user) : console.log(center)}
          {pollLocations ?
          pollLocations.filter((location)=>location.location).map((location, index) =>{
                  let lat = parseFloat(location.location.latitude)
                  let lng = parseFloat(location.location.longitude)
              return (
                  <MarkerF 
                  key={index} 
                  position={{lat: lat, lng: lng}} 
                  onClick={() => {
                    setToggle(location);
                  }} 
                  />
              )
              
           })
          : null}
          {toggle ? (
              <InfoWindow position={{lat: parseFloat(toggle.location.latitude), lng: parseFloat(toggle.location.longitude)}}>
                <h5>{toggle.site_name}</h5>
              </InfoWindow>
            ) : null}
      </GoogleMap>
    );
  }

export default Map