import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ProductContext } from "../context/ProductContext";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
  outline: 0;
  position: relative;

  i {
    font-size: 1.4rem;
    color: #a3a3a3;
  }

  &:hover {
    border-color: #403c3c;
  }

  /* &:focus {
    border-color: #403c3c;
    box-shadow: 0 0 0 2px rgba(51, 50, 50, 0.2);
  } */
`;

const DropdownButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 10px;
  font-size: 1.4rem;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #403c3c;
  }

  border-color: ${(props) => (props.isOpen ? "#403c3c" : "none")};
  box-shadow: ${(props) =>
    props.isOpen ? "0 0 0 2px rgba(51, 50, 50, 0.2)" : "none"};
`;
const DropdownMenu = styled.div`
  font-size: 1.4rem;
  border-radius: 5px;
  background-color: #fff;
  padding: 5px 0;
  border: 1px solid #d9d9d9;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  z-index: 10;

  width: 100%;
  max-height: ${(props) => (props.isOpen ? "200px" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  pointer-events: ${(props) => (props.isOpen ? "all" : "none")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 55px;
`;
const MenuItem = styled.div`
  padding: 5px 10px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    /* background-color: #0079be; */
    background-color: #fafafa;
  }
`;

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuText, setMenuText] = useState("1 Perfume Every Month ฿ 555");
  const { subscriptionMonth, setSubscriptionMonth } =
    useContext(ProductContext);

  const options = [
    {
      text: "1 Perfume Every Month ฿ 555",
      price: 555,
    },
    {
      text: "2 Perfumes Every Month ฿ 1039",
      price: 555,
    },
    {
      text: "3 Perfumes Every Month ฿ 1479",
      price: 555,
    },
    {
      text: "4 Perfumes Every Month ฿ 1939",
      price: 555,
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <DropdownButton isOpen={isOpen} onClick={toggleDropdown}>
        <div>{menuText}</div>
        <i className="fa-solid fa-angle-down"></i>
      </DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        {options.map((opt, index) => (
          <MenuItem
            key={index}
            value={index + 1}
            style={{
              backgroundColor: index + 1 === subscriptionMonth && "#60aedb",
            }}
            onClick={(e) => {
              setIsOpen(false);
              setMenuText(opt.text);
              setSubscriptionMonth(index + 1);
            }}
          >
            {opt.text}
          </MenuItem>
        ))}
      </DropdownMenu>
    </Wrapper>
  );
};

export default Dropdown;
