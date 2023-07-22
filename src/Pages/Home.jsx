import React, { useCallback, useState } from 'react'
import { SuperClusterAlgorithm, MarkerClusterer} from '@googlemaps/markerclusterer'
import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks'

const mapOptions = {
    zoom: 8,
    center: {
        lat: 41,
        lng: -73.5, 
    }
}

function Home ({pollLocations}) {
const [mapContainer, setMapContainer] = useState(null)
const onLoad = useCallback(map => addMarkers(map, pollLocations), [pollLocations])

function addMarkers (map, pollLocations) {
    console.log(pollLocations)
    const markers = pollLocations.map((location) => {
        let lat = location.location.latitude
        let lng = location.location.longitude;  
        const marker = new window.google.maps.Marker({position: {lat, lng}})
        console.log(marker)
        return marker;
    });
    new MarkerClusterer({
        markers,
        map,
        algorithm: new SuperClusterAlgorithm({ radius: 200}),
    })
}

return <GoogleMapsProvider 
googleMapsAPIKey={process.env.REACT_APP_GOOGLE_API}
mapOptions={mapOptions}
mapContainer={mapContainer}
onLoad={onLoad}
>
    <div ref={(node) => setMapContainer(node)} style={{height: "70vh"}} />
</GoogleMapsProvider>
}


export default Home