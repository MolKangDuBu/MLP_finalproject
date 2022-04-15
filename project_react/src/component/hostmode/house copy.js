
import React from "react";
import '../../css/bootstrap.min.css';
import '../../css/datepicker.css';
import '../../css/templatemo-style.css';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function House() {

    const [houselist, setHouselist] = useState([]);
    const columns = ["숙소", "상태", "침실", "침대", "욕실", "위치", "최종수정일"];

    useEffect(()=>{
        loadHouselist();
    }, [])

    const loadHouselist = async()=>{
        // 임시 user_id (로그인 아이디로 추후 변경해야함)
        const user_id = '1';

        axios.get(`http://localhost:9090/host/house/list?user_id=${user_id}`)

        .then( (res)=>{
            //console.log( res.data );
            //setHostlist(...hostlist, res.data);
            setHouselist(res.data);
            console.log( houselist.length);
        }) 
    
    }
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
                                    <NavLink className="nav-link active" to="/hostmode/house">숙소확인<span class="sr-only">(current)</span></NavLink>
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
            <div className="container-fluid mt-3" style={{"height":"200px"}}>
              <h1>숙소</h1>
              <div className="input-group mb-3">

                <input type="text" className="form-control" placeholder="Search"/>
                <button className="btn btn-success" type="submit">Go</button>
              </div>
              <div className="tab-pane " id="1a">
              <table>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column}>{column} &emsp;&emsp;&emsp;&emsp;&emsp; </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {houselist.map((data)=>
                    (
                        <tr key={data.images_thumbnail + data.house_name + data.house_active + data.house_bedroom + data.house_bed + data.house_bathroom + data.house_address1 + data.house_address2 + data.house_create + data.house_update}>
                            <td>{data.house_name}</td>
                            <td>{data.house_active === "Y"? "등록 중" : "미등록"}</td> 
                            <td>{data.house_bedroom}&nbsp;개</td>
                            <td>{data.house_bed}&nbsp;개</td>
                            <td>{data.house_bathroom}&nbsp;개</td>
                            <td>{data.house_address1}, {data.house_address2}</td>
                            <td>{data.house_update === ""? data.house_create:data.house_update}</td>
                        </tr>
                    ))}
                </tbody>
              </table>
          </div>
        </div>
         


            </div>
    </div>
  );
}

export default House;