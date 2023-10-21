import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0px;
  background-color: #fbf6f3;
`;

const SectionTitle = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
  padding: 15px;

  @media screen and (max-width: 820px) {
    font-size: 2.6rem;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: wrap;
  padding: 10px 130px;
  margin-bottom: 20px;

  @media screen and (max-width: 820px) {
    padding: 20px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 83px;
  object-fit: contain;
`;

const CorporateSection = () => {
  return (
    <Wrapper>
      <SectionTitle>Our Corporate Partners</SectionTitle>
      <Content>
        <Box>
          <div style={{ height: "83px" }}>
            <Image
              src="https://i.postimg.cc/DzG8hjVT/image.png"
              alt=""
            />
          </div>
        </Box>
        <Box>
          <div style={{ height: "83px" }}>
            <Image
              src="https://i.postimg.cc/GtL2kb4L/image.png"
              alt=""
            />
          </div>
        </Box>
        <Box>
          <div style={{ height: "83px" }}>
            <Image
              src="https://i.postimg.cc/SRgKdH9W/image.png"
              alt=""
            />
          </div>
        </Box>
      </Content>
    </Wrapper>
  );
};

export default CorporateSection;
