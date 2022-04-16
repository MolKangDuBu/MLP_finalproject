import React, { useCallback, useEffect, useRef } from "react";
import GoogleMap from "google-map-react";
import Geocode from 'react-geocode';

function Map(props) {
  const mapRef = useRef(null);
  Geocode.setApiKey("AIzaSyBOmFnHASzr_qBQr67763k9CJC_RhOBh_4")
  Geocode.setLanguage('en')
  Geocode.setRegion('es')
  Geocode.enableDebug()
  

  const initMap = useCallback((destination) => {

    Geocode.fromAddress(destination)
    .then( response => {
      const { lat, lng } = response.results[0].geometry.location;
      // console.log(lat, lng);
      var mapinfo =new window.google.maps.Map(mapRef.current, {
        center: { lat: lat, lng: lng},
        zoom: 15,
      });
      var marker = new window.google.maps.Marker({position: {lat:lat, lng :lng}, map :mapinfo});
      //return {lat, lng}
    })
    .catch(err => console.log("error : "+err))
    

  }, [mapRef]);


  


  useEffect(() => {

    initMap(props.destination);

    // props.childFunc.current = alert
    // console.log("fff"+props.childFunc.current)

     
  }, [props, initMap]);



  return (
    <div
      className="map"
      style={{ width: "100%", height: "500px" }}
      ref={mapRef}
    ></div>

  );

}
export default Map;