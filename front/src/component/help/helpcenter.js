
import axios from "axios";
import React,{useState, useEffect} from "react";
import '../../css/bootstrap.min.css';
import '../../css/datepicker.css';
import '../../css/templatemo-style.css';
import HighlightGuide from "./HighlightGuide";
import StartGuide1 from "./StartGuide1";



function HelpCenter() {
    const [guideList, setGuideList] = useState([]);
    const [highlightList, setHighlightList] = useState([]);

    useEffect(()=>{
        loadGuide();
    }, []);

    //async - 비동기를 동기로 바꾸는 명령어 데이터가 다 오면 
    const loadGuide= async()=>{
        axios.get("http://localhost:9090/help/guideList")
        .then( (res)=>{
            //console.log( res.data );
            setGuideList(...guideList, res.data);
            console.log( guideList.length);
        }) 
        
        setHighlightList(...highlightList, 
            [
                {"center_id":"1", "center_image":"img/tm-img-01.jpg", 
                "center_title":"인기도움말1", "center_contents":"내용2", 
                "center_create":"", "center_update":""},
                {"center_id":"1", "center_image":"img/tm-img-02.jpg", 
                "center_title":"인기도움말2", "center_contents":"내용3", 
                "center_create":"", "center_update":""},
                {"center_id":"1", "center_image":"img/tm-img-03.jpg", 
                "center_title":"인기도움말3", "center_contents":"내용3", 
                "center_create":"", "center_update":""},
                {"center_id":"1", "center_image":"img/tm-img-04.jpg", 
                "center_title":"인기도움말4", "center_contents":"내용4", 
                "center_create":"", "center_update":""},
            ])
    }

  return (
    <div >

        <div className="tab-pane " id="1a"  style={{"height":"200px", "marginTop":"120px"}}>
            <div className="container-fluid mt-3">
              <h1>무엇이든 물어보세요</h1>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search"/>
                <button className="btn btn-success" type="submit">Go</button>
              </div>
          </div>
        </div>
         

          <div className="tab-pane " id="1a">
            <div>
                  <h1>시작가이드</h1>
              </div>
                <div className="tm-recommended-place-wrap">

                {
                    // map 함수는 배열의 원소를 첫번째 매개변수 , 인덱스를 두번째 매개변수로 
                    //하는 화살표 함수를 매개변수로 
                    //새로운 컴포넌트에 key는 무조건 index 를 주자 안주면 경고가 나옴 
                    // key 이건 정해짐, obj={object} 이건 내마음대로 -> props로 전달된다
                    guideList.map( (object, index)=>{
                        return <StartGuide1 key={index} obj={object}></StartGuide1>    
                    } )
                   
                  
                }   
                </div>                        

              {/*<a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a>*/}
          </div>
          
         

          <div className="tab-pane " id="1a">
            <div>
                  <h1>인기도움말</h1>
              </div>
                <div className="tm-recommended-place-wrap">
                {
                    highlightList.map( (object, index)=>{
                        return <HighlightGuide key={index} obj={object}></HighlightGuide>    
                    } )
                   
                  
                }   
                </div>                        

             
          </div>

    </div>
  );
}

export default HelpCenter;