import React from 'react';
import styled from 'styled-components';
import Button from '../Global/Button';
const StOnlineExpWrapper = styled.div`
  background: ${({ theme }) => theme.color.realBlack};
  padding: 65px 80px;
  color: ${({ theme }) => theme.color.white};
  @media ${({ theme }) => theme.size.iPad} {
    padding: 65px 40px;
  }
`;

const StUpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StContentWrapper = styled.div`
  width: 460px;
`;

const StTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
  line-height: 40px;
`;

const StContent = styled.p`
  font-size: 16px;
  line-height: 20px;
  margin-top: 4px;
  white-space: normal;
`;

const StButtonWrapper = styled.div``;

const StGridWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 520px;
  @media ${({ theme }) => theme.size.iPad} {
    height: 470px;
  }
  margin-top: 25px;

  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media ${({ theme }) => theme.size.medium} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 2fr 1fr;
  }
`;

const StGridItem = styled.div`
  cursor: pointer;
  position: relative;
  border: none;
  border-radius: 16px;
  &:nth-child(1) {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  &:nth-child(2) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 3;
    grid-column-end: 4;
  }

  &:nth-child(3) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 4;
    grid-column-end: 5;
  }

  &:nth-child(4) {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 3;
    grid-column-end: 5;
  }

  @media ${({ theme }) => theme.size.medium} {
    &:nth-child(1) {
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 2;
    }
    &:nth-child(2) {
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 2;
      grid-column-end: 3;
    }
    &:nth-child(3) {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
    }
    &:nth-child(4) {
      display: none;
    }
  }
`;

const StGridItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px 16px 20px 20px;
  position: absolute;
`;

const StGridItemContentWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.color.black};
  min-height: 76px;
  width: 100%;
  padding: 10px 30% 10px 16px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  border-radius: 0 0 16px 16px;
`;

const StGridItemContent = styled.p`
  color: ${({ theme }) => theme.color.white};
`;

const OnlineExp = () => {
  return (
    <StOnlineExpWrapper>
      <StUpperWrapper>
        <StContentWrapper>
          <StTitle>온라인체험</StTitle>
          <StContent>
            세계 각지의 사람들을 만나 새로운 경험을 해보세요. 개성 있는 호스트가
            진행하는 실시간 영상 세션을 통해 이제 집에서도 안전하게 체험을
            즐기실 수 있습니다.
          </StContent>
        </StContentWrapper>
        <StButtonWrapper>
          <Button
            color="color"
            border="1px solid white"
            hover={{ background: 'darkgray', 'font-weight': '500' }}
            transition
          >
            모두 둘러보기
          </Button>
        </StButtonWrapper>
      </StUpperWrapper>
      <StGridWrapper>
        <StGridItem>
          <StGridItemImg src="https://a0.muscache.com/im/pictures/af8a88f4-d8c5-4cbc-b9bb-008e74b6d8eb.jpg?im_w=720"></StGridItemImg>
          <StGridItemContentWrapper>
            <StGridItemContent>
              피트니스 모델 트레버 벨과 함께 운동하기
            </StGridItemContent>
          </StGridItemContentWrapper>
        </StGridItem>
        <StGridItem>
          <StGridItemImg src="https://a0.muscache.com/im/pictures/97a911e0-0891-4964-ae23-0700942cb349.jpg?im_w=720"></StGridItemImg>
          <StGridItemContentWrapper>
            <StGridItemContent>
              맥팔랜드 가족과 함께 홈 비디오 만들기
            </StGridItemContent>
          </StGridItemContentWrapper>
        </StGridItem>
        <StGridItem>
          <StGridItemImg src="https://a0.muscache.com/im/pictures/cf921c75-2927-4a15-981b-bf81d01c8ae0.jpg?im_w=720"></StGridItemImg>
          <StGridItemContentWrapper>
            <StGridItemContent>
              안무가 아르벤 기가에게 댄스 배우기
            </StGridItemContent>
          </StGridItemContentWrapper>
        </StGridItem>
        <StGridItem>
          <StGridItemImg src="https://a0.muscache.com/im/pictures/ab0dd600-9a99-449f-8224-9667feca9e6c.jpg?im_w=720"></StGridItemImg>
          <StGridItemContentWrapper>
            <StGridItemContent>
              사진작가 보니 로드리게스와 함께 멋진 인물 사진 찍기
            </StGridItemContent>
          </StGridItemContentWrapper>
        </StGridItem>
      </StGridWrapper>
    </StOnlineExpWrapper>
  );
};

export default OnlineExp;
