import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

import { PaddingBox, Text } from "../common";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

Modal.setAppElement("#root");
const LoginModal = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [passWord, setPassWord] = React.useState("");

  const changeId = (e) => {
    setEmail(e.target.value);
  };

  const changePw = (e) => {
    setPassWord(e.target.value);
  };

  const login = () => {
    dispatch(userActions.logInDB(email, passWord));
    setIsopen(false);
    _isClose();
  };

  const { _isOpen, _isClose } = props;
  const [isOpen, setIsopen] = React.useState(_isOpen);

  const isClose = () => {
    setIsopen(false);
    _isClose();
  };

  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={isClose}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "transparent",
              zIndex: "20",
            },
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              bottom: "auto",
              width: "500px",
              height: "auto",
              padding: "0",
              border: "solid 1px #eee",
              overflow: "auto",
              borderRadius: "20px",
              transform: "translate(-50%,-50%)",
              WebkitOverflowScrolling: "touch",
              outline: "none",
            },
          }}
        >
          <ModalWrap>
            <header>
              <button onClick={isClose}></button>
              로그인
            </header>
            <LoginPageBlock>
              <Agrid>
                <Agrid>
                  <PaddingBox padding="16px">
                    <Text bold="600" size="22px">
                      에어비엔비에 오신 것을 환영합니다.
                    </Text>
                    <Ainput
                      type="text"
                      placeholder="이메일을 입력하세요."
                      value={email}
                      onChange={changeId}
                    />
                    <Ainput
                      type="password"
                      placeholder="비밀번호를 입력하세요."
                      value={passWord}
                      onChange={changePw}
                    />
                    <Abutton onClick={login}>로그인</Abutton>
                  </PaddingBox>
                </Agrid>
              </Agrid>
            </LoginPageBlock>
          </ModalWrap>
        </Modal>
      )}
    </>
  );
};

const ModalWrap = styled.div`
  header {
    position: relative;
    text-align: center;
    line-height: 68px;
    border-bottom: solid 1px #eee;
    padding-left: 10px;

    button {
      position: absolute;
      top: 50%;
      left: 20px;
      width: 12px;
      height: 12px;
      transform: translate(0, -50%);
      background: url(/img/cancel.png) no-repeat center / cover;
    }
  }
`;

const LoginPageBlock = styled.div``;
const Ainput = styled.input`
  width: 100%;
  height: 56px;
  border: 0.8px solid #cccccc;
  border-radius: 13px;
  padding: 0px 10px;
  margin: 15px 0px;
  &::placeholder {
    font-size: 14px;
  }
`;
const Agrid = styled.div`
  height: auto;
`;
const Abutton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 13px;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
  background: #ad305a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e84a5f,
    #ad305a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e84a5f,
    #ad305a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  cursor: pointer;
`;

export default LoginModal;
