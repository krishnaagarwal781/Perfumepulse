import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-image: url("https://www.scentsesandco.com.sg/static/media/accessories_bg.907757faf82e0542f99f.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 100%;
  padding: 140px 0px;
`;
const Title = styled.section`
  text-align: center;
  font-size: 3.2rem;
  padding-bottom: 24px;
  font-weight: 600;
`;
const Text = styled.section`
  text-align: center;
  font-size: 1.6rem;
  padding-bottom: 48px;
`;

const HeroSection = () => {
  return (
    <Wrapper>
      <Title>Shop</Title>
      <Text>
        Keeping Your Scents of the
        <br />
        Month Sleek & Protected Wherever You Go
      </Text>
      <div
        style={{ fontSize: "1.6rem", fontWeight: "bold", textAlign: "center" }}
      >
        [Disclaimer]
      </div>
      <Text style={{ paddingBottom: "12px" }}>
        Travel Cases are exclusively available for Subscribers ONLY.
      </Text>
    </Wrapper>
  );
};

export default HeroSection;
