import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import Search from "./Search";
import './styles.css';
import {Button, Form} from "react-bootstrap";
import { Link } from 'react-router-dom';

function ReservationTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  /**
   * 
   * {
  "pageIndex": 2,
  "pageSize": 10,
  "pageCount": 10000,
  "canNextPage": true,
  "canPreviousPage": true
}
   */
  const [newRows, setNewRow] = useState(rows);

  const [ inputStatus, setInputStatus ] = useState('')

  useEffect(()=>{
    console.log('rows----------', rows);
    checkHandler('-1');
    setNewRow(rows);
    setInputStatus('all');
  },[])

  const checkHandler = (value) =>{
    console.log(value);
    const type = value;
    
    if (type==='0'){
      // 운영중
      const filteredData = rows.filter((data)=> {return data.values.booking_status=='Y'});
      console.log(filteredData);
      setNewRow(filteredData);
      setInputStatus('ing')

    } else if (type==='1') {
      // 운영중지
      const filteredData = rows.filter((data)=> {return data.values.booking_complete=='Y'});
      console.log(filteredData);
      setNewRow(filteredData);
      setInputStatus('complete')
      
    } else if (type==='2') {
      // 운영중지
      const filteredData = rows.filter((data)=> {return data.values.booking_cancel=='Y'});
      console.log(filteredData);
      setNewRow(filteredData);
      setInputStatus('cancel')

    } else {
      setNewRow(rows);
      console.log('rows2---------------', rows);
      setInputStatus('all')
    }
  }
  return (
    <>
      <Search onSubmit={setGlobalFilter} />
      <div style={{display:"flex"}}>
        <div style={{marginRight:'50px'}}>
        <Form.Check
                    type={"radio"}
                    label={"전체"}
                    name={"all"}
                    id={"all"}
                    onClick={(e)=>checkHandler(e.target.value)}
                    value={3}
                    checked={inputStatus === 'all'}
                  >
        </Form.Check>
        </div>
        <div style={{marginRight:'50px'}}>
        <Form.Check
                      type={"radio"}
                      label={"예약중"}
                      name={"ing"}
                      id={"ing"}
                      onClick={(e)=>checkHandler(e.target.value)}
                      value={0}
                      checked={inputStatus === 'ing'}
                  >
        </Form.Check>
        </div>
        <div style={{marginRight:'50px'}}>
        <Form.Check
                      type={"radio"}
                      label={"완료"}
                      name={"complete"}
                      id={"complete"}
                      onClick={(e)=>checkHandler(e.target.value)}
                      value={1}
                      checked={inputStatus === 'complete'}
                  >
        </Form.Check>
        </div>
        <div style={{marginRight:'50px'}}>
        <Form.Check
                      type={"radio"}
                      label={"취소"}
                      name={"cancel"}
                      id={"cancel"}
                      onClick={(e)=>checkHandler(e.target.value)}
                      value={2}
                      checked={inputStatus === 'cancel'}
                  >
        </Form.Check>
        </div>
      </div>
      <table className="common-table1" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="common-table-header-column1" {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {newRows.map((data) => {
            //prepareRow(data);
            return (

              <tr className="common-table-row1" key={data.values.images_thumbnail + data.values.house_name + data.values.booking_status + data.values.user_name + data.values.booking_people + data.values.booking_price + data.values.booking_update + data.values.booking_create + data.values.booking_complete + data.values.booking_cancel}>

                  <td className="common-table-column1"><img src = {data.values.images_thumbnail} style= {{width :"100px"}}></img></td>
                  <Link className='text-link' to="/listview" state={{ id: data.values.house_id}}>
                  <td className="common-table-column1">{data.values.house_name}</td>
                  </Link>
                  <td className="common-table-column1">{data.values.booking_status === "Y"? "예약중" : data.values.booking_complete === "Y"? "완료" : "취소"}</td>
                  <td className="common-table-column1">{data.values.user_name}</td>
                  <td className="common-table-column1">{data.values.booking_people}&nbsp;명</td>
                  <td className="common-table-column1">{data.values.booking_price}&nbsp;원</td>
                  <td className="common-table-column1">{data.values.booking_update === ""? data.values.booking_create:data.values.booking_update}</td>
              </tr>

            );
          })}
        </tbody>
      </table>
      
    </>
  );
}

export default ReservationTable;