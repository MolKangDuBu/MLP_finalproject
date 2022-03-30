import React from 'react';
import styled from 'styled-components';
import Button from '../Global/Button';
import { FaWonSign, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
const StFooter = styled.footer`
  background: ${({ theme }) => theme.color.lightGray};
  padding: 50px 80px;
  color: ${({ theme }) => theme.color.black};
  @media ${({ theme }) => theme.size.iPad} {
    padding: 50px 40px;
  }
`;
const StUpperWrapper = styled.div`
  display: flex;
  @media ${({ theme }) => theme.size.iPad} {
    flex-direction: column;
  }
`;
const StContentSection = styled.section`
  width: 25%;
  padding-bottom: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  @media ${({ theme }) => theme.size.iPad} {
    width: 100%;
    padding-bottom: 24px;
    margin-bottom: 24px;
    &:nth-child(even) ul {
      height: 64px;
    }
    &:nth-child(odd) ul {
      height: 96px;
    }
  }
`;
const StContentTitle = styled.h4`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
`;
const StContentList = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`;
const StContentItem = styled.li`
  padding: 3px 0px;
  margin: 5px 0;
  width: 100%;
  @media ${({ theme }) => theme.size.iPad} {
    width: 33.3333%;
  }
`;
const StContentItemLink = styled.a`
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  &:visited {
    color: inherit;
  }
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.darkGray};
    cursor: pointer;
  }
`;
const StLowerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  margin-top: 20px;
  font-size: 14px;
  @media ${({ theme }) => theme.size.iPad} {
    flex-direction: column-reverse;
    width: 100%;
  }
`;
const StLowerLeftWrapper = styled.div`
  @media ${({ theme }) => theme.size.iPad} {
    text-align: center;
    width: 100%;
  }
`;
const StCopyRight = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
`;
const StRuleList = styled.ul`
  display: flex;
  @media ${({ theme }) => theme.size.iPad} {
    justify-content: center;
  }
`;
const StRuleItem = styled.li``;
const StRuleLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  &:visited {
    color: inherit;
  }
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.darkGray};
    cursor: pointer;
  }
`;
const StDot = styled.span`
  display: flex;
  width: 19px;
  height: 19px;
  justify-content: center;
  align-items: center;
`;
const StLowerRightWrapper = styled.div`
  @media ${({ theme }) => theme.size.iPad} {
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StSettingButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  width: 160px;
`;
const StSettingButton = styled(Button)`
  background: transparent;
  height: 20px;
  font-size: 14px;
  border-radius: 0;
  padding: 0;
  line-height: 16px;
  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.color.darkGray};
  }
`;
const StButtonText = styled.span`
  line-height: 18px;
  margin-left: 6px;
  font-weight: 500;
`;
const StSiteLinkList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  @media ${({ theme }) => theme.size.iPad} {
    margin-left: 70px;
  }
`;
const StSiteLinkItem = styled.li`
  text-align: center;
  & + & {
    margin-left: 20px;
  }
