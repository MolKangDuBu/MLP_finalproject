import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <div className="footer_wrap">
        <section>
          <div>
            <h3>에어비앤비 지원</h3>
          </div>
          <ul>
            <li>
              <a>도움말 센터</a>
            </li>
            <li>
              <a>안전 정보</a>
            </li>
            <li>
              <a>예약 취소 옵션</a>
            </li>
            <li>
              <a>에어비앤비의 코로나19 대응 방안</a>
            </li>
            <li>
              <a>장애인 지원</a>
            </li>
            <li>
              <a>이웃 민원 신고</a>
            </li>
          </ul>
        </section>

        <section>
          <div>
            <h3>커뮤니티</h3>
          </div>
          <ul>
            <li>
              <a>Airbnb.org: 재난 구호 숙소</a>
            </li>
            <li>
              <a>아프간 난민 지원</a>
            </li>
            <li>
              <a>차별 철폐를 위한 노력</a>
            </li>
          </ul>
        </section>
        <section>
          <div>
            <h3>호스팅</h3>
          </div>
          <ul>
            <li>
              <a>호스팅 시작하기</a>
            </li>
            <li>
              <a>에어커버: 호스트를 위한 보호 프로그램</a>
            </li>
            <li>
              <a>호스팅 자료 둘러보기</a>
            </li>
            <li>
              <a>커뮤니티 포럼 방문하기</a>
            </li>
            <li>
              <a>책임감 있는 호스팅</a>
            </li>
          </ul>
        </section>
        <section>
          <div>
            <h3>소개</h3>
          </div>

          <ul>
            <li>
              <a>뉴스룸</a>
            </li>
            <li>
              <a>새로운 기능에 대해 알아보기</a>
            </li>
            <li>
              <a>에어비앤비 공동창업자의 메시지</a>
            </li>
            <li>
              <a>채용정보</a>
            </li>
            <li>
              <a>투자자 정보</a>
            </li>
            <li>
              <a>에어비앤비 Luxe</a>
            </li>
          </ul>
        </section>
      </div>
      <div className="img_wrap">
        <img src="./img/footer.png" />
      </div>
    </FooterWrap>
  );
};
const FooterWrap = styled.div`
  background-color: #f7f7f7;

  .footer_wrap {
    display: flex;
    border-bottom: 1px solid rgb(221, 221, 221);
  }

  > div {
    max-width: calc(min(1760px, 100%) - 160px);
    margin: 0 auto;
    padding: 40px 0;
    font-size: 14px;
    color: #222;
  }

  section {
    flex: 1;

    div {
      font-weight: bold;
    }
  }

  li {
    margin-top: 12px;
    flex-basis: 33.3333%;
    cursor: pointer;
  }
  .img_wrap {
    width: 400px;
    margin: 0 auto;
  }
`;

export default Footer;
