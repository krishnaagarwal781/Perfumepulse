import React, { useContext } from "react";
import { styled } from "styled-components";
import SubscriptionSelector from "./SubscriptionSelector";
import CartProducts from "./CartProducts";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import Dropdown from "./Dropdown";

const Wrapper = styled.div`
  display: block;

  @media screen and (max-width: 840px) {
    /* width: 100vh;
    height: 100vh; */
  }
`;

const RightSidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 820px) {
    height: calc(100vh - 60px);
  }
`;

const Total = styled.div`
  font-weight: bold;
  padding: 10px;

  .text {
    font-size: 18px;
  }

  .price {
    font-size: 20px;
  }
`;

const CheckoutButton = styled(Link)`
  text-decoration: none;
  padding: 15px 0;
  color: #00000040;
  background-color: #f5f5f5;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  border: 1px solid rgb(217, 217, 217);

  &:hover {
    background-color: #f5a623;
    color: black;
  }
`;

const CheckoutSidebar = ({
  removedProduct,
  setRemovedProduct,
  showProductCart,
  setShowProductCart,
  productDrawerRef,
}) => {
  const navigateTo = useNavigate();
  const {
    subscriptionMonth,
    setSubscriptionMonth,
    cartProducts,
    setCartProducts,
    calculateTotalPrice,
  } = useContext(ProductContext);

  const handleCheckoutClick = async (e) => {
    try {
      const response = await axios.get(
        "https://demotest.30minuteadvice.com/api/authcheck"
      );
      if (response.status === 201) {
        console.log(response.data);
        navigateTo(`/subscribe/checkout`);
      } else {
        console.log(response.data);
        navigateTo(`/login`);
      }
    } catch (error) {
      console.log(error.response);
      navigateTo(`/login`);
    }
  };

  return (
    <Wrapper>
      <RightSidebar>
        <SubscriptionSelector />
        {/* <Dropdown /> */}
        <CartProducts
          removedProduct={removedProduct}
          setRemovedProduct={setRemovedProduct}
          selectedProductCount={cartProducts.length}
          setShowProductCart={setShowProductCart}
          productDrawerRef={productDrawerRef}
        />
        <Total className="d-flex justify-content-between align-items-center border">
          <div className="text">Total</div>
          <div className="price">&#3647; {calculateTotalPrice()}</div>
        </Total>
        <CheckoutButton
          disabled={cartProducts.length < subscriptionMonth ? true : false}
          onClick={handleCheckoutClick}
          to="/subscribe/checkout"
          style={{
            backgroundColor:
              cartProducts.length < subscriptionMonth ? "#d9d9d9" : "#f5a623",
            color:
              cartProducts.length < subscriptionMonth ? "#00000040" : "black",
          }}
        >
          PROCEED TO CHECKOUT
        </CheckoutButton>
      </RightSidebar>
    </Wrapper>
  );
};

export default CheckoutSidebar;
