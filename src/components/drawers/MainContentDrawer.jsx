import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ProductContext } from "../../context/ProductContext";
import Dropdown from "../Dropdown";
import FilterButtons from "../subscribe/FilterButtons";
import Products from "../Products";
import Pagination from "../Pagination";
import FilterDrawer from "../FilterDrawer";

const DrawerBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  width: 100%;
  height: 100%;
  z-index: 12;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  @media screen and (max-width: 820px) {
    transform: translateX(0%);
  }
`;

const SelectFragranceTitle = styled.div`
  padding: 10px 24px;
  /* height: 8vh; */
  width: 100%;
  border-bottom: unset;
  box-shadow: rgb(201, 201, 201) 0px 1px 6px -2px;
  background: rgb(255, 255, 255);
  font-family: MontserratBold;

  .title {
    font-size: 16px;
    font-weight: bold;
  }

  .sub-title {
    font-size: 14px;
    font-weight: 400;
  }
`;

const Content = styled.div`
  padding: 20px;
  width: 100%;
`;

const ContentWrapper = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 8vh);
  width: 100%;
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

const ConfirmButton = styled.div`
  /* position: sticky;
  bottom: 0;
  left: 0;
  right: 0; */
  padding: 15px 0;
  border: none;
  width: 100%;
  color: #fff;
  background-color: #f5a623;
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #4a4a4a;
    color: #fff;
  }
`;

const MainContentDrawer = ({
  showProductCart,
  setShowProductCart,
  productDrawerRef,
}) => {
  const [removedProduct, setRemovedProduct] = useState();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);
  const {
    subscriptionMonth,
    products,
    cartProducts,
    setFilteredData,
    displayData,
    footerRef1,
    footerRef2,
  } = useContext(ProductContext);

  const handleConfirmClick = () => {
    if (productDrawerRef.current) {
      productDrawerRef.current.style.transform = "translateX(100%)";
    }

    // Hide Footer in Mobile to hide back screen scroll of drawer
    if (footerRef1.current && footerRef2.current) {
      footerRef1.current.style.display = "block";
      footerRef2.current.style.display = "block";
    }
  };

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
      <DrawerBox ref={productDrawerRef}>
        <SelectFragranceTitle>
          <div className="title">Select Fragrances</div>
          <span className="sub-title">{`(${
            subscriptionMonth - cartProducts.length
          } selection remaining)`}</span>
        </SelectFragranceTitle>
        <ContentWrapper>
          <Content>
            <Dropdown />

            {/* Search Field & Filter */}
            <SearchField className="search-field">
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

            {/* Products */}
            <Products
              displayData={displayData}
              searchKeyword={searchKeyword}
              subscriptionMonth={subscriptionMonth}
              removedProduct={removedProduct}
              setRemovedProduct={setRemovedProduct}
            />

            {/* Pagination Buttons */}
            <Pagination />
          </Content>
          <ConfirmButton onClick={() => handleConfirmClick()}>
            CONFIRM SELECTION
          </ConfirmButton>
        </ContentWrapper>
      </DrawerBox>
      {/* Filter Drawer */}
      <FilterDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </>
  );
};

export default MainContentDrawer;
