import { useMemo } from "react";
import { GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";

function Map({pollLocations}) {
    const center = useMemo(() => ({ lat: 40.8, lng: -73.79 }), []);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
      });
      if (!isLoaded) return (
        <div>
            <h1> Loading...</h1>
        </div>);

    return (
      <GoogleMap zoom={8} center={center} mapContainerClassName="map-container">
          {pollLocations ?
          pollLocations.filter((location)=>location.location).map((location, index) =>{
                  let lat = parseFloat(location.location.latitude)
                  let lng = parseFloat(location.location.longitude)
              return (
                  <MarkerF key={index} position={{lat: lat, lng: lng}} />
              )
              
           })
          : null}
      </GoogleMap>
    );
  }

export default Map