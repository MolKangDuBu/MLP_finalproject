import React from 'react';
import MessageHeaderContainer from '../Containers/Message/MessageHeaderContainer';
// import MessageMain from '../Components/Message/MessageMain';
import MessageMainContainer from '../Containers/Message/MessageMainContainer';

const MessagePage = () => {
  return (
    <>
      <MessageHeaderContainer />
      <MessageMainContainer />
      {/* <MessageMain /> */}
    </>
  );
};

export default MessagePage;
