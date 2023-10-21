import React from "react";
import styled from "styled-components";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import HeroSection from "../components/shop/HeroSection";
import TextSection from "../components/shop/TextSection";
import ProductsSection from "../components/shop/ProductsSection";

const ShopePage = () => {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <TextSection />
      <ProductsSection />
      <Footer />
    </>
  );
};

export default ShopePage;
