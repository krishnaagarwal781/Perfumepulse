import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 40px 0px;

  @media screen and (max-width: 820px) {
    padding: 20px 20px 0px;
  }
`;

const BackNavigation = ({ path = "" }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div
        style={{ fontSize: "1.8rem", color: "#f5a623", cursor: "pointer" }}
        onClick={() => (path === "" ? navigate(-1) : navigate(path))}
      >
        <i className="fa-solid fa-chevron-left"></i>
        <span style={{ marginLeft: "8px" }}>Back</span>
      </div>
    </Wrapper>
  );
};

export default BackNavigation;
