import React from "react";
import GoogleMap from "google-map-react";
import { useSelector } from "react-redux";
import Marker from "./Marker";

const Map = (props) => {
  const roomList = useSelector((state) => state.list.list);
  // console.log(roomList);

  return (
    <div className="map" style={{ height: "100vh" }}>
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        {roomList.map((v, idx) => {
          return <Marker key={idx} lat={v.lat} lng={v.lng} info={v} />;
        })}
      </GoogleMap>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 37.5549241135356,
    lng: 126.92166257005,
  },
  zoom: 14,
};

export default Map;
