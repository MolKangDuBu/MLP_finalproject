
import React,{useState, useEffect} from "react";
import '../../css/bootstrap.min.css';
import '../../css/datepicker.css';
import '../../css/templatemo-style.css';
import { Link, useNavigate  } from "react-router-dom";
import Axios from "axios";

function HelpWrite() {
  let history = useNavigate (); //자바스크립트로 history.go(-1)

  const [inputs, setInputs] = useState({
    title: '',
    writer: '',
    contents:'',
    filename:''
  });


  const { title, writer,contents, filename  } = inputs; 

  useEffect(()=>{
    var contents = document.getElementById("contents");
   

  }, []);

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      title: '',
      writer: '',
      contents:'',
      filename:''
    })
  };

  //서버로 정보를 전송하는 함수 
  const onSubmit=(e)=> {
    e.preventDefault(); //무조건 서버로 전송을 하도록 되어있어서 그 작업 못하게 막고 
    //오류처리 

    //파일을 업로드할때는 반드시  FormData객체를 만들어야 한다 
    var frmData = new FormData(); 
    
    frmData.append("title", inputs.title);
    frmData.append("writer", inputs.writer);
    frmData.append("contents", inputs.contents);
    
    frmData.append("file", document.myform.filename.files[0]); //파일은 배열형태로 붙이자
    Axios.post('http://localhost:9090/board/insert/', frmData)
    .then(
        res =>{
          console.log(res.data);
          alert("등록되었습니다.");
          history('/board');//list 로 이동하기 
        } 
    );
   
  }
   

  return (
    <div >

              

          <div className="tab-pane " id="1a">
          <form name="myform" onSubmit={onSubmit}  encType="multipart/form-data">
              <div className="form-group">    
                  <label>제목:  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="title"
                    value={title}
                    onChange={onChange}
                    />
              </div>
              <div className="form-group">
                  <label>이름: </label>
                  <input type="text" 
                    className="form-control"
                    name="writer"
                    value={writer}
                    onChange={onChange}
                    />
              </div>
              
              <div className="form-group">
                  <label>내용: </label>
                  <textarea type="text"
                    rows="10"
                    name="contents" 
                    className="form-control"
                    value={contents}
                    onChange={onChange}
                    />
              </div>
              <div className="form-group">
                  <label>파일: </label>
                  <input type="file"
                    name="filename" 
                    className="form-control"
                    value={filename}
                    onChange={onChange}
                    />
              </div>
              <div className="form-group">
                  <input type="submit" value="등록 " className="btn btn-primary"/>
              </div>
          </form>
          
         
          </div>

    </div>
  );
}

export default HelpWrite;