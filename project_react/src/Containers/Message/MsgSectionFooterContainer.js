import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgSectionFooter from '../../Components/Message/MsgSectionFooter';
import io from 'socket.io-client';
import {
  sendChat,
  receiveChat,
  clearInput,
  receiveImage,
  sendImage,
} from '../../Modules/socket';

const MsgSectionFooterContainer = () => {
  // ! redux
  // const { activeMsg } = useSelector(state => state.message);
  const { firstName } = useSelector(state => state.trips);

  // ! socket
  // const socket = io.connect('http://localhost:4000');

  const { msg } = useSelector(state => state.socket);
  const dispatch = useDispatch();

  const onTextChange = e => {
    dispatch(sendChat(e.target.value));
    // setMsg(e.target.value);
  };

  const onMsgSubmit = e => {
    e.preventDefault();
    console.log(msg);
    // socket.emit('chat message', msg);
    dispatch(clearInput());
  };

  // React.useEffect(() => {
  //   socket.on('chat message', message => {
  //     // console.log(id, message);
  //     dispatch(receiveChat(firstName, message));
  //   });
  // }, [dispatch, firstName]);

  return (
    <MsgSectionFooter
      onTextChange={onTextChange}
      onMsgSubmit={onMsgSubmit}
      // msg={msg}
    />
  );
};

export default MsgSectionFooterContainer;
