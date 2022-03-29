import styled from "styled-components";
import React from "react";

const InputBlock = styled.input`
  width: ${(props) => (props.width ? props.width : "")};
  font-size: ${(props) => (props.font_size ? props.font_size : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  border: 0px;
  border-bottom: 1px solid #c4c4c4;
  border-radius: 4px;
  background: ${(props) => (props.bg ? props.bg : "")};
  color: ${(props) => (props.color ? props.color : "")};
  font-weight: ${(props) => (props.font_weight ? props.font_weight : "")};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => (props.color ? props.color : "")};
    font-weight: ${(props) => (props.font_weight ? props.font_weight : "")};
    font-size: ${(props) => (props.font_size ? props.font_size : "")};
  }
`;

const Input = (props) => {
  const {
    id,
    width,
    margin,
    padding,
    font_size,
    font_weight,
    type,
    placeholder,
    onChange,
    onSubmit,
    is_label,
    value,
    bg,
    color,
    label_color,
  } = props;

  const styles = {
    width: width,
    margin: margin,
    padding: padding,
    font_size: font_size,
    font_weight: font_weight,
    color: color,
    bg: bg,
  };

  return (
    <>
      {is_label && (
        <label
          htmlFor={id}
          style={{
            width: "100%",
            display: "block",
            color: label_color,
            fontSize: "14px",
          }}
        >
          {is_label}
        </label>
      )}
      <InputBlock
        id={id}
        {...styles}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onSubmit(e);
          }
        }}
      />
    </>
  );
};

Input.defaultProps = {
  id: null,
  width: "",
  margin: "",
  padding: false,
  font_size: false,
  font_weight: "400",
  type: "text",
  placeholder: false,
  onChange: () => {},
  onSubmit: () => {},
  onKeyPress: () => {},
  is_label: false,
  bg: false,
  color: "",
  label_color: false,
};
export default Input;
