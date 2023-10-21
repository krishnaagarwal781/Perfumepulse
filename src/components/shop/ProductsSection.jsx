import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { travelCaseItems } from "./data.js";
import CustomPagination from "./CustomPagination.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.section`
  margin: 0 80px;

  @media screen and (max-width: 820px) {
    margin: 0;
  }
`;
const Container = styled.div`
  height: 100%;
  padding: 50px 30px;
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(4, minmax(0px, 1fr));
  gap: 20px;

  @media screen and (max-width: 820px) {
    padding: 15px 30px;
    /* grid-template-columns: repeat(2, minmax(0px, 1fr)); */
    grid-template-columns: 1fr 1fr;
  }
`;

const ProductItem = styled(Link)`
  text-decoration: none;
  color: black;
  background: rgb(255, 255, 255);
  padding: 16px;
  border-radius: 5px;
  box-shadow: rgb(217, 217, 217) 0px 0px 0px 1px;
  cursor: pointer;

  .img-box {
    height: 275px;
  }

  .img-box img {
    width: 100%;
    height: 275px;
    object-fit: contain;
  }

  @media screen and (max-width: 820px) {
    .img-box {
      height: 155px;
    }

    .img-box img {
      width: 100%;
      height: 155px;
      object-fit: contain;
    }
  }
`;

const Title = styled.div`
  padding-top: 15px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
`;

const Price = styled.div`
  padding-top: 10px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
`;

const ProductsSection = () => {
  const [shopProducts, setShopProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://subscriptionback.qualisnutri.co/api/shop/products")
      .then((res) => {
        setShopProducts(res.data.shop_products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Wrapper>
      <Container>
        {shopProducts.map((product, index) => (
          <ProductItem key={index} to={`/product/${product.id}`}>
            <div className="img-box">
              <img src={product.image} alt="Product Image" />
            </div>
            <Title>{product.title}</Title>
            <Price>&#3647; {`${product.price_travel}`}</Price>
          </ProductItem>
        ))}
      </Container>
      <CustomPagination perPage={8} totalRecords={8} />
    </Wrapper>
  );
};

export default ProductsSection;
