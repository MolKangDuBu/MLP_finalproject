import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import Button from '../Global/Button';

const StSearchButton = styled(Button)`
  position: absolute;
  top: calc(50% - 21px);
  right: 12px;
  font-size: 20px;
  font-weight: 500;
  padding: 0;
  width: 40px;
  height: 40px;
  border: none;
  z-index: 10;
  &:hover {
    border: none;
    outline: none;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.7);
  }
  color: white;
  background: ${({ theme }) => theme.color.main};
`;

const SearchButton = () => {
  return (
    <StSearchButton type="submit" btnType="circle">
      <FiSearch></FiSearch>
    </StSearchButton>
  );
};

export default React.memo(SearchButton);
