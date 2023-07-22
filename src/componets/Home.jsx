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
// const onLoad = useCallback(map => addMarkers(map), [])

// function addMarkers (map) {
//     const markers = pollLocations.map((location) => {
//         let lat = location.location.latitude
//         let lng = location.location.longiitude 
//         const marker = new google.maps.Marker({position: {lat, lng}})
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
// onLoad={onLoad}
// >
//     <div ref={(node) => setMapContainer(node)} style={{height: "70vh"}} />
// </GoogleMapsProvider>
// }


// export default Home

import React from 'react';
import { GoogleMap, Marker, useLoadScript } from 'react-google-maps';
import { SuperClusterAlgorithm, MarkerClusterer } from '@googlemaps/markerclusterer';

const mapOptions = {
  zoom: 8,
  center: {
    lat: 41,
    lng: -73.5,
  },
};

const MapWithMarkers = ({ pollLocations }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
  });

  const addMarkers = (map) => {
    const markers = pollLocations.map((location) => {
      let lat = location.location.latitude;
      let lng = location.location.longitude; // typo here, should be "longitude" instead of "longiitude"
      return { lat, lng };
    });

    new MarkerClusterer({
      markers: markers.map((marker) => new window.google.maps.Marker({ position: marker })),
      map,
      algorithm: new SuperClusterAlgorithm({ radius: 200 }),
    });
  };

  if (loadError) return <div>Error loading the map</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ height: '70vh' }}
      zoom={mapOptions.zoom}
      center={mapOptions.center}
      onLoad={(map) => addMarkers(map)}
    >
      {pollLocations.map((location) => (
        <Marker
          key={location.id}
          position={{
            lat: location.location.latitude,
            lng: location.location.longitude,
          }}
        />
      ))}
    </GoogleMap>
  );
};

export default MapWithMarkers;
