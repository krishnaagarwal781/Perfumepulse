import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 30px 130px;

  .title {
    font-size: 3.2rem;
    font-weight: 600;
    padding: 15px;
    margin-bottom: 15px;
    text-align: center;
  }

  @media screen and (max-width: 820px) {
    padding: 20px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeatureCard = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 820px) {
    padding: 10px;

    .img-box {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }

  .text {
    font-size: 1.5rem;
    text-align: center;
  }

  .img-box {
    width: 120px;
    height: 40px;
    margin-top: 20px;

    img {
      height: 40px;
      object-fit: contain;
    }
  }
`;

const FeaturedOn = () => {
  return (
    <Wrapper>
      <div className="title">As Featured On</div>
      <Content>
        <FeatureCard className="col">
          <div className="text">
            "It's like dating{" "}
            <span style={{ fontWeight: "bold" }}>without commitment.</span>"
          </div>
          <div className="img-box">
            <img
              src="https://www.scentsesandco.com.sg/static/media/vulcan.7a02cdbd2c0a19a9e2a4.webp"
              alt=""
            />
          </div>
        </FeatureCard>
        <FeatureCard className="col">
          <div className="text">
            "Think of this{" "}
            <span style={{ fontWeight: "bold" }}>like dating,</span> but with
            perfumes!"
          </div>
          <div className="img-box">
            <img
              src="https://www.scentsesandco.com.sg/static/media/firstclasse.c71cd335c4aedefff46c.webp"
              alt=""
            />
          </div>
        </FeatureCard>
        <FeatureCard className="col">
          <div className="text">
            "Truly making designer perfume{" "}
            <span style={{ fontWeight: "bold" }}>more accessible.</span>"
          </div>
          <div className="img-box">
            <img
              src="https://www.scentsesandco.com.sg/static/media/theedgemalaysia.3ce1c7f1e75dd7c79bed.webp"
              alt=""
            />
          </div>
        </FeatureCard>
        <FeatureCard className="col">
          <div className="text">A Fulfilling Scent Discovery Journey</div>
          <div className="img-box">
            <img
              src="https://www.scentsesandco.com.sg/static/media/theasianwoman.7fc23f9c4b157cb9d96b.webp"
              alt=""
            />
          </div>
        </FeatureCard>
      </Content>
    </Wrapper>
  );
};

export default FeaturedOn;
