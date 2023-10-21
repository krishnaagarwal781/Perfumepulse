import React from "react";
import TopNavbar from "../components/TopNavbar";
import styled from "styled-components";
import SignUpForm from "../components/checkout/SignUpForm";
import LoginForm from "../components/checkout/LoginForm";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(1px, auto));
  gap: 8rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 0;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const LoginPage = () => {
  return (
    <>
      <TopNavbar />
      <Wrapper>
        <SignUpForm />
        <LoginForm />
      </Wrapper>
      <Footer />
    </>
  );
};

export default LoginPage;
