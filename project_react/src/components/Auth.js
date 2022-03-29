import React from "react";
import Modal from "react-modal";
import { useLocation } from "react-router";
import { ReactComponent as HamSvg } from "../svg/ham.svg";
import { ReactComponent as UserSvg } from "../svg/user.svg";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import styled from "styled-components";

Modal.setAppElement("#root");
const Auth = (props) => {
  const [authModal, setAuthModal] = React.useState(false);
  const [loginModal, setLoginModal] = React.useState(false);
  const [signupModal, setSignupModal] = React.useState(false);
  const [scroll, setScroll] = React.useState(0);
  const windowOffset = window.pageYOffset;
  const token = localStorage.getItem("token");
  const { pathname } = useLocation();

  const authModalClose = () => {
    setAuthModal(false);
  };

  const onClose = () => {
    setAuthModal(false);
  };

  const isClose = () => {
    setLoginModal(false);
    setSignupModal(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.pageYOffset);
    });
  }, [setScroll, windowOffset]);

  return (
    <React.Fragment>
      <AuthModalS
        onClick={() => {
          setAuthModal(true);
        }}
      >
        <HamSvg className="menu" />

        <UserSvg className="user" />
      </AuthModalS>

      {authModal && (
        <Modal
          isOpen={authModal}
          onRequestClose={onClose}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: "50%",
              right: 0,
              bottom: 0,
              width: `${
                pathname === "/location"
                  ? "100%"
                  : pathname.indexOf("/detail") >= 0
                  ? "1120px"
                  : "calc(min(1760px,100%) - 160px)"
              }`,
              backgroundColor: "transparent",
              zIndex: "20",
              transform: " translateX(-50%)",
            },
            content: {
              position: "absolute",
              top: `${pathname === "/" && scroll < 54 ? "133px" : "80px"}`,
              left: "calc(100vw-250px)",
              right: `${pathname === "/location" ? "24px" : "0"}`,
              bottom: "auto",
              overflow: "auto",
              width: "250px",
              height: "300px",
              height: "auto",
              WebkitOverflowScrolling: "touch",
              outline: "none",
              borderRadius: "20px",
              padding: "0",
              border: "solid 1px #eee",
              zIndex: 10,
            },
          }}
        >
          {token ? (
            <AuthList className="line">
              <li
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("userNickname");
                  authModalClose();
                }}
              >
                로그아웃
              </li>
            </AuthList>
          ) : (
            <AuthList className="line">
              <li
                onClick={() => {
                  setSignupModal(true);
                  authModalClose();
                }}
              >
                회원가입
              </li>
              <li
                onClick={() => {
                  setLoginModal(true);
                  authModalClose();
                }}
              >
                로그인
              </li>
            </AuthList>
          )}
          <AuthList>
            <li>숙소호스트되기</li>
            <li>체험 호스팅하기</li>
            <li>도움날</li>
          </AuthList>
        </Modal>
      )}
      {loginModal && <LoginModal _isOpen={loginModal} _isClose={isClose} />}
      {signupModal && <SignupModal _isOpen={signupModal} _isClose={isClose} />}
    </React.Fragment>
  );
};

const AuthModalS = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 77px;
  height: 42px;
  padding: 5px 5px 5px 12px;
  border-radius: 50px;
  border: solid 1px #dddddd;
  background-color: #fff;

  span {
    display: block;
  }
  .menu {
    width: 16px;
    height: 16px;
    color: #717171;
  }

  .user {
    width: 30px;
    height: 30px;
    color: #717171;
  }

  svg {
    width: 100%;
    hheight: 100%;
  }
`;

const AuthList = styled.ul`
  padding: 8px 0;
  border-radius: 10px;
  font-size: 14px;
  color: #222222;

  hr {
    color: #eee;
  }
  li {
    line-height: 50px;
    padding: 0 20px;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  ${(props) =>
    props.className
      ? "border-bottom: solid 1px #eee;border-radius:10px 10px 0 0 ;"
      : ""}
`;

export default Auth;
