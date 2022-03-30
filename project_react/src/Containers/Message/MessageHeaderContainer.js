import React from 'react';
import { useHistory } from 'react-router-dom';
import MessageHeader from '../../Components/Message/MessageHeader';
import { useDispatch } from 'react-redux';
import { reset } from '../../Modules/searchForm';

const MessageHeaderContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogoClick = e => {
    e.preventDefault();
    history.push('/');
    window.scrollTo({ top: 0 });
    dispatch(reset());
  };

  return <MessageHeader handleLogoClick={handleLogoClick}></MessageHeader>;
};

export default MessageHeaderContainer;
