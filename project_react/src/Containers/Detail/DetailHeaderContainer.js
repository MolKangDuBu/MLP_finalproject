import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DetailHeader from '../../Components/Detail/DetailHeader';
import DetailFixedHeaderContainer from './DetailFixedHeaderContainer';

const DetailHeaderContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { homeInfosRef } = useSelector(state => state.home.scrollState);
  const [isScrollTop, setIsScrollTop] = useState(
    window.pageYOffset < (homeInfosRef ? homeInfosRef.offsetTop : 643),
  );
  const [isScrollUnderBox, setIsScrollUnderBox] = useState(
    window.pageYOffset > 2569,
  );
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);
  const [initAnimation, setInitAnimation] = useState(false);
  const searchForm = useSelector(state => state.searchForm);

  const onScroll = () => {
    setIsScrollTop(
      window.pageYOffset < (homeInfosRef ? homeInfosRef.offsetTop : 643),
    );
    setIsScrollUnderBox(window.pageYOffset > 2569);
    setIsSearchBtnClicked(false);
  };

  console.log(window.pageYOffset, homeInfosRef);

  useEffect(() => {
    // console.log(isSearchBtnClicked);
    if (!initAnimation && isSearchBtnClicked) {
      setInitAnimation(true);
    }
    window.addEventListener('scroll', throttle(onScroll, 100));
    return () => {
      // window.removeEventListener('scroll', onScroll);
      // console.log('컴포넌트 사라진다!!!!');
    };
  }, [onScroll, initAnimation]);

  const handleLogoClick = e => {
    e.preventDefault();
    history.push('/');
    window.scrollTo({ top: 0 });
  };

  const handleSearchBtnClick = () => {
    setIsSearchBtnClicked(true);
  };

  return isScrollTop ? (
    <DetailHeader
      initAnimation={initAnimation}
      isSearchBtnClicked={isSearchBtnClicked}
      handleLogoClick={handleLogoClick}
      handleSearchBtnClick={handleSearchBtnClick}
      searchForm={searchForm}
    />
  ) : (
    <DetailFixedHeaderContainer isScrollUnderBox={isScrollUnderBox} />
  );
};

export default DetailHeaderContainer;
