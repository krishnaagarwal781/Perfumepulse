import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 35px 120px;
  background: #fbf6f3;
  margin: 0 auto;

  @media screen and (max-width: 820px) {
    padding: 35px 20px;
  }
`;

const Title = styled.h3`
  font-size: 3.2rem;
  font-weight: bold;

  @media screen and (max-width: 820px) {
    font-size: 2.8rem;
    font-weight: 600;
  }
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: rgb(119, 119, 119);
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(1px, 1fr));

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const WorkCard = styled.div`
  padding: 15px;

  .title {
    font-size: 2rem;
    margin-top: 35px;
    margin-bottom: 17px;
    font-weight: bold;
    text-align: center;
  }

  .text {
    font-size: 1.5rem;
    text-align: center;
  }

  @media screen and (max-width: 820px) {
    .title {
      font-size: 1.8rem;
    }
  }
`;

const Image = styled.div`
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
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

const HowWorkSection = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div
        style={{ textAlign: "center", marginBottom: "15px", padding: "15px" }}
      >
        <Title>How It Works</Title>
        <SubTitle>
          Discover your own Fragrance Wardrobe without breaking the bank
        </SubTitle>
      </div>
      <Content>
        <WorkCard>
          <Image>
            <div style={{ width: "200px", height: "203px", margin: "auto" }}>
              <img
                src="https://i.postimg.cc/JzqpqqYR/image.png"
                alt=""
                width="200"
                height="203"
              />
            </div>
          </Image>
          <div className="title">1. CHOOSE A SCENT</div>
          <div className="text">
            Select your desired fragrance from our collections of{" "}
            <span style={{ fontWeight: "bold" }}>250+</span> authentic designer
            fragrances
          </div>
        </WorkCard>
        <WorkCard>
          <Image>
            <div style={{ width: "170px", height: "170px", margin: "auto" }}>
              <img
                src="https://i.postimg.cc/Kv7fGf2t/image.png"
                alt=""
                width="170"
                height="180"
              />
            </div>
          </Image>
          <div className="title">2. GET YOUR MONTHLY SUPPLY</div>
          <div className="text">
            Want to change your fragrance next month? or change the frequency of
            delivery? We've got you covered — Adjust your order and free
            cancellation anytime. Full flexibility.
          </div>
        </WorkCard>
        <WorkCard>
          <Image>
            <div style={{ width: "170px", height: "170px", margin: "auto" }}>
              <img
                src="https://i.postimg.cc/wvs5Sc2y/image.png"
                alt=""
                width="170"
                height="170"
              />
            </div>
          </Image>
          <div className="title">3. ADJUST YOUR SCENT-DULE</div>
          <div className="text">
            Select your desired fragrance from our collections of{" "}
            <span style={{ fontWeight: "bold" }}>250+</span> authentic designer
            fragrances
          </div>
        </WorkCard>
      </Content>
      <div style={{ textAlign: "center", padding: "15px" }}>
        <ReadMoreButton onClick={() => navigate("how-it-works")}>
          Read More
          <i
            className="fa-solid fa-arrow-right"
            style={{ marginLeft: "6px" }}
          ></i>
        </ReadMoreButton>
      </div>
    </Wrapper>
  );
};

export default HowWorkSection;
