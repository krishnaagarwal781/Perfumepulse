import React, { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  i {
    position: absolute;
    top: 11px;
    right: 10px;
    font-size: 1.4rem;
    color: #b8b8b8;
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 8px 36px 8px 8px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(217, 217, 217);
  outline: none;
  font-size: 1.4rem;
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};

  &:hover {
    border-color: ${(props) => (props.disabled ? "none" : "#403c3c")};
  }

  &:focus {
    border-color: #403c3c;
    box-shadow: 0 0 0 2px rgba(51, 50, 50, 0.2);
    outline: 0;
  }
`;

const PasswordField = ({ value, setValue }) => {
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState("password");
  const inputRef = useRef(null);

  if (inputRef.current) {
    console.log(inputRef.current.type);
  }

  const showPassword = () => {
    setShow(true);
    setInputType("text");
  };

  const hidePassword = () => {
    setShow(false);
    setInputType("password");
  };

  return (
    <Wrapper>
      <Input
        type={inputType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {show ? (
        <i onClick={() => hidePassword()} className="fa-regular fa-eye"></i>
      ) : (
        <i
          onClick={() => showPassword()}
          className="fa-regular fa-eye-slash"
        ></i>
      )}
    </Wrapper>
  );
};

export default PasswordField;
