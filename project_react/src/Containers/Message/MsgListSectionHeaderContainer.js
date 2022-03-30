import React, { useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionHeader from '../../Components/Message/MsgListSectionHeader';
import { openPopup, closePopup } from '../../Modules/message';
import { useLocation } from 'react-router';
import qs from 'qs';

const MsgListSectionHeaderContainer = () => {
  // ! redux
  const popupState = useSelector(state => state.message.popupState.filter);
  const dispatch = useDispatch();
  console.log(popupState);
  // ! hook
  const popupBtnRef = useRef();
  const popupRef = useRef();

  // ! query
  const query = useLocation();
  const { filter } = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });

  // ! event
  const onClickPopup = useCallback(() => {
    dispatch(openPopup('filter'));
  }, [openPopup]);

  // ! onClickOutside: close popup when clicking outside
  const onClickOutSide = useCallback(
    ({ target }) => {
      if (!popupBtnRef.current || popupBtnRef.current.contains(target))
        return null;
      if (!popupRef.current || popupRef.current.contains(target)) return null;
      return dispatch(closePopup('filter'));
    },
    [popupBtnRef, popupRef],
  );

  // ! effect
  useEffect(() => {
    // ! 렌더링 될때마다 effect 발생...
    // ! 하은이가 알려준 방법 적용하기
    if (!popupState) return;
    document.addEventListener('click', onClickOutSide);
    return () => {
      document.removeEventListener('click', onClickOutSide);
    };
  }, [onClickOutSide, popupState]);

  return (
    <MsgListSectionHeader
      state={filter}
      onClickPopup={onClickPopup}
      popupState={popupState}
      popupBtnRef={popupBtnRef}
      popupRef={popupRef}
    />
  );
};

export default MsgListSectionHeaderContainer;
