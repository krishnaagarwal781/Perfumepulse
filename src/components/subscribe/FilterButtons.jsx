import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { ProductContext } from "../../context/ProductContext";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const FilterTag = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  border: 1px solid rgb(217, 217, 217);
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 7px 10px 7px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  i {
    font-size: 16px;
  }
`;

const FilterButtons = () => {
  const { selectedCategories, setSelectedCategories } =
    useContext(ProductContext);

  const handleFilterClick = (filter) => {
    if (selectedCategories.includes(filter)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== filter)
      );
    } else {
      setSelectedCategories([...selectedCategories, filter]);
    }
  };

  return (
    <Wrapper className="filter-buttons">
      <FilterTag
        className="filter-tag"
        onClick={() => handleFilterClick("For_Him")}
      >
        <div>For Him</div>
        {selectedCategories.includes("For_Him") ? (
          <i className="fa-solid fa-circle-check"></i>
        ) : (
          <i className="fa-regular fa-circle-check"></i>
        )}
      </FilterTag>
      <FilterTag
        className="filter-tag"
        onClick={() => handleFilterClick("For_Her")}
      >
        <div>For Her</div>
        {selectedCategories.includes("For_Her") ? (
          <i className="fa-solid fa-circle-check"></i>
        ) : (
          <i className="fa-regular fa-circle-check"></i>
        )}
      </FilterTag>
      <FilterTag
        className="filter-tag"
        onClick={() => handleFilterClick("Unisex")}
      >
        <div>Unisex</div>
        {selectedCategories.includes("Unisex") ? (
          <i className="fa-solid fa-circle-check"></i>
        ) : (
          <i className="fa-regular fa-circle-check"></i>
        )}
      </FilterTag>
    </Wrapper>
  );
};

export default FilterButtons;
