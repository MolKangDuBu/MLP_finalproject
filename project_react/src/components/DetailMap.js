import React from "react";
import GoogleMap from "google-map-react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import DetailMarker from "./DetailMarker";

const DetailMap = (props) => {
  const defaultProps = {
    lat: props.lat,
    lng: props.lng,
  };

  return (
    <MapWrapS>
      <h2>호스팅 지역</h2>
      <div className="mapmap" style={{ height: "480px" }}>
        <GoogleMap
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
          center={defaultProps}
          defaultZoom={14}
          // onChildMouseLeave={this.onChildMouseLeave}
          // onChildMouseEnter={this.onChildMouseEnter}
        >
          <DetailMarker lat={props.lat} lng={props.lng} />
        </GoogleMap>
      </div>
    </MapWrapS>
  );
};

const MapWrapS = styled.div`
  padding: 48px 0;
  border-top: solid 1px #ebebeb;
  h2 {
    font-size: 22px;
    padding-bottom: 24px;
  }
`;

export default DetailMap;
