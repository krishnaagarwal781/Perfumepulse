import React, { useContext, useRef, useState } from "react";
import { styled } from "styled-components";
import CheckoutSidebar from "./CheckoutSidebar";
import FilterDrawer from "./FilterDrawer";
import Pagination from "./Pagination";
import Products from "./Products";
import { ProductContext } from "../context/ProductContext";
import FilterButtons from "./subscribe/FilterButtons";
import MainContentDrawer from "./drawers/MainContentDrawer";

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 3fr 1fr;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.div`
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;

  .select-fragrance-title {
    padding: 10px 24px;
    border-bottom: unset;
    box-shadow: rgb(201, 201, 201) 0px 1px 6px -2px;
    background: rgb(255, 255, 255);
    z-index: 999;
  }

  .scroll-area {
    position: relative;
    padding: 25px 30px 15px 30px;
  }

  @media screen and (max-width: 820px) {
    display: none;

    .scroll-area {
      padding: 20px 20px 0 20px;
    }
  }
`;

const SearchField = styled.div`
  display: flex;
  gap: 15%;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 20px;

  input {
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

  @media screen and (min-width: 820px) {
    display: none;
  }

  .title {
    font-size: 16px;
    font-weight: bold;
  }

  .sub-title {
    font-size: 14px;
    font-weight: 400;
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

const MainContent = () => {
  const [count, setCount] = useState(0);
  const [removedProduct, setRemovedProduct] = useState();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const [showProductCart, setShowProductCart] = useState(false);
  const productDrawerRef = useRef(null);

  const {
    subscriptionMonth,
    products,
    cartProducts,
    setFilteredData,
    displayData,
  } = useContext(ProductContext);

  const handleFilterBtnClick = () => {
    setShowDrawer(true);
  };

  const handleSearchProduct = (e) => {
    setSearchKeyword(e.target.value);

    if (e.target.value.length > 0) {
      setFilteredData(
        products.filter((product) =>
          product.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setFilteredData(products);
    }
  };

  return (
    <>
      <Wrapper>
        <Main className="main">
          <SelectFragranceTitle>
            <div className="title">Select Fragrances</div>
            <span className="sub-title">{`(${
              subscriptionMonth - cartProducts.length
            } selection remaining)`}</span>
          </SelectFragranceTitle>

          {/* Products Scroll Area */}
          <div className="scroll-area">
            {/* Search Field & Filter */}
            <SearchField>
              <input
                value={searchKeyword}
                onChange={(e) => handleSearchProduct(e)}
                type="text"
                placeholder="Search Fragrance"
              />
              <FilterButton onClick={handleFilterBtnClick}>
                <i className="fa-solid fa-filter me-2 text-dark"></i>
                <span>Filters</span>
              </FilterButton>
            </SearchField>

            {/* Filter Buttons  */}
            <FilterButtons />

            <Products
              displayData={displayData}
              searchKeyword={searchKeyword}
              subscriptionMonth={subscriptionMonth}
              removedProduct={removedProduct}
              setRemovedProduct={setRemovedProduct}
            />

            {/* Pagination Buttons */}
            <Pagination />
          </div>
        </Main>

        {/* Checkout Sidebar Drawer */}
        <MainContentDrawer
          showProductCart={showProductCart}
          setShowProductCart={setShowProductCart}
          productDrawerRef={productDrawerRef}
        />

        {/* Filter Drawer */}
        <FilterDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />

        {/* Right Sidebar */}
        <CheckoutSidebar
          removedProduct={removedProduct}
          setRemovedProduct={setRemovedProduct}
          showProductCart={showProductCart}
          setShowProductCart={setShowProductCart}
          productDrawerRef={productDrawerRef}
        />
      </Wrapper>
    </>
  );
};

export default MainContent;
