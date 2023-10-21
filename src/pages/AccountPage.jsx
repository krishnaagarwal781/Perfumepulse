import React, { useEffect } from "react";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import SideNavigation from "../components/account/SideNavigation";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SideNavDropdown from "../components/account/SideNavDropdown";

const Title = styled.div`
  padding: 16px 0;
  font-size: 3.8rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 16px;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 3fr;
  padding: 5px 80px 25px;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 5px 20px 25px;
  }
`;

const AccountPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <TopNavbar />
      <Title>{`Smelling good today, ${
        JSON.parse(localStorage.getItem("user"))?.first_name
      }`}</Title>
      <Wrapper>
        <SideNavigation />
        {/* Will be Visible in Mobile Screen */}
        <SideNavDropdown />
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
};

export default AccountPage;
