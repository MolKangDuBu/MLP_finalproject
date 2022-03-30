import React from 'react';
import styled from 'styled-components';
import { Input } from '../Global/Input';
import { AiOutlinePicture } from 'react-icons/ai';

const MsgSectionFooter = ({ msg, onTextChange, onMsgSubmit }) => {
  return (
    <MsgSectionFooterWrapper>
      <MsgSectionFooterInner>
        <StForm onSubmit={onMsgSubmit}>
          <Input
            message
            placeholder="메시지를 입력하세요."
            value={msg} //sochet msg (clearInput을 통해 전송 후 메시지 리셋)
            onChange={onTextChange}
          />
        </StForm>
      </MsgSectionFooterInner>
    </MsgSectionFooterWrapper>
  );
};

const MsgSectionFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5rem;
`;

const MsgSectionFooterInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 57.5rem;
  padding: 0rem 2.5rem;
  & > label {
    margin-left: 1rem;
  }
`;

const MsgSectionFooterImageUploadIcon = styled(AiOutlinePicture)`
  font-size: 2rem;
`;

// const StImageButton = styled.button`
//   width: 4.5rem;
//   height: 4.5rem;
//   border: none;
//   border-radius: 50%;
//   &:hover {
//     background: ${({ theme }) => theme.color.lightGray};
//   }
//   cursor: pointer;
// `;

// const StImageLable = styled.label`
//   width: 100%;
//   height: 100%;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const StImageInput = styled.input`
//   display: none;
// `;

const StForm = styled.form`
  margin-left: 1rem;
  width: 90%;
`;

export default MsgSectionFooter;
