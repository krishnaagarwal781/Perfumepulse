import React, { useContext } from "react";
import { styled } from "styled-components";
import { ProductContext } from "../context/ProductContext";

const Wrapper = styled.div`
  padding: 0 30px 0;
  height: 100%;

  .selected-products {
    max-height: 230px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #8a8a8a;
      border-radius: 6px;
    }
  }
`;

const SelectionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .sub-title {
    font-size: 16px;
    font-size: 500;
    color: rgb(70, 70, 70);
  }

  .btn-add-items {
    font-size: 1.6rem;
    border-radius: 100px;
    padding: 8px 10px;
    font-weight: 700;
    background: #4a4a4a;
    border: none;
    outline: none;
    color: #fff;
    transition: all 0.3s;
    display: none;

    @media screen and (max-width: 820px) {
      display: block;
    }

    &:hover {
      background-color: #f5a623;
      color: #383636;
    }
  }
`;

const CartItem = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  position: relative;
  padding: 5px;
  border-bottom: 1px solid #d9d9d9;

  i {
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
  }

  .text {
    font-size: 1.4rem;
  }
`;

const CartProducts = ({
  removedProduct,
  setRemovedProduct,
  selectedProductCount,
  setShowProductCart,
  productDrawerRef,
}) => {
  const {
    cartProducts,
    setCartProducts,
    subscriptionMonth,
    footerRef1,
    footerRef2,
  } = useContext(ProductContext);

  const handleRemoveCartProduct = (indexToRemove) => {
    setCartProducts((prevCart) => {
      setRemovedProduct(
        prevCart.find((item, index) => index === indexToRemove)
      );
      return prevCart.filter((item, index) => {
        if (index !== indexToRemove) {
          return item;
        }
      });
    });
  };

  const handleAddItemClick = () => {
    if (productDrawerRef.current) {
      productDrawerRef.current.style.transform = "translateX(0%)";
    }

    if (footerRef1.current && footerRef2.current) {
      footerRef1.current.style.display = "none";
      footerRef2.current.style.display = "none";
    }
  };

  return (
    <Wrapper>
      <SelectionInfo>
        <div className="info-text">
          <h4 className="title">Selected Perfumes</h4>
          <p className="sub-title">{`${
            subscriptionMonth - cartProducts.length
          } selections remaining`}</p>
        </div>
        <button onClick={() => handleAddItemClick()} className="btn-add-items">
          Add Items
        </button>
      </SelectionInfo>
      <div className="selected-products">
        {cartProducts.map((product, index) => (
          <CartItem key={index} className="product">
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "70px",
                height: "60px",
                objectFit: "cover",
              }}
            />
            <p className="text">
              {product.title}
              <br />
              {product.extra_price !== null && `+ S$ ${product.extra_price}.00`}
            </p>
            <i
              className="fa-solid fa-xmark"
              onClick={() => handleRemoveCartProduct(index)}
            ></i>
          </CartItem>
        ))}
      </div>
    </Wrapper>
  );
};

export default CartProducts;
