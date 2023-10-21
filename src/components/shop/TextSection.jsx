import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: rgb(250, 246, 242);
  padding: 35px 15px 15px;
`;

const BoldText = styled.section`
  font-size: 2.7rem;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;

const NormalText = styled.section`
  text-align: center;
  font-size: 1.6rem;
  padding-bottom: 12px;
`;

const TextSection = () => {
  return (
    <Wrapper>
      <BoldText>
        Looking to get an extra case to be delivered with your next perfume at
        no additional shipping charge?
      </BoldText>
      <NormalText>
        Simply select "Shipped with my Upcoming Order" as your delivery method
        and
        <br />
        our team will automatically pack your travel case and your next perfume
        together in the same parcel.
      </NormalText>
    </Wrapper>
  );
};

export default TextSection;
