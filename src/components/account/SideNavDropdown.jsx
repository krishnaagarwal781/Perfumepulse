import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";

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

  @media screen and (min-width: 821px) {
    display: none;
  }
`;

const DropdownButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 20px;

  /* padding: 12px 10px; */
  padding: 8px;
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
  z-index: 2;

  width: 100%;
  max-height: ${(props) => (props.isOpen ? "200px" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  pointer-events: ${(props) => (props.isOpen ? "all" : "none")};
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 45px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #00668f;
  }

  &::-webkit-scrollbar-track {
    background-color: #dbdbdb;
  }
`;
const MenuItem = styled(NavLink)`
  padding: 5px 10px;
  transition: background-color 0.3s ease-in-out;
  display: block;
  text-decoration: none;
  color: black;

  &:hover {
    /* background-color: #0079be; */
    background-color: #fafafa;
  }
`;

const LogoutOption = styled.div`
  padding: 5px 10px;
  transition: background-color 0.3s ease-in-out;
  display: block;
  color: black;

  &:hover {
    /* background-color: #0079be; */
    background-color: #fafafa;
  }
`;

const SideNavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const { logoutUser } = useContext(UserContext);
  const navigate = useNavigate();
  const options = [
    { name: "Profile", to: "profile" },
    { name: "My Orders", to: "orders" },
    { name: "Change Password", to: "change_password" },
  ];

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <DropdownButton isOpen={isOpen} onClick={toggleDropdown}>
        <div>{options[selectedMenu].name}</div>
        <i className="fa-solid fa-angle-down"></i>
      </DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        {options.map((menu, index) => (
          <MenuItem
            key={index}
            style={{
              backgroundColor: index === selectedMenu && "#60aedb",
            }}
            to={menu.to}
            onClick={() => {
              setSelectedMenu(index);
              setIsOpen(false);
            }}
          >
            {menu.name}
          </MenuItem>
        ))}
        <LogoutOption onClick={handleLogout}>Logout</LogoutOption>
      </DropdownMenu>
    </Wrapper>
  );
};

export default SideNavDropdown;
