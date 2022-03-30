import React from 'react';
import Refund from '../../Components/Search/Refund';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Modules/search';

const RefundContainer = ({ isModal }) => {
  const { refund } = useSelector(state => state.search.filterApplied);
  const dispatch = useDispatch();
  const onToggle = () => dispatch(setFilter('refund', !refund));
  return <Refund isModal={isModal} handleClick={onToggle} toggle={refund} />;
};

export default RefundContainer;
