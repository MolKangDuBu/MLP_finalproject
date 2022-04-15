import React from "react";
import '../../css/bootstrap.min.css';
import '../../css/datepicker.css';
import '../../css/templatemo-style.css';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import HouseTable from "./HouseTable";
import { useMemo } from "react";
import "./styles.css"
import styled from 'styled-components';
import Pagination from "react-js-pagination";


function House() {
    const [houselist, setHouselist] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    // const [page, setPage] = useState(1);    //페이징정보
    const [totalCnt, setTotalCnt] = useState(0); //전체레코드개수
    const [isChange, setIsChange] = useState(false);

    const columns = ["","숙소", "상태", "침실", "침대", "욕실", "위치", "최종수정일"];

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
            accessor: 'house_active',
            Header: '상태',
        },
        {
            accessor: 'house_bedroom',
            Header: '침실',
        },
        {
            accessor: 'house_bed',
            Header: '침대',
        },
        {
            accessor: 'house_bathroom',
            Header: '욕실',
        },
        {
            accessor: 'house_address1',
            Header: '주소',
        },
        {
            accessor: 'house_update',
            Header: '최종수정일',
        },
        {
            accessor: 'house_create',
            Header: '',
        },
        {
            accessor: 'house_address2',
            Header: '',
        },
        
  ]

    const columns2 = useMemo(() => columnData, []);

    const data2 = useMemo(() => houselist, [houselist]);



    useEffect(()=>{
        loadHouselist(1);
    }, [])

    const loadHouselist = async(page)=>{
        // 임시 user_id (로그인 아이디로 추후 변경해야함)
        const user_id = '1';
        if(page===undefined) page=1;
        const res = await axios.get(`http://localhost:9090/host/house/list/${page}?user_id=${user_id}`)
            //console.log( res.data );
            //setHostlist(...hostlist, res.data);
            //data2
            setHouselist(...houselist, res.data);
            //setHouselist([]);
            setHouselist(res.data.list);
            setTotalCnt(res.data.totalCnt);
            setIsChange(!isChange);
            console.log(res.data.list);
        
            setIsLoading(true);
    }

    const handlePageChange = (page) => {
        //setPage(page); //페이지 설정하고 
        loadHouselist(page); //데이터 불러오기 
      };

    useEffect(()=>{
        
        //setHouselist([]);
        console.log('page가 변할때 list 삭제', houselist);

    }, [houselist]);

    useEffect(()=>{
        
        //setHouselist([]);
        console.log('data2가 변할때 list 삭제', data2);

    }, [data2]);

    

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
                                    <NavLink className="nav-link active" to="/hostmode/house">숙소 확인<span class="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/hostmode/reservation">예약 확인</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/hostmode/reservation">신규 등록</NavLink>
                                </li>
                            </ul>
                        </div>                            
                    </nav>
                </div>
            </div>
        </div>
        <div className="tab-pane " id="1a">
            <div className="container-fluid mt-3" style={{"height":"90px"}}>
              <h1>숙소 확인</h1><br></br>
            </div>
            {isLoading===true? (
                    <HouseTable columns={columns2} data={data2}/>
                    ):(<div></div>)
                }
        </div>
        {/* <div>
            <Pagination
                activePage={page}
                itemsCountPerPage={2}
                totalItemsCount={totalCnt}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange}
            />
        </div> */}
    </div>
  );
}

export default House;