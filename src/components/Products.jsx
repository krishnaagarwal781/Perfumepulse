import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import { ProductContext } from "../context/ProductContext";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
  width: 100%;
  gap: 20px;

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }
`;

const Products = ({ searchKeyword, removedProduct, setRemovedProduct }) => {
  const [loading, setLoading] = useState(false);
  const {
    cartProducts,
    setCartProducts,
    products,
    setProducts,
    filteredData,
    setFilteredData,
    displayData,
    setDisplayData,
    perPage,
    selectedCategories,
    setSelectedCategories,
    subscriptionMonth,
    currentPage,
  } = useContext(ProductContext);

  useEffect(() => {
    setLoading(true);
    fetch("https://subscriptionback.qualisnutri.co/api/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setDisplayData(json.slice(0, perPage));
        setFilteredData(json);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      setFilteredData(
        products.filter((product) =>
          selectedCategories.includes(product.person_for)
        )
      );
    } else {
      setFilteredData(products);
    }
  }, [selectedCategories]);

  useEffect(() => {
    setDisplayData(
      filteredData?.slice((currentPage - 1) * perPage, perPage * currentPage)
    );
  }, [currentPage, filteredData]);

  return (
    <Wrapper className="products mt-3 mb-5">
      {loading ? (
        <div className="loader"></div>
      ) : (
        displayData?.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            searchKeyword={searchKeyword}
            removedProduct={removedProduct}
            setRemovedProduct={setRemovedProduct}
          />
        ))
      )}
    </Wrapper>
  );
};

export default Products;
