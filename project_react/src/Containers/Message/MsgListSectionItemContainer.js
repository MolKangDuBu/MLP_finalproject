import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionItem from '../../Components/Message/MsgListSectionItem';
import { showMsgDetailSection, setActiveId } from '../../Modules/message';
import { useLocation } from 'react-router';
import qs from 'qs';

const MsgListSectionItemContainer = ({ msg }) => {
  // redux
  const { activeId, activeMsg } = useSelector(state => state.message);
  const { msgDetailSectionState } = useSelector(
    state => state.message.mediaState,
  );
  const dispatch = useDispatch();

  // variable
  const { hostname, id } = msg;
  const {
    hostProfileImg,
    lastMsg,
    lastMsgDate,
    isCanceled,
    checkin,
    checkout,
  } = msg.contents;
  const lmDate = new Date(lastMsgDate);
  const ciDate = new Date(checkin);
  const coDate = new Date(checkout);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const lm = lmDate.toLocaleDateString('ko-KR', options);
  const ci = ciDate.toLocaleDateString('ko-KR', options);
  const co = coDate.toLocaleDateString('ko-KR', options);

  const query = useLocation();
  const { filter } = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });

  // event
  const onClickList = () => {
    dispatch(setActiveId(id));
    !msgDetailSectionState && dispatch(showMsgDetailSection());
  };

  return (
    <MsgListSectionItem
      hostname={hostname}
      hostProfileImg={hostProfileImg}
      lastMsg={lastMsg}
      lm={lm}
      ci={ci}
      co={co}
      isCanceled={isCanceled}
      onClickList={onClickList}
      id={id}
      activeId={activeId}
      filter={filter}
      state={activeMsg.state}
    />
  );
};

export default MsgListSectionItemContainer;
