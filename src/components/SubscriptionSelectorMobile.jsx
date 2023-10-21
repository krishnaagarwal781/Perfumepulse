import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  padding: 10px 24px;
  box-shadow: rgb(201, 201, 201) 0px 1px 6px -2px;
  background: rgb(255, 255, 255);
  z-index: 999;
  display: none;

  @media screen and (max-width: 840px) {
    display: block;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
  }
`;

const Select = styled.select`
  padding: 12px 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(217, 217, 217);
  transition: all 0.3s ease;

  &:hover {
    border-color: #403c3c;
  }

  &:focus {
    border-color: #403c3c;
    box-shadow: 0 0 0 2px rgba(51, 50, 50, 0.2);
    outline: 0;
  }
`;

const SubscriptionSelectorMobile = ({
  subscriptionMonth,
  setSubscriptionMonth,
}) => {
  const handleSubcription = (e) => {
    setSubscriptionMonth(e.target.value);
  };

  return (
    <Wrapper>
      <h4 className="title mb-3">Fragrance Subscription</h4>
      <Select value={subscriptionMonth} onChange={(e) => handleSubcription(e)}>
        <option value={1}>1 Perfume Every Month S$ 19.90</option>
        <option value={2}>2 Perfumes Every Month S$ 38.60</option>
        <option value={3}>3 Perfumes Every Month S$ 54.90</option>
        <option value={4}>4 Perfumes Every Month S$ 72.00</option>
      </Select>
    </Wrapper>
  );
};

export default SubscriptionSelectorMobile;
