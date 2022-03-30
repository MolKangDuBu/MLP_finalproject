import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';

const Aside = ({
  title,
  subTitle,
  price,
  multipliedPrice,
  percentage,
  totalPrice,
  image,
  reviewCount,
  dateDiff,
  checkinString,
  checkoutString,
  countGuest,
}) => {
  return (
    <StWrapper>
      <StSubjectWrapper>
        <StTextWrapper>
          <StTitle>{title}</StTitle>
          <StSubTitle>{subTitle}</StSubTitle>
          <StReview>
            <StStarIcon />
            후기 {reviewCount}개
          </StReview>
        </StTextWrapper>
        <StHomeImage src={image} alt="숙소 사진" />
      </StSubjectWrapper>
      <StInfoWrapper>
        <div>
          <svg
            viewBox="0 0 24 24"
            role="presentation"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="m3.31 11.56c-.66.5-1.1.99-1.47 1.66-1.14 2.08-1.46 6.82-.2 8.52 1.3 1.75 2.69 2.15 6.54 2.15 2.81 0 4.7-1 5.17-3.43.16-.84.14-1.55-.01-2.59-.01-.1-.03-.19-.06-.37-.12-.8-.16-1.18-.16-1.66.01-1.55.73-2.28 2.62-3.24.56-.28.9-.85.9-1.48 0-.47-.2-.84-.54-1.21-.2-.21-.35-.44-.48-.69-.31-.62-.4-1.19-.39-1.98 0-.06 0-.06 0-.12 0-1.65.81-2.65 2.16-2.65s2.16 1 2.16 2.65c0 1.04-.23 1.97-.99 2.79-.34.37-.54.74-.54 1.21 0 .62.35 1.19.9 1.48 1.87.95 2.6 1.69 2.63 3.25.01.4.02.77.05 1.37.11 2.45.06 3.22-.34 3.9-.47.81-1.6 1.24-3.89 1.26-1.19.01-1.64-.02-2.36-.18-.4-.09-.81.16-.9.56s.16.81.56.9c.86.2 1.41.24 2.71.22 2.76-.03 4.37-.64 5.17-2.01.61-1.04.67-1.93.54-4.73-.03-.59-.04-.94-.05-1.33-.05-2.27-1.14-3.38-3.45-4.56-.05-.03-.08-.08-.08-.13 0-.02.03-.08.14-.2.61-.66 1-1.43 1.2-2.27.14-.56.18-1.03.18-1.54 0-2.42-1.41-4.15-3.66-4.15s-3.66 1.73-3.66 4.15v.11c-.01 1.01.1 1.79.55 2.67.19.37.42.71.72 1.03.11.12.14.18.14.2 0 .06-.03.11-.08.13-2.34 1.19-3.43 2.29-3.44 4.57 0 .58.04 1.03.18 1.9.03.18.04.26.05.36.13.89.15 1.45.02 2.09-.3 1.56-1.51 2.21-3.69 2.21-3.42 0-4.4-.28-5.34-1.55-.86-1.16-.58-5.29.31-6.91.26-.48.57-.81 1.07-1.2.29-.22 1.9-1.3 2.42-1.67.45-.32.71-.84.71-1.39v-.15c0-.52-.25-1-.65-1.34-.69-.57-1.17-2.03-1.17-3.48 0-1.93 1.11-3.13 2.65-3.13s2.65 1.2 2.65 3.13c0 1.46-.46 2.91-1.14 3.48-.42.34-.65.84-.65 1.4 0 .64.35 1.23.92 1.52.41.21.57.29.79.41.37.19.82.05 1.01-.31.19-.37.05-.82-.31-1.01-.23-.12-.4-.21-.81-.42-.06-.03-.11-.1-.11-.18 0-.12.03-.19.11-.25 1.1-.91 1.69-2.77 1.69-4.64 0-2.73-1.75-4.63-4.15-4.63s-4.15 1.9-4.15 4.63c0 1.85.61 3.72 1.71 4.64.07.06.11.13.11.19v.15c0 .06-.03.12-.09.16-.49.35-2.12 1.44-2.46 1.7z"
              fillRule="evenodd"
            ></path>
          </svg>
          게스트 {countGuest}명
        </div>
        <div>
          <AiOutlineCalendar />
          <span className="a11yHidden">체크인</span>
          {checkinString}
          <StArrowIcon />
          <span className="a11yHidden">체크아웃</span>
          {checkoutString}
        </div>
      </StInfoWrapper>
      <StChargeList>
        <li>
          ₩{price} x {dateDiff}박<span>₩{multipliedPrice}</span>
        </li>
        <li>
          서비스 수수료
          <span>₩{percentage}</span>
        </li>
      </StChargeList>
      <StTotalCharge>
        <span>총합계</span>
        <span>₩{totalPrice}</span>
      </StTotalCharge>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: 37%;
  padding: 24px;
  margin-left: 5%;
  margin-bottom: 40px;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 8px;
`;

const StSubjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StTextWrapper = styled.div`
  display: inline-block;
  width: calc(100% - 108px);
  margin-right: 8px;

  @media ${({ theme }) => theme.size.medium} {
    width: 100%;
  }
`;

const StTitle = styled.strong`
  display: block;
  font-weight: 700;
  margin-bottom: 8px;
`;

const StSubTitle = styled.span`
  display: block;
  font-size: 14px;
`;

const StReview = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
  font-size: 14px;
`;

const StStarIcon = styled(AiFillStar)`
  color: ${({ theme }) => theme.color.deepGreen};
  margin-right: 4px;
`;

const StHomeImage = styled.img`
  width: 100px;
  height: 80px;
  min-height: 1px;
  object-fit: cover;
  vertical-align: top;
  border-radius: 4px;

  @media ${({ theme }) => theme.size.medium} {
    order: -1;
    margin-right: calc(100% - 100px);
    margin-bottom: 16px;
  }
`;

const StInfoWrapper = styled.div`
  padding: 24px 0;
  margin-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.color.line};
  border-bottom: 1px solid ${({ theme }) => theme.color.line};

  & > div {
    display: flex;
    align-items: center;

    :first-child {
      margin-bottom: 16px;
    }

    & > svg:first-child {
      margin-right: 8px;
      height: 2rem;
      width: 2rem;
      min-width: 2rem;
      display: block;
      fill: currentcolor;
    }
  }
`;

const StArrowIcon = styled(BsArrowRight)`
  margin: 0 12px;
  min-width: 16px;
`;

const StChargeList = styled.ul`
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};

  li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;

    &:last-child {
      padding-bottom: 0;
    }
  }
`;

const StTotalCharge = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  font-weight: 700;
`;

export default Aside;
