import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import Search from "./Search";
import './styles.css';
import {Button, Form} from "react-bootstrap";

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const [newRows, setNewRow] = useState(rows);

  const [ inputStatus, setInputStatus ] = useState('')

  useEffect(()=>{
    console.log(newRows);
    setNewRow(rows);
  },[])

  const checkHandler = (e) =>{
    console.log(e.target.value);
    const type = e.target.value;
    
    if (type==='0'){
      // 운영중
      const filteredData = rows.filter((data)=> {return data.values.house_active=='Y'});
      console.log(filteredData);
      setNewRow(filteredData);
      setInputStatus('able')

    } else if (type==='1') {
      // 운영중지
      const filteredData = rows.filter((data)=> {return data.values.house_active!='Y'});
      console.log(filteredData);
      setNewRow(filteredData);
      setInputStatus('disable')
      
    } else {
      setNewRow(rows);
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
                      onClick={checkHandler}
                      value={2}
                      checked={inputStatus === 'all'}
                  >
        </Form.Check>
        </div>
        <div style={{marginRight:'50px'}}>
        <Form.Check
                      type={"radio"}
                      label={"운영중"}
                      name={"able"}
                      id={"able"}
                      onClick={checkHandler}
                      value={0}
                      checked={inputStatus === 'able'}
                  >
        </Form.Check>
        </div>
        <div style={{marginRight:'50px'}}>
        <Form.Check
                      type={"radio"}
                      label={"운영중지"}
                      name={"disable"}
                      id={"disable"}
                      onClick={checkHandler}
                      value={1}
                      checked={inputStatus === 'disable'}
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
              <tr className="common-table-row1" key={data.images_thumbnail + data.house_name + data.house_active + data.house_bedroom + data.house_bed + data.house_bathroom + data.house_address1 + data.house_address2 + data.house_create + data.house_update}>
                  
                  <td className="common-table-column1">{data.values.images_thumbnail}</td>
                  <td className="common-table-column1">{data.values.house_name}</td>
                  <td className="common-table-column1">{data.values.house_active === "Y"? "등록 중" : "미등록"}</td>
                  <td className="common-table-column1">{data.values.house_bedroom}&nbsp;개</td>
                  <td className="common-table-column1">{data.values.house_bed}&nbsp;개</td>
                  <td className="common-table-column1">{data.values.house_bathroom}&nbsp;개</td>
                  <td className="common-table-column1">{data.values.house_address1}, {data.values.house_address2}</td>
                  <td className="common-table-column1">{data.values.house_update === ""? data.values.house_create:data.values.house_update}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;