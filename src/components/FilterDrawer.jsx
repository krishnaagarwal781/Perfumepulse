import React from "react";
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

  @media screen and (max-width: 820px) {
    z-index: 21;
  }
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

  @media screen and (max-width: 820px) {
    z-index: 22;
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;

  .text {
    font-size: 1.8rem;
    font-weight: 700;
  }

  i {
    font-size: 2rem;
    cursor: pointer;
    margin-right: 14px;
  }
`;

const MenuItem = styled.div`
  padding: 15px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f0f0f0;
  cursor: pointer;

  .text {
    font-size: 1.6rem;
    font-weight: 700;
    color: black;
  }
`;

const DrawerMenu = styled.div``;

const DrawerFooter = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;

  .drawer-btn {
    padding: 15px 0px;
    width: 50%;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    color: #000;
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
  }

  .dark-btn {
    background-color: #4a4a4a;
    color: white;
    transition: all 0.3s;

    &:hover {
      background-color: #f5a623;
      color: #383636;
    }
  }
`;

const FilterDrawer = ({ showDrawer, setShowDrawer }) => {
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
          <div className="text">Filters</div>
        </DrawerHeader>
        <DrawerMenu>
          <MenuItem>
            <div className="text">Preference</div>
            <i className="fa-solid fa-chevron-right"></i>
          </MenuItem>
          <MenuItem>
            <div className="text">Product Tier</div>
            <i className="fa-solid fa-chevron-right"></i>
          </MenuItem>
          <MenuItem>
            <div className="text">Personality</div>
            <i className="fa-solid fa-chevron-right"></i>
          </MenuItem>
        </DrawerMenu>
        <DrawerFooter>
          <div className="drawer-btn">CLEAR ALL</div>
          <div className="drawer-btn dark-btn">Filter</div>
        </DrawerFooter>
      </DrawerBox>
    </>
  );
};

export default FilterDrawer;
