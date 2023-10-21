import React from "react";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import ProductDetail from "../components/shop/ProductDetail";
import BackNavigation from "../components/shop/BackNavigation";

const ProductDetailPage = () => {
  return (
    <>
      <TopNavbar />
      <BackNavigation />
      <ProductDetail />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
