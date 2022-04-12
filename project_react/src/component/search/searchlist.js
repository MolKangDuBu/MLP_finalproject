import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import '../../css/bootstrap.min.css';
import '../../css/datepicker.css';
import '../../css/templatemo-style.css';
import Mapcontent from './mapcontent';
import Axios from 'axios';
import { useEffect } from 'react';
import axios from 'axios';
import Map from './testmap';
function Searchlist() {

    const [houselist, sethouse] = useState([]);
    const [page, setPage] = useState(1);
    const [totalCnt, setTotalCnt] = useState(0);
    const [loading, setLoading] = useState(false);
    const data = useLocation();
    const guest = parseInt(data.state.adult) + parseInt(data.state.children);

    // function initMap() {

    //     const map = new google.maps.Map(document.getElementById("map"), {
    //         zoom: 14,
    //         center: { lat: 37.5407622, lng: 127.0706095 },
    //     });

    //     for (var i = 0; i < locations.length; i++) {
    //         var marker = new google.maps.Marker({
    //             map: map,
    //             label: locations[i].place,
    //             position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
    //         });
    //     }
    // }


    const loadData = async (page) => {
        setLoading(true);
        // const res = await Axios.get(`http://localhost:9090/search/${data.state.room}/${data.state.destination}`);
        await axios.post("http://localhost:9090/search", {
            params: {
                room: data.state.room,
                address: data.state.destination,
                guest: guest
            }
        })
            .then((res) => {
                console.log(res);
                setTotalCnt(res.data.totalCnt);
                sethouse(res.data.list);
                setLoading(false);
                console.log(res.data.list[0].house_id);
            }).catch((error) => {
                console.log(error);
            });

    }

    useEffect(() => {
        loadData(1);

        console.log(data.state);

        console.log(guest);
    }, []);


    return (
        <div>

            <div className="tm-container-outer" id="tm-section-3">

                <div className="tab-content clearfix">


                    <div className="tab-pane fade show active" id="4a">

                        <div className="tm-recommended-place-wrap">
                            {houselist.map(function (e) {
                                return <div className="tm-recommended-place">
                                    <img src="img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                                    <div className="tm-recommended-description-box">
                                        <h3 className="tm-recommended-title">{e.house_name}</h3>
                                        <p className="tm-text-highlight">{e.address1}</p>
                                        <p className="tm-text-gray">{e.house_contents}</p>
                                    </div>
                                    <a href="#none" className="tm-recommended-price-box">
                                        <p className="tm-recommended-price">{e.house_pay}</p>
                                        <Link to={`/listview`} state={{ id: e.house_id }}><p className="tm-recommended-price-link">Continue Reading</p></Link>
                                    </a>
                                </div>
                            })}


                        </div>

                        
                    </div>


                </div>
            </div>
            <div>
                {/* <Mapcontent/> */}
                <Map />
            </div>
            {/* <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOmFnHASzr_qBQr67763k9CJC_RhOBh_4&callback=initMap&libraries=&v=weekly"
        async></script> */}
        </div>
        
    );
}

export default Searchlist;
