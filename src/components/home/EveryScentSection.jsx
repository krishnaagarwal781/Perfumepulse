import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";

const Wrapper = styled.section`
  padding: 70px 130px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  background-color: #fff;

  .img-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.5s ease-in-out;
      cursor: pointer;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  .text {
    text-align: right;
  }

  .title {
    font-size: 3.2rem;
    font-weight: bold;
  }

  .detail-text {
    margin: 25px 0 20px;
    font-size: 1.8rem;
  }

  @media screen and (max-width: 820px) {
    padding: 50px 20px;
    grid-template-columns: 1fr;

    .text {
      text-align: center;
    }

    .title {
      font-size: 2.5rem;
    }
  }
`;

const SelectButton = styled.button`
  font-size: 1.4rem;
  margin-top: 24px;
  padding: 17px 57px;
  background-color: #333232;
  border: none;
  color: #fff;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f5a623;
  }
`;

const EveryScentSection = () => {
  return (
    <Wrapper>
      <div className="text">
        <div className="title">Every Scent Counts</div>
        <div className="detail-text">
          Why commit a full bottle when you can discover new different fragrance
          every month?
          <br />
          <br />
          At Qualis Nutri Co, we promote conscious-buying
          <br />
          suited to your different needs.
          <br />
          Buy Less, Choose Well, Make it Last.
        </div>
        <SelectButton>
          Save More Today
          <i
            className="fa-solid fa-arrow-right"
            style={{ marginLeft: "6px" }}
          ></i>
        </SelectButton>
      </div>
      <div className="img-box">
        <img
          src="https://www.scentsesandco.com.sg/static/media/product_explaination.e1c7ddee684db5c74eaa.webp"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    </Wrapper>
  );
};

export default EveryScentSection;
