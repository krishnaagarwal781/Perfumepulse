import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  padding: 70px 130px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  background-color: #fff;

  .img-box {
    padding: 20px;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: start;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .small-title {
    font-size: 1.6rem;
    font-weight: bold;
    color: rgb(74, 74, 74);
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
    padding: 30px 20px;
    grid-template-columns: 1fr;
    gap: 20px;

    .img-box {
      padding: 10px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .small-title {
      font-size: 1.6rem;
      color: rgb(74, 74, 74);
      text-align: center;
    }

    .title {
      font-size: 2.6rem;
      text-align: center;
      font-weight: 600;
    }

    .detail-text {
      margin: 25px 0 20px;
      font-size: 1.7rem;
      text-align: center;
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

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="img-box">
        <img
          src="https://i.postimg.cc/GpTs23y6/image.png"
          alt=""
        />
      </div>
      <div className="text">
        <div className="small-title">FEATURED LINE-UP</div>
        <div className="title">
          We pride ourselves in providing only genuine and authentic perfumes.
        </div>
        <div className="detail-text">
          We are dedicated to obtaining genuine fragrances through legitimate
          and/or authorized methods.
          <br />
          <br />
          To ensure you receive the same composition as the original perfumes,
          we independently repackage and rebottle each fragrance while
          maintaining the highest standards and tight quality control.
          <br />
          <br />
          The option is totally yours; more than 300 different designer scents
          are available.
        </div>
        <SelectButton onClick={() => navigate("subscribe")}>
          Select Yours Now
          <i
            className="fa-solid fa-arrow-right"
            style={{ marginLeft: "6px" }}
          ></i>
        </SelectButton>
      </div>
    </Wrapper>
  );
};

export default FeaturedSection;
