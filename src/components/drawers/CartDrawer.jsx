import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Backdrop = styled.div`
  background-color: rgba(189, 189, 189, 0.9);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
`;

const DrawerBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  font-size: 1.6rem;
  line-height: 22px;
  width: 378px;
  height: 100%;
  z-index: 12;
  transition: transform 0.3s ease-in-out;
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;

  .logo {
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
  }

  i {
    font-size: 2rem;
    cursor: pointer;
    margin-right: 14px;
  }
`;

const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: #000000d9;
  font-size: 1.6rem;
  font-weight: 500;
  border-bottom: 1px solid rgb(217, 217, 217);
  padding: 12px 24px;
  transition: all 0.3s;

  &:hover {
    background-color: #ebebeb;
  }

  &.active {
    background-color: #ebebeb;
  }
`;

const DrawerMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartDrawer = ({ showCartDrawer, setShowCartDrawer }) => {
  return (
    <>
      <Backdrop
        style={{
          opacity: showCartDrawer ? "1" : "0",
          pointerEvents: showCartDrawer ? "all" : "none",
        }}
        onClick={() => setShowCartDrawer(false)}
      ></Backdrop>
      <DrawerBox
        style={{
          transform: showCartDrawer ? "translateX(0px)" : "translateX(378px)",
        }}
      >
        <DrawerHeader>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setShowCartDrawer(false)}
          ></i>
          <div className="logo">Cart</div>
        </DrawerHeader>
        <DrawerMenu>Cart Data Here</DrawerMenu>
      </DrawerBox>
    </>
  );
};

export default CartDrawer;
