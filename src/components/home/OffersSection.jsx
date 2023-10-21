import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 20px 100px;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 30px 50px;
  }
`;

const OfferCard = styled.div`
  display: flex;
  align-items: center;
  color: #665743;
  padding: 0 25px;

  i {
    font-size: 3rem;
    margin-right: 15px;
  }

  @media screen and (max-width: 820px) {
    margin-bottom: 10px;
  }
`;

const OfferTitle = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const OfferText = styled.div`
  font-size: 1.2rem;
`;

const OffersSection = () => {
  return (
    <Wrapper>
      <div className="col">
        <OfferCard>
          <i className="fa-solid fa-lock"></i>
          <div className="text">
            <OfferTitle>100% Authentic Guaranteed</OfferTitle>
            <OfferText>
              <div>
                Only Real & Authentic Perfumes.
                <br />
                Promised 100% Authenticity
              </div>
            </OfferText>
          </div>
        </OfferCard>
      </div>
      <div className="col">
        <OfferCard>
          <i className="fa-solid fa-truck"></i>
          <div className="text">
            <OfferTitle>Free Nationwide Delivery</OfferTitle>
            <OfferText>
              <div>
                Free monthly shipping for all
                <br />
                deliveries in Thailand
              </div>
            </OfferText>
          </div>
        </OfferCard>
      </div>
      <div className="col">
        <OfferCard>
          <i className="fa-solid fa-ban"></i>
          <div className="text">
            <OfferTitle>Pause, Skip, Cancel Anytime</OfferTitle>
            <OfferText>
              <div>
                No-Commitment Policy: Cancel Anytime. No cancellation fee, no
                contract
              </div>
            </OfferText>
          </div>
        </OfferCard>
      </div>
      <div className="col">
        <OfferCard>
          <i className="fa-solid fa-star"></i>
          <div className="text">
            <OfferTitle>4.9/5 Stars Google Rating</OfferTitle>
            <OfferText>
              <div>
                300+ Verified Reviews on our official website, Facebook, and
                Google from our Subscribers
              </div>
            </OfferText>
          </div>
        </OfferCard>
      </div>
    </Wrapper>
  );
};

export default OffersSection;
