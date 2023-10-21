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

const MenuDrawer = ({ showDrawer, setShowDrawer }) => {
  return (
    <>
      <Backdrop
        style={{
          opacity: showDrawer ? "1" : "0",
          pointerEvents: showDrawer ? "all" : "none",
        }}
        onClick={() => setShowDrawer(false)}
      ></Backdrop>
      <DrawerBox
        style={{
          transform: showDrawer ? "translateX(0px)" : "translateX(378px)",
        }}
      >
        <DrawerHeader>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setShowDrawer(false)}
          ></i>
          <div className="logo">Logo</div>
        </DrawerHeader>
        <DrawerMenu>
          <NavbarLink to="/" onClick={() => setShowDrawer(false)}>
            Home
          </NavbarLink>
          <NavbarLink to="/how-it-works" onClick={() => setShowDrawer(false)}>
            How it Works
          </NavbarLink>
          <NavbarLink to="/reviews" onClick={() => setShowDrawer(false)}>
            Reviews
          </NavbarLink>
          <NavbarLink to="/subscribe" onClick={() => setShowDrawer(false)}>
            Subscribe Today
          </NavbarLink>
          <NavbarLink to="/shop" onClick={() => setShowDrawer(false)}>
            Shop
          </NavbarLink>
        </DrawerMenu>
      </DrawerBox>
    </>
  );
};

export default MenuDrawer;
