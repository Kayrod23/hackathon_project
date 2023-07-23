import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Home({pollLocations}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map pollLocations={pollLocations}/>;
}

function Map({pollLocations}) {
  const center = useMemo(() => ({ lat: 40.8, lng: -73.79 }), []);
  return (
    <GoogleMap zoom={8} center={center} mapContainerClassName="map-container">
        {pollLocations ?
        pollLocations.filter((location)=>location.location).map((location, index) =>{
                let lat = parseFloat(location.location.latitude)
                let lng = parseFloat(location.location.longitude)
            return (
                <MarkerF key={index} position={center} />
            )
         })
        : null}
        {/* position={{lat: lat, lng: lng}} */}
      {/* <MarkerF position={center} /> */}
    </GoogleMap>
  );
}

// export default Home
// import { SuperClusterAlgorithm, MarkerClusterer} from '@googlemaps/markerclusterer'
// import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks'

// import React, { useCallback, useState } from 'react'
// import { SuperClusterAlgorithm, MarkerClusterer} from '@googlemaps/markerclusterer'
// import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks'

// const mapOptions = {
//     zoom: 8,
//     center: {
//         lat: 41,
//         lng: -73.5, 
//     }
// }

// function Home ({pollLocations}) {
// const [mapContainer, setMapContainer] = useState(null)
// const onLoad = useCallback(map => addMarkers(map, pollLocations), [pollLocations])

// function addMarkers (map, pollLocations) {
//     console.log(pollLocations)
//     const markers = pollLocations.map((location) => {
//         let lat = location.location.latitude
//         let lng = location.location.longitude;  
//         const marker = new window.google.maps.Marker({position: {lat, lng}})
//         console.log(marker)
//         return marker;
//     });
//     new MarkerClusterer({
//         markers,
//         map,
//         algorithm: new SuperClusterAlgorithm({ radius: 200}),
//     })
// }

// return <GoogleMapsProvider 
// googleMapsAPIKey={process.env.REACT_APP_GOOGLE_API}
// mapOptions={mapOptions}
// mapContainer={mapContainer}
// >
//     <div ref={(node) => setMapContainer(node)} style={{height: "70vh"}} />
// </GoogleMapsProvider>
// }


// export default Home