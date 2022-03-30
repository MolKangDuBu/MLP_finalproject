import React, { useCallback } from 'react';
import MsgDetailSectionHeader from '../../Components/Message/MsgDetailSectionHeader';
import { useDispatch } from 'react-redux';
import { hideMsgDetailSection } from '../../Modules/message';

const MsgDetailSectionHeaderContainer = () => {
  // ! redux
  const dispatch = useDispatch();

  // ! event
  const onCloseSection = useCallback(() => {
    return dispatch(hideMsgDetailSection());
  }, [dispatch]);

  return <MsgDetailSectionHeader onCloseSection={onCloseSection} />;
};

export default MsgDetailSectionHeaderContainer;
