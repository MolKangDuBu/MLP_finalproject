import React from "react";
import styled from "styled-components";
import DetailTop from "../components/DetailTop";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as listActions } from "../redux/modules/list";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useParams } from "react-router-dom";
import DetailText from "../components/DetailText";
import DetailComment from "../components/DetailComment";
import CommentList from "../components/CommentList";
import DetailMap from "../components/DetailMap";
import ReservCard from "../components/ReservCard";

const Detail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const _place_id = parseInt(params.placeId);
  console.log(_place_id);
  const placeInfo = useSelector((state) => state.list.listOne);

  const comment_data = useSelector((state) => state.comment);

  React.useEffect(() => {
    dispatch(listActions.getListDetailDB(_place_id));
    dispatch(commentActions.getCommentDB(_place_id));
  }, []);

  return (
    <DetailWrapS>
      <DetailTop {...placeInfo} {...comment_data} />
      <div className="flex_wrap">
        <DetailText {...placeInfo} />
        <div className="re-card">
          <ReservCard />
        </div>
      </div>
      <div className="comment_list">
        <DetailComment {...placeInfo} />
        <CommentList {...comment_data} />
      </div>
      <DetailMap {...placeInfo} />
    </DetailWrapS>
  );
};
const DetailWrapS = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  .flex_wrap {
    display: flex;
  }
  .re-card {
    width: 33.33333333333333%;
    margin-left: 8.333333333333332%;
  }

  .comment_list {
    padding: 48px 0;
  }
`;
export default Detail;
