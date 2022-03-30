import React from 'react';
import { useHistory } from 'react-router-dom';
import TripsHeader from '../../Components/Trips/TripsHeader';
import { useDispatch } from 'react-redux';
import { reset } from '../../Modules/searchForm';

const TripsHeaderContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogoClick = e => {
    e.preventDefault();
    history.push('/');
    window.scrollTo({ top: 0 });
    dispatch(reset());
  };

  return <TripsHeader handleLogoClick={handleLogoClick}></TripsHeader>;
};

export default TripsHeaderContainer;
