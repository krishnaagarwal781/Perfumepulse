import React, { useContext, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Modal from "./Modal";
import { ProductContext } from "../context/ProductContext";

const Wrapper = styled.div`
  position: relative;
  border-radius: 5px;
  padding: 16px;
  border: 1px solid rgb(217, 217, 217);
  width: 100%;

  .extra-price {
    background-color: black;
    color: rgb(226, 198, 108);
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 2px;
    height: 22px;
    padding: 0 8px;
    position: absolute;
    top: 8px;
    right: -5px;
  }

  .product-title {
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
    margin-top: 5px;
    width: 100%;
    height: 4.2rem;
    overflow: hidden;
  }

  .image {
    width: 100%;
    height: 120px;
    object-fit: contain;
  }

  .button-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 15px;

    .count {
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;

const DetailButton = styled.button`
  margin-top: 15px;
  padding: 8px 0px;
  width: 100%;
  background-color: #4a4a4a;
  font-size: 14px;
  color: white;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: all 0.3s;

  &:hover {
    background-color: #f5a623;
    color: #383636;
  }
`;

const Button = styled.button`
  border: 1px solid rgb(217, 217, 217);
  background-color: white;
  border-radius: 5px;
  padding: 8px 10px;
  transition: all 0.3s;
  line-height: 0;
  font-size: 1.6rem;

  &:hover {
    border-color: black;
  }
`;

const ProductItem = ({
  product,
  searchKeyword,
  removedProduct,
  setRemovedProduct,
}) => {
  const productCardRef = useRef();
  const [count, setCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { cartProducts, setCartProducts, subscriptionMonth } =
    useContext(ProductContext);

  useEffect(() => {
    // Set Count value on product page for each product in cart
    let countInCart = 0;
    cartProducts.forEach((item) => {
      if (item.id === product.id) {
        countInCart++;
      }
    });

    setCount(countInCart);
  }, [cartProducts]);

  useEffect(() => {
    if (count === 0) {
      const whiteColor = "#fff";
      productCardRef.current.style.backgroundColor = whiteColor;
    }
  }, [count]);

  const handleMinusClick = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);

      const indexToRemove = cartProducts.findIndex(
        (cartItem) => cartItem.id === product.id
      );

      setCartProducts((prevCart) => {
        return prevCart.filter((item, index) => index !== indexToRemove);
      });
    }
  };

  const handlePlusClick = () => {
    if (cartProducts.length < subscriptionMonth) {
      setCount((prevCount) => prevCount + 1);

      // Change Selected Card Background Color
      const selectedCardColor = "#FDEFD8";
      productCardRef.current.style.backgroundColor = selectedCardColor;

      setCartProducts((prevCart) => {
        return [...prevCart, product];
      });
    }
  };

  const isProductSelected = () => {
    return cartProducts.some((cartItem) => cartItem.id === product.id);
  };

  const handleDetailClick = () => {
    setShowModal(true);
    setSelectedProduct(product);
  };

  return (
    <>
      <Wrapper
        ref={productCardRef}
        style={{
          // display: product?.title
          //   ?.toLowerCase()
          //   .startsWith(searchKeyword.toLowerCase())
          //   ? "block"
          //   : "none",
          backgroundColor: isProductSelected() ? "#FDEFD8" : "#fff",
        }}
      >
        {product.extra_price !== 0 && (
          <div className="extra-price">{`${
            product.extra_price > 0 ? "+" : "-"
          } ฿ ${Math.abs(product.extra_price)}.00`}</div>
        )}
        <div className="header">
          <img className="image" src={product.image} alt={product.title} />
          <div className="product-title">{product.title}</div>
        </div>
        <DetailButton className="detail-button" onClick={handleDetailClick}>
          Details
        </DetailButton>
        <div className="button-group">
          <Button onClick={handleMinusClick}>
            <i className="fa-solid fa-minus"></i>
          </Button>
          <span className="count">{count}</span>
          <Button onClick={handlePlusClick}>
            <i className="fa-solid fa-plus"></i>
          </Button>
        </div>
      </Wrapper>
      <Modal
        selectedProduct={selectedProduct}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default ProductItem;
