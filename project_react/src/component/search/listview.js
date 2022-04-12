import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import SimpleSlider from "./slider";
import { ko } from "date-fns/esm/locale"
import { DateRange } from 'react-date-range';
import Mapcontent from './mapcontent';

function Listview(props) {
    let history = useNavigate ();
    const data = useLocation();
    const [loading, setLoading] = useState(false);
    const [house, sethouse] = useState({
        house_id: "",
        house_name: "",
        house_contents: "",
        house_guest: "",
        house_bed: "",
        house_bathroom: "",
        house_address1: "",
        house_address2: "",
        house_pay: "",
        user_id: "",
        image: "",

    });
    const [datediff, setdiff] = useState();
    const [pay, setpay] = useState();
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ])


    const loadData = async () => {

        setLoading(true);
        //const res = await Axios.get(`http://localhost:9090/search/view/${data.state.id}`);
        await axios.get(`http://localhost:9090/search/view/${data.state.id}`)
            .then((res) => {
                console.log('1111:', res);
                sethouse(res.data.list);
                setLoading(false);
            })

    }

    const booking = async ()=>{
        await axios.post("http://localhost:9090/search/booking", {
            params: {
                house_id :house.house_id,
                start : date[0].startDate.getFullYear().toString()+"."+
                (date[0].startDate.getMonth()+1).toString()+"."+
                 date[0].startDate.getDate().toString(),
                last : date[0].endDate.getFullYear().toString()+"."+
                (date[0].endDate.getMonth()+1).toString()+"."+
                date[0].endDate.getDate().toString(),
                pay : pay,

            }
        })
            .then((res) => {
         
                if(res.data.result == "success"){
                    console.log(res.data.result);
                    alert("예약되었습니다.");
                    history('/');
                }
                    
            }).catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        console.log('222', data.state);
        loadData();
    }, []);

    useEffect(() => {
        console.log('[house]', house);
        console.log('[house_id]', house.house_id);
    }, [house])

    useEffect(()=>{
        console.log("dd", date);
        diff();
       
    }, [date])



    const diff =()=>{
        const start =new Date(date[0].startDate.getFullYear().toString()+"."+
        (date[0].startDate.getMonth()+1).toString()+"."+
        date[0].startDate.getDate().toString());
        const last = new Date( date[0].endDate.getFullYear().toString()+"."+
        (date[0].endDate.getMonth()+1).toString()+"."+
        date[0].endDate.getDate().toString());
        const datediff = Math.ceil((last.getTime()-start.getTime())/(1000*3600*24));
        // console.log("diff", datediff);
        setdiff(datediff+1);
        setpay(house.house_pay *(datediff+1));
    }

    return (
        <div>
            <div className="tm-main-content" id="top">
                <div className="tm-top-bar-bg"></div>


                <div className="tm-page-wrap mx-auto">
                    <section className="tm-banner">
                        <div className="tm-container-outer tm-banner-bg">
                            <div className="container">

                                <div className="row tm-banner-row tm-banner-row-header">
                                    <div className="col-xs-12">
                                        <div className="tm-banner-header">

                                        </div>
                                    </div>
                                </div>
                                <div className="row tm-banner-row" id="tm-section-search">

                                    <form action="index.html" method="get" className="tm-search-form tm-section-pad-2">
                                        <div className="form-row tm-search-form-row">

                                            <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                                                <h1 for="inputCity">{house.house_name}</h1>
                                                <p>최대인원 {house.house_guest}명. 침대 {house.house_bed}개. 욕실 {house.house_bathroom}개</p>
                                            </div>

                                        </div>
                                        <hr></hr>
                                        <div className="form-row tm-search-form-row">
                                            <div>
                                                <h2>숙소 설명</h2>
                                                <p>{house.house_contents}</p>
                                                <p>1박당 비용 : {house.house_pay}</p>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div>
                                            <h2>편의 시설</h2>
                                            <p>여기에 편의시설들 </p>
                                        </div>
                                        <hr></hr>
                                        <div className="form-group"><SimpleSlider key="image" /></div>
                                        <br></br>
                                        <hr></hr>
                                        <div className="form-row tm-search-form-row">

                                            <div className="form-group">
                                                <DateRange
                                                    locale={ko}
                                                    editableDateInputs={true}
                                                    onChange={(item) => setDate([item.selection])}
                                                    moveRangeOnFirstSelection={false}
                                                    ranges={date}
                                                    minDate={new Date()}
                                                    popperPlacement="auto"
                                                    months={2}
                                                    direction="horizontal"
                                                />
                                               
                                            </div>
      
                                            <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                                                {/* <label for="inputCheckOut">Check Out Date</label> */}
                                                {/* <DatePicker onChange={(event) =>setchout(event.target.value)} name="check-out" type="text" className="form-control" id="inputCheckOut" placeholder="Check Out"/> */}
                                                {/* <DatePicker selected = {checkout} dateFormat ="yyyy-MM-dd" onChange = {date => setchout(date)} placeholder="Check Out"/> */}
                                            </div>
                                           
                                            <div className="form-group tm-form-group tm-form-group-pad">
                                                <label for="btnSubmit">예약 정보를 다시 확인해주세요.&nbsp;</label>
                                                <div className="form-group ">
                                                <label for="btnSubmit">결제 금액 : {pay}</label>
                                            </div>
                                                {/* <Link to={'/payment'} state={{ house_info: house,
                                                 checkin : date[0].startDate.getFullYear().toString()+"."+
                                                 (date[0].startDate.getMonth()+1).toString()+"."+
                                                 date[0].startDate.getDate().toString(),
                                                 checkout : date[0].endDate.getFullYear().toString()+"."+
                                                 (date[0].endDate.getMonth()+1).toString()+"."+
                                                 date[0].endDate.getDate().toString()}}><button style={{ "width": "50%" }} type="button" className="btn btn-primary tm-btn tm-btn-search text-uppercase" id="btnSubmit">예약하기</button></Link> */}
                                                 <button  onClick={(e)=>{booking()}} style={{ "width": "100%" }} type="button" className="btn btn-primary tm-btn tm-btn-search text-uppercase" id="btnSubmit">예약하기</button>

                                            </div>

                                        </div>
                                        <div className="form-row tm-search-form-row">
                                            <h2>호스팅 지역</h2>
                                        </div>
                                        <div>{house.house_address1} {house.house_address2}</div>
                                        {/* <Mapcontent/> */}
                                        <hr></hr>
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

export default Listview;