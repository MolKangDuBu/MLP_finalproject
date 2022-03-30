import React from 'react';
import styled from 'styled-components';
import CarouselContainer from '../../Containers/Global/CarouselContainer';
import Rating from '../Global/Rating';
import { CkHeart } from '../Global/Heart';

const RecentHome = () => {
  return (
    <StWrapper>
      <CarouselContainer className={'carousel'} responsive />
      <StHome
        target="_blank"
        href="https://www.airbnb.co.kr/rooms/36094960?adults=1&location=%EB%A7%88%EB%93%9C%EB%A6%AC%EB%93%9C&source_impression_id=p3_1597324281_lNy0Q31ggfi0f1St&check_in=2020-09-26&guests=1&check_out=2020-09-30"
      >
        <Rating scale="1.4" rate="4.55" count="67" />
        <StSpan>호텔 객실 Mongmong-Toto</StSpan>
        <StSpan>Clean private shower gold room</StSpan>
      </StHome>
      <Heart ckType checked={false} />
    </StWrapper>
  );
};

const StWrapper = styled.li`
  width: 148px;
  height: 190px;
  position: relative;

  & > * {
    margin-bottom: 0.6rem;
  }

  .carousel {
    margin-bottom: 0.9rem;
  }
`;

const StHome = styled.a`
  text-decoration: none;
  width: 100%;
`;

const StSpan = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.black};
  font-size: 1.6rem;
  line-height: 1.7rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Heart = styled(CkHeart)`
  position: absolute;
  top: 0.7rem;
  right: 0.5rem;
`;

export default React.memo(RecentHome);
