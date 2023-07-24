import { useMemo, useState } from "react";
import { GoogleMap, InfoWindow, MarkerF, useLoadScript } from "@react-google-maps/api";

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

  console.log();

    return ( 
      <GoogleMap zoom={14} center={user ? user : center} mapContainerClassName="map-container">
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
          {toggle && (
              <InfoWindow position={{lat: parseFloat(toggle.location.latitude), lng: parseFloat(toggle.location.longitude)}}>
                <div className="infoWindow">
                  <h5>Site Name: {toggle.site_name}</h5>
                  <h5>Council District: {toggle.council_district}</h5>
                  <h5>Entrance: {toggle.voter_entrance}</h5>
                  <a href={`https://www.google.com/maps?q=${toggle.location.latitude},${toggle.location.longitude}`}>
                      View in Google Maps
                  </a>
                  <button onClick={() => {
                  setToggle("");
                }}>Close</button>
                </div>
              </InfoWindow>
            )}
      </GoogleMap>
    );
  }
  // https://www.google.com/maps?q=${toggle.location.latitude},${toggle.location.longitude}
// https://www.google.com/maps?q=40.831088,-73.902452
export default Map