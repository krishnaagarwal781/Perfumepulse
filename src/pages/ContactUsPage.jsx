import React from "react";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import TitleSection from "../components/contact/TitleSection";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const ContactUsPage = () => {
  return (
    <>
      <TopNavbar />
      <TitleSection />
      <Container>
        <ContactInfo />
        <ContactForm />
      </Container>
      <Footer />
    </>
  );
};

export default ContactUsPage;
