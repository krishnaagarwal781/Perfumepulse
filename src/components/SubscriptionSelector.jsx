import React, { useContext } from "react";
import { styled } from "styled-components";
import { ProductContext } from "../context/ProductContext";
import Dropdown from "./Dropdown";

const Wrapper = styled.div`
  padding: 30px;

  .title {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

const Select = styled.select`
  font-size: 1.6rem;
  padding: 12px 10px;
  border-radius: 5px;
  border: 1px solid rgb(217, 217, 217);
  transition: all 0.3s ease;
  background-color: #fff;

  &:hover {
    border-color: #403c3c;
  }

  &:focus {
    border-color: #403c3c;
    box-shadow: 0 0 0 2px rgba(51, 50, 50, 0.2);
    outline: 0;
  }
`;

const SubscriptionSelector = () => {
  const { subscriptionMonth, setSubscriptionMonth } =
    useContext(ProductContext);

  const handleSubcription = (e) => {
    setSubscriptionMonth(e.target.value);
  };

  return (
    <Wrapper>
      <h4 className="title mb-3">Fragrance Subscription</h4>
      <Dropdown />
    </Wrapper>
  );
};

export default SubscriptionSelector;
