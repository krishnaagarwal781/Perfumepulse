import React, { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../../context/ProductContext";

const Wrapper = styled.select`
  font-size: 1.4rem;
  padding: 12px 10px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
  margin-bottom: 15px;
  display: none;

  @media screen and (max-width: 840px) {
    display: block;
  }

  &:hover {
    border-color: #403c3c;
  }

  &:focus {
    border-color: #403c3c;
    box-shadow: 0 0 0 2px rgba(51, 50, 50, 0.2);
    outline: 0;
  }
`;

const Select = () => {
  const { subscriptionMonth, setSubscriptionMonth } =
    useContext(ProductContext);

  return (
    <Wrapper
      value={subscriptionMonth}
      onChange={(e) => setSubscriptionMonth(e.target.value)}
    >
      <option value={1}>1 Perfume Every Month S$ 19.90</option>
      <option value={2}>2 Perfumes Every Month S$ 38.60</option>
      <option value={3}>3 Perfumes Every Month S$ 54.90</option>
      <option value={4}>4 Perfumes Every Month S$ 72.00</option>
    </Wrapper>
  );
};

export default Select;
