import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { Text } from "../common";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentItem = (props) => {
  const dispatch = useDispatch();
  const { userNickname, commentContent, commentId } = props;
  const nickName = localStorage.getItem("userNickname");

  return (
    <React.Fragment>
      <Box>
        <span>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/jaemagazine-45854.appspot.com/o/image%2FJULhtsuBmabuNrbQ5Vv6ZLivSUB3_1644407428385?alt=media&token=5cd591a8-4369-4c15-8865-2a5dc67e17cc"
            alt="프로필"
          />
        </span>
        <Text size="16px" margin="5px" padding="0" bold>
          {userNickname}
        </Text>
        <Text size="16px" margin="5px 10px" padding="0">
          {commentContent}
        </Text>
        {userNickname === nickName && (
          <DeleteBtn
            onClick={() => {
              dispatch(commentActions.deleteCommentDB(commentId));
            }}
          >
            <img src="/img/delete.png" />
          </DeleteBtn>
        )}
      </Box>
    </React.Fragment>
  );
};

const Box = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;

  span {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 9px;
    border-radius: 100%;
    overflow: hidden;

    & + p {
      flex-shrink: 0;
    }
  }
  img {
    object-position: 50% 10%;
  }
`;
const DeleteBtn = styled.button`
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  margin-top: 5px;
  margin-left: auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default CommentItem;
