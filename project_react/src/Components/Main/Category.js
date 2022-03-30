import React from 'react';
import styled from 'styled-components';

const StCategoryWrapper = styled.div`
  background: ${({ theme }) => theme.color.white};
  padding: 30px 80px 70px 80px;
  @media ${({ theme }) => theme.size.iPad} {
    padding: 60px 40px;
  }
`;

const StCategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.size.iPad} {
  }
`;

const StCategoryItem = styled.li`
  width: 32%;
  background: ${({ theme }) => theme.color.white};
  overflow: hidden;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 12px;
  }
`;

const StCategoryImg = styled.img`
  width: 100%;
`;

const StCategoryContentWrapper = styled.div`
  padding: 10px 50px 20px 20px;
`;

const StCatogoryTitle = styled.p`
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  white-space: pre-line;
  overflow: hidden;
  margin-bottom: 10px;
`;

const StCategoryContent = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.darkGray};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre-line;
`;

const Category = () => {
  return (
    <StCategoryWrapper>
      <StCategoryList>
        <StCategoryItem>
          <StCategoryImg src="https://a0.muscache.com/im/pictures/658c5d58-b6df-49f3-8873-59cd55acd3b8.jpg?im_w=720"></StCategoryImg>
          <StCategoryContentWrapper>
            <StCatogoryTitle>온라인 체험</StCatogoryTitle>
            <StCategoryContent>
              세계 각지의 호스트가 진행하고 모두 함께 즐기는 독특한 액티비티
            </StCategoryContent>
          </StCategoryContentWrapper>
        </StCategoryItem>
        <StCategoryItem>
          <StCategoryImg src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"></StCategoryImg>
          <StCategoryContentWrapper>
            <StCatogoryTitle>독특한 공간</StCatogoryTitle>
            <StCategoryContent>
              단순한 숙소 이상의 특별함이 담긴 공간
            </StCategoryContent>
          </StCategoryContentWrapper>
        </StCategoryItem>
        <StCategoryItem>
          <StCategoryImg src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"></StCategoryImg>
          <StCategoryContentWrapper>
            <StCatogoryTitle>집 전체</StCatogoryTitle>
            <StCategoryContent>
              일행만을 위한 편한한 공간에서 친구 및 가족과 오붓한 시간을
              보내세요.
            </StCategoryContent>
          </StCategoryContentWrapper>
        </StCategoryItem>
      </StCategoryList>
    </StCategoryWrapper>
  );
};

export default Category;
