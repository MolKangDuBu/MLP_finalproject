
import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import Axios from "axios";

function BoardWrite( ){

    let history = useNavigate (); //자바스크립트로 history.go(-1)

    const [inputs, setInputs] = useState({
      title: '',
      writer: '',
      contents:'',
      filename:''
    });
  
    //inputs에 저장된 값을 해체한다. 
    //title = inputs.title 
    //writer = inputs.writer 
    const { title, writer,contents, filename  } = inputs; 
  
    //폼태그에서 값들이 바뀌면 호출될 함수 
    const onChange = (e) => {
      //e-매개변수는 이벤트를 발생시킨 객체에 대한 정보가 저장된다. 이벤트도 기억하고 있고 
      //e.target.name, e.target.value   
      //<input name="title" value="">  현재 이 태그에 포커스가 있을때 우리가 키를 누르면 
      //e.target.name에는  title, value 는 키보드 입력한 값 
      const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
      console.log(value, name); //태그에 들어간 값을  state 에 저장을 해야 한다 
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
      <div>
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
                  <input type="text"
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

        <div  style={{ marginTop: 20 }}>
          <b>값: </b>
          {title} <br/>
          {writer} <br/>
          {contents} <br/>
        </div>
      </div>
    );
  }

export default BoardWrite;
