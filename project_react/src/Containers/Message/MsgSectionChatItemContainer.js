import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgSectionChatItem from '../../Components/Message/MsgSectionChatItem';
import { openModal } from '../../Modules/message';

const MsgSectionChatItemContainer = ({ activeMsg, chat, msg }) => {
  // ! redux
  const { profileImg } = useSelector(state => state.user.data);
  const dispatch = useDispatch();

  // ! variable
  const { name, timeStamp, text } = chat;
  const chatDate = new Date(timeStamp);
  const hour = chatDate.getHours();
  const min = chatDate.getMinutes();
  const host = chat.name === activeMsg.hostname && true;
  const h = hour >= 12 ? `오후 ${hour - 12}` : `오전 ${hour}`;
  const m = min < 10 ? `0${min}` : min;

  // ! modal event
  const onClickOpenModal = () => {
    dispatch(openModal('flag'));
  };

  return (
    <MsgSectionChatItem
      onClickOpenModal={onClickOpenModal}
      hostname={activeMsg && activeMsg.hostname}
      hostProfileImg={activeMsg && activeMsg.contents.hostProfileImg}
      profileImg={profileImg}
      name={name}
      text={text}
      isHost={host}
      h={h}
      m={m}
      // msg={msg} // socket msg
    />
  );
};

export default MsgSectionChatItemContainer;
