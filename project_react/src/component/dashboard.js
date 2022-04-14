
import React, { useState, useEffect } from "react";

function DashBoard( ){
     const [heroState, setHeroState] = useState(
         {
            hero:[ 
            {"id":"1", "name":"홍길동1", "description":"11"} ]
         });

     useEffect(() => { 
        console.log("데이터 불러오기");
        setHeroState(
           {
               hero:[ {"id":"1", "name":"홍길동", "description":"11"},
                {"id":"2", "name":"임꺽정", "description":"11"},
                {"id":"3", "name":"장길산", "description":"11"},
                {"id":"4", "name":"조승연", "description":"11"},
                {"id":"5", "name":"전웅", "description":"11"},
                {"id":"6", "name":"강형구", "description":"11"},
                {"id":"7", "name":"유정", "description":"11"},
                {"id":"8", "name":"박지영", "description":"11"},
                {"id":"9", "name":"홍길동", "description":"11"}]
           }
        );

        //console.log( heroState.hero );
      }, []);
     
      
      return (
        <div>
          <h3 align="center">Hero List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>description</th>
              </tr>
            </thead>
            <tbody>
                 {
                    heroState.hero.map(function(object, i){
                        return (
                            <tr> 
                                <td>{object.id}</td>
                                <td>{object.name}</td>
                                <td>{object.description}</td>
                            </tr>
                        )
                    })
                 }                                                               
            </tbody>
          </table>

          
          <button type="button"  className="btn btn-danger">글쓰기</button>
        </div>
      );
}


export default DashBoard;