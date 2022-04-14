
import React, { useState } from "react";

function About() {
  //컴포넌트가 저장할 데이터를 만들어 보자 
  const [message, setMessage] = useState("어서오십쇼!");  
  
 //이벤트 핸들러 만들기 
  const onClickEnter = () => setMessage("주문 어떻게 해드릴까요?");
 
 
  return (
    <div >
      <h1> This is About {message} </h1>
      <button type="button" onClick={onClickEnter} >주문</button>
    </div>
  );
}

export default About;

// const onChange = (e) => {
//   const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
//   setInputs({
//     ...inputs, // 기존의 input 객체를 복사한 뒤
//     [name]: value // name 키를 가진 값을 value 로 설정
//   });
// };
