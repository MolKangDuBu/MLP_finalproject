import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter, useSortBy, usePagination } from "react-table";
import Search from "./Search";
import './styles.css';
import {Button, Form} from "react-bootstrap";
import { Link } from 'react-router-dom';

function HouseTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    pageOptions,
    page,
    state: { pageIndex, pageSize, pageCount },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,

  } = useTable({ columns, data, initialState: { pageIndex: 0, pageSize:5, pageCount:10000 } }, useGlobalFilter, useSortBy, usePagination);

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
    console.log(newRows);
    setNewRow(rows);
  },[])

  // const checkHandler = (e) =>{
  //   console.log(e.target.value);
  //   const type = e.target.value;
    
  //   if (type==='0'){
  //     // 운영중
  //     const filteredData = rows.filter((data)=> {return data.values.house_active=='Y'});
  //     console.log(filteredData);
  //     setNewRow(filteredData);
  //     setInputStatus('able')

  //   } else if (type==='1') {
  //     // 운영중지
  //     const filteredData = rows.filter((data)=> {return data.values.house_active!='Y'});
  //     console.log(filteredData);
  //     setNewRow(filteredData);
  //     setInputStatus('disable')
      
  //   } else {
  //     setNewRow(rows);
  //     setInputStatus('all')
  //   }
  // }
  return (
    <>
      <Search onSubmit={setGlobalFilter} />
      {/* <div style={{display:"flex"}}>
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
      </div> */}
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
          {page.map((data) => {
            prepareRow(data);
            return (

              <tr className="common-table-row1" key={data.values.house_id +data.values.images_thumbnail + data.values.house_name + data.values.house_active + data.values.house_bedroom + data.values.house_bed + data.values.house_bathroom + data.values.house_address1 + data.values.house_address2 + data.values.house_create + data.values.house_update}>
                 
                  <td className="common-table-column1"><img src ={data.values.images_thumbnail} style={{width :"100px"}} ></img></td>
                  <Link className='text-link' to="/listview" state={{ id: data.values.house_id}}>
                  <td className="common-table-column1">{data.values.house_name}</td>
                  </Link>
                  <td className="common-table-column1">{data.values.house_active === "Y"? "운영 중" : "운영중지"}</td>
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
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex +1 } of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 20, 30].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>

    </>
  );
}

export default HouseTable;