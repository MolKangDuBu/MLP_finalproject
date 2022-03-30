import React from 'react';
import { useHistory } from 'react-router-dom';
import WishlistsHeader from '../../Components/Wishlists/WishlistsHeader';
import { useDispatch } from 'react-redux';
import { reset } from '../../Modules/searchForm';

const WishlistsHeaderContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogoClick = e => {
    e.preventDefault();
    history.push('/');
    window.scrollTo({ top: 0 });
    dispatch(reset());
  };

  return <WishlistsHeader handleLogoClick={handleLogoClick}></WishlistsHeader>;
};

export default WishlistsHeaderContainer;
