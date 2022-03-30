import React from 'react';
import RoomType from '../../Components/Search/RoomType';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Modules/search';

const RoomTypeContainer = ({ isModal }) => {
  const { filterApplied: roomType } = useSelector(state => state.search);
  const dispatch = useDispatch();

  const onChange = name => dispatch(setFilter(name, !roomType[name]));

  return <RoomType isModal={isModal} check={roomType} onChange={onChange} />;
};

export default React.memo(RoomTypeContainer);
