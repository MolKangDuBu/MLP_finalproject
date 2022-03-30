import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MsgSectionMain from '../../Components/Message/MsgSectionMain';

const MsgSectionMainContainer = () => {
  // ! redux
  const { activeMsg } = useSelector(state => state.message);

  // // ! socket으로 저장된 chatHistory
  // const msg = useSelector(state => state.socket.chat);

  const myRef = useRef();

  const scrollBottom = () => {
    myRef.scrollIntoView({ behaiver: 'smooth' });
  };
  // ! effect
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(myRef.current && myRef.current.scrollHeight);
    });
  }, [myRef]);

  return (
    <MsgSectionMain
      myRef={myRef}
      activeMsg={activeMsg}
      chatHistory={activeMsg.chatHistory}
      // msg={msg} // socket chat
    />
  );
};

export default MsgSectionMainContainer;
