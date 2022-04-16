import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from "google-maps-react";

class Mapcontent extends Component{
  render() {
    return (
      <div>
        <Map
            google={this.props.google}
            zoom = {15}
            initialCenter = {{lat : 37.5 , lng : 127}}
            
            ></Map>
      </div>
    );
  }

}

export default GoogleApiWrapper({
  libraries: ["places"],
  apiKey : "Google API Key",
})(Mapcontent);