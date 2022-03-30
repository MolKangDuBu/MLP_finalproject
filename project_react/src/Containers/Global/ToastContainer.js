import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Toast, UndoToast } from '../../Components/Global/Toast';
import qs from 'qs';
const ToastContainer = ({ state, onClickUndo }) => {
  // ! redux
  const { data } = useSelector(state => state.message.messages);
  const { toast } = useSelector(state => state.message.toastState);

  // ! query
  const query = useLocation();
  const { filter } = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });

  const hasMsgs = data && data[`${filter || 'all'}`].length;

  return (
    <Toast
      state={state}
      toast={toast}
      onClickUndo={onClickUndo}
      hasMsgs={hasMsgs}
    />
  );
};

const UndoToastContainer = () => {
  const undoToast = useSelector(state => state.message.undoToast);
  return <UndoToast undoToast={undoToast} />;
};

export { ToastContainer, UndoToastContainer };
