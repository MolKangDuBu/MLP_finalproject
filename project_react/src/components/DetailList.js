import React from "react";

const DetailList = (props) => {
  console.log(props);
  return (
    <>
      {props.list.map((v, idx) => (
        <li key={idx}>
          <p>{v.placeName}</p>
        </li>
      ))}
    </>
  );
};

export default DetailList;
