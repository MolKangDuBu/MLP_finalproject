import React,{useState, useEffect} from "react";
import '../../css/bootstrap.min.css';
import '../../css/datepicker.css';
import '../../css/templatemo-style.css';
import { Link, useNavigate, useParams  } from "react-router-dom";
import Axios from "axios";
import axios from "axios";

//http://127.0.0.1:9090/help/view/{id}

function HelpView(props) {
    let {id} = useParams(); //url주소로부터 {} 를 받는다 
    let history = useNavigate (); //자바스크립트로 history.go(-1)

    //inputs 변수에 JSON객체저장
    const [inputs, setInputs] = useState({
        center_id: '',
        center_title: '',
        center_image:'',
        center_create:'',
        center_contents:''
    });

    //해체 JSON ->일반변수로 전환한다 
    const { center_id, center_title,center_image, center_create,
        center_contents  } = inputs; 

    useEffect(()=>{
        
        axios.get("http://127.0.0.1:9090/help/view/"+id)
        .then(res=>{
            console.log( res.data );
            setInputs({
                center_id:res.data.center_id,
                center_title: res.data.center_title,
                center_image: res.data.center_image,
                center_contents:res.data.center_contents,
                center_create:res.data.center_create,
              });
        })
        .catch(error=>{
            console.log(error);
        });

    }, []);

    //함수 3개 지우기 

    return (
        <div >
          <div className="tab-pane " id="1a">

          <div class="container mt-5" style={{"minHeight":"600px","height":"800px"}}>
            <div class="row">
                
                    <h2>{inputs.center_title}</h2>
                    <h5>{inputs.center_create}</h5>

                    <div class="fakeimg">  
                        <img src={inputs.center_image} alt="Image" className="img-fluid tm-recommended-img" 
                        style={{"width":"100%", "height":"400px"}} />
                    </div>
                    
                   
                    <p style={{"whiteSpace":"pre-wrap"}}>
                    {inputs.center_contents}
                    </p>
                    
                </div>
            </div>


         
              <div className="form-group">
                  <Link to="/help"  className="btn btn-primary">목록</Link>
              </div>
         
         
          </div>

    </div>
  );
}

export default HelpView;