
import TableRow from './TableRow'
import React, { useState, useEffect} from "react";
import {  Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import "../../page.css";
import Pagination from "react-js-pagination";

function BoardList( ){
     let history = useNavigate ();

     const [board, setBoard] = useState([])  //게시글
     const [page, setPage] = useState(1);    //페이징정보
     const [totalCnt, setTotalCnt] = useState(0); //전체레코드개수
     const [loading, setLoading]=useState(false); //로딩시 사용하고 싶었지만 안썻음

    
          /*
         useEffect( function, deps )
        - function : 수행하고자 하는 작업
        - deps : 배열 형태이며, 배열 안에는 검사하고자 하는 특정 값 or 빈 배열
        화면불러올때 이 부분이 호출된다. 
        */
        
        // setBoard(
        //    ...board,
        //    [
        //      {id:1, title:"제목1", writer:"홍길동1", contents:"내용을 막 넣자1"},
        //      {id:2, title:"제목2", writer:"홍길동2", contents:"내용을 막 넣자2"},
        //      {id:3, title:"제목3", writer:"홍길동3", contents:"내용을 막 넣자3"},
        //      {id:4, title:"제목4", writer:"홍길동4", contents:"내용을 막 넣자4"},
        //      {id:5, title:"제목5", writer:"홍길동5", contents:"내용을 막 넣자5"}
        //   ]
        // );


      //axios 는 비동기모드로 데이터를 불러온다. 
      /*
      비동기모드는 반환값을 못받는데 데이터가 어느시점에 올지 몰라서 
      then 메서드에서 결과값이 오기를 기다려야 한다 
      axios.get(url)
      .then((response)->{}) 
      .catch((error)->{})

      비동기만 있으면 세상은 최고야 라고 생각을 했는데 때로는 동기모드가 필요하더라 
      async , await 
      */

      const loadData = async (page) => {
        setLoading(true);
        //비동기모드를 동기모드로 바꾸어서 데이터가 올때까지 기다리게 만들었음 
        //그래서 값이 반환될때까지 기다린다. 
        const res = await Axios.get('http://localhost:9090/board/list/'+page);
        console.log(res.data);
        setTotalCnt(res.data.totalCnt);
        setBoard(res.data.list);
        setLoading(false);
      }

      //페이지가 처음에 화면에 뜰때 이부분이 호출된다. 
      useEffect( ()=>
      {
        loadData(1);  //첫번째 페이지 데이터 가저와서 화면에 뿌리기    
      }, []);
  
      //페이지 이동 버튼을 누르면 이함수가 호출된다. 
      const handlePageChange = (page) => {
        setPage(page); //페이지 설정하고 
        loadData(page); //데이터 불러오기 
      };

      const refreshPage = () => {
        history("/board");
      };
      
      return (
        <div>
          <h3 align="center">게시판 목록</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <colgroup>
              <col width="8%"/>
              <col width="*"/>
              <col width="12%"/>
              <col width="12%"/>
              <col width="12%"/>
              
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th> 
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
                 {
                    board.map((object, i)=>{
                        return <TableRow key={i} obj={object}  totalCnt={totalCnt} func={refreshPage}/>
                        /*key :반복적인거 넘길때 반드시 주고, 동일한 값이 입력되면 안된다. 
                          obj : props 라는 객체를 이용해 부모 컴포넌트가 자식컴포넌트한테 값을 줄 
                               수 있다. 맘대로 
                          totalCnt : 자식컴포넌트한테 값줄려고 */
                    })
                 }                                                               
            </tbody>
          </table>

          {
            /*
            Pagination : npm install react-js-pagination 한거임 
            페이징을 다 처리할 수 있다 
            activePage:현재페이지값 
            itemsCountPerPage: 한페이지에 몇개씩 나타낼것인가 
            totalItemsCount:전체데이터 개수 
            pageRangeDisplayed: 한번에 보여지는 페이지 개수 1~5 6 ~10
            onChange : 페이지 눌렀을때 호출될 함수 
            */
          }
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={totalCnt}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
          <Link className="btn btn-danger" to="/board/write">글쓰기</Link>
          
        </div>
      );
}


export default BoardList;



/*

무한스크롤 구현하기 
yarn add react-intersection-observer

*/