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
      font-size: 1.5rem;
    }

    .text {
      font-size: 1.3rem;
    }
  }
`;

const Image = styled.div`
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StartNowButton = styled.button`
  padding: 17px 20px;
  color: white;
  background-color: #4a4a4a;
  font-size: 1.4rem;
  margin-bottom: 10px;
  border: none;
  outline: none;

  &:hover {
    background: #f5a623;
    color: #383636;
  }
`;

const SmellDifferent = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div
        style={{ textAlign: "center", marginBottom: "15px", padding: "15px" }}
      >
        <Title>You Will Smell Differently Great Every Month</Title>
        <SubTitle>We enrich your self-care routine</SubTitle>
      </div>
      <Content>
        <WorkCard>
          <Image>
            <div style={{ height: "130px", margin: "auto" }}>
              <img
                src="https://i.postimg.cc/Xq1VddML/image.png"
                alt=""
                height="130"
              />
            </div>
          </Image>
          <div className="title">Free Nationwide Delivery</div>
          <div className="text">
            Free delivery to your doorstep in Thailand nationwide
          </div>
        </WorkCard>
        <WorkCard>
          <Image>
            <div style={{ height: "130PX", margin: "auto" }}>
              <img
                src="https://i.postimg.cc/zfYqCqQs/image.png"
                alt=""
                height="127"
              />
            </div>
          </Image>
          <div className="title">No Strings Attached</div>
          <div className="text">
            For &#3647; 555, you can indulge in different high-end fragrances
            every month. Why commit the whole bottle when you can
            try it out first?
          </div>
        </WorkCard>
        <WorkCard>
          <Image>
            <div style={{ height: "130PX", margin: "auto" }}>
              <img
                src="https://i.postimg.cc/zB05YKfN/image.png"
                alt=""
                height="130"
              />
            </div>
          </Image>
          <div className="title">Affordable Luxury</div>
          <div className="text">
            For &#3647; 555, you can indulge in different high-end fragrances
            each and every month. Why commit the whole bottle when you can try
            it out first?
          </div>
        </WorkCard>
      </Content>
      <div style={{ textAlign: "center", padding: "15px" }}>
        <div style={{ fontSize: "1.5rem", marginBottom: "5px" }}>
          Ready to smell differently great every month?
        </div>
        <StartNowButton onClick={() => navigate("subscribe")}>
          START NOW FOR JUST &#3647; 555
        </StartNowButton>
      </div>
    </Wrapper>
  );
};

export default SmellDifferent;
