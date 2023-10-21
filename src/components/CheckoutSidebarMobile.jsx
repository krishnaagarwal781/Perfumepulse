import React from "react";
import styled from "styled-components";
import TopNavbar from "./TopNavbar";
import Products from "./Products";
import Select from "./subscribe/Select";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  @media screen and (max-width: 820px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    background-color: #fff;

    .search-field {
      display: flex;
      gap: 15%;
      justify-content: space-between;
      align-items: center;
      padding: 0 0 20px;
    }
  }
`;

const ScrollArea = styled.div``;

const Input = styled.input`
  padding: 11px 15px;
  font-size: 14px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  width: 100%;

  &:focus {
    border-color: #403c3c;
    box-shadow: 0 0 0 2px rgba(51, 50, 50, 0.2);
    outline: 0;
  }

  &:hover {
    border-color: #403c3c;
  }
`;

const SelectFragranceTitle = styled.div`
  padding: 10px 24px;
  border-bottom: unset;
  box-shadow: rgb(201, 201, 201) 0px 1px 6px -2px;
  background: rgb(255, 255, 255);
  font-family: MontserratBold;
  z-index: 10;
  position: sticky;
  top: 0;

  .title {
    font-size: 16px;
    font-weight: bold;
  }

  .sub-title {
    font-size: 14px;
    font-weight: 400;
  }
`;

const ConfirmButton = styled(Link)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 15px 0;
  border: none;
  width: 100%;
  color: #fff;
  background-color: #f5a623;
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #4a4a4a;
    color: #fff;
  }
`;

const FilterButton = styled.button`
  border: 1px solid rgb(217, 217, 217);
  background: rgb(255, 255, 255);
  padding: 0px 10px;
  color: rgb(0, 0, 0);
  border-radius: 5px;
  font-size: 1.6rem;
  height: 46px;
  display: flex;
  gap: 6px;
  align-items: center;
  cursor: pointer;
`;

const CheckoutSidebarMobile = ({
  searchKeyword,
  setSearchKeyword,
  handleFilterBtnClick,
  showCheckoutSidebar,
  setShowCheckoutSidebar,
  subscriptionMonth,
  setSubscriptionMonth,
}) => {
  return (
    <Wrapper>
      <SelectFragranceTitle>
        <div className="title">Select Fragrances</div>
        <span className="sub-title">(1 selection remaining)</span>
      </SelectFragranceTitle>

      <Select />

      <Products products={products} setProducts={products} />

      {/* Search Field & Filter */}
      <div className="search-field">
        <Input
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          type="text"
          placeholder="Search Fragrance"
        />
        <FilterButton onClick={handleFilterBtnClick}>
          <i className="fa-solid fa-filter me-2 text-dark"></i>
          <span>Filters</span>
        </FilterButton>
      </div>
      <ConfirmButton to="/subscribe/checkout">Confirm Selection</ConfirmButton>
    </Wrapper>
  );
};

export default CheckoutSidebarMobile;
