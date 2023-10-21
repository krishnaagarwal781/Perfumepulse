import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 30px 0;

  @media screen and (max-width: 820px) {
    padding: 10px 0;
  }
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  i {
    font-size: 2.2rem;
    margin-bottom: 10px;
  }

  div {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 820px) {
    align-items: center;
  }
`;
const Title = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

const ContactInfo = () => {
  return (
    <Wrapper>
      <GridBox>
        <InfoCard>
          <i class="fa-solid fa-building"></i>
          <Title>Company Info</Title>
          <div>SCENTSES ANDCO PTE. LTD.</div>
          <div>(202130935K)</div>
        </InfoCard>
        <InfoCard>
          <i class="fa-solid fa-envelope"></i>
          <Title>For Customers</Title>
          <div>Email: info@scentsesandco.com.sg</div>
          <div>Hotline: +6011-3587 2368</div>
        </InfoCard>
        <InfoCard>
          <i class="fa-solid fa-location-dot"></i>
          <Title>Location</Title>
          <div>10 Anson Road</div>
          <div>#12-08 International Plaza </div>
          <div>Singapore (079903)</div>
        </InfoCard>
        <InfoCard>
          <i class="fa-regular fa-clock"></i>
          <Title>Operation Hours</Title>
          <div>Monday - Friday: 9am - 6pm</div>
          <div>Saturday: 9am - 12pm</div>
          <div>Sunday: Closed</div>
          <div>Public/ State Holiday: Closed</div>
        </InfoCard>
      </GridBox>
    </Wrapper>
  );
};

export default ContactInfo;
