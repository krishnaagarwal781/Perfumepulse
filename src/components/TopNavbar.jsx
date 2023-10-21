import React, { useState } from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import MenuDrawer from "./drawers/MenuDrawer";
import CartDrawer from "./drawers/CartDrawer";

const Navbar = styled.nav`
  position: relative;
  width: 100%;
  height: 60px;
  box-shadow: 0 0 6px 0px #787878;
  padding: 6px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo img {
    width: 240px;
  }

  .menu {
    display: flex;
    gap: 30px;
  }

  .icons {
    display: flex;
    gap: 25px;
    justify-content: center;
    align-content: center;

    i {
      font-size: 18px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 820px) {
    padding: 6px 20px;

    .logo img {
      width: 170px;
    }

    .menu {
      display: none;
    }
  }
`;

const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: #000000d9;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  padding: 10px 0;
  transition: all 0.3s;

  &:hover {
    border-color: black;
  }

  &.active {
    border-color: black;
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 820px) {
    display: block;
  }
`;

const TopNavbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showCartDrawer, setShowCartDrawer] = useState(false);

  return (
    <>
      <Navbar>
        <div className="logo">
          <img src="https://i.postimg.cc/jSjFByrt/perfume-pulse.png" />
        </div>
        <div className="menu">
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/how-it-works">How it Works</NavbarLink>
          <NavbarLink to="/reviews">Reviews</NavbarLink>
          <NavbarLink to="/subscribe">Subscribe Today</NavbarLink>
          <NavbarLink to="/shop">Shop</NavbarLink>
        </div>
        <div className="icons">
          <NavLink style={{ color: "black" }} to="/account/profile">
            <i className="fa-regular fa-user"></i>
          </NavLink>
          <div onClick={() => setShowCartDrawer(true)}>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
          <MenuIcon onClick={() => setShowDrawer(true)}>
            <i className="fa-solid fa-bars"></i>
          </MenuIcon>
        </div>
      </Navbar>
      <MenuDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <CartDrawer
        showCartDrawer={showCartDrawer}
        setShowCartDrawer={setShowCartDrawer}
      />
    </>
  );
};

export default TopNavbar;
