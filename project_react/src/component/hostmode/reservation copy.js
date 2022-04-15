import React from "react";
import '../../css/bootstrap.min.css';
import '../../css/datepicker.css';
import '../../css/templatemo-style.css';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReservationTable from "./ReservationTable";
import { useMemo } from "react";
import "./styles.css"
import styled from 'styled-components';

function Reservation() {
    const [reservationlist, setReservationlist] = useState([]);
    const [isLoading, setIsLoading]=useState(false)
    // const [page, setPage] = useState(1);    //페이징정보
    // const [activePage, setActivePage] = useState(1);    //페이징정보
    // const [totalCnt, setTotalCnt] = useState(0); //전체레코드개수
    // const [isChange, setIsChange] = useState(false);

    const columns = ["", "숙소", "상태", "예약자", "인원", "금액", "최종예약일"];

    const columnData = [
        {
            accessor: 'images_thumbnail',
            Header: '',
        },
        {
            accessor: 'house_name',
            Header: '숙소명',
        },
        {
            accessor: 'booking_status',
            Header: '상태',
        },
        {
            accessor: 'user_name',
            Header: '예약자',
        },
        {
            accessor: 'booking_people',
            Header: '인원',
        },
        {
            accessor: 'booking_price',
            Header: '금액',
        },
        {
            accessor: 'booking_update',
            Header: '최종예약일',
        },
        {
            accessor: 'booking_create',
            Header: '',
        },
        {
            accessor: 'booking_complete',
            Header: '',
        },
        {
            accessor: 'booking_cancel',
            Header: '',
        },
        
  ]

  useEffect(()=>{
    loadReservationlist();
    console.log( "***", reservationlist);
}, [])

    const columns2 = useMemo(() => columnData, []);

    const data2 = useMemo(() => reservationlist, [reservationlist]);



    const loadReservationlist = async()=>{
        // 임시 user_id (로그인 아이디로 추후 변경해야함)
        const user_id = '1';
        // if(page===undefined) page=1;
        const res = await axios.get(`http://localhost:9090/host/reservation/list?user_id=${user_id}`)
        console.log( res.data );
        setReservationlist(...reservationlist, res.data);
        
        setReservationlist(res.data.list);

        // setTotalCnt(res.data.totalCnt);
        // setIsChange(!isChange);
        
            
        
        //여기는 지워도 됨 
        // setReservationlist(...reservationlist, [
        //     {images_thumbnail:"image1", house_name:"집1", house_active:"Y", 
        //      house_bedroom:3,house_bed:2,house_bathroom:1,house_address1:"1", house_address2:"2"}
        //     ,
        //     {images_thumbnail:"image1", house_name:"집1", house_active:"Y", 
        //     house_bedroom:3,house_bed:2,house_bathroom:1,house_address1:"1", house_address2:"2"
        //    },
        //    {images_thumbnail:"image1", house_name:"집1", house_active:"Y", 
        //    house_bedroom:3,house_bed:2,house_bathroom:1,house_address1:"1", house_address2:"2"
        //   },
        //   {images_thumbnail:"image1", house_name:"집1", house_active:"Y", 
        //      house_bedroom:3,house_bed:2,house_bathroom:1,house_address1:"1", house_address2:"2"
        //     },
        //     {images_thumbnail:"image1", house_name:"집1", house_active:"Y", 
        //     house_bedroom:3,house_bed:2,house_bathroom:1,house_address1:"1", house_address2:"2"
        //    },
        //    {images_thumbnail:"image1", house_name:"집1", house_active:"Y", 
        //    house_bedroom:3,house_bed:2,house_bathroom:1,house_address1:"1", house_address2:"2"
        //   }]
        // );
        
        //console.log( "***", reservationlist);
                
        setIsLoading(true);  //이때만 객체가 보이기 
    
    }

    // const handlePageChange = (page) => {
    //     // setPage(page); //페이지 설정하고 
    //     loadReservationlist(page); //데이터 불러오기 
    //   };

    // useEffect(()=>{
        
    //     //setHouselist([]);
    //     console.log('page가 변할때 list 삭제', reservationlist);

    // }, [reservationlist]);

    // useEffect(()=>{
        
    //     //setHouselist([]);
    //     console.log('data2가 변할때 list 삭제', data2);

    // }, [data2]);

    return (
        <div >
            <div className="tm-top-bar" id="tm-top-bar">
                <div className="container">
                    <div className="row">
                         <nav class="navbar navbar-expand-lg narbar-light">
                            <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/hostmode/house">숙소 확인</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to="/hostmode/reservation">예약 확인<span class="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/hostmode/house">신규 등록</NavLink>
                                    </li>
                                </ul>
                            </div>                            
                        </nav>
                    </div>
                </div>
            </div>
            <div className="tab-pane " id="1a">
                <div className="container-fluid mt-3" style={{"height":"90px"}}>
                  <h1>예약 확인</h1><br></br>
                </div>
                {isLoading===true? (
                    <ReservationTable columns={columns2} data={data2}/>
                    ):(<div></div>)
                }
                
            </div>
            {/* <div>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={2}
                    totalItemsCount={totalCnt}
                    pageRangeDisplayed={10}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    onChange={handlePageChange}
                />
            </div> */}
        </div>
      );
    }

export default Reservation;