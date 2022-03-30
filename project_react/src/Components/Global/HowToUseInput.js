import React, { useState } from 'react';
import styled from 'styled-components';
import CheckBox from './Checkbox';
import { Heart, CkHeart } from './Heart';
import { Input, NewInput } from './Input';

const CheckBoxGroup = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  padding: 5rem;
  border: 1px solid black;
`;

const HeartGroup = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  padding: 5rem;
  border: 1px solid black;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  border: 1px solid black;
`;

const HowToUseInput = () => {
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState('');
  const onChangeCheckBox = e => {
    setCheck(e.target.checked);
  };

  const onChangeHeart = e => {
    setCheck(e.target.checked);
  };

  const onChangeInput = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <CheckBoxGroup>
        <CheckBox value={value} checked={check} onChange={onChangeCheckBox} />
        <CheckBox
          value={value}
          map
          checked={check}
          onChange={onChangeCheckBox}
        />
        <CheckBox checked={check} onChange={onChangeCheckBox} />
        <CheckBox checked={check} onChange={onChangeCheckBox} />
      </CheckBoxGroup>
      <HeartGroup>
        <Heart size="small" bgColor="main" />
        <Heart size="medium" bgColor="main" />
        <Heart size="large" bgColor="main" />
      </HeartGroup>
      <HeartGroup>
        <Heart size="small" bgColor="white" stroke="black" />
        <Heart size="medium" bgColor="white" stroke="black" />
        <Heart size="large" bgColor="white" stroke="black" />
      </HeartGroup>
      <HeartGroup>
        <Heart size="small" bgColor="main" stroke="white" />
        <Heart size="medium" bgColor="main" stroke="white" />
        <Heart size="large" bgColor="main" stroke="white" />
      </HeartGroup>
      <HeartGroup>
        <CkHeart hover={true} checked={check} onChange={onChangeHeart} />
      </HeartGroup>
      <HeartGroup>
        <CkHeart
          size="large"
          ckType={true}
          hover={false}
          checked={check}
          onChange={onChangeHeart}
        />
      </HeartGroup>
      <InputGroup>
        <Input placeholder="이메일 주소" value={value} onChange={onChangeInput}>
          <div>이메일 주소</div>
        </Input>
        <Input
          focusBorderColor
          placeholder="이메일 주소"
          value={value}
          onChange={onChangeInput}
        >
          <div>이메일 주소</div>
        </Input>
        <Input
          focusBorderColor
          placeholder="이름"
          value={value}
          onChange={onChangeInput}
        />
        <Input
          type="password"
          placeholder="패스워드"
          value={value}
          onChange={onChangeInput}
        />
        <Input
          borderNone
          placeholder="보더 논"
          value={value}
          onChange={onChangeInput}
        />
      </InputGroup>
      <InputGroup>
        <Input
          message
          placeholder="메시지를 입력하세요."
          value={value}
          onChange={onChangeInput}
        />
      </InputGroup>
      <InputGroup>
        {/* children은 직접 위치 설정 */}
        <NewInput short title="이름1" value={value} onChange={onChangeInput} />
      </InputGroup>
      <InputGroup>
        <NewInput title="이름2" value={value} onChange={onChangeInput}>
          <div>children: 버튼이나 아이콘은 개인적으로 css작업 필요</div>
        </NewInput>
      </InputGroup>
      <InputGroup>
        <NewInput
          title="이름3"
          placeholder="가격"
          value={value}
          onChange={onChangeInput}
        />
      </InputGroup>
      <InputGroup>
        <NewInput
          title="이름4"
          animation
          value={value}
          onChange={onChangeInput}
        />
      </InputGroup>
      <InputGroup>
        <NewInput
          title="이름5"
          animation
          value={value}
          onChange={onChangeInput}
        >
          <div>children: 버튼이나 아이콘은 개인적으로 css작업 필요</div>
        </NewInput>
      </InputGroup>
      <InputGroup>
        <NewInput
          title="최저 요금"
          value={value}
          short
          pay="₩"
          onChange={onChangeInput}
        />
      </InputGroup>
    </>
  );
};

export default HowToUseInput;
