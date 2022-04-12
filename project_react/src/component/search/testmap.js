import React from "react";
import GoogleMap from "google-map-react";


class Map extends React.Component{
    static defaultProps={
        center:{
            lat :37.4979278,
            lng : 127.0275833
        },
        zoom:15
    }

    render() {
        console.log("aa");
        return (
          
                <div className="map">
                    <GoogleMap
                        bootstrapURLKeys = {{key: "AIzaSyBOmFnHASzr_qBQr67763k9CJC_RhOBh_4"}}
                        defaultZoom = {this.props.zoom}
                        defaultCenter={this.props.center}
                        ></GoogleMap>
                </div>
        
        );
    }
}
export default Map;