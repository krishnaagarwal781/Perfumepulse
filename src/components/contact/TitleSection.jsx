import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url("https://www.scentsesandco.com.sg/static/media/contact_us.b1690efb4cefcbb48494.webp");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.8;
  padding: 50px 0;
  font-size: 1.4rem;
  text-align: center;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const TitleSection = () => {
  return (
    <Wrapper>
      <Title>Get In Touch</Title>
      <p>Let us know how we can help</p>
    </Wrapper>
  );
};

export default TitleSection;
