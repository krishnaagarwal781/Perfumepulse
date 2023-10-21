import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(255, 253, 252, 0.77);
  background-image: url("https://www.scentsesandco.com.sg/static/media/home_bg_image2.142aa897304445bacd8c.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 50%;
  padding: 15px;
  text-align: center;

  .number {
    font-size: 5.5rem;
    padding: 5px;
    letter-spacing: 10px;
  }

  .subtitle {
    font-size: 2.3rem;
    padding: 5px;
    margin-bottom: 24px;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 600;

  @media screen and (max-width: 820px) {
    font-size: 2.4rem;
  }
`;

const TestimonialCard = styled.div`
  padding: 30px;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 20px;

  .img-box {
    width: 300px;
    height: 225px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .text {
    display: flex;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;
  }

  .stars {
    display: flex;
    align-items: center;
    gap: 2px;
    margin-bottom: 15px;

    i {
      font-size: 2.2rem;
      color: #f2a72c;
    }
  }

  .comment {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 15px;
    text-align: left;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;

    .img-box {
      width: 200px;
      height: 125px;
    }

    .text {
      align-items: center;
    }

    .comment {
      text-align: center;
    }
  }
`;

const ReadMoreButton = styled.button`
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

const ScentennialsSays = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>Hear what our Scentennials say</Title>
      <div className="number">11179</div>
      <div className="subtitle">Subscribers</div>
      <TestimonialCard>
        <div className="img-box">
          <img
            src="https://www.scentsesandco.com.sg/static/media/review_1.0a326a18394bb9622ada.webp"
            alt=""
          />
        </div>
        <div className="text">
          <div className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>

          <div className="comment">
            Wonderful experience with the perfumes and love this subscriptions.
            The pack size easy to carry around too, however would be better if
            the delivery can be faster. ❤️
          </div>

          <div style={{ fontSize: "1.4rem" }}>- Bryce Tan, Kuala Lumpur</div>
        </div>
      </TestimonialCard>
      <div style={{ textAlign: "center" }}>
        <ReadMoreButton onClick={() => navigate("subscribe")}>
          Read More Reviews
          <i
            className="fa-solid fa-arrow-right"
            style={{ marginLeft: "6px" }}
          ></i>
        </ReadMoreButton>
      </div>
    </Wrapper>
  );
};

export default ScentennialsSays;
