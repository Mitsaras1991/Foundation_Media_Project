import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from 'react'
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {<Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))
/* class MapApp extends React.Component{
    render(

    )
} */
export default MyMapComponent;