`;
const StSiteLink = styled.a`
  font-size: 20px;
  line-height: 20px;
  display: flex;
  vertical-align: center;
  cursor: pointer;
  &:visited {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

const Footer = ({ ...rest }) => {
  return (
    <StFooter {...rest}>
      <StUpperWrapper>
        <StContentSection>
          <StContentTitle>소개</StContentTitle>
          <StContentList>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/d/howairbnbworks"
                target="_blank"
              >
                에어비앤비 이용 방법
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://news.airbnb.com/ko/"
                target="_blank"
              >
                뉴스룸
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnbcitizen.com/?utm_source=airbnb&utm_medium=footer&utm_campaign=product"
                target="_blank"
              >
                Airbnb Citizen
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/plus"
                target="_blank"
              >
                에어비앤비 플러스
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/luxury"
                target="_blank"
              >
                에어비앤비 Luxe
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.hoteltonight.com/?utm_source_name=Airbnb&utm_campaign_name=Dr_Us_Desktop_Airbnb_Footer"
                target="_blank"
              >
                호텔투나잇
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/work?s=footer"
                target="_blank"
              >
                에어비앤비 비즈니스 프로그램
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/d/olympics"
                target="_blank"
              >
                올림픽
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://careers.airbnb.com/"
                target="_blank"
              >
                채용정보
              </StContentItemLink>
            </StContentItem>
          </StContentList>
        </StContentSection>
        <StContentSection>
          <StContentTitle>커뮤니티</StContentTitle>
          <StContentList>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/diversity"
                target="_blank"
              >
                다양성 및 소속감
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/d/accessibility"
                target="_blank"
              >
                접근성
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/magazine"
                target="_blank"
              >
                에어비앤비 매거진
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/associates?from=footer"
                target="_blank"
              >
                에어비앤비 어소시에이트
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/d/covid19relief"
                target="_blank"
              >
                구호 인력을 위한 숙소
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/invite?r=6"
                target="_blank"
              >
                친구 초대하기
              </StContentItemLink>
            </StContentItem>
          </StContentList>
        </StContentSection>
        <StContentSection>
          <StContentTitle>호스팅하기</StContentTitle>
          <StContentList>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/host/homes?from_footer=1"
                target="_blank"
              >
                숙소 호스팅
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/d/onlinehost"
                target="_blank"
              >
                온라인 체험 호스팅
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/host/experiences"
                target="_blank"
              >
                체험 호스팅하기
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/resources/hosting-homes/t/leadership-updates-35"
                target="_blank"
              >
                브라이언 체스키 CEO의 메시지
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/help/article/1387/%ED%95%9C%EA%B5%AD%EC%97%90%EC%84%9C-%EC%B1%85%EC%9E%84%EA%B0%90-%EC%9E%88%EB%8A%94-%ED%98%B8%EC%8A%A4%ED%8C%85-%ED%95%98%EA%B8%B0"
                target="_blank"
              >
                책임감 있는 호스팅
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/openhomes?from_footer=1"
                target="_blank"
              >
                Open Homes
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/resources/hosting-homes"
                target="_blank"
              >
                자료 센터
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://community.withairbnb.com/t5/Community-Center-KR/ct-p/Community-Center-Korean"
                target="_blank"
              >
                커뮤니티 센터
              </StContentItemLink>
            </StContentItem>
          </StContentList>
        </StContentSection>
        <StContentSection>
          <StContentTitle>에어비앤비 지원</StContentTitle>
          <StContentList>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/resources/hosting-homes"
                target="_blank"
              >
                코로나19 관련 업데이트
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/help/home"
                target="_blank"
              >
                도움말 센터
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/help/article/2701/%EC%BD%94%EB%A1%9C%EB%82%98%EB%B0%94%EC%9D%B4%EB%9F%AC%EC%8A%A4%EA%B0%90%EC%97%BC%EC%A6%9D19%EC%BD%94%EB%A1%9C%EB%82%9819-%EA%B4%80%EB%A0%A8-%EC%A0%95%EC%83%81%EC%B0%B8%EC%9E%91%EC%9D%B4-%EA%B0%80%EB%8A%A5%ED%95%9C-%EC%83%81%ED%99%A9-%EC%A0%95%EC%B1%85"
                target="_blank"
              >
                예약 취소 옵션
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/neighbors"
                target="_blank"
              >
                에어비앤비 이웃 민원 지원
              </StContentItemLink>
            </StContentItem>
            <StContentItem>
              <StContentItemLink
                href="https://www.airbnb.co.kr/trust"
                target="_blank"
              >
                신뢰와 안전
              </StContentItemLink>
            </StContentItem>
          </StContentList>
        </StContentSection>
      </StUpperWrapper>
      <StLowerWrapper>
        <StLowerLeftWrapper>
          <StCopyRight>
            &copy; 2020 DEVengersAssemble. All rights reserved
          </StCopyRight>
          <StRuleList>
            <StRuleItem>
              <StRuleLink
                href="https://www.airbnb.co.kr/terms/privacy_policy"
                target="_blank"
              >
                개인정보 처리방침
              </StRuleLink>
            </StRuleItem>
            <StDot aria-hidden="true">・</StDot>
            <StRuleItem>
              <StRuleLink href="https://www.airbnb.co.kr/terms" target="_blank">
                이용약관
              </StRuleLink>
            </StRuleItem>
            <StDot aria-hidden="true">・</StDot>
            <StRuleItem>
              <StRuleLink
                href="https://www.airbnb.co.kr/sitemaps/v2"
                target="_blank"
              >
                사이트맵
              </StRuleLink>
            </StRuleItem>
            <StDot aria-hidden="true">・</StDot>
            <StRuleItem>
              <StRuleLink
                href="https://www.airbnb.co.kr/home/updated_cancellation_policies?korean_strict_policy=true#strict"
                target="_blank"
              >
                한국의 변경된 환불 정책
              </StRuleLink>
            </StRuleItem>
          </StRuleList>
        </StLowerLeftWrapper>
        <StLowerRightWrapper>
          <StSettingButtonWrapper>
            <StSettingButton btnType="underlined">
              <span className="a11yHidden">언어 바꾸기 버튼</span>
              <FiGlobe />
              <StButtonText>한국어(KR)</StButtonText>
            </StSettingButton>
            <StSettingButton btnType="underlined" height="20px" fontSize="14px">
              <span className="a11yHidden">화폐 바꾸기 버튼</span>
              <FaWonSign />
              <StButtonText>KRW</StButtonText>
            </StSettingButton>
          </StSettingButtonWrapper>
          <StSiteLinkList>
            <StSiteLinkItem>
              <StSiteLink
                href="https://www.facebook.com/AirbnbKorea"
                target="_blank"
              >
                <span className="a11yHidden">페이스북으로 이동하기</span>
                <FaFacebookF />
              </StSiteLink>
            </StSiteLinkItem>
            <StSiteLinkItem>
              <StSiteLink href="https://twitter.com/airbnb" target="_blank">
                <span className="a11yHidden">트위터로 이동하기</span>
                <FaTwitter />
              </StSiteLink>
            </StSiteLinkItem>
            <StSiteLinkItem>
              <StSiteLink
                href="https://www.instagram.com/airbnb/"
                target="_blank"
              >
                <span className="a11yHidden">인스타그램으로 이동하기</span>
                <FaInstagram />
              </StSiteLink>
            </StSiteLinkItem>
          </StSiteLinkList>
        </StLowerRightWrapper>
      </StLowerWrapper>
    </StFooter>
  );
};

export default React.memo(Footer);
