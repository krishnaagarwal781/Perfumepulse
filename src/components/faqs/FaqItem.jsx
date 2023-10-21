import React from "react";
import styled from "styled-components";

const Question = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  padding: 12px;
  cursor: pointer;
  background-color: #fbf6f3;
  border-bottom: 1px solid #ebebeb;
  color: black;
  transition: border 0.3s ease-in-out;

  display: flex;
  align-items: center;
  gap: 10px;

  &.active {
    border-bottom: 2px solid #ebebeb;
  }
`;
const Answer = styled.div`
  font-size: 0;
  padding: 0;
  margin: 0;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  &.active {
    opacity: 1;
    font-size: 1.4rem;
    padding: 16px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-top: 5px;
    opacity: 1;
  }
`;

const FaqItem = ({ data, handleOpen, itemIndex, openedIndex }) => {
  return (
    <div>
      <Question
        className={openedIndex === itemIndex ? "active" : ""}
        onClick={() => handleOpen(itemIndex)}
      >
        <i className="fa-solid fa-star"></i>
        <span>{data.question}</span>
      </Question>
      {/* <AnswerWrapper> */}
      <Answer className={openedIndex === itemIndex ? "active" : ""}>
        {data.answer}
      </Answer>
      {/* </AnswerWrapper> */}
    </div>
  );
};

export default FaqItem;
