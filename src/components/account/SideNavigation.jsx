import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";

const Wrapper = styled.div`
  /* border: 2px solid green; */
  @media screen and (max-width: 820px) {
    /* display: grid;
    grid-template-columns: repeat(4, 1fr); */
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: black;
  border-left: 4px solid white;
  background-color: white;
  padding: 10px 10px;
  margin-bottom: 8px;
  font-size: 1.4rem;

  &.active {
    border-color: #f5a623;
    background-color: #fce7c5;
    font-weight: 700;
  }

  &:hover {
    background-color: #fef7ec;
    border-color: #fef7ec;
  }
`;

const LogoutButton = styled.div`
  color: black;
  border-left: 4px solid white;
  background-color: white;
  padding: 10px 10px;
  margin-bottom: 8px;
  font-size: 1.4rem;
  cursor: pointer;

  &.active {
    border-color: #f5a623;
    background-color: #fce7c5;
    font-weight: 700;
  }

  &:hover {
    background-color: #fef7ec;
    border-color: #fef7ec;
  }
`;

const SideNavigation = () => {
  const { logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <Wrapper>
      <StyledLink to="profile">Profile</StyledLink>
      <StyledLink to="orders">My Orders</StyledLink>
      <StyledLink to="change_password">Change Password</StyledLink>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </Wrapper>
  );
};

export default SideNavigation;
