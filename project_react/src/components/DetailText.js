import React from "react";
import styled from "styled-components";
const DetailText = (props) => {
  const _desc = props.description?.split("*");

  return (
    <DescriptionS>
      <section className="title">
        <h2>{props.subtitle}</h2>
        <span>{props.subtitle1}</span>
      </section>
      <section className="check">
        <div>
          <ul>
            {props?.check1 && (
              <li>
                <i>
                  <img src="/img/view.png" />
                </i>
                {props?.check1}
              </li>
            )}
            {props?.check2 && (
              <li>
                <i>
                  <img src="/img/super.png" />
                </i>
                {props?.check2}
              </li>
            )}
            {props?.check3 && (
              <li>
                <i>
                  <img src="/img/location.png" />
                </i>
                {props?.check3}
              </li>
            )}
          </ul>
        </div>
      </section>
      <section className="desc">
        <div>
          {_desc?.map((v, idx) =>
            idx === 0 ? (
              <div className="main_desc" key={idx}>
                {v}
              </div>
            ) : (
              <div key={idx}>* {v}</div>
            )
          )}
        </div>
      </section>
      {props.placeFurniture && (
        <section className="location">
          <h2>숙박 장소</h2>
          <div>
            <i>
              <img src="/img/bed.png" />
            </i>
            <p> {props.placeFurniture} 공간</p>
            <span>{props.placeFurnitureDetail}</span>
          </div>
        </section>
      )}
      <section className="convenience">
        <h2>숙박 편의시설</h2>
        <ul>
          <li>
            <i>
              <img src="/img/view.png" />
            </i>
            {props.Convenience1}
          </li>
          <li>
            <i>
              <img src="/img/view.png" />
            </i>
            {props.Convenience2}
          </li>
          <li>
            <i>
              <img src="/img/aircon.png" />
            </i>
            {props.Convenience3}
          </li>
          <li>
            <i>
              <img src="/img/kitchen.png" />
            </i>
            {props.Convenience4}
          </li>
          <li>
            <i>
              <img src="/img/laundry.png" />
            </i>
            {props.Convenience5}
          </li>
        </ul>
      </section>
    </DescriptionS>
  );
};
const DescriptionS = styled.div`
  width: 58.333333333333336%;
  font-size: 16px;
  color: #222;

  h2 {
    font-size: 22px;
    padding-bottom: 24px;
  }

  section {
    border-bottom: solid 1px #ebebeb;
  }

  span {
    color: #717171;
  }

  li {
    display: flex;
  }

  i {
    display: block;
    width: auto;
    height: 24px;
    margin-right: 10px;
    margin-bottom: 16px;
    img {
      width: auto;
      height: 100%;
    }
  }

  .title {
    padding: 48px 0 24px;
  }

  .check {
    padding: 32px 0;
  }

  .desc {
    padding: 32px 0 48px;

    .main_desc {
      margin-bottom: 10px;
    }
  }

  .location {
    padding: 48px 0;
    div {
      width: 33.3333%;
      padding: 24px;
      border: solid 1px #ebebeb;
      border-radius: 10px;
    }

    p {
      margin-bottom: 8px;
    }
  }

  .convenience {
    padding: 48px 0;

    ul {
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(2, 1fr);
    }

    li {
      display: flex;
    }
  }
`;

export default DetailText;
