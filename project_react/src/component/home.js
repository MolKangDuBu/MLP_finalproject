
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/datepicker.css';
import '../css/templatemo-style.css';

import "react-datepicker/dist/react-datepicker.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { ko } from "date-fns/esm/locale"
import { DateRange } from 'react-date-range';

function Home() {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ])

    const [destination, setdes] = useState();
    const [room, setroom] = useState(1);
    const [adult, setad] = useState(1);
    const [children, setch] = useState(0);
    const [checkin, setchin] = useState();
    const [checkout, setchout] = useState();


    useEffect(()=>{
        console.log(checkin);
        console.log(checkout);

    },[checkin, checkout])



    const checkstat = ((e) => {
        console.log("hello world");
        console.log(destination);
        console.log(room);
        console.log(adult);
        console.log(children);
        console.log(state[0]);
        
        const tempChin = state[0].startDate.getFullYear().toString()+"."+
        (state[0].startDate.getMonth()+1).toString()+"."+
        state[0].startDate.getDate().toString();

        setchin(()=>tempChin);

        setchout(()=>(state[0].endDate.getFullYear().toString()+"."+
        (state[0].endDate.getMonth()+1).toString()+"."+
        state[0].endDate.getDate().toString()));
        //console.log(checkout);
        
        // localStorage.setItem(room);
        
         
       


    })
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         contents:[
    //             {destination : }
    //         ]
    //     }
    // }destination/room/adult/children/check-in/check-out



    return (
        <div >
            <div className="tm-main-content" id="top">
                <div className="tm-top-bar-bg"></div>


                <div className="tm-page-wrap mx-auto">
                    <section className="tm-banner">
                        <div className="tm-container-outer tm-banner-bg">
                            <div className="container">

                                <div className="row tm-banner-row tm-banner-row-header">
                                    <div className="col-xs-12">
                                        <div className="tm-banner-header">
                                            <h1 className="text-uppercase tm-banner-title">시작하세요</h1>
                                            <img src="../img/dots-3.png" alt="Dots" />
                                            <p className="tm-banner-subtitle">최고의 선택을 도와드리겠습니다.</p>
                                            <a href="javascript:void(0)" className="tm-down-arrow-link"><i className="fa fa-2x fa-angle-down tm-down-arrow"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row tm-banner-row hbox guide" id="tm-section-search">
                                    
                                    <form action="index.html" method="get" className="tm-search-form tm-section-pad-2" >

                                            <div className="form-group tm-form-group tm-form-group-1" >
                                            <div className="form-group  tm-form-group-2">
                                            <label for="inputCity">원하시는 위치</label>
                                                <input onChange={(event) => setdes(event.target.value)} name="destination" type="text" className="form-control" id="inputCity" placeholder="(seoul) ..." />
                                                </div>
                                                <div className="form-group  tm-form-group-2">
                                                    <label for="inputRoom">방 개수</label>
                                                    <select onChange={(event) => setroom(event.target.value)} name="room" className="form-control tm-select" id="inputRoom">
                                                        <option value="1" selected>1 Room</option>
                                                        <option value="2">2 Rooms</option>
                                                        <option value="3">3 Rooms</option>
                                                        <option value="4">4 Rooms</option>
                                                        <option value="5">5 Rooms</option>
                                                        <option value="6">6 Rooms</option>
                                                        <option value="7">7 Rooms</option>
                                                        <option value="8">8 Rooms</option>
                                                        <option value="9">9 Rooms</option>
                                                        <option value="10">10 Rooms</option>
                                                    </select>
                                                </div>
                                                <div className="form-group tm-form-group  tm-form-group-3">
                                                    <label for="inputAdult">어른</label>
                                                    <select onChange={(event) => setad(event.target.value)} name="adult" className="form-control tm-select" id="inputAdult">
                                                        <option value="1" selected>1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                    </select>
                                                </div>
                                                <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">

                                                    <label for="inputChildren">아이</label>
                                                    <select onChange={(event) => setch(event.target.value)} name="children" className="form-control tm-select" id="inputChildren">
                                                        <option value="0" selected>0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                    </select>
                                                </div>
                                                <div className="form-group tm-form-group">
                                                <label for="btnSubmit">&nbsp;</label>
                                                <Link  
                                                   to ={"/searchlist"}
                                                   state = {{destination : destination,
                                                            room : room,
                                                            adult : adult,
                                                            children : children,
                                                            checkin : state[0].startDate.getFullYear().toString()+"."+
                                                            (state[0].startDate.getMonth()+1).toString()+"."+
                                                            state[0].startDate.getDate().toString(),
                                                            checkout : state[0].endDate.getFullYear().toString()+"."+
                                                            (state[0].endDate.getMonth()+1).toString()+"."+
                                                            state[0].endDate.getDate().toString()}} 
                                                    ><button style={{ "width": "800%" }} type="button" onClick={(e)=>{checkstat()}} className="btn btn-primary tm-btn tm-btn-search text-uppercase" id="btnSubmit">검색</button>
                                                </Link>
                                            </div>
                                            </div>

                                        <div className="form-row tm-search-form-row flex21">
                                            <div className="form-group ">
                                                <label for="inputCheckIn">날짜 입력</label><br/>
                                                {/* <DatePicker onChange={(event) =>setchin(event.target.value)} name="check-in" type="text" className="form-control" id="inputCheckIn" placeholder="Check In"/> */}
                                                {/* <DatePicker selected = {checkin} dateFormat ="yyyy-MM-dd" onChange = {date => setchin(date)} placeholder="Check In"/> */}
                                                <DateRange
                                                    locale={ko}
                                                    editableDateInputs={true}
                                                    onChange={(item)=>setState([item.selection])}
                                                    moveRangeOnFirstSelection={false}
                                                    ranges={state}
                                                    minDate={new Date()}
                                                    popperPlacement="auto"
                                                    months={2}
                                                    direction="horizontal"
                                                />
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                <div className="tm-banner-overlay"></div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

        </div>
    );
}

export default Home;