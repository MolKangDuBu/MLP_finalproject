import React from "react";

import { ReactComponent as LikeSvg } from "../svg/like_it_defualt.svg";
import { ReactComponent as LikeActiveSvg } from "../svg/like_it_active.svg";

const LikeIt = () => {
  const [isLike, setIsLike] = React.useState(false);
  return (
    <div
      onClick={() => {
        setIsLike(!isLike);
      }}
    >
      {isLike ? <LikeActiveSvg /> : <LikeSvg />}
    </div>
  );
};

export default LikeIt;
