
import React, { useState } from "react";

function About() {
  //컴포넌트가 저장할 데이터를 만들어 보자 
  const [name, setName]=useState("홍길동");
  const [age, setAge]=useState(18);
  const [person, setPerson]=useState({"name":"홍길동", "age":23});

  const onChangeName = (e) => {
    //e는 이벤트가 발생한 객체임 
    setName(e.target.value);
  };

  const onChangeAge = (e) => {
    //e는 이벤트가 발생한 객체임 
    setAge(e.target.value);
  };

  const onChangePersonName = (e) => {
    //e는 이벤트가 발생한 객체임 
      setPerson({"name":e.target.value, "age":person.age});
  };

  const onChangePersonAge = (e) => {
    //e는 이벤트가 발생한 객체임 
      setPerson({"name":person.name, "age":e.target.value});
  };

  const onClickResult = ()=>{
    console.log(person);
  }
  return (
    <div >
      <h1> This is About {name} </h1>
      <h1> This is About {age} </h1>
      <h1> This is About {person.name} {person.age} </h1>

      <input type="text" value={name} onChange={onChangeName} />
      <input type="text" value={age} onChange={onChangeAge} />
      <input type="text" value={person.name} onChange={onChangePersonName} />
      <input type="text" value={person.age} onChange={onChangePersonAge} />
      <button type="button" onClick={onClickResult} >결과확인</button>
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